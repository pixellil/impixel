import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.join(__dirname, "dist");

const PORT = Number(process.env.PORT || 3000);
const RESEND_API_KEY = process.env.RESEND_API_KEY || "";
const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL || "814pixel@gmail.com";
const CONTACT_FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || "";
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const BODY_LIMIT_BYTES = 32 * 1024;

const rateLimitStore = new Map();

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".webp": "image/webp",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
};

function sendJson(response, statusCode, payload) {
  response.writeHead(statusCode, {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store",
  });
  response.end(JSON.stringify(payload));
}

function getClientIp(request) {
  const forwardedFor = request.headers["x-forwarded-for"];
  if (typeof forwardedFor === "string" && forwardedFor.length > 0) {
    return forwardedFor.split(",")[0].trim();
  }
  return request.socket.remoteAddress || "unknown";
}

function isRateLimited(ip) {
  const now = Date.now();
  const recentHits = (rateLimitStore.get(ip) || []).filter((timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS);
  recentHits.push(now);
  rateLimitStore.set(ip, recentHits);
  return recentHits.length > RATE_LIMIT_MAX_REQUESTS;
}

async function parseJsonBody(request) {
  let rawBody = "";

  for await (const chunk of request) {
    rawBody += chunk;
    if (Buffer.byteLength(rawBody) > BODY_LIMIT_BYTES) {
      throw new Error("Body too large");
    }
  }

  try {
    return JSON.parse(rawBody || "{}");
  } catch {
    throw new Error("Invalid JSON");
  }
}

function validateContactPayload(payload) {
  const name = typeof payload.name === "string" ? payload.name.trim() : "";
  const email = typeof payload.email === "string" ? payload.email.trim() : "";
  const company = typeof payload.company === "string" ? payload.company.trim() : "";
  const message = typeof payload.message === "string" ? payload.message.trim() : "";
  const website = typeof payload.website === "string" ? payload.website.trim() : "";
  const locale = payload.locale === "en" ? "en" : "fr";
  const elapsedMs = typeof payload.elapsedMs === "number" ? payload.elapsedMs : 0;

  if (website) {
    return { ok: false, status: 400, error: "Spam detected." };
  }

  if (!name || name.length < 2 || name.length > 80) {
    return { ok: false, status: 400, error: "Invalid name." };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 160) {
    return { ok: false, status: 400, error: "Invalid email." };
  }

  if (company.length > 120) {
    return { ok: false, status: 400, error: "Invalid company." };
  }

  if (!message || message.length < 20 || message.length > 4000) {
    return { ok: false, status: 400, error: "Invalid message." };
  }

  if (elapsedMs > 0 && elapsedMs < 1500) {
    return { ok: false, status: 400, error: "Form submitted too quickly." };
  }

  return {
    ok: true,
    data: { name, email, company, message, locale },
  };
}

async function sendContactEmail({ name, email, company, message, locale }) {
  if (!RESEND_API_KEY || !CONTACT_FROM_EMAIL) {
    throw new Error("Server email configuration is incomplete.");
  }

  const subject = locale === "fr"
    ? `Nouveau projet${company ? ` - ${company}` : ""}`
    : `New project${company ? ` - ${company}` : ""}`;

  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Company: ${company || "-"}`,
    "",
    "Message:",
    message,
  ].join("\n");

  const html = `
    <div style="font-family: Arial, sans-serif; color: #111; line-height: 1.6;">
      <h2 style="margin-bottom: 16px;">${subject}</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Company:</strong> ${escapeHtml(company || "-")}</p>
      <p><strong>Message:</strong></p>
      <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
    </div>
  `;

  const resendResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: CONTACT_FROM_EMAIL,
      to: [CONTACT_TO_EMAIL],
      reply_to: email,
      subject,
      text,
      html,
    }),
  });

  if (!resendResponse.ok) {
    const errorText = await resendResponse.text();
    throw new Error(`Email provider error: ${errorText}`);
  }
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

async function serveStaticFile(request, response) {
  const requestUrl = new URL(request.url || "/", `http://${request.headers.host || "localhost"}`);
  let pathname = decodeURIComponent(requestUrl.pathname);

  if (pathname === "/") {
    pathname = "/index.html";
  }

  const safePath = path.normalize(path.join(distDir, pathname));
  if (!safePath.startsWith(distDir)) {
    response.writeHead(403);
    response.end("Forbidden");
    return;
  }

  try {
    const fileStats = await stat(safePath);
    const filePath = fileStats.isDirectory() ? path.join(safePath, "index.html") : safePath;
    const data = await readFile(filePath);
    const extension = path.extname(filePath).toLowerCase();

    response.writeHead(200, {
      "Content-Type": mimeTypes[extension] || "application/octet-stream",
    });
    response.end(data);
  } catch {
    const fallback = await readFile(path.join(distDir, "index.html"));
    response.writeHead(200, {
      "Content-Type": "text/html; charset=utf-8",
    });
    response.end(fallback);
  }
}

const server = createServer(async (request, response) => {
  if (!request.url) {
    response.writeHead(400);
    response.end("Bad Request");
    return;
  }

  if (request.method === "POST" && request.url === "/api/contact") {
    const clientIp = getClientIp(request);

    if (isRateLimited(clientIp)) {
      sendJson(response, 429, {
        error: "Too many requests. Please try again later.",
      });
      return;
    }

    try {
      const payload = await parseJsonBody(request);
      const validation = validateContactPayload(payload);

      if (!validation.ok) {
        sendJson(response, validation.status, { error: validation.error });
        return;
      }

      await sendContactEmail(validation.data);
      sendJson(response, 200, { ok: true });
      return;
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unexpected server error.";
      const statusCode = message === "Body too large" ? 413 : 500;
      sendJson(response, statusCode, {
        error: statusCode === 500 ? "Unable to send message right now." : message,
      });
      return;
    }
  }

  if (request.method !== "GET" && request.method !== "HEAD") {
    response.writeHead(405);
    response.end("Method Not Allowed");
    return;
  }

  await serveStaticFile(request, response);
});

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
