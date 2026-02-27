"use client";
import { motion } from "framer-motion";

interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  index: number;
}

const ProjectCard = ({ title, description, tags, index }: ProjectProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 50 }} 
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ 
        duration: 0.8, 
        ease: [0.215, 0.61, 0.355, 1], 
        delay: index * 0.1 
      }}
      // CHANGEMENT : p-5 sur mobile, p-8 sur desktop
      className="bg-[#F3EEE7] rounded-[24px] p-5 md:p-8 border border-[#2C2420]/5 
                 hover:shadow-xl transition-all duration-500 group h-full flex flex-col justify-between"
    >
      <div className="space-y-6">
        <div className="aspect-[4/3] bg-[#E8E2D9] rounded-[16px] overflow-hidden relative">
          <div className="w-full h-full flex items-center justify-center text-[#6F4E37]/20 
                        group-hover:scale-105 transition-transform duration-[1500ms] ease-out font-mono text-[10px]">
            [ IMAGE_PROJET ]
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2"> {/* flex-wrap ajouté pour les tags */}
            {tags.map((tag, i) => (
              <span key={i} className="text-[8px] md:text-[9px] px-2 py-1 border border-[#6F4E37]/20 
                                     text-[#6F4E37] rounded-full uppercase font-bold tracking-[0.1em]">
                {tag}
              </span>
            ))}
          </div>
          
          {/* CHANGEMENT : text-xl sur mobile pour éviter que ça casse */}
          <h3 className="text-xl md:text-3xl font-bold text-[#2C2420] tracking-tight italic">
            {title}
          </h3>
          <p className="text-[#6F4E37]/80 text-xs md:text-sm leading-relaxed font-light line-clamp-2">
            {description}
          </p>
        </div>
      </div>
      
      <div className="pt-6">
        <div className="w-10 h-10 rounded-full border border-[#6F4E37]/20 flex items-center justify-center 
                      group-hover:bg-[#2C2420] group-hover:text-white transition-all duration-300">
          →
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;