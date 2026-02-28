"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Fonction pour fermer le menu et scroller doucement
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
    e.preventDefault();
    setIsOpen(false); // Ferme le menu mobile
    
    const element = document.getElementById(id.replace("#", ""));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { name: "Accueil", href: "#accueil" },
    { name: "Projets", href: "#projets" },
    { name: "Compétences", href: "#competences" },
  ];

  return (
    <nav className="fixed top-0 w-full z-[100] bg-[#F3EEE7]/80 backdrop-blur-md border-b border-[#2C2420]/5 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* LOGO */}
        <div className="text-xl font-bold italic text-[#2C2420]">
          M.Portfolio
        </div>

        {/* LIENS DESKTOP */}
        <div className="hidden md:flex items-center gap-8 text-[11px] uppercase tracking-[0.2em] font-bold text-[#6F4E37]">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={(e) => handleScroll(e, link.href)}
              className="hover:text-[#2C2420] transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            onClick={(e) => handleScroll(e, "#contact")}
            className="bg-[#2C2420] text-white px-6 py-2 rounded-full hover:bg-[#6F4E37] transition-all"
          >
            Contactez-moi
          </a>
        </div>

        {/* BOUTON HAMBURGER */}
        <button 
          className="md:hidden text-[#2C2420] z-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MENU MOBILE */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-[72px] h-screen w-full bg-[#F3EEE7] z-40 md:hidden"
          >
            <div className="flex flex-col gap-10 p-12 text-[14px] uppercase tracking-[0.3em] font-bold text-[#6F4E37] items-center justify-center h-full">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={(e) => handleScroll(e, link.href)}
                  className="hover:text-[#2C2420] active:text-[#2C2420] transition-all"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact" 
                onClick={(e) => handleScroll(e, "#contact")}
                className="text-[#2C2420] border-b-2 border-[#2C2420] pb-2"
              >
                Contactez-moi
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;