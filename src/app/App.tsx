import { motion, useScroll, useTransform } from "motion/react";
import { useState, useEffect } from "react";
import svgPaths from "../imports/svg-39aafie3u6";
import imgShapeBlendingGradient from "figma:asset/844897a300cf54a91bde213dd48a9676ff22c2fb.png";
import imgWorkThumbnail from "figma:asset/ded1c7047ce7e3beded259a1e695836108c379c9.png";
import imgWorkThumbnail1 from "figma:asset/8973871d8908bf6e2a19e9a0983661be4994af87.png";
import imgWorkThumbnail2 from "figma:asset/75d6c3caae11fb86eeacdeee60c88c1ffbe1a8d6.png";
import imgWorkThumbnail3 from "figma:asset/2c21576f57ba4b342f5968d92f2eab096a13d8f2.png";
import imgUnsplash from "figma:asset/ed5f8645f88eb3187334810ef0267c120d9b3b49.png";
import imgImage from "figma:asset/d6c4463d980bce4d0b23c95107dc2e8c7ba5cfe6.png";
import imgImage1 from "figma:asset/bfc958f83c6674da5243601b68bd4315aa07a8c4.png";
import imgImage2 from "figma:asset/7b93d359bf57359e5213ba538f5a16b0feb0b32c.png";
import imgSubtract from "figma:asset/27a9475fea0a7372ecedf1c92d44ecc5f7f64ae5.png";
import imgRectangle24 from "figma:asset/210386a63d3d289864fce936b318665b3191f8b0.png";
import imgSubtract1 from "figma:asset/8e69641ac6fbbfded0e0fbbb96029f0f98ed6d6c.png";
import imgMk from "../assets/mk.png";
import imgHalil from "../assets/halil.png";
import logoDark from "../assets/impixelSurNoir.png";
import logoLight from "../assets/impixelSurBlanc.png";

function ImPixelLogo({ className = "", dark = false }: { className?: string; dark?: boolean }) {
  return (
    <motion.div
      className={`flex items-center ${className}`}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <img
        src={dark ? logoDark : logoLight}
        alt="I'MPIXEL Logo"
        className="h-9 object-contain"
      />
    </motion.div>
  );
}

function BracketTag({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      className="flex gap-1 items-center"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      <motion.svg
        className="w-[3px] h-3"
        fill="none"
        viewBox="0 0 3.75 13.5"
        initial={{ x: -2, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <path d="M3.75 0.75H0.75V12.75H3.75" stroke="black" strokeOpacity="0.6" strokeWidth="1.5" />
      </motion.svg>
      <span className="font-['Aspekta',sans-serif] font-bold leading-none text-[14px] text-black/60 tracking-[0.28px] uppercase">
        {children}
      </span>
      <motion.svg
        className="w-[3px] h-3 rotate-180"
        fill="none"
        viewBox="0 0 3.75 13.5"
        initial={{ x: 2, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <path d="M3.75 0.75H0.75V12.75H3.75" stroke="black" strokeOpacity="0.6" strokeWidth="1.5" />
      </motion.svg>
    </motion.div>
  );
}

function WorkCard({
  image,
  title,
  tags,
  delay = 0,
  language
}: {
  image: string;
  title: string;
  tags: string[];
  delay?: number;
  language: 'fr' | 'en'
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
      className="group cursor-pointer"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-lg mb-4 aspect-[4/3]">
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-0"
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
        <motion.img
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <motion.div
          className="absolute inset-0 flex items-center justify-center z-20"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.8 }}
          transition={{ duration: 0.3 }}
        >
                 <div className="bg-white text-black px-6 py-3 rounded-full font-['Aspekta',sans-serif] font-bold text-sm uppercase">
                   {language === 'fr' ? 'Voir le projet' : 'View project'}
                 </div>
        </motion.div>
      </div>
      <motion.p
        className="font-['Inter',sans-serif] leading-none text-sm text-white uppercase mb-3"
        animate={{ x: isHovered ? 5 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {title}
      </motion.p>
      <div className="flex gap-2 flex-wrap">
        {tags.map((tag, i) => (
          <BracketTag key={i}>{tag}</BracketTag>
        ))}
      </div>
    </motion.div>
  );
}

function StarRating() {
  return (
    <div className="flex gap-1.5">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-3 h-[10.89px]" fill="none" viewBox="0 0 12 11.1426">
          <path d={svgPaths.p1a37d9a0} fill="#D89818" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({
  name,
  role,
  text,
  bgColor = "bg-white"
}: {
  name: string;
  role: string;
  text: string;
  bgColor?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`${bgColor} p-10 rounded-lg`}
    >
      <div className="flex items-center gap-2 mb-4">
        <BracketTag>
          <StarRating />
        </BracketTag>
      </div>
      <p className="font-['Aspekta',sans-serif] font-medium text-base leading-relaxed mb-6">
        {text}
      </p>
      <div>
        <p className="font-['Aspekta',sans-serif] font-bold text-sm uppercase">{name}</p>
        <p className="font-['Aspekta',sans-serif] text-sm text-black/60">{role}</p>
      </div>
    </motion.div>
  );
}

function FAQItem({ question, answer }: { question: string; answer?: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.button
      className="w-full border-t border-black/12 p-8 text-left"
      onClick={() => setIsOpen(!isOpen)}
      whileHover={{ backgroundColor: "rgba(0,0,0,0.02)" }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex items-start justify-between gap-4">
         <p className="font-['Aspekta',sans-serif] font-medium text-base text-black">{question}</p>
        <motion.div
          className="flex-shrink-0 w-6 h-6 flex items-center justify-center"
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 19 19">
            <path d={svgPaths.p1a225a00} stroke="black" strokeOpacity="0.6" strokeLinecap="square" />
          </svg>
        </motion.div>
      </div>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        {answer && (
          <p className="mt-4 font-['Aspekta',sans-serif] text-sm text-black/70">{answer}</p>
        )}
      </motion.div>
    </motion.button>
  );
}

function ExpertiseItem({ title, number }: { title: string; number: string }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="border-t border-black/12 pt-5 cursor-pointer"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ backgroundColor: "rgba(20,110,245,0.05)", paddingLeft: "18px", x: 5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center justify-between px-0.5">
        <motion.p
          className="font-['Aspekta',sans-serif] font-bold text-sm text-black tracking-[0.28px] uppercase"
          animate={{ color: isHovered ? "#146EF5" : "#000000" }}
        >
          {title}
        </motion.p>
        <motion.div
          animate={{ scale: isHovered ? 1.1 : 1 }}
        >
              <motion.div animate={{ x: isHovered ? 8 : 0 }} transition={{ duration: 0.2 }}>
                <BracketTag>{number}</BracketTag>
              </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

function ServiceCard({
  title,
  price,
  features
}: {
  title: string;
  price: string;
  features: string[];
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -10, boxShadow: "0 20px 60px rgba(0,0,0,0.2)" }}
      className="bg-white p-10 rounded-lg cursor-pointer"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="flex items-center justify-between mb-6">
        <motion.h3
          className="font-['Aspekta',sans-serif] font-medium text-5xl uppercase tracking-tight leading-tight max-w-[80%]"
          animate={{ color: isHovered ? "#146EF5" : "#000000" }}
          transition={{ duration: 0.3 }}
        >
          {title}
        </motion.h3>
{price}
      </div>
      <motion.button
        className="bg-black text-white p-6 rounded-full relative overflow-hidden group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          className="absolute inset-0 bg-[#146EF5]"
          initial={{ scale: 0 }}
          animate={{ scale: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
        <motion.svg
          className="w-6 h-6 relative z-10"
          fill="none"
          viewBox="0 0 19.2071 13.4142"
          animate={{ x: isHovered ? 5 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <path d={svgPaths.p27f27510} stroke="white" strokeOpacity="0.6" strokeLinecap="square" />
        </motion.svg>
      </motion.button>
    </motion.div>
  );
}

const translations = {
  fr: {
    nav: ["Réalisations", "Services", "À propos", "Contact"],
    heroTitle: ["VOS IDEES", "NOUS", "REALISONS"],
    heroDesc: "Agence digitale spécialisée dans la création de sites web, le design graphique et la gestion des réseaux sociaux. Nous aidons les entreprises à développer leur présence en ligne avec des solutions modernes et efficaces.",
    seeWork: "Voir nos réalisations",
    whyUs: "Pourquoi nous ?",
    whyUsTitle: ["Des solutions", "de qualité, conçues", "sur mesure pour répondre", "à vos besoins."],
    aboutTitle: "A PROPOS DE I'MPIXEL",
    aboutText: "Depuis 2017, I'MPIXEL accompagne les entreprises et les entrepreneurs dans leur transformation digitale. Notre équipe passionnée combine expertise technique et créativité pour donner vie à vos projets les plus ambitieux. Nous croyons qu'un design réussi est celui qui allie esthétique, performance et expérience utilisateur.",
    expertise: "Expertise",
    expertiseTitle: ["Imagine un instant…", "un monde sans limite pour ta marque"],
    services: "Services",
    servicesTitle: ["imagine travailler avec une", "agence qui maitrise ton ideee", "mieux que tout le monde"],
    serviceCards: [
      { title: "Identité de marque", price: "A partir 150k FCFA" },
      { title: "Création site web", price: "A partir 250k FCFA" },
      { title: "Gestion réseaux sociaux", price: "Forfait mensuel" }
    ],
    testimonials: "Témoignages",
    testimonialsTitle: ["Ne me croyez pas sur parole. Écoutez", "directement nos clients."],
    faq: "FAQ",
    faqQuestions: [
      { q: "Quels services proposez-vous ?", a: "Nous proposons la création de sites web, design graphique, identité de marque, développement d'applications mobiles, gestion des réseaux sociaux et marketing digital." },
      { q: "Combien de temps prend un projet ?", a: "Un site vitrine compte entre 7 et 14 jours. Un projet complexe ou application mobile nécessite 4 à 8 semaines selon les fonctionnalités." },
      { q: "Quels sont vos tarifs ?", a: "Nos prestations démarrent à 150 000 FCFA. Chaque projet étant unique, nous établissons un devis personnalisé gratuit après étude de votre besoin." },
      { q: "Travaillez-vous à distance ?", a: "Oui ! Nous travaillons 100% à distance avec tous nos clients au Sénégal et à l'international. Les échanges se font par appel, WhatsApp ou mail." },
      { q: "Proposez-vous de la maintenance ?", a: "Oui, nous proposons des forfaits de maintenance mensuelle incluant mises à jour, sauvegardes, corrections et support technique." },
      { q: "Comment démarrer un projet ?", a: "Contactez-nous par mail ou WhatsApp, nous organisons un rendez-vous gratuit pour comprendre votre besoin et vous proposer une proposition adaptée." }
    ],
    faqContact: "Toujours des questions ? Contactez-nous.",
    ctaTitle: "Construisons-le ensemble"
  },
  en: {
    nav: ["Works", "Services", "About", "Contact"],
    heroTitle: ["YOUR IDEAS", "WE", "MAKE IT"],
    heroDesc: "Digital agency specialized in website creation, graphic design and social media management. We help companies develop their online presence with modern and effective solutions.",
    seeWork: "See our work",
    whyUs: "Why us ?",
    whyUsTitle: ["Quality solutions,", "custom designed", "to meet your", "needs."],
    aboutTitle: "ABOUT I'MPIXEL",
    aboutText: "Since 2017, I'MPIXEL has been supporting companies and entrepreneurs in their digital transformation. Our passionate team combines technical expertise and creativity to bring your most ambitious projects to life. We believe that successful design combines aesthetics, performance and user experience.",
    expertise: "Expertise",
    expertiseTitle: ["Just imagine…", "a world without limits for your brand"],
    services: "Services",
    servicesTitle: ["imagine working with an", "agency that understands your idea", "better than anyone else"],
    serviceCards: [
      { title: "Brand Identity", price: "From 150k FCFA" },
      { title: "Website Creation", price: "From 250k FCFA" },
      { title: "Social Media Management", price: "Monthly package" }
    ],
    testimonials: "Testimonials",
    testimonialsTitle: ["Don't take my word for it. Listen", "directly to our clients."],
    faq: "FAQ",
    faqQuestions: [
      { q: "What services do you offer ?", a: "We offer website creation, graphic design, brand identity, mobile app development, social media management and digital marketing." },
      { q: "How long does a project take ?", a: "A showcase website takes between 7 and 14 days. A complex project or mobile application requires 4 to 8 weeks depending on features." },
      { q: "What are your prices ?", a: "Our services start at 150,000 FCFA. Each project being unique, we establish a free personalized quote after studying your needs." },
      { q: "Do you work remotely ?", a: "Yes! We work 100% remotely with all our clients in Senegal and internationally. Exchanges are done by call, WhatsApp or email." },
      { q: "Do you offer maintenance ?", a: "Yes, we offer monthly maintenance packages including updates, backups, corrections and technical support." },
      { q: "How to start a project ?", a: "Contact us by email or WhatsApp, we will organize a free meeting to understand your needs and propose a suitable proposal." }
    ],
    faqContact: "Still have questions ? Contact us.",
    ctaTitle: "Let's build it together"
  }
}

export default function App() {
  const { scrollYProgress, scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [language, setLanguage] = useState<'fr' | 'en'>('fr');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const [contactFormOpenedAt, setContactFormOpenedAt] = useState<number | null>(null);
  const [isSubmittingContact, setIsSubmittingContact] = useState(false);
  const [contactFeedback, setContactFeedback] = useState<{ type: "idle" | "success" | "error"; message: string }>({
    type: "idle",
    message: "",
  });
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    botField: "",
  });
  const t = translations[language];

  const changeLanguage = (lang: 'fr' | 'en') => {
    if (lang === language) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setLanguage(lang);
      setTimeout(() => setIsTransitioning(false), 250);
    }, 200);
  }

  const updateContactField = (field: "name" | "email" | "company" | "message" | "botField", value: string) => {
    setContactForm((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const handleContactSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmittingContact) return;

    setIsSubmittingContact(true);
    setContactFeedback({ type: "idle", message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: contactForm.name.trim(),
          email: contactForm.email.trim(),
          company: contactForm.company.trim(),
          message: contactForm.message.trim(),
          botField: contactForm.botField.trim(),
          locale: language,
          elapsedMs: contactFormOpenedAt ? Date.now() - contactFormOpenedAt : null,
        }),
      });

      const result = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(result?.error || (language === 'fr' ? "Impossible d'envoyer votre message." : "Unable to send your message."));
      }

      setContactFeedback({
        type: "success",
        message: language === 'fr'
          ? "Demande envoyée. Nous revenons vers vous très vite."
          : "Request sent. We will get back to you very soon.",
      });
      setContactForm({
        name: "",
        email: "",
        company: "",
        message: "",
        botField: "",
      });
      setContactFormOpenedAt(Date.now());
    } catch (error) {
      setContactFeedback({
        type: "error",
        message: error instanceof Error
          ? error.message
          : (language === 'fr' ? "Une erreur est survenue. Réessayez dans un instant." : "Something went wrong. Please try again in a moment."),
      });
    } finally {
      setIsSubmittingContact(false);
    }
  };

  useEffect(() => {
    const updateScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", updateScroll);
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <motion.div
        animate={{ opacity: isTransitioning ? 0.25 : 1 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        key={language}
      >
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#146EF5] origin-left z-[100]"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Navigation */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        initial={{ y: -100 }}
        animate={{ y: 0, backgroundColor: scrolled ? "rgba(0,0,0,0.95)" : "rgba(0,0,0,0.8)" }}
        transition={{ duration: 0.3 }}
        style={{ backdropFilter: "blur(12px)" }}
      >
           <div className="max-w-[1600px] mx-auto px-4 md:px-10 py-4 md:py-6 flex items-center justify-between">
           <ImPixelLogo dark={false} />
          <motion.div
            className="hidden md:flex items-center gap-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
             {t.nav.map((item, i) => {
              // Map navigation items to correct section IDs
              const sectionIds = ['work', 'services', 'about', 'contact'];
              const sectionId = sectionIds[i] || item.toLowerCase();

              return (
                <motion.a
                  key={item}
                  href={`#${sectionId}`}
                  className="font-['Aspekta',sans-serif] font-bold text-sm uppercase tracking-[0.28px] relative group"
                  whileHover={{ y: -2, color: "#146EF5" }}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i, duration: 0.2 }}
                >
                {item}
                  <motion.span
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#146EF5] group-hover:w-full transition-all duration-300"
                  />
                </motion.a>
              );
            })}
          </motion.div>
             <div className="flex items-center gap-10">
               <div className="flex items-center gap-3">
                 <div className="bg-[#6dc06d] rounded-lg w-2 h-2" />
                 <div className="relative flex items-center gap-1 bg-white/8 rounded-full p-1 overflow-hidden w-[90px]">
                   {/* ✅ Indicateur 100% ALIGNÉ */}
                   <motion.div
                     className="absolute h-[calc(100%-8px)] rounded-full bg-[#146EF5] shadow-lg shadow-blue-500/40"
                     animate={{ 
                       x: language === 'en' ? 4 : 47,
                       width: 39
                     }}
                     transition={{ 
                       type: "spring", 
                       stiffness: 600, 
                       damping: 30,
                       mass: 0.5
                     }}
                   />

                   <motion.button
                     onClick={() => changeLanguage('en')}
                     whileHover={{ scale: 1.06 }}
                     whileTap={{ scale: 0.95 }}
                     transition={{ duration: 0.12 }}
                     className={`relative z-10 flex h-[26px] w-[38px] items-center justify-center rounded-full text-[11px] font-['Aspekta',sans-serif] font-bold uppercase tracking-[0.28px] transition-all duration-180 ${language === 'en' ? 'text-white' : 'text-white/65 hover:text-white/85'}`}
                   >
                     EN
                   </motion.button>
                   
                   <motion.button
                     onClick={() => changeLanguage('fr')}
                     whileHover={{ scale: 1.06 }}
                     whileTap={{ scale: 0.95 }}
                     transition={{ duration: 0.12 }}
                     className={`relative z-10 flex h-[26px] w-[38px] items-center justify-center rounded-full text-[11px] font-['Aspekta',sans-serif] font-bold uppercase tracking-[0.28px] transition-all duration-180 ${language === 'fr' ? 'text-white' : 'text-white/65 hover:text-white/85'}`}
                   >
                     FR
                   </motion.button>
                 </div>
               </div>
             </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative h-[820px] overflow-hidden">
        {/* Background Parallax */}
        <motion.div className="absolute inset-0 w-full h-full overflow-hidden">
          <motion.img
            alt=""
            className="absolute inset-0 w-full h-[130%] object-cover top-0"
            style={{ 
              y: useTransform(scrollY, [0, 900], [0, 220]),
              scale: useTransform(scrollY, [0, 900], [1, 1.06])
            }}
            src={imgShapeBlendingGradient}
          />
        </motion.div>

         <div className="relative h-full max-w-[1600px] mx-auto px-4 md:px-10 flex flex-col justify-between py-8 md:py-16">
           {/* Top Section */}
           <div className="flex-1 flex items-center justify-center">
             <div className="w-full max-w-7xl px-4 md:px-24">
              {/* ✅ DISPOSITION FINALE EXACTE COMME LA MAQUETTE */}
                 <div className="relative text-center md:text-left">
                   <motion.div
                     initial={{ opacity: 0, y: 30 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.9, delay: 0.2 }}
                     className="flex flex-col md:flex-row items-center md:items-end gap-2 md:gap-25 md:ml-[-20px]"
                   >
                      <h1 className="font-['Inter',sans-serif] font-normal leading-[1.05] text-[clamp(2rem,10vw,112px)] text-white tracking-[-1px] uppercase">
                        {t.heroTitle[0]}
                      </h1>
                      
                      <h1 className="font-['Inter',sans-serif] font-black leading-[1.05] text-[clamp(2rem,10vw,112px)] text-red-400 tracking-[-1px] uppercase">
                        {t.heroTitle[1]}
                      </h1>
                    </motion.div>

                    <div className="relative mt-[8px] md:ml-[520px]">
                      <h2 className="font-['Inter',sans-serif] font-black leading-[1.05] text-[clamp(2rem,10vw,112px)] tracking-[-1px] uppercase">
                        {t.heroTitle[2]}
                      </h2>
                   </div>

                   {/* Description SOUS VOS IDEES */}
                   <motion.div
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.7, delay: 0.7 }}
                     className="relative mt-6 md:absolute md:left-[56px] md:top-[112px] max-w-md mx-auto md:mx-0 font-['Inter',sans-serif] font-normal leading-[1.5] text-[15px] text-white/70 tracking-[-0.28px]"
                   >
{t.heroDesc}
                </motion.div>
              </div>
            </div>
          </div>

          {/* Bottom Section - Stats */}
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-4 flex-wrap">
            {/* Left - Reviews */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex gap-2 items-center"
            >
              <BracketTag>
                <StarRating />
              </BracketTag>
              <p className="font-['Aspekta',sans-serif] font-bold text-sm uppercase tracking-[0.28px] text-white">
                5/5 (12)
              </p>
            </motion.div>

            {/* Center - Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex gap-6 md:gap-10 items-center flex-wrap justify-center"
            >
              <div className="flex gap-2 items-center">
                <p className="font-['Aspekta',sans-serif] font-bold text-sm uppercase tracking-[0.28px] text-white">
                  50+
                </p>
                <BracketTag></BracketTag>
                <p className="font-['Inter',sans-serif] text-sm uppercase tracking-[0.28px] text-white">
                  projets
                </p>
              </div>
              <p className="font-['Inter',sans-serif] text-sm uppercase tracking-[0.28px] text-white">
                8 ans
              </p>
              <BracketTag>Experience</BracketTag>
              <div className="flex gap-2 items-center">
                <p className="font-['Aspekta',sans-serif] font-bold text-sm uppercase tracking-[0.28px] text-white">
                  0%
                </p>
                <BracketTag>Failed Projects</BracketTag>
              </div>
            </motion.div>

            {/* Right - See Work */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="flex gap-2 items-center"
            >
               <svg className="w-[14px] h-[14px]" fill="none" viewBox="0 0 15 15">
                 <path d={svgPaths.p621e00} stroke="white" strokeOpacity="0.6" strokeLinecap="square" />
               </svg>
               <p className="font-['Aspekta',sans-serif] font-bold text-sm uppercase tracking-[0.28px] text-white">
                 {t.seeWork}
               </p>
            </motion.div>
          </div>
        </div>

        {/* Ellipse Decoration */}
        <div className="absolute inset-[34.17%_46.88%_56.57%_46.88%]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
            <g id="Ellipse 3" />
          </svg>
        </div>
      </section>

      {/* Work Section */}
       <section id="work" className="py-16 md:py-32 px-4 md:px-10" style={{ paddingBottom: '56px' }}>
        <div className="max-w-[1600px] mx-auto">
           <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 md:gap-12 lg:gap-20">
            <div className="lg:col-span-1">
               <WorkCard
                 image={imgWorkThumbnail}
                 title={language === 'fr' ? 'creation de site web' : 'website creation'}
                 tags={["Design", "Development", "Custom Project"]}
                 delay={0}
                 language={language}
               />
            </div>
            <div className="lg:col-span-2">
               <WorkCard
                 image={imgWorkThumbnail3}
                 title={language === 'fr' ? 'identite de marque' : 'brand identity'}
                 tags={["Design", "Development", "Custom Project"]}
                 delay={0.1}
                 language={language}
               />
            </div>
            <div className="lg:col-span-2">
               <WorkCard
                 image={imgWorkThumbnail1}
                 title={language === 'fr' ? 'creation de app mobile' : 'mobile app creation'}
                 tags={["Design", "Development", "Custom Project"]}
                 delay={0.2}
                 language={language}
               />
            </div>
            <div className="lg:col-span-1">
               <WorkCard
                 image={imgWorkThumbnail2}
                 title={language === 'fr' ? 'gestion de site web' : 'website management'}
                 tags={["Design", "Development", "Custom Project"]}
                 delay={0.3}
                 language={language}
               />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-10 bg-black" style={{ paddingTop: '56px' }}>
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.02, letterSpacing: "1px" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="cursor-default"
            >
              <div className="flex items-center gap-2 mb-8">
           <p className="font-['Inter',sans-serif] text-sm uppercase tracking-[0.28px]">
                   {t.whyUs}
                 </p>
                <BracketTag></BracketTag>
              </div>
              <motion.h2 whileHover={{ x: 8 }} transition={{ duration: 0.25 }} className="font-['Inter',sans-serif] text-[clamp(2rem,4vw,4rem)] leading-tight uppercase tracking-tight mb-8">
                <p className="mb-2">{language === 'fr' ? 'Des solutions' : 'Quality solutions,'}</p>
                <p className="mb-2">{language === 'fr' ? 'de qualité, conçues' : 'custom designed'}</p>
                <p className="mb-2">{language === 'fr' ? 'sur mesure pour répondre' : 'tailored to meet'}</p>
                <p>{language === 'fr' ? 'à vos besoins.' : 'your needs.'}</p>
              </motion.h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-8">
                <p className="font-['Inter',sans-serif] text-sm uppercase tracking-[0.28px]">
                   {t.aboutTitle}
                 </p>
                <motion.svg
                  className="w-[14px] h-[14px]"
                  fill="none"
                  viewBox="0 0 15 15"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <path d={svgPaths.p2093a200} stroke="white" strokeOpacity="0.6" strokeLinecap="square" />
                </motion.svg>
              </div>
                <p className="font-['Aspekta',sans-serif] font-medium text-base leading-relaxed text-white/80">
                  {t.aboutText}
                </p>
              <div className="mt-12 relative h-[420px] md:h-[520px] overflow-hidden rounded-lg">
                <motion.div 
                  className="flex flex-col gap-4"
                  animate={{ y: [0, -540] }}
                  transition={{ repeat: Infinity, duration: 14, ease: "linear" }}
                >
                  <img
                    src={imgMk}
                    alt="I'mPixel"
                    className="w-full h-auto rounded-lg object-cover"
                  />
                  <img
                    src={imgHalil}
                    alt="I'mPixel"
                    className="w-full h-auto rounded-lg object-cover"
                  />
                  <img
                    src={imgMk}
                    alt="I'mPixel"
                    className="w-full h-auto rounded-lg object-cover"
                  />
                  <img
                    src={imgHalil}
                    alt="I'mPixel"
                    className="w-full h-auto rounded-lg object-cover"
                  />
                  <img
                    src={imgMk}
                    alt="I'mPixel"
                    className="w-full h-auto rounded-lg object-cover"
                  />
                  <img
                    src={imgHalil}
                    alt="I'mPixel"
                    className="w-full h-auto rounded-lg object-cover"
                  />
                  <img
                    src={imgMk}
                    alt="I'mPixel"
                    className="w-full h-auto rounded-lg object-cover"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-32 px-10 bg-white text-black">
        <div className="max-w-[1600px] mx-auto">
          <div className="mb-12">
            <p className="font-['Aspekta',sans-serif] font-bold text-sm uppercase tracking-[0.28px] mb-2">
              Description
            </p>
            <BracketTag>Expertise</BracketTag>
          </div>

          <div className="max-w-2xl">
             <motion.h2 whileHover={{ x: 8 }} transition={{ duration: 0.25 }} className="font-['Inter',sans-serif] text-[clamp(2.5rem,5vw,4rem)] leading-tight uppercase tracking-tight mb-12 cursor-default">
               <p className="mb-2">
                 <span className="font-black">{language === 'fr' ? 'Imagine un instant…' : 'Just imagine…'}</span>
               </p>
               <p>
                 <span>{language === 'fr' ? 'un monde ' : 'a world '}</span>
                  <span className="font-['Jost',sans-serif] text-[clamp(1.5rem,3vw,2.5rem)] text-[#d23010]">{language === 'fr' ? 'sans limite' : 'without limits'}</span>
                 <span>{language === 'fr' ? ' pour ta marque' : ' for your brand'}</span>
               </p>
               </motion.h2>

              <div className="space-y-5">
              <ExpertiseItem title="Branding & Strategy" number="1" />
              <ExpertiseItem title="Web Design & Development" number="2" />
              <ExpertiseItem title="Mobile App Development" number="3" />
              <ExpertiseItem title="Digital Marketing" number="4" />
              <ExpertiseItem title="Social Media Management" number="5" />
              <ExpertiseItem title="Content Creation" number="6" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 px-10 bg-black">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-center mb-20">
            <p className="font-['Aspekta',sans-serif] font-bold text-sm uppercase tracking-[0.28px] mb-6">
              Description
            </p>
            <BracketTag>Services</BracketTag>
             <motion.h2 whileHover={{ y: -4 }} transition={{ duration: 0.2 }} className="font-['Inter',sans-serif] text-[clamp(2.5rem,5vw,4rem)] leading-tight uppercase tracking-tight mt-12 mb-8 cursor-default">
               <p className="mb-2">
                 <span className="font-black italic">{language === 'fr' ? 'imagine' : 'imagine'}</span>
                 <span> {language === 'fr' ? 'travailler avec une' : 'working with an'}</span>
               </p>
               <p className="mb-2">
                 <span>{language === 'fr' ? 'agence qui maitrise ' : 'agency that understands '}</span>
                  <span className="font-['Intel_One_Mono',monospace] text-[clamp(1.5rem,3vw,2.5rem)] text-[#d23010]">{language === 'fr' ? 'ton ideee' : 'your idea'}</span>
               </p>
                 <p>{language === 'fr' ? 'mieux que tout le monde' : 'better than anyone else'}</p>
               </motion.h2>
          </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ServiceCard
                title={t.serviceCards[0].title}
                price={t.serviceCards[0].price}
                features={[]}
              />
              <ServiceCard
                title={t.serviceCards[1].title}
                price={t.serviceCards[1].price}
                features={[]}
              />
              <ServiceCard
                title={t.serviceCards[2].title}
                price={t.serviceCards[2].price}
                features={[]}
              />
           </div>
        </div>
      </section>

      {/* Testimonials Section - Figma Design with Orbits */}
      <section className="relative z-30 min-h-[860px] overflow-visible bg-white text-black m-0 px-4 py-8 sm:min-h-[1000px] sm:px-6 md:h-[1194px] md:overflow-visible md:px-0 md:py-0">


        {/* Description Label */}
        <p className="font-['Aspekta',sans-serif] font-bold leading-none text-[14px] text-black tracking-[0.28px] uppercase md:absolute md:left-[40px] md:top-[191px]">
          Description
        </p>

        {/* Testimonials Label */}
           <p className="mt-3 font-['Aspekta',sans-serif] font-bold leading-none text-[14px] text-black/60 tracking-[0.28px] uppercase md:absolute md:right-[104px] md:top-[191px] md:mt-0">
             [ Témoignages ]
           </p>

        {/* Orbit Circles */}
        <div className="absolute left-1/2 top-[120px] size-[360px] -translate-x-1/2 sm:top-[120px] sm:size-[440px] md:top-[109px] md:size-[864px]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 864 864">
            <circle cx="432" cy="432" r="431.5" stroke="black" strokeOpacity="0.3" />
          </svg>
        </div>

        <div className="absolute left-1/2 top-[180px] size-[240px] -translate-x-1/2 sm:top-[185px] sm:size-[300px] md:top-[289px] md:size-[576px]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 576 576">
            <circle cx="288" cy="288" r="287.5" stroke="black" strokeOpacity="0.3" />
          </svg>
        </div>

        {/* Center Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="absolute left-1/2 top-[300px] z-20 w-[min(100%-2rem,760px)] -translate-x-1/2 -translate-y-1/2 text-center sm:top-[330px] md:top-[544px] md:-translate-y-0"
        >
            <p className="font-['Aspekta',sans-serif] font-medium text-[clamp(1.6rem,7vw,4rem)] leading-[1.1] tracking-[-1.28px]">
             <span>{language === 'fr' ? 'Ne me croyez pas sur parole. ' : "Don't take my word for it. "}</span>
             <span className="font-['Inter',sans-serif] italic lowercase text-[#d23010]">{language === 'fr' ? 'Écoutez' : 'Listen'}</span>
             <span>{language === 'fr' ? ' directement nos clients.' : ' directly to our clients.'}</span>
           </p>
        </motion.div>

        {/* Navigation Arrows */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="absolute hidden bg-[#fafafa] items-center justify-center rounded-full size-[32px] md:flex"
          style={{ left: '-40px', top: '797px' }}
        >
          <div className="rotate-180">
            <svg className="w-[10px] h-[8px]" fill="none" viewBox="0 0 11.2071 9.41421">
              <path d={svgPaths.p2597f800} stroke="black" strokeLinecap="square" strokeOpacity="0.6" />
            </svg>
          </div>
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="absolute hidden bg-[#fafafa] items-center justify-center rounded-full size-[32px] md:flex"
          style={{ left: '-3px', top: '797px' }}
        >
          <svg className="w-[10px] h-[8px]" fill="none" viewBox="0 0 11.2071 9.41421">
            <path d={svgPaths.p2597f800} stroke="black" strokeLinecap="square" strokeOpacity="0.6" />
          </svg>
        </motion.button>

         {/* ✅ ROTATING ORBIT CONTAINER - TOUT EST DEDANS */}
        <div className="absolute inset-x-0 top-[105px] h-[330px] overflow-visible sm:top-[95px] sm:h-[420px] md:inset-0 md:h-auto">
          <div className="absolute block inset-0 size-full origin-center z-20 scale-[0.42] sm:scale-[0.56] md:scale-100" style={{ 
            animation: 'orbitRotate 72s linear infinite',
            transformOrigin: 'center center'
          }}>
          
          {/* ✅ Avatar 1 - Positionné SUR le cercle de l'orbite */}
          <div 
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" 
            style={{ 
              transform: `translate(calc(280px * cos(210deg)), calc(280px * sin(210deg)))`,
            }}
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="size-[64px] absolute"
              style={{ 
                left: -32,
                top: -32,
                animation: 'orbitFloat 6s ease-in-out infinite', 
                animationDelay: '0s' 
              }}
            >
              <img alt="" className="block size-full rounded-full" src={imgImage} />
            </motion.div>

            <div className="absolute max-w-[220px] rounded-xl bg-white p-[16px] shadow-lg md:max-w-none" style={{ left: 40, top: -8 }}>
              <p className="font-['Aspekta',sans-serif] font-medium leading-[1.4] text-[14px] text-black/80 tracking-[-0.28px]">
                Collaborating daily since Oct 1, 2020
              </p>
            </div>
          </div>

          {/* ✅ Avatar 2 - Positionné SUR le cercle de l'orbite */}
          <div 
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" 
            style={{ 
              transform: `translate(calc(280px * cos(330deg)), calc(280px * sin(330deg)))`,
            }}
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="size-[64px] absolute"
              style={{ 
                left: -32,
                top: -32,
                animation: 'orbitFloat 6s ease-in-out infinite', 
                animationDelay: '0.3s' 
              }}
            >
              <img alt="" className="block size-full rounded-full" src={imgImage1} />
            </motion.div>

            <div className="absolute max-w-[220px] rounded-xl bg-white p-[16px] shadow-lg md:max-w-none" style={{ left: -120, top: -70 }}>
              <p className="font-['Aspekta',sans-serif] font-medium leading-[1.4] text-[14px] text-black/80 tracking-[-0.28px]">
                Collaborating since Mar 9, 2021
              </p>
            </div>
          </div>

          {/* ✅ Avatar 3 - Positionné SUR le cercle de l'orbite */}
          <div 
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" 
            style={{ 
              transform: `translate(calc(280px * cos(90deg)), calc(280px * sin(90deg)))`,
            }}
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="size-[64px] absolute"
              style={{ 
                left: -32,
                top: -32,
                animation: 'orbitFloat 6s ease-in-out infinite', 
                animationDelay: '0.6s' 
              }}
            >
              <img alt="" className="block size-full rounded-full" src={imgImage2} />
            </motion.div>

            <div className="absolute max-w-[220px] rounded-xl bg-white p-[16px] shadow-lg md:max-w-none" style={{ left: -200, top: -8 }}>
              <p className="font-['Aspekta',sans-serif] font-medium leading-[1.4] text-[14px] text-black/80 tracking-[-0.28px]">
                First gig on the Oct 27, 2021
              </p>
            </div>
          </div>

          </div>
        </div>

        {/* Testimonial Cards */}
        <div className="absolute left-0 top-[660px] z-30 w-full overflow-hidden sm:top-[790px] md:top-[980px] md:z-[100]">
          <div className="flex gap-4 animate-infinite-scroll-horizontal sm:gap-6 md:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex w-[85vw] max-w-[628px] flex-shrink-0 flex-col items-start bg-[#f05b3d] p-6 sm:w-[78vw] sm:p-8 md:w-[628px] md:p-[40px]"
              style={{ backgroundColor: "#f05b3d" }}
            >
              <BracketTag>
                <StarRating />
              </BracketTag>
               <p className="mt-6 mb-6 font-['Aspekta',sans-serif] text-[17px] font-medium leading-[1.5] tracking-[-0.4px] text-white sm:mt-8 sm:mb-8 sm:text-[20px]">
                I'MPIXEL a complètement transformé notre présence en ligne. Résultat : 3x plus de conversions en seulement 3 mois. Une équipe professionnelle et à l'écoute.
              </p>
              <div className="flex gap-4 items-center w-full">
                <div className="bg-white/20 rounded-[32px] size-[32px]" />
                <div className="flex gap-2 items-center flex-wrap">
                  <p className="font-['Aspekta',sans-serif] font-medium text-[14px] text-white">Jaroslav Dlask</p>
                   <p className="font-['Aspekta',sans-serif] font-bold text-[14px] text-white/60 tracking-[0.28px] uppercase">US</p>
                   <p className="font-['Aspekta',sans-serif] font-bold text-[14px] text-white/60 tracking-[0.28px] uppercase">Freelancer</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex w-[85vw] max-w-[628px] flex-shrink-0 flex-col items-start bg-white p-6 sm:w-[78vw] sm:p-8 md:w-[628px] md:p-[40px]"
            >
              <BracketTag>
                <StarRating />
              </BracketTag>
               <p className="mt-6 mb-6 font-['Aspekta',sans-serif] text-[17px] font-medium leading-[1.5] tracking-[-0.4px] text-black/80 sm:mt-8 sm:mb-8 sm:text-[20px]">
                 Une équipe réactive, créative et toujours à l'écoute. Notre identité de marque a dépassé toutes nos attentes, et nos clients en raffolent.
               </p>
              <div className="flex gap-4 items-center w-full">
                 <div className="bg-gray-200 rounded-[32px] size-[32px]" />
                <div className="flex gap-2 items-center flex-wrap">
                  <p className="font-['Aspekta',sans-serif] font-medium text-[14px] text-black">Jaroslav Dlask</p>
                  <p className="font-['Aspekta',sans-serif] font-bold text-[14px] text-black/60 tracking-[0.28px] uppercase">[ US ]</p>
                  <p className="font-['Aspekta',sans-serif] font-bold text-[14px] text-black/60 tracking-[0.28px] uppercase">[ Freelancer ]</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex w-[85vw] max-w-[628px] flex-shrink-0 flex-col items-start bg-white p-6 sm:w-[78vw] sm:p-8 md:w-[628px] md:p-[40px]"
            >
              <BracketTag>
                <StarRating />
              </BracketTag>
              <p className="mt-6 mb-6 font-['Aspekta',sans-serif] text-[17px] font-medium leading-[1.5] tracking-[-0.4px] text-black/80 sm:mt-8 sm:mb-8 sm:text-[20px]">
                C'est la deuxième année que nous travaillons avec cette équipe. Toujours des livrables de qualité supérieure, dans les délais et parfaitement adaptés à notre marque.
              </p>
              <div className="flex gap-4 items-center w-full">
                <div className="bg-gray-200 rounded-[32px] size-[32px]" />
                <div className="flex gap-2 items-center flex-wrap">
                  <p className="font-['Aspekta',sans-serif] font-medium text-[14px] text-black">Jaroslav Dlask</p>
                  <p className="font-['Aspekta',sans-serif] font-bold text-[14px] text-black/60 tracking-[0.28px] uppercase">[ US ]</p>
                  <p className="font-['Aspekta',sans-serif] font-bold text-[14px] text-black/60 tracking-[0.28px] uppercase">[ Freelancer ]</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative z-20 bg-black px-4 pt-28 pb-20 sm:px-6 sm:pt-32 md:px-10 md:py-32">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-center mb-12">
            <p className="font-['Aspekta',sans-serif] font-bold text-sm uppercase tracking-[0.28px] mb-2">
              Description
            </p>
            <BracketTag>FAQ</BracketTag>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <div className="bg-white rounded-lg overflow-hidden">
            <FAQItem question={t.faqQuestions[0].q} answer={t.faqQuestions[0].a} />
            <FAQItem question={t.faqQuestions[1].q} answer={t.faqQuestions[1].a} />
            <FAQItem question={t.faqQuestions[2].q} answer={t.faqQuestions[2].a} />
             </div>
             <div className="bg-white rounded-lg overflow-hidden">
            <FAQItem question={t.faqQuestions[3].q} answer={t.faqQuestions[3].a} />
            <FAQItem question={t.faqQuestions[4].q} answer={t.faqQuestions[4].a} />
            <FAQItem question={t.faqQuestions[5].q} answer={t.faqQuestions[5].a} />
             </div>
          </div>

           <p className="text-center mt-12 font-['Aspekta',sans-serif] font-medium text-base text-white/80">
             {t.faqContact}
           </p>
        </div>
      </section>

      {/* Footer / CTA */}
      <footer id="contact" className="bg-white px-4 py-14 text-black sm:px-6 md:px-10 md:py-16" style={{ paddingBottom: '16px' }}>
        <div className="max-w-[1600px] mx-auto">
          <div className="hidden">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-10">
              <p className="font-['Aspekta',sans-serif] font-bold text-sm uppercase tracking-[0.28px]">
                Remote/PRG
              </p>
              <BracketTag>50°5′N 14°25′E</BracketTag>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <div className="bg-[#6dc06d] rounded-lg w-2 h-2" />
              <p className="font-['Aspekta',sans-serif] font-bold text-sm uppercase tracking-[0.28px]">
                03:15:57
              </p>
              <BracketTag>GMT +1</BracketTag>
            </div>
          </div>

          <div className="text-center mb-10 md:mb-12">
            <div className="mb-10 md:mb-12">
              <ImPixelLogo className="mx-auto" dark={true} />
            </div>

             <motion.h2
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
                className="mb-8 font-['Aspekta',sans-serif] font-medium text-[clamp(2.2rem,11vw,8rem)] leading-[1.02] uppercase tracking-tight sm:mb-10"
             >
               <span>{t.ctaTitle}</span>
             </motion.h2>

             <div className="mx-auto mb-10 flex w-full max-w-4xl flex-col items-center gap-5 md:mb-12">
              <motion.button
                type="button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setIsContactFormOpen((current) => {
                    const next = !current;
                    if (next) {
                      setContactFormOpenedAt(Date.now());
                      setContactFeedback({ type: "idle", message: "" });
                    }
                    return next;
                  });
                }}
                className="flex items-center gap-4 rounded-full bg-[#d23010] px-8 py-4 text-white transition-colors shadow-lg hover:bg-[#b82810] hover:shadow-xl"
              >
                <span className="font-['Aspekta',sans-serif] text-sm font-bold uppercase tracking-[0.28px]">
                  {isContactFormOpen
                    ? (language === 'fr' ? 'Fermer le formulaire' : 'Close form')
                    : (language === 'fr' ? 'Parler de votre projet' : 'Talk about your project')}
                </span>
                <motion.svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 11 11"
                  animate={{ rotate: isContactFormOpen ? 45 : 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <path d={svgPaths.p16f2e180} stroke="black" strokeLinecap="square" />
                </motion.svg>
              </motion.button>

              <motion.div
                initial={false}
                animate={{
                  height: isContactFormOpen ? "auto" : 0,
                  opacity: isContactFormOpen ? 1 : 0,
                  y: isContactFormOpen ? 0 : -18,
                }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="w-full overflow-hidden"
              >
                <div className="relative overflow-hidden rounded-[32px] border border-black/10 bg-[radial-gradient(circle_at_top,_rgba(210,48,16,0.14),_transparent_42%),linear-gradient(145deg,_rgba(255,255,255,1),_rgba(246,241,239,1))] p-5 shadow-[0_24px_90px_rgba(0,0,0,0.08)] sm:p-8 md:p-10">
                  <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[#d23010]/10 blur-3xl" />
                  <div className="relative">
                    <div className="mb-8 text-left">
                      <p className="font-['Aspekta',sans-serif] text-sm font-bold uppercase tracking-[0.28px] text-[#d23010]">
                        {language === 'fr' ? 'Nouveau projet' : 'New project'}
                      </p>
                      <h3 className="mt-3 font-['Inter',sans-serif] text-[clamp(1.8rem,4vw,3.2rem)] font-black uppercase leading-[1] tracking-tight text-black">
                        {language === 'fr' ? 'Dites-nous ce que vous imaginez.' : 'Tell us what you are building.'}
                      </h3>
                      <p className="mt-3 max-w-2xl font-['Aspekta',sans-serif] text-sm leading-6 text-black/65 sm:text-base">
                        {language === 'fr'
                          ? 'Décrivez votre besoin en quelques lignes. Nous revenons vers vous avec une direction claire, un budget indicatif et les prochaines étapes.'
                          : 'Share your brief in a few lines. We will reply with a clear direction, a rough budget and the next steps.'}
                      </p>
                    </div>

                    <form onSubmit={handleContactSubmit} className="space-y-5 text-left">
                      <input
                        type="text"
                        tabIndex={-1}
                        autoComplete="off"
                        value={contactForm.botField}
                        onChange={(event) => updateContactField("botField", event.target.value)}
                        className="hidden"
                        aria-hidden="true"
                      />
                      <div className="grid gap-4 md:grid-cols-2">
                        <label className="block">
                          <span className="mb-2 block font-['Aspekta',sans-serif] text-xs font-bold uppercase tracking-[0.28px] text-black/55">
                            {language === 'fr' ? 'Nom' : 'Name'}
                          </span>
                          <input
                            value={contactForm.name}
                            onChange={(event) => updateContactField("name", event.target.value)}
                            required
                            className="w-full rounded-2xl border border-black/10 bg-white px-5 py-4 font-['Aspekta',sans-serif] text-sm text-black outline-none transition focus:border-[#d23010] focus:ring-2 focus:ring-[#d23010]/15"
                            placeholder={language === 'fr' ? 'Votre nom' : 'Your name'}
                          />
                        </label>
                        <label className="block">
                          <span className="mb-2 block font-['Aspekta',sans-serif] text-xs font-bold uppercase tracking-[0.28px] text-black/55">
                            Email
                          </span>
                          <input
                            type="email"
                            value={contactForm.email}
                            onChange={(event) => updateContactField("email", event.target.value)}
                            required
                            className="w-full rounded-2xl border border-black/10 bg-white px-5 py-4 font-['Aspekta',sans-serif] text-sm text-black outline-none transition focus:border-[#d23010] focus:ring-2 focus:ring-[#d23010]/15"
                            placeholder={language === 'fr' ? 'vous@entreprise.com' : 'you@company.com'}
                          />
                        </label>
                      </div>

                      <label className="block">
                        <span className="mb-2 block font-['Aspekta',sans-serif] text-xs font-bold uppercase tracking-[0.28px] text-black/55">
                          {language === 'fr' ? 'Entreprise / marque' : 'Company / brand'}
                        </span>
                        <input
                          value={contactForm.company}
                          onChange={(event) => updateContactField("company", event.target.value)}
                          className="w-full rounded-2xl border border-black/10 bg-white px-5 py-4 font-['Aspekta',sans-serif] text-sm text-black outline-none transition focus:border-[#d23010] focus:ring-2 focus:ring-[#d23010]/15"
                          placeholder={language === 'fr' ? 'Nom de votre entreprise' : 'Your company name'}
                        />
                      </label>

                      <label className="block">
                        <span className="mb-2 block font-['Aspekta',sans-serif] text-xs font-bold uppercase tracking-[0.28px] text-black/55">
                          {language === 'fr' ? 'Votre besoin' : 'Project brief'}
                        </span>
                        <textarea
                          value={contactForm.message}
                          onChange={(event) => updateContactField("message", event.target.value)}
                          required
                          rows={6}
                          className="w-full resize-none rounded-[24px] border border-black/10 bg-white px-5 py-4 font-['Aspekta',sans-serif] text-sm text-black outline-none transition focus:border-[#d23010] focus:ring-2 focus:ring-[#d23010]/15"
                          placeholder={language === 'fr'
                            ? 'Parlez-nous de votre site, votre identité visuelle, vos délais ou votre budget.'
                            : 'Tell us about your website, brand identity, timeline or budget.'}
                        />
                      </label>

                      <div className="flex flex-col gap-4 border-t border-black/10 pt-5 md:flex-row md:items-center md:justify-between">
                        <div>
                          <p className="font-['Aspekta',sans-serif] text-sm font-bold uppercase tracking-[0.28px] text-black">
                            {language === 'fr' ? 'Envoyer par email' : 'Send by email'}
                          </p>
                          <p className="mt-1 font-['Aspekta',sans-serif] text-sm text-black/60">
                            {language === 'fr'
                              ? 'Ou utilisez les accès rapides ci-dessous si vous préférez.'
                              : 'Or use the quick options below if you prefer.'}
                          </p>
                          {contactFeedback.type !== "idle" && (
                            <p className={`mt-3 font-['Aspekta',sans-serif] text-sm ${contactFeedback.type === "success" ? "text-green-700" : "text-[#d23010]"}`}>
                              {contactFeedback.message}
                            </p>
                          )}
                        </div>
                        <motion.button
                          type="submit"
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                          disabled={isSubmittingContact}
                          className="rounded-full bg-black px-8 py-4 font-['Aspekta',sans-serif] text-sm font-bold uppercase tracking-[0.28px] text-white disabled:cursor-not-allowed disabled:opacity-60"
                        >
                          {isSubmittingContact
                            ? (language === 'fr' ? 'Envoi...' : 'Sending...')
                            : (language === 'fr' ? 'Envoyer la demande' : 'Send request')}
                        </motion.button>
                      </div>

                      <div className="grid gap-3 pt-2 md:grid-cols-2">
                        <motion.a
                          href="mailto:814pixel@gmail.com"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="flex items-center justify-center gap-3 rounded-2xl border border-black/10 bg-white px-5 py-4 font-['Aspekta',sans-serif] text-sm font-bold uppercase tracking-[0.28px] text-black"
                        >
                          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24">
                            <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          814pixel@gmail.com
                        </motion.a>
                        <motion.a
                          href="https://wa.me/221778628648"
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="flex items-center justify-center gap-3 rounded-2xl bg-[#25D366] px-5 py-4 font-['Aspekta',sans-serif] text-sm font-bold uppercase tracking-[0.28px] text-white"
                        >
                          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                          </svg>
                          WhatsApp
                        </motion.a>
                      </div>
                    </form>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="border-t border-black/12 pt-6">
            <div className="flex flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left">
              <div className="flex flex-wrap items-center justify-center gap-6 md:justify-start md:gap-10">
                 <motion.a href="#work" whileHover={{ x: 3, color: "#146EF5" }} transition={{ duration: 0.2 }} className="font-['Aspekta',sans-serif] font-bold text-sm uppercase tracking-[0.28px] hover:text-black/60 transition-colors">
                   Réalisations
                 </motion.a>
                 <motion.a href="#services" whileHover={{ x: 3, color: "#146EF5" }} transition={{ duration: 0.2 }} className="font-['Aspekta',sans-serif] font-bold text-sm uppercase tracking-[0.28px] hover:text-black/60 transition-colors">
                   Services
                 </motion.a>
                 <motion.a href="#" whileHover={{ x: 3, color: "#146EF5" }} transition={{ duration: 0.2 }} className="font-['Aspekta',sans-serif] font-bold text-sm uppercase tracking-[0.28px] hover:text-black/60 transition-colors">
                   Boutique
                 </motion.a>
              </div>
               <p className="order-last w-full font-['Aspekta',sans-serif] text-sm font-medium text-black/80 md:order-none md:w-auto">
                 Copyright © 2026 I'mPixel. All rights reserved.
               </p>
               <div className="flex flex-wrap items-center justify-center gap-6 md:justify-start md:gap-10">
                 <motion.a href="#" whileHover={{ x: 3, color: "#146EF5" }} transition={{ duration: 0.2 }} className="font-['Aspekta',sans-serif] font-bold text-sm uppercase tracking-[0.28px] hover:text-black/60 transition-colors">
                   Blog
                 </motion.a>
                 <motion.a href="#contact" whileHover={{ x: 3, color: "#146EF5" }} transition={{ duration: 0.2 }} className="font-['Aspekta',sans-serif] font-bold text-sm uppercase tracking-[0.28px] hover:text-black/60 transition-colors">
                   Contact
                 </motion.a>
                 <motion.a href="#" whileHover={{ x: 3, color: "#146EF5" }} transition={{ duration: 0.2 }} className="font-['Aspekta',sans-serif] font-bold text-sm uppercase tracking-[0.28px] hover:text-black/60 transition-colors">
                   Confidentialité
                 </motion.a>
              </div>
            </div>
          </div>
        </div>
       </footer>
      </motion.div>
     </div>
   );
}
