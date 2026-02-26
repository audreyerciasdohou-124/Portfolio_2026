"use client";
import { motion } from "framer-motion";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Angular"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Laravel", "PostgreSQL", "Prisma", "NextAuth"],
    },
    {
      title: "Outils & Design",
      skills: ["Git", "VScode", "Trello", "Postman"],
    },
  ];

  return (
    <section id="competences" className="py-24 w-full">
      {/* TITRE HARMONISÉ : Petit, Espacé et Opacité 70% */}
      <div className="flex flex-col items-center mb-16 text-center px-4">
        <h2 className="text-sm md:text-base font-bold uppercase tracking-[0.5em] text-[#FCF9F5] opacity-70">
          Compétences
        </h2>
        {/* Barre bleue fine et élégante comme pour Projets */}
        <div className="h-1 w-20 bg-blue-600 rounded-full mt-4"></div>
      </div>

      {/* Les cadres restent larges et imposants pour l'équilibre */}
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {skillCategories.map((category, index) => (
          <div 
            key={index} 
            className="px-10 md:px-14 py-12 bg-white rounded-[45px] border border-gray-100 shadow-2xl hover:border-blue-200 transition-all duration-500 flex flex-col items-start"
          >
            <h3 className="text-2xl font-bold mb-10 text-blue-600 tracking-tight">
              {category.title}
            </h3>
            
            <div className="flex flex-wrap gap-4 w-full">
              {category.skills.map((skill, i) => (
                <span 
                  key={i} 
                  className="px-8 py-3 bg-gray-50 text-gray-700 text-lg rounded-2xl border border-gray-200 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200 transition-all cursor-default font-semibold"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;