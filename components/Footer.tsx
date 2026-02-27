"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
// AJOUT de Github ici pour qu'il ne soit plus "barré" ou en erreur
import { Linkedin, Github, Compass, Send, Phone, MessageCircle, CheckCircle } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const formRef = useRef<HTMLFormElement>(null);
  
  const [isSending, setIsSending] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleFakeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    setTimeout(() => {
      setIsSending(false);
      setShowSuccess(true);
      formRef.current?.reset(); 
      setTimeout(() => setShowSuccess(false), 4000);
    }, 1500);
  };

  return (
    <footer id="contact" className="w-full bg-[#2C2420] text-[#FCF9F5] pt-32 pb-10 border-t border-[#6F4E37]/10">
      <div className="w-full px-6 md:px-12">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
          
          {/* --- BLOC GAUCHE --- */}
          <div className="flex-1">
            <motion.h2 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-8xl font-bold tracking-tighter italic mb-8"
            >
              Parlons de votre <br /> prochain projet.
            </motion.h2>

            <a href="mailto:audreydohou23@gmail.com" className="text-2xl md:text-3xl text-[#FAF5F0] opacity-70 hover:opacity-100 transition-opacity duration-300 border-b-2 border-[#FAF5F0]/30 pb-2 font-light inline-block mb-20">
              audreydohou23@gmail.com
            </a>

            <div className="flex flex-col md:flex-row gap-16 md:gap-24">
              <div className="text-left">
                <p className="flex items-center gap-3 text-[12px] uppercase tracking-[0.4em] text-[#FAF5F0]/50 mb-8 font-bold">
                  <Compass className="w-4 h-4" /> Navigation
                </p>
                <ul className="space-y-5 text-xl md:text-2xl font-medium italic text-[#FAF5F0]">
                  <li><a href="#projets" className="hover:text-white transition-colors">Projets</a></li>
                  <li><a href="#competences" className="hover:text-white transition-colors">Compétences</a></li>
                </ul>
              </div>
              
              <div className="text-left">
                <p className="text-[12px] uppercase tracking-[0.4em] text-[#FAF5F0]/50 mb-8 font-bold">Réseaux & Contact</p>
                <ul className="space-y-5 text-xl md:text-2xl font-medium italic text-[#FAF5F0]">
                  <li>
                    <a href="#" className="flex items-center gap-4 hover:text-white transition-colors">
                      <Linkedin className="w-6 h-6" /> LinkedIn
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/audreyerciasdohou-124" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 hover:text-white transition-colors">
                      <Github className="w-6 h-6" /> GitHub
                    </a>
                  </li>
                  <li>
                    <a href="tel:+22940482104" className="flex items-center gap-4 hover:text-white transition-colors">
                      <Phone className="w-6 h-6 opacity-60" /> Contact
                    </a>
                  </li>
                  <li>
                    <a href="https://wa.me/22940482104" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 hover:text-[#25D366] transition-colors">
                      <MessageCircle className="w-6 h-6 text-[#25D366]" /> WhatsApp
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* --- BLOC DROITE : FORMULAIRE --- */}
          <div className="w-full lg:w-[420px] bg-[#362d29] p-10 rounded-[40px] border border-[#FAF5F0]/10 shadow-2xl shrink-0">
            <p className="text-[12px] uppercase tracking-[0.4em] text-blue-600 mb-10 font-bold">Envoyer un message</p>
            
            <form ref={formRef} onSubmit={handleFakeSubmit} className="space-y-10">
              <input type="text" required placeholder="Votre nom" className="w-full bg-transparent border-b border-[#FAF5F0]/20 py-3 outline-none focus:border-blue-600 transition-colors text-lg font-light text-[#FAF5F0] placeholder:text-[#FAF5F0]/30" />
              <input type="email" required placeholder="Votre email" className="w-full bg-transparent border-b border-[#FAF5F0]/20 py-3 outline-none focus:border-blue-600 transition-colors text-lg font-light text-[#FAF5F0] placeholder:text-[#FAF5F0]/30" />
              <textarea rows={4} required placeholder="Votre projet..." className="w-full bg-transparent border-b border-[#FAF5F0]/20 py-3 outline-none focus:border-blue-600 transition-colors text-lg font-light text-[#FAF5F0] placeholder:text-[#FAF5F0]/30 resize-none" />
              
              <button 
                disabled={isSending}
                type="submit"
                className={`w-full group flex items-center justify-center gap-3 py-4 rounded-2xl font-bold uppercase text-[10px] tracking-[0.2em] transition-all duration-300 shadow-lg ${isSending ? 'bg-gray-600 opacity-50' : 'bg-blue-600 text-white hover:bg-[#FAF5F0] hover:text-blue-600 shadow-blue-600/20'}`}
              >
                {isSending ? "Envoi en cours..." : "Envoyer"} 
                <Send className={`w-4 h-4 ${isSending ? 'animate-pulse' : ''}`} />
              </button>

              <AnimatePresence>
                {showSuccess && (
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-green-400 text-[10px] uppercase tracking-widest flex items-center gap-2 justify-center font-bold"
                  >
                    <CheckCircle className="w-4 h-4" /> Message reçu ! Je vous reviens très vite.
                  </motion.p>
                )}
              </AnimatePresence>
            </form>
          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="mt-32 pt-12 border-t border-[#FAF5F0]/10 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.2em] text-[#FAF5F0]/40">
          <p>© {currentYear} Ercias Audrey Dohou</p>
          <p className="italic">Architecte Fullstack & Designer</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;