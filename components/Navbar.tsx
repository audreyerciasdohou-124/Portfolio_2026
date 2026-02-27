"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react"; // Pense à les importer

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#F3EEE7]/80 backdrop-blur-md border-b border-[#2C2420]/5 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* LOGO */}
        <div className="text-xl font-bold italic text-[#2C2420]">
          M.Portfolio
        </div>

        {/* LIENS DESKTOP (Cachés sur mobile : hidden md:flex) */}
        <div className="hidden md:flex items-center gap-8 text-[11px] uppercase tracking-[0.2em] font-bold text-[#6F4E37]">
          <a href="#accueil" className="hover:text-[#2C2420] transition-colors">Accueil</a>
          <a href="#projets" className="hover:text-[#2C2420] transition-colors">Projets</a>
          <a href="#competences" className="hover:text-[#2C2420] transition-colors">Compétences</a>
          <a href="#contact" className="bg-[#2C2420] text-white px-6 py-2 rounded-full hover:bg-[#6F4E37] transition-all">
            Contactez-moi
          </a>
        </div>

        {/* BOUTON HAMBURGER (Uniquement sur mobile : flex md:hidden) */}
        <button 
          className="md:hidden text-[#2C2420]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MENU MOBILE (AnimatePresence pour l'ouverture fluide) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#F3EEE7] border-t border-[#2C2420]/5 overflow-hidden"
          >
            <div className="flex flex-col gap-6 p-8 text-[12px] uppercase tracking-[0.3em] font-bold text-[#6F4E37] items-center">
              <a href="#accueil" onClick={() => setIsOpen(false)}>Accueil</a>
              <a href="#projets" onClick={() => setIsOpen(false)}>Projets</a>
              <a href="#competences" onClick={() => setIsOpen(false)}>Compétences</a>
              <a href="#contact" onClick={() => setIsOpen(false)} className="text-[#2C2420] border-b-2 border-[#2C2420]">
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