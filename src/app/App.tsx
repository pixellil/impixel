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

function ImPixelLogo({ className = "", textColor = "text-white" }: { className?: string; textColor?: string }) {
  return (
    <motion.div
      className={`flex items-center gap-2 ${className}`}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="bg-[#146EF5] rounded-lg p-2"
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.6 }}
      >
        <svg className="w-6 h-6" fill="white" viewBox="0 0 24 24">
          <rect x="3" y="3" width="7" height="7" />
          <rect x="14" y="3" width="7" height="7" />
          <rect x="3" y="14" width="7" height="7" />
          <rect x="14" y="14" width="7" height="7" />
        </svg>
      </motion.div>
      <span className={`font-['Aspekta',sans-serif] font-bold text-2xl ${textColor} tracking-tight`}>
        I'mPixel
      </span>
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
  delay = 0
}: {
  image: string;
  title: string;
  tags: string[];
  delay?: number;
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
            Voir le projet
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
        <p className="font-['Aspekta',sans-serif] font-medium text-base">{question}</p>
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
          <p className="mt-4 font-['Aspekta',sans-serif] text-sm text-black/60">{answer}</p>
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
      whileHover={{ backgroundColor: "rgba(0,0,0,0.02)", paddingLeft: "10px" }}
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
          <BracketTag>{number}</BracketTag>
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

export default function App() {
  const { scrollYProgress, scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", updateScroll);
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
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
        <div className="max-w-[1600px] mx-auto px-10 py-6 flex items-center justify-between">
          <ImPixelLogo />
          <motion.div
            className="hidden md:flex items-center gap-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {["Work", "Services", "About", "Contact"].map((item, i) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="font-['Aspekta',sans-serif] font-bold text-sm uppercase tracking-[0.28px] relative group"
                whileHover={{ y: -2 }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
              >
                {item}
                <motion.span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#146EF5] group-hover:w-full transition-all duration-300"
                />
              </motion.a>
            ))}
          </motion.div>
          <div className="flex items-center gap-10">
            <div className="flex items-center gap-2">
              <div className="bg-[#6dc06d] rounded-lg w-2 h-2" />
              <span className="font-['Aspekta',sans-serif] font-bold text-sm uppercase tracking-[0.28px]">
                03:15:57
              </span>
              <BracketTag>GMT +1</BracketTag>
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

        <div className="relative h-full max-w-[1600px] mx-auto px-10 flex flex-col justify-between py-16">
          {/* Top Section */}
          <div className="flex-1 flex items-center justify-center">
            <div className="w-full max-w-7xl px-24">
              {/* ✅ DISPOSITION FINALE EXACTE COMME LA MAQUETTE */}
                <div className="relative">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.2 }}
                    className="flex items-end gap-25 ml-[-20px]"
                  >
                    <h1 className="font-['Inter',sans-serif] font-normal leading-[1.05] text-[112px] text-white tracking-[-2.2px] uppercase">
                      VOS IDEES
                    </h1>
                    
                    <h1 className="font-['Inter',sans-serif] font-black leading-[1.05] text-[112px] text-white tracking-[-2.2px] uppercase">
                      NOUS
                    </h1>
                  </motion.div>

                  <div className="relative ml-[520px] mt-[8px]">
                    <h2 className="font-['Inter',sans-serif] font-black leading-[1.05] text-[112px] text-white tracking-[-2.2px] uppercase">
                      REALISONS
                    </h2>
                  </div>

                  {/* Description SOUS VOS IDEES */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.7 }}
                    className="absolute left-[80px] top-[140px] max-w-md font-['Inter',sans-serif] font-normal leading-[1.5] text-[15px] text-white/70 tracking-[-0.28px]"
                  >
                  <p className="mb-0">Agence digitale spécialisée dans la création de sites web,</p>
                  <p className="mb-0">le design graphique et la gestion des réseaux sociaux.</p>
                  <p className="mb-0">Nous aidons les entreprises à développer leur présence</p>
                  <p>en ligne avec des solutions modernes et efficaces.</p>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Bottom Section - Stats */}
          <div className="flex items-center justify-between gap-4 flex-wrap">
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
                See Work
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
      <section id="work" className="py-32 px-10">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-20">
            <div className="lg:col-span-1">
              <WorkCard
                image={imgWorkThumbnail}
                title="creation de site web"
                tags={["Design", "Development", "Custom Project"]}
                delay={0}
              />
            </div>
            <div className="lg:col-span-2">
              <WorkCard
                image={imgWorkThumbnail3}
                title="identite de marque"
                tags={["Design", "Development", "Custom Project"]}
                delay={0.1}
              />
            </div>
            <div className="lg:col-span-2">
              <WorkCard
                image={imgWorkThumbnail1}
                title="creation de app mobile"
                tags={["Design", "Development", "Custom Project"]}
                delay={0.2}
              />
            </div>
            <div className="lg:col-span-1">
              <WorkCard
                image={imgWorkThumbnail2}
                title="gestion de site web"
                tags={["Design", "Development", "Custom Project"]}
                delay={0.3}
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-10 bg-black">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-8">
                <p className="font-['Inter',sans-serif] text-sm uppercase tracking-[0.28px]">
                  pourquoi nous ?
                </p>
                <BracketTag></BracketTag>
              </div>
              <h2 className="font-['Inter',sans-serif] text-[clamp(2rem,4vw,4rem)] leading-tight uppercase tracking-tight mb-8">
                <p className="mb-2">Des solutions</p>
                <p className="mb-2">de qualité, conçues</p>
                <p className="mb-2">sur mesure pour répondre</p>
                <p>à vos besoins.</p>
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-8">
                <p className="font-['Inter',sans-serif] text-sm uppercase tracking-[0.28px]">
                  a propos de I'mPixel
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
                Depuis 2017, I'MPIXEL accompagne les entreprises et les entrepreneurs dans leur transformation digitale. 
                Notre équipe passionnée combine expertise technique et créativité pour donner vie à vos projets les plus ambitieux.
                Nous croyons qu'un design réussi est celui qui allie esthétique, performance et expérience utilisateur.
              </p>
              <div className="mt-12">
                <img
                  src={imgUnsplash}
                  alt="About"
                  className="w-full h-auto rounded-lg"
                />
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
            <h2 className="font-['Inter',sans-serif] text-[clamp(2.5rem,5vw,4rem)] leading-tight uppercase tracking-tight mb-12">
              <p className="mb-2">
                <span className="font-black">Imagine un instant…</span>
              </p>
              <p>
                <span>un monde </span>
                <span className="font-['Jost',sans-serif] text-[clamp(1.5rem,3vw,2.5rem)]">sans limite</span>
                <span> pour ta marque</span>
              </p>
            </h2>

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
            <h2 className="font-['Inter',sans-serif] text-[clamp(2.5rem,5vw,4rem)] leading-tight uppercase tracking-tight mt-12 mb-8">
              <p className="mb-2">
                <span className="font-black italic">imagine</span>
                <span> travailler avec une</span>
              </p>
              <p className="mb-2">
                <span>agence qui maitrise </span>
                <span className="font-['Intel_One_Mono',monospace] text-[clamp(1.5rem,3vw,2.5rem)]">ton ideee</span>
              </p>
              <p>mieux que tout le monde</p>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="startup branding sprint"
              price="50% deposit"
              features={[]}
            />
            <ServiceCard
              title="web development package"
              price="Custom pricing"
              features={[]}
            />
            <ServiceCard
              title="complete digital transformation"
              price="Enterprise"
              features={[]}
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section - Figma Design with Orbits */}
      <section className="relative h-[1194px] bg-white text-black">
        {/* Background Gradient Parallax */}
        <motion.div className="absolute h-[1194px] pointer-events-none overflow-hidden" style={{ inset: '0 23.52% 0 0' }}>
              <motion.img
                alt=""
                className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
                style={{ 
                  y: useTransform(scrollY, [0, 3000], [0, -400]),
                  scale: useTransform(scrollY, [0, 3000], [1, 1.15]),
                }}
                src={imgShapeBlendingGradient}
              />
        </motion.div>

        {/* Description Label */}
        <p className="absolute font-['Aspekta',sans-serif] font-bold leading-none left-[40px] text-[14px] text-black top-[191px] tracking-[0.28px] uppercase">
          Description
        </p>

        {/* Testimonials Label */}
        <p className="absolute font-['Aspekta',sans-serif] font-bold leading-none right-[104px] text-[14px] text-black/60 text-center top-[191px] tracking-[0.28px] uppercase whitespace-nowrap">
          [ Testimonials ]
        </p>

        {/* Orbit Circles */}
        <div className="absolute left-1/2 -translate-x-1/2 size-[864px] top-[109px]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 864 864">
            <circle cx="432" cy="432" r="431.5" stroke="black" strokeOpacity="0.3" />
          </svg>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 size-[576px] top-[289px]">
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
          className="absolute left-1/2 -translate-x-1/2 top-[544px] w-[760px] text-center"
        >
          <p className="font-['Aspekta',sans-serif] font-medium text-[clamp(2rem,4vw,4rem)] leading-[1.1] tracking-[-1.28px]">
            <span>Don't take my word for it. </span>
            <span className="font-['Inter',sans-serif] italic lowercase text-black/60">Hear it</span>
            <span> directly from my clients.</span>
          </p>
        </motion.div>

        {/* Navigation Arrows */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="absolute bg-[#fafafa] flex items-center justify-center rounded-full size-[32px]"
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
          className="absolute bg-[#fafafa] flex items-center justify-center rounded-full size-[32px]"
          style={{ left: '-3px', top: '797px' }}
        >
          <svg className="w-[10px] h-[8px]" fill="none" viewBox="0 0 11.2071 9.41421">
            <path d={svgPaths.p2597f800} stroke="black" strokeLinecap="square" strokeOpacity="0.6" />
          </svg>
        </motion.button>

        {/* ✅ ROTATING ORBIT CONTAINER - TOUT EST DEDANS */}
        <div className="absolute block inset-0 size-full origin-center" style={{ 
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

            <div className="absolute bg-white flex items-center p-[16px] rounded-xl shadow-lg" style={{ left: 40, top: -8 }}>
              <p className="font-['Aspekta',sans-serif] font-medium leading-[1.5] text-[14px] text-black/80 tracking-[-0.28px] whitespace-nowrap">
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

            <div className="absolute bg-white flex items-center justify-center p-[16px] rounded-xl shadow-lg" style={{ left: -120, top: -70 }}>
              <p className="font-['Aspekta',sans-serif] font-medium leading-[1.5] text-[14px] text-black/80 tracking-[-0.28px] whitespace-nowrap">
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

            <div className="absolute bg-white flex items-center justify-end p-[16px] rounded-xl shadow-lg" style={{ left: -200, top: -8 }}>
              <p className="font-['Aspekta',sans-serif] font-medium leading-[1.5] text-[14px] text-black/80 tracking-[-0.28px] whitespace-nowrap">
                First gig on the Oct 27, 2021
              </p>
            </div>
          </div>

        </div>

        {/* Testimonial Cards */}
        <div className="absolute left-0 top-[900px] w-full overflow-hidden">
          <div className="flex gap-8 animate-infinite-scroll-horizontal">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex-shrink-0 w-[628px] bg-[#f05b3d] flex flex-col items-start p-[40px]"
              style={{ backgroundColor: "#f05b3d" }}
            >
              <BracketTag>
                <StarRating />
              </BracketTag>
               <p className="font-['Aspekta',sans-serif] font-medium leading-[1.5] text-[20px] text-white tracking-[-0.4px] mt-8 mb-8">
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
              className="flex-shrink-0 w-[628px] bg-white flex flex-col items-start p-[40px]"
            >
              <BracketTag>
                <StarRating />
              </BracketTag>
              <p className="font-['Aspekta',sans-serif] font-medium leading-[1.5] text-[20px] text-black/80 tracking-[-0.4px] mt-8 mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi euismod, nunc id dictum dictum, nisi nunc tristique lectus.
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
              className="flex-shrink-0 w-[628px] bg-white flex flex-col items-start p-[40px]"
            >
              <BracketTag>
                <StarRating />
              </BracketTag>
              <p className="font-['Aspekta',sans-serif] font-medium leading-[1.5] text-[20px] text-black/80 tracking-[-0.4px] mt-8 mb-8">
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
      <section className="py-32 px-10 bg-black">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-center mb-12">
            <p className="font-['Aspekta',sans-serif] font-bold text-sm uppercase tracking-[0.28px] mb-2">
              Description
            </p>
            <BracketTag>FAQ</BracketTag>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg overflow-hidden">
              <FAQItem question="Quels services proposez-vous ?" />
              <FAQItem question="Combien de temps prend un projet ?" />
              <FAQItem question="Quels sont vos tarifs ?" />
            </div>
            <div className="bg-white rounded-lg overflow-hidden">
              <FAQItem question="Travaillez-vous à distance ?" />
              <FAQItem question="Proposez-vous de la maintenance ?" />
              <FAQItem question="Comment démarrer un projet ?" />
            </div>
          </div>

          <p className="text-center mt-12 font-['Aspekta',sans-serif] font-medium text-base text-white/80">
            Still got questions? <span className="underline cursor-pointer">Contact</span> me.
          </p>
        </div>
      </section>

      {/* Footer / CTA */}
      <footer id="contact" className="bg-white text-black py-20 px-10">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center gap-10">
              <p className="font-['Aspekta',sans-serif] font-bold text-sm uppercase tracking-[0.28px]">
                Remote/PRG
              </p>
              <BracketTag>50°5′N 14°25′E</BracketTag>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-[#6dc06d] rounded-lg w-2 h-2" />
              <p className="font-['Aspekta',sans-serif] font-bold text-sm uppercase tracking-[0.28px]">
                03:15:57
              </p>
              <BracketTag>GMT +1</BracketTag>
            </div>
          </div>

          <div className="text-center mb-16">
            <div className="mb-16">
              <ImPixelLogo className="mx-auto" textColor="text-black" />
            </div>

            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-['Aspekta',sans-serif] font-medium text-[clamp(3rem,8vw,8rem)] leading-[1.1] uppercase tracking-tight mb-12"
            >
              Let's build it
            </motion.h2>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#d23010] text-white p-6 rounded-full hover:bg-[#b82810] transition-colors"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 11 11">
                <path d={svgPaths.p16f2e180} stroke="black" strokeLinecap="square" />
              </svg>
            </motion.button>
          </div>

          <div className="border-t border-black/12 pt-8">
            <div className="flex flex-wrap items-center justify-between gap-8">
              <div className="flex gap-10">
                <a href="#work" className="font-['Aspekta',sans-serif] font-bold text-sm uppercase tracking-[0.28px] hover:text-black/60 transition-colors">
                  Work
                </a>
                <a href="#services" className="font-['Aspekta',sans-serif] font-bold text-sm uppercase tracking-[0.28px] hover:text-black/60 transition-colors">
                  Services
                </a>
                <a href="#" className="font-['Aspekta',sans-serif] font-bold text-sm uppercase tracking-[0.28px] hover:text-black/60 transition-colors">
                  Shop
                </a>
              </div>
              <p className="font-['Aspekta',sans-serif] font-medium text-sm text-black/80">
                Copyright © 2025 I'mPixel. All rights reserved.
              </p>
              <div className="flex gap-10">
                <a href="#" className="font-['Aspekta',sans-serif] font-bold text-sm uppercase tracking-[0.28px] hover:text-black/60 transition-colors">
                  Blog
                </a>
                <a href="#contact" className="font-['Aspekta',sans-serif] font-bold text-sm uppercase tracking-[0.28px] hover:text-black/60 transition-colors">
                  Contact
                </a>
                <a href="#" className="font-['Aspekta',sans-serif] font-bold text-sm uppercase tracking-[0.28px] hover:text-black/60 transition-colors">
                  Privacy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
