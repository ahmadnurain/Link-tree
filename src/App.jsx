import { useState, useEffect } from "react";
import Squares from "./blocks/Backgrounds/Squares/Squares";
import BlurText from "./blocks/TextAnimations/BlurText/BlurText";
import RotatingText from "./blocks/TextAnimations/RotatingText/RotatingText";
import { FaLinkedin, FaGithub, FaInstagram, FaGlobe, FaMapMarkerAlt, FaGraduationCap, FaEnvelope } from "react-icons/fa";
import LinkCard from "./components/LinkCard";
import { motion } from "framer-motion";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for smoother entrance
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <div className="relative w-screen min-h-screen bg-[#050505] text-white selection:bg-white/20 overflow-x-hidden font-sans">
      {/* Background - Minimal and Clean */}
      <div className="fixed inset-0 z-0 opacity-40">
        <Squares speed={0.5} squareSize={50} direction="diagonal" borderColor="#262626" hoverFillColor="#333" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-6 py-12 md:py-20 flex flex-col gap-10">
        {/* Header Section */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="flex flex-col items-center text-center space-y-6">
          {/* Profile Image with subtle glow */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-white/20 to-white/10 rounded-full opacity-50 blur-sm group-hover:opacity-100 transition duration-700"></div>
            <img src="/IMG_5sw456.JPG" alt="Ahmad Nur Ain" className="relative w-36 h-36 md:w-40 md:h-40 rounded-full border-2 border-neutral-800 shadow-2xl object-cover" />
          </div>

          <div className="space-y-3">
            <BlurText text="Ahmad Nur Ain" delay={100} animateBy="letters" direction="bottom" threshold={0.4} className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-2" />

            {/* Restored Clean Rotating Text */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-2 text-lg md:text-xl font-medium text-neutral-400">
              <span>Passionate about</span>
              <RotatingText
                texts={["Frontend Development", "Full Stack Engineering", "Backend Development", "Cyber Security Enthusiast"]}
                mainClassName="px-3 py-1 bg-neutral-900 border border-neutral-800 rounded-md text-white overflow-hidden"
                staggerFrom="last"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={3000}
              />
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-sm text-neutral-500 font-medium">
            <span className="flex items-center gap-1.5">
              <FaMapMarkerAlt /> West Java, Indonesia
            </span>
            <span className="hidden md:inline">•</span>
            <span className="flex items-center gap-1.5">
              <FaGraduationCap /> Universitas Majalengka
            </span>
          </div>
        </motion.div>

        {/* Links Section - Vertical Stack for Better Readability */}
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="flex flex-col gap-4 w-full">
          {/* Portfolio - Highlighted */}
          <LinkCard title="Portfolio Website" description="View my latest projects, case studies, and journey." icon={FaGlobe} url="https://my-portofolio-delta-livid.vercel.app/" color="bg-neutral-900" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* GitHub */}
            <LinkCard title="GitHub" description="Check out my code repositories." icon={FaGithub} url="https://github.com/ahmadnurain" color="bg-neutral-900" />

            {/* LinkedIn */}
            <LinkCard title="LinkedIn" description="Let's connect professionally." icon={FaLinkedin} url="https://www.linkedin.com/in/ahmad-nur-ain-4a6152253" color="bg-neutral-900" />
          </div>

          {/* Instagram */}
          <LinkCard title="Instagram" description="Follow my daily updates." icon={FaInstagram} url="https://www.instagram.com/amdain54/" color="bg-neutral-900" />
        </motion.div>

        {/* Footer */}
        <footer className="mt-8 text-center text-neutral-600 text-xs tracking-wider uppercase">
          <p>© {new Date().getFullYear()} Ahmad Nur Ain</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
