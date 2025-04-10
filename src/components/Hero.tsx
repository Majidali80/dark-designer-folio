
import { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const scrollToProjects = () => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 pt-20 pb-12">
      <div className="relative z-10 max-w-4xl mx-auto animate-float">
        <h1 className="inline-block opacity-0 text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-text-reveal">
          <span className="text-gradient">Creative Design</span>
        </h1>
        <h2 className="opacity-0 text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 animate-text-reveal animate-delay-1">
          Transforming ideas into visually stunning experiences
        </h2>
        <p className="opacity-0 text-gray-400 max-w-2xl mx-auto mb-12 animate-text-reveal animate-delay-2">
          A passionate graphic designer with expertise in branding, UI/UX design, and digital illustrations.
          Crafting unique visual stories that captivate and engage audiences.
        </p>
        <button 
          onClick={scrollToProjects}
          className="opacity-0 animate-text-reveal animate-delay-3 glass-card px-8 py-4 rounded-full text-white flex items-center justify-center mx-auto hover:bg-design-purple/20 transition-all duration-300"
        >
          View Portfolio
          <ArrowDown className="ml-2 animate-bounce" size={20} />
        </button>
      </div>
      
      <div ref={scrollRef} className="absolute bottom-12 left-0 right-0 flex justify-center">
        <div className="w-6 h-12 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-2 h-2 bg-white/80 rounded-full animate-bounce mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
