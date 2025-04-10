
import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  vx: number;
  vy: number;
  color: string;
  element: HTMLDivElement;
}

const ParticleBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const colors = ['#8A2BE2', '#36EAEF', '#FF61D8'];
    const particleCount = 25;
    const particles: Particle[] = [];
    
    // Clear any existing particles
    container.innerHTML = '';
    
    // Create particles
    for (let i = 0; i < particleCount; i++) {
      const element = document.createElement('div');
      element.className = 'particle';
      
      const size = Math.random() * 80 + 20;
      element.style.width = `${size}px`;
      element.style.height = `${size}px`;
      
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
      element.style.left = `${x}px`;
      element.style.top = `${y}px`;
      
      const color = colors[Math.floor(Math.random() * colors.length)];
      element.style.backgroundColor = color;
      
      container.appendChild(element);
      
      particles.push({
        x,
        y,
        size,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        color,
        element
      });
    }
    
    particlesRef.current = particles;
    
    // Animation function
    const animate = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      particlesRef.current.forEach(particle => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        // Boundary check
        if (particle.x < -particle.size) particle.x = width + particle.size;
        if (particle.x > width + particle.size) particle.x = -particle.size;
        if (particle.y < -particle.size) particle.y = height + particle.size;
        if (particle.y > height + particle.size) particle.y = -particle.size;
        
        // Update element position
        particle.element.style.left = `${particle.x}px`;
        particle.element.style.top = `${particle.y}px`;
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);
  
  return <div ref={containerRef} className="particles-container" />;
};

export default ParticleBackground;
