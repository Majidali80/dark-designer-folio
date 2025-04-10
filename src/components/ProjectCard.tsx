
import { useState } from 'react';

interface ProjectCardProps {
  title: string;
  category: string;
  image: string;
  index: number;
}

const ProjectCard = ({ title, category, image, index }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`project-card opacity-0 animate-text-reveal rounded-xl overflow-hidden`}
      style={{ 
        animationDelay: `${0.1 + index * 0.1}s`,
        animationFillMode: 'forwards' 
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-design-dark/90 via-design-dark/50 to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-80' : 'opacity-50'}`}></div>
        
        <div className="absolute bottom-0 left-0 p-6 w-full">
          <p className={`text-design-teal text-sm font-medium mb-2 transition-transform duration-300 ${isHovered ? 'translate-y-0' : 'translate-y-2'}`}>
            {category}
          </p>
          <h3 className={`text-white text-xl md:text-2xl font-bold transition-transform duration-300 ${isHovered ? 'translate-y-0' : 'translate-y-4'}`}>
            {title}
          </h3>
          
          <div className={`w-12 h-1 bg-design-purple mt-4 transition-all duration-500 ${isHovered ? 'w-24 bg-design-teal' : 'w-12 bg-design-purple'}`}></div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
