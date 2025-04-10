import { useEffect } from 'react';
import ParticleBackground from '@/components/ParticleBackground';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { ArrowRight, Mail, Linkedin, MessageSquare } from 'lucide-react';
import FiverrIcon from '@/components/FiverrIcon';

const About = () => {
  useEffect(() => {
    // Reset scroll position when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-design-darker text-white">
      <ParticleBackground />
      <Navbar />
      
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 opacity-0 animate-text-reveal">
              About <span className="text-gradient">Me</span>
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
              <div className="md:col-span-2">
                <div className="relative rounded-xl overflow-hidden aspect-square opacity-0 animate-text-reveal animate-delay-1">
                  <img 
                    src="https://images.unsplash.com/photo-1549068106-b024baf5062d?auto=format&fit=crop&q=80&w=987" 
                    alt="Ali Majid - Graphic Designer" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-design-purple/70 to-transparent"></div>
                </div>
              </div>
              
              <div className="md:col-span-3">
                <p className="text-lg text-gray-300 mb-6 opacity-0 animate-text-reveal animate-delay-2">
                  Hello! I'm Ali, a passionate graphic designer with over 8 years of experience in creating visual identities and digital experiences that captivate audiences and elevate brands.
                </p>
                
                <p className="text-gray-400 mb-6 opacity-0 animate-text-reveal animate-delay-3">
                  I specialize in brand identity, UI/UX design, print design, and digital illustrations. My approach combines creativity with strategic thinking to create designs that not only look beautiful but also effectively communicate your message.
                </p>
                
                <p className="text-gray-400 mb-8 opacity-0 animate-text-reveal animate-delay-3">
                  With a background in both traditional and digital design, I bring a unique perspective to every project. I've worked with clients ranging from startups to established businesses across various industries.
                </p>
                
                <div className="grid grid-cols-2 gap-4 opacity-0 animate-text-reveal animate-delay-4">
                  <div>
                    <h3 className="font-bold text-xl mb-3">My Expertise</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-center">
                        <ArrowRight size={16} className="mr-2 text-design-teal" />
                        Brand Identity
                      </li>
                      <li className="flex items-center">
                        <ArrowRight size={16} className="mr-2 text-design-teal" />
                        UI/UX Design
                      </li>
                      <li className="flex items-center">
                        <ArrowRight size={16} className="mr-2 text-design-teal" />
                        Print Design
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-3">Tools</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-center">
                        <ArrowRight size={16} className="mr-2 text-design-teal" />
                        Adobe Creative Suite
                      </li>
                      <li className="flex items-center">
                        <ArrowRight size={16} className="mr-2 text-design-teal" />
                        Figma
                      </li>
                      <li className="flex items-center">
                        <ArrowRight size={16} className="mr-2 text-design-teal" />
                        Procreate
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-24 px-4 bg-design-dark">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get in <span className="text-gradient">Touch</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Have a project in mind or want to discuss how we can work together? Reach out through any of these channels.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <ContactCard 
              icon={<Mail size={24} />}
              title="Email"
              info="alimajid03021980@gmail.com"
              link="mailto:alimajid03021980@gmail.com"
              color="from-design-purple to-design-pink"
            />
            
            <ContactCard 
              icon={<MessageSquare size={24} />}
              title="WhatsApp"
              info="Direct Message"
              link="https://wa.me/1234567890"
              color="from-design-teal to-blue-500"
            />
            
            <ContactCard 
              icon={<FiverrIcon size={24} />}
              title="Fiverr"
              info="Order Design Services"
              link="https://fiverr.com"
              color="from-green-500 to-green-600"
            />
            
            <ContactCard 
              icon={<Linkedin size={24} />}
              title="LinkedIn"
              info="Connect Professionally"
              link="https://linkedin.com"
              color="from-blue-500 to-blue-700"
            />
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-design-card rounded-xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold mb-6 text-center">Send Me a Message</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  info: string;
  link: string;
  color: string;
}

const ContactCard = ({ icon, title, info, link, color }: ContactCardProps) => {
  return (
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer"
      className="glass-card p-6 rounded-xl flex flex-col items-center text-center transition-all duration-300 hover:transform hover:scale-105"
    >
      <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 bg-gradient-to-br ${color}`}>
        {icon}
      </div>
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <p className="text-gray-400">{info}</p>
    </a>
  );
};

export default About;
