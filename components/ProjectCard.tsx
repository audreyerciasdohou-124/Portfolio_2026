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
      /* On garde p-4 et rounded-18 pour le look premium */
      className="bg-[#F3EEE7] rounded-[18px] p-4 md:p-8 border border-[#2C2420]/5 
                 hover:shadow-xl transition-all duration-500 group flex flex-col justify-between"
    >
      <div className="space-y-4">
        <div className="aspect-[16/9] md:aspect-[4/3] bg-[#E8E2D9] rounded-[14px] overflow-hidden relative">
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </div>
        
        <div className="space-y-2">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, i) => (
              <span key={i} className="text-[8px] md:text-[10px] px-2 py-0.5 border border-[#6F4E37]/20 text-[#6F4E37] rounded-full uppercase font-bold">
                {tag}
              </span>
            ))}
          </div>
          
          <h3 className="text-lg md:text-3xl font-bold text-[#2C2420] italic">
            {title}
          </h3>
          <p className="text-[#6F4E37]/80 text-[11px] md:text-sm leading-snug font-light line-clamp-2">
            {description}
          </p>
        </div>
      </div>
      
      <div className="pt-4">
        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-[#6F4E37]/20 flex items-center justify-center 
                      group-hover:bg-[#2C2420] group-hover:text-white transition-all duration-300">
          →
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;