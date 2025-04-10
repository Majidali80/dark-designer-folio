
import { useEffect } from 'react';
import ParticleBackground from '@/components/ParticleBackground';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProjectCard from '@/components/ProjectCard';
import Footer from '@/components/Footer';
import { Palette } from 'lucide-react';

const projectData = [
  {
    title: "Brand Identity System",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1541462608143-67571c6738dd?auto=format&fit=crop&q=80&w=1470"
  },
  {
    title: "Digital Illustration Series",
    category: "Illustration",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1964"
  },
  {
    title: "Mobile App UI Design",
    category: "UI/UX Design",
    image: "https://images.unsplash.com/photo-1616763355548-1b606f439f86?auto=format&fit=crop&q=80&w=1470"
  },
  {
    title: "Magazine Layout",
    category: "Print Design",
    image: "https://images.unsplash.com/photo-1544819667-9bfc1de23d4e?auto=format&fit=crop&q=80&w=1374"
  },
  {
    title: "Packaging Redesign",
    category: "Packaging",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&q=80&w=1470"
  },
  {
    title: "Web Design Project",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=1470"
  }
];

const Index = () => {
  useEffect(() => {
    // Reset scroll position when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-design-darker text-white">
      <ParticleBackground />
      <Navbar />
      
      <Hero />
      
      <section className="relative py-24 px-4">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 opacity-0 animate-text-reveal" style={{ animationDelay: '0.1s' }}>
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-gray-400 opacity-0 animate-text-reveal" style={{ animationDelay: '0.2s' }}>
              A selection of my latest and most impactful design work across various mediums and industries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectData.map((project, index) => (
              <ProjectCard 
                key={index}
                title={project.title}
                category={project.category}
                image={project.image}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
      
      <section className="relative py-24 px-4 bg-design-dark">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              <span className="text-gradient">Design Services</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <ServiceCard 
                title="Brand Identity" 
                description="Complete branding solutions including logos, color schemes, typography, and brand guidelines."
                icon={<Palette size={40} />}
              />
              
              <ServiceCard 
                title="UI/UX Design" 
                description="User-centered interfaces for web and mobile applications with intuitive navigation and beautiful aesthetics."
                icon={<Palette size={40} />}
              />
              
              <ServiceCard 
                title="Print & Digital" 
                description="From marketing materials to digital assets, creating cohesive visual solutions across all mediums."
                icon={<Palette size={40} />}
              />
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard = ({ title, description, icon }: ServiceCardProps) => {
  return (
    <div className="glass-card p-8 rounded-xl text-center transition-all duration-300 hover:transform hover:translate-y-[-8px]">
      <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center text-design-teal">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

export default Index;
