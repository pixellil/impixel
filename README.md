
  # Convert Figma to Responsive Site

  This is a code bundle for Convert Figma to Responsive Site. The original project is available at https://www.figma.com/design/ur0Mvcvizkp7Pw612GaWIW/Convert-Figma-to-Responsive-Site.

  ## Running the code

  Run `npm i` to install the dependencies.
 
  Run `npm run dev` to start the development server.

  Run `npm run build` to generate the production bundle.

  Run `npm run start` to serve the built site and the contact API.

  ## Contact form

  The contact form posts to `/api/contact` and sends emails through Resend from the server side.

  Required environment variables:

  - `RESEND_API_KEY`
  - `CONTACT_FROM_EMAIL`
  - `CONTACT_TO_EMAIL`

  ## Render deployment

  A `render.yaml` file is included for deployment on Render.

  Before going live, configure these environment variables in Render:

  - `RESEND_API_KEY`
  - `CONTACT_FROM_EMAIL`
  - `CONTACT_TO_EMAIL`
  
