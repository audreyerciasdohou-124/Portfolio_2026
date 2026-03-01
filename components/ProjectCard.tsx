"use client";
import { motion } from "framer-motion";

interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  index: number;
  imageUrl: string; 
}

const ProjectCard = ({ title, description, tags, index, imageUrl }: ProjectProps) => {
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
      className="bg-[#F3EEE7] rounded-[16px] p-4 md:p-8 border border-[#2C2420]/5 
                 hover:shadow-xl transition-all duration-500 group h-full flex flex-col justify-between"
    >
      <div className="space-y-4 md:space-y-6">
        {/* Utilisation de <img> pour éviter les erreurs de configuration Next.js */}
        <div className="aspect-[16/9] md:aspect-[4/3] bg-[#E8E2D9] rounded-[14px] overflow-hidden relative">
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1500ms] ease-out"
          />
        </div>
        
        <div className="space-y-2 md:space-y-4">
          <div className="flex flex-wrap gap-1 md:gap-2">
            {tags.map((tag, i) => (
              <span key={i} className="text-[7px] md:text-[9px] px-1.5 py-0.5 border border-[#6F4E37]/20 
                                     text-[#6F4E37] rounded-full uppercase font-bold tracking-wider">
                {tag}
              </span>
            ))}
          </div>
          
          <h3 className="text-lg md:text-3xl font-bold text-[#2C2420] tracking-tight italic">
            {title}
          </h3>
          <p className="text-[#6F4E37]/80 text-[11px] md:text-sm leading-snug font-light line-clamp-2">
            {description}
          </p>
        </div>
      </div>
      
      <div className="pt-3 md:pt-6">
        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-[#6F4E37]/20 flex items-center justify-center 
                      group-hover:bg-[#2C2420] group-hover:text-white transition-all duration-300 text-xs md:text-base">
          →
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;