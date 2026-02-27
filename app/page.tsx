// @ts-nocheck
"use client"; 
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '@/components/ProjectCard';
import Skills from '@/components/Skills';

export default function Home() {
  // Logique pour forcer le scroll en haut au rechargement
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
      }
      window.scrollTo(0, 0);
    }
  }, []);

  const projects = [  
    { title: "E-commerce", desc: "Plateforme de vente moderne.", tags: ["NEXT.JS", "TAILWIND"] },
    { title: "Portfolio", desc: "Design minimaliste.", tags: ["REACT", "FRAMER"] },
    { title: "Google Keep", desc: "Clonage d'interface.", tags: ["ANGULAR", "FRAMER"] }, 
    { title: "Gestâche", desc: "Gestion de tâche.", tags: ["REACT", "FRAMER"] }
  ];
 
  const duplicatedProjects = [...projects, ...projects, ...projects];
 
  // Configuration des animations
  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants: any = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <main className="w-full overflow-hidden bg-[#2C2420]">
      {/* SECTION ACCUEIL */}
      <section className="relative min-h-[80vh] flex items-center justify-center py-20 md:py-40 text-center px-6">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants} 
          className="max-w-6xl mx-auto"
        >
          {/* NOM : Adapté pour ne pas dépasser sur mobile */}
          <motion.h1 
            variants={itemVariants} 
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[#FCF9F5] tracking-tight leading-[1.1] whitespace-normal md:whitespace-nowrap"
          >
            Ercias Audrey Dohou
          </motion.h1>

          <div className="mt-8 md:mt-12 max-w-4xl mx-auto">
            <motion.p 
              variants={itemVariants}
              className="text-[#FAF5F0] text-lg md:text-3xl italic font-light leading-relaxed px-2"
            > 
              Architecte de solutions <span className="text-white not-italic font-medium underline decoration-[#6F4E37] underline-offset-8">Fullstack</span>, je transforme vos idées en solutions numériques épurées et performantes.
            </motion.p>
            
            <motion.p 
              variants={itemVariants}  
              className="mt-10 md:mt-16 flex items-center justify-center gap-3 text-[#FAF5F0] opacity-80 font-medium uppercase text-[10px] md:text-sm tracking-[0.2em] md:tracking-[0.4em]"
            >
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FAF5F0] opacity-40"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FAF5F0]"></span> 
              </span>
              Disponible pour de nouveaux projets
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* SECTION PROJETS : Amélioration du défilement mobile */}
      <section id="projets" className="py-20 md:py-32 overflow-hidden border-y border-[#6F4E37]/10 bg-[#2C2420]">
        <div className="flex flex-col items-center mb-12 md:mb-20 text-center px-4">
          <h2 className="text-xs md:text-base font-bold uppercase tracking-[0.4em] text-[#FCF9F5] opacity-60">
            Projets Sélectionnés
          </h2>
          <div className="h-1 w-12 md:w-20 bg-blue-600 rounded-full mt-4"></div>
        </div>

        {/* Conteneur du Marquee avec dégradés sur les côtés pour le style */}
        <div className="relative flex overflow-hidden group">
            {/* Effet de fondu sur les bords (optionnel mais recommandé) */}
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#2C2420] to-transparent z-10 pointer-events-none hidden md:block"></div>
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#2C2420] to-transparent z-10 pointer-events-none hidden md:block"></div>

          <div className="flex animate-marquee gap-6 md:gap-10 py-10">
            {duplicatedProjects.map((proj, i) => (
              <div key={i} className="min-w-[290px] md:min-w-[450px]">
                <ProjectCard 
                  index={i} 
                  title={proj.title} 
                  description={proj.desc} 
                  tags={proj.tags} 
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION SKILLS */}
      <section id="competences" className="max-w-[1400px] mx-auto px-6 py-24 md:py-40">
        <Skills />
      </section>
    </main>                                                 
  );
}