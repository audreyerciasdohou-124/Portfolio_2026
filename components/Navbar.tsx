import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-8 px-10 bg-[#FCF9F5]/90 backdrop-blur-sm sticky top-0 z-50">
      <div className="text-xl font-serif italic font-semibold text-[#2C2420]">
        M.Portfolio
      </div>
      
      <div className="hidden md:flex space-x-10 text-[11px] uppercase tracking-widest font-bold text-[#6F4E37]/70">
       <Link href="/" className="text-base md:text-lg font-medium tracking-tight text-[#6F4E37] hover:text-[#FCF9F5] transition-colors">Accueil</Link>
        <Link href="#projets" className="text-base md:text-lg font-medium tracking-tight text-[#6F4E37] hover:text-[#FCF9F5] transition-colors">Projets</Link>
        <Link href="#competences" className="text-base md:text-lg font-medium tracking-tight text-[#6F4E37] hover:text-[#FCF9F5] transition-colors">Compétences</Link>
      </div>

      <a 
        href="#contact" 
        className="bg-[#2C2420] text-[#FCF9F5] px-6 py-2 rounded-full text-[10px] uppercase font-bold tracking-wider hover:bg-[#6F4E37] transition-all inline-block"
       >
        Contactez-moi
      </a>
    </nav>
  );
};

export default Navbar;