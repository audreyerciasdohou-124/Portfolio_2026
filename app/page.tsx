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
 
  const duplicatedProjects = [...projects, ...projects];
 
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <div className="w-full overflow-hidden bg-[#2C2420]">
      {/* SECTION ACCUEIL */}
      <section className="py-40 text-center px-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants} 
          className="max-w-6xl mx-auto"
        >
          {/* NOM SUR UNE SEULE LIGNE */}
          <motion.h1 
            variants={itemVariants} 
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[#FCF9F5] whitespace-nowrap tracking-tight"
          >
            Ercias Audrey Dohou
          </motion.h1>

          <div className="mt-10 max-w-4xl mx-auto">
            <motion.p 
              variants={itemVariants}
              className="text-[#FAF5F0] text-xl md:text-3xl italic font-light leading-relaxed"
            > 
              Architecte de solutions <span className="text-white not-italic font-medium underline decoration-[#6F4E37] underline-offset-8">Fullstack</span>, je transforme vos idées en solutions numériques épurées et performantes. 
              De la réflexion visuelle au déploiement technique.
            </motion.p>
            
            <motion.p 
              variants={itemVariants}  
              className="mt-10 flex items-center justify-center gap-3 text-[#FAF5F0] opacity-80 font-medium uppercase text-[11px] md:text-sm tracking-[0.4em]"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FAF5F0] opacity-40"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FAF5F0]"></span> 
              </span>
              Disponible pour donner vie à vos nouveaux projets
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* SECTION PROJETS */}
      <section id="projets" className="py-24 overflow-hidden border-y border-[#6F4E37]/10">
        <div className="flex flex-col items-center mb-16 text-center px-4">
          <h2 className="text-sm md:text-base font-bold uppercase tracking-[0.5em] text-[#FCF9F5] opacity-70">
            Projets Sélectionnés
          </h2>
          <div className="h-1 w-20 bg-blue-600 rounded-full mt-4"></div>
        </div>

        <div className="relative flex overflow-hidden group">
          <div className="flex animate-marquee gap-8 py-10">
            {duplicatedProjects.map((proj, i) => (
              <div key={i} className="min-w-[320px] md:min-w-[450px]">
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
      <div className="max-w-[1400px] mx-auto px-6 py-32">
        <Skills />
      </div>
    </div>                                                   
  );
}