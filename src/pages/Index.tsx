
import { useEffect } from 'react';
import ParticleBackground from '@/components/ParticleBackground';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProjectCard from '@/components/ProjectCard';
import Footer from '@/components/Footer';
import { Palette } from 'lucide-react';

const projectData = [
  {
    title: "Golf Tournament Flyer",
    category: "Sports Event Design",
    image: "/lovable-uploads/787d6a7c-ce2b-4d1b-8ad7-de8869c84373.png"
  },
  {
    title: "Cryptocurrency Flyer",
    category: "Digital Marketing",
    image: "/lovable-uploads/364c7649-c6dc-4b62-8bd5-e914b091438d.png"
  },
  {
    title: "CV/Resume Design",
    category: "Personal Branding",
    image: "/lovable-uploads/30c29be0-9436-47e1-9e0e-cad286158a1b.png"
  },
  {
    title: "Golf Tournament Demographics",
    category: "Sports Event Design",
    image: "/lovable-uploads/ac2d43a2-fa62-4315-b5db-69c8ecdcc47f.png"
  },
  {
    title: "Poster Design",
    category: "Print Design",
    image: "/lovable-uploads/07ff252f-640c-48f4-8701-3c0e250fca1b.png"
  },
  {
    title: "Social Media Graphics",
    category: "Digital Marketing",
    image: "/lovable-uploads/4527e577-fca7-406f-97dc-77dd6a3550af.png"
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
                title="Resume Design" 
                description="Professional and eye-catching resume layouts that help you stand out in the job market."
                icon={<Palette size={40} />}
              />
              
              <ServiceCard 
                title="Sports Flyer Design" 
                description="Engaging flyers for golf tournaments and sporting events that attract participants and sponsors."
                icon={<Palette size={40} />}
              />
              
              <ServiceCard 
                title="Social Media Design" 
                description="Attractive graphics and posts optimized for various social platforms to boost your online presence."
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
