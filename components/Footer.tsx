"use client";
import { motion } from "framer-motion";
import { Linkedin, Github, Instagram, Compass, Send } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="w-full bg-[#2C2420] text-[#FCF9F5] pt-32 pb-10 border-t border-[#6F4E37]/10">
      {/* Container en pleine largeur sans max-width (w-full) et avec un padding horizontal minimal (px-6) */}
      <div className="w-full px-6 md:px-12">
        
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
          
          {/* --- BLOC GAUCHE : POUSSÉ AU BOUT À GAUCHE --- */}
          <div className="flex-1">
            <motion.h2 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-8xl font-bold tracking-tighter italic mb-8"
            >
              Parlons de votre <br /> prochain projet.
            </motion.h2>

            <a 
              href="mailto:votre@email.com" 
              className="text-2xl md:text-3xl text-[#6F4E37] hover:text-[#FCF9F5] transition-colors duration-300 border-b-2 border-[#6F4E37] pb-2 font-light inline-block mb-20"
            >
              audreydohou23@gmail.com
            </a>

            <div className="flex flex-row gap-24">
              {/* NAVIGATION */}
              <div className="text-left">
                <p className="flex items-center gap-3 text-[12px] uppercase tracking-[0.4em] text-[#6F4E37] mb-8 font-bold">
                  <Compass className="w-4 h-4" /> Navigation
                </p>
                <ul className="space-y-5 text-xl md:text-2xl font-medium italic">
                  <li><a href="#projets" className="hover:text-blue-600 transition-colors">Projets</a></li>
                  <li><a href="#competences" className="hover:text-blue-600 transition-colors">Compétences</a></li>
                </ul>
              </div>
              
              {/* RÉSEAUX */}
              <div className="text-left">
                <p className="text-[12px] uppercase tracking-[0.4em] text-[#6F4E37] mb-8 font-bold">
                  Réseaux
                </p>
                <ul className="space-y-5 text-xl md:text-2xl font-medium italic">
                  <li><a href="#" className="flex items-center gap-4 hover:text-blue-600 transition-colors"><Linkedin className="w-6 h-6" /> LinkedIn</a></li>
                  <li><a href="#" className="flex items-center gap-4 hover:text-blue-600 transition-colors"><Github className="w-6 h-6" /> GitHub</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* --- BLOC DROITE : POUSSÉ AU BOUT À DROITE --- */}
          <div className="w-full lg:w-[420px] bg-[#362d29] p-10 rounded-[40px] border border-[#6F4E37]/20 shadow-2xl shrink-0">
            <p className="text-[12px] uppercase tracking-[0.4em] text-blue-600 mb-8 font-bold">
              Envoyer un message
            </p>
            <form className="space-y-8">
              <input 
                type="text" 
                placeholder="Votre nom" 
                className="w-full bg-transparent border-b border-[#6F4E37]/30 py-3 outline-none focus:border-blue-600 transition-colors text-lg font-light placeholder:text-[#6F4E37]/50"
              />
              <input 
                type="email" 
                placeholder="Votre email" 
                className="w-full bg-transparent border-b border-[#6F4E37]/30 py-3 outline-none focus:border-blue-600 transition-colors text-lg font-light placeholder:text-[#6F4E37]/50"
              />
              <textarea 
                rows={4}
                placeholder="Votre projet..." 
                className="w-full bg-transparent border-b border-[#6F4E37]/30 py-3 outline-none focus:border-blue-600 transition-colors text-lg font-light placeholder:text-[#6F4E37]/50 resize-none"
              />
              <button className="w-full group flex items-center justify-center gap-3 bg-blue-600 text-white py-4 rounded-2xl font-bold uppercase text-[10px] tracking-[0.2em] hover:bg-[#FCF9F5] hover:text-blue-600 transition-all duration-300">
                Envoyer <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>

        {/* COPYRIGHT COLLÉ AUX BORDS AUSSI */}
        <div className="mt-32 pt-12 border-t border-[#6F4E37]/10 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.2em] text-[#6F4E37]">
          <p>© {currentYear} Ercias Audrey Dohou</p>
          <p className="italic underline decoration-blue-600 underline-offset-4">Développeur & Designer</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;