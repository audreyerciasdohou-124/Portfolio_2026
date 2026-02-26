"use client"; // Obligatoire pour utiliser useEffect
import { useEffect } from 'react';
import ProjectCard from '@/components/ProjectCard';
import Skills from '@/components/Skills';

export default function Home() {
  // Logique pour forcer le scroll en haut au rechargement
  useEffect(() => {
    // 1. Désactive la restauration automatique du scroll du navigateur
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    // 2. Scroll tout en haut immédiatement
    window.scrollTo(0, 0);
  }, []);

  const projects = [
    { title: "E-commerce", desc: "Plateforme de vente moderne.", tags: ["NEXT.JS", "TAILWIND"] },
    { title: "Portfolio", desc: "Design minimaliste.", tags: ["REACT", "FRAMER"] },
    { title: "Google Keep", desc: "Clonage d'interface.", tags: ["ANGULAR", "FRAMER"] },
    { title: "Gestâche", desc: "Gestion de tâche.", tags: ["REACT", "FRAMER"] }
  ];

  // On duplique la liste pour la boucle infinie
  const duplicatedProjects = [...projects, ...projects];

  return (
    <div className="w-full overflow-hidden bg-[#2C2420]">
      {/* SECTION ACCUEIL */}
      <section className="py-32 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-[#FCF9F5]">Ercias Audrey Dohou</h1>
        <p className="mt-4 text-[#6F4E37] text-lg md:text-xl italic font-light">
          Développeur & Designer d'interfaces minimalistes.
        </p>
      </section>

      {/* SECTION PROJETS - DÉFILEMENT AUTOMATIQUE (MARQUEE) */}
      <section id="projets" className="py-24 overflow-hidden border-y border-[#6F4E37]/10">
        
        {/* TITRE SUBTIL MAIS PRÉSENT */}
        <div className="flex flex-col items-center mb-16 text-center px-4">
          <h2 className="text-sm md:text-base font-bold uppercase tracking-[0.5em] text-[#FCF9F5] opacity-70">
            Projets Sélectionnés
          </h2>
          <div className="h-1 w-20 bg-blue-600 rounded-full mt-4"></div>
        </div>

        {/* Le rail d'animation */}
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

      {/* 3. SECTION SKILLS */}
      <div className="max-w-[1400px] mx-auto px-6 py-32">
        <Skills />
      </div>
    </div>                                      
  );
}