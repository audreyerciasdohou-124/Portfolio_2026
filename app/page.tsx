// @ts-nocheck
"use client"; 
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '@/components/ProjectCard';
import Skills from '@/components/Skills';

export default function Home() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
      }
      window.scrollTo(0, 0);
    }
  }, []);

  const projects = [  
    { 
      title: "E-commerce", 
      desc: "Boutique haut de gamme au design épuré.", 
      tags: ["NEXT.JS", "STRIPE"],
      imageUrl: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop" 
    },
    { 
      title: "Portfolio", 
      desc: "Mon univers créatif et technique.", 
      tags: ["REACT", "FRAMER"],
      imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop" 
    },
    { 
      title: "Google Keep", 
      desc: "Prise de notes intelligente et rapide.", 
      tags: ["ANGULAR", "FIREBASE"],
      imageUrl: "https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=800&auto=format&fit=crop" 
    }, 
    { 
      title: "Gestâche", 
      desc: "Planification et suivi de productivité.", 
      tags: ["REACT", "NODE"],
      imageUrl: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=800&auto=format&fit=crop" 
    }
  ];
 
  // On quadruple pour être sûr que le défilement est infini sans saut visuel
  const duplicatedProjects = [...projects, ...projects, ...projects, ...projects];
 
  return (
    <main className="w-full overflow-hidden bg-[#2C2420]">
      {/* SECTION ACCUEIL */}
      <section id="accueil" className="relative min-h-[80vh] flex items-center justify-center py-20 md:py-40 text-center px-6">
        <motion.div initial={{opacity:0}} animate={{opacity:1}} className="max-w-6xl mx-auto">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[#FCF9F5] tracking-tight leading-[1.1]">
            Ercias Audrey Dohou
          </h1>
          <div className="mt-8 md:mt-12 max-w-4xl mx-auto">
            <p className="text-[#FAF5F0] text-lg md:text-3xl italic font-light leading-relaxed"> 
              Architecte de solutions <span className="text-white not-italic font-medium underline decoration-[#6F4E37] underline-offset-8">Fullstack</span>, je transforme vos idées en solutions numériques épurées.
            </p>
          </div>
        </motion.div>
      </section>

      {/* SECTION PROJETS */}
      <section id="projets" className="py-16 md:py-32 overflow-hidden border-y border-[#6F4E37]/10 bg-[#2C2420]">
        <div className="flex flex-col items-center mb-10 text-center px-4">
          <h2 className="text-[10px] md:text-base font-bold uppercase tracking-[0.4em] text-[#FCF9F5] opacity-60">
            Projets Sélectionnés
          </h2>
          <div className="h-1 w-10 bg-blue-600 rounded-full mt-3"></div>
        </div>

        {/* Conteneur principal avec masque de débordement */}
        <div className="relative flex overflow-hidden">
          <div 
            className="flex animate-marquee flex-nowrap gap-6 md:gap-10 py-6"
            style={{ 
              willChange: 'transform',
              backfaceVisibility: 'hidden'
            }}
          >
            {duplicatedProjects.map((proj, i) => (
              <div 
                key={i} 
                className="min-w-[280px] md:min-w-[450px] shrink-0" 
              >
                <ProjectCard 
                  index={i} 
                  title={proj.title} 
                  description={proj.desc} 
                  tags={proj.tags} 
                  imageUrl={proj.imageUrl} 
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION SKILLS */}
      <section id="competences" className="max-w-[1400px] mx-auto px-6 py-20 md:py-40">
        <Skills />
      </section>
    </main>                                                 
  );
}