
import { useEffect } from 'react';
import ParticleBackground from '@/components/ParticleBackground';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { Mail, Linkedin, MessageSquare } from 'lucide-react';
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
              info="idreesdahri212@gmail.com"
              link="mailto:idreesdahri212@gmail.com"
              color="from-design-purple to-design-pink"
            />
            
            <ContactCard 
              icon={<MessageSquare size={24} />}
              title="WhatsApp"
              info="Direct Message"
              link="https://wa.me/03023222952"
              color="from-design-teal to-blue-500"
            />
            
            <ContactCard 
              icon={<FiverrIcon size={24} />}
              title="Fiverr"
              info="Order Design Services"
              link="https://www.fiverr.com/s/7Ylpdbk"
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
