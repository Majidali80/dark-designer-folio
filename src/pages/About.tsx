
import { useEffect } from 'react';
import ParticleBackground from '@/components/ParticleBackground';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { ArrowRight, Mail, Linkedin, Fiverr, MessageSquare } from 'lucide-react';

// Custom Fiverr icon since it's not in lucide
const Fiverr = ({ size = 24, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M 8.03125 6 C 7.746094 6 7.519531 6.09375 7.347656 6.28125 C 7.183594 6.460938 7.09375 6.691406 7.09375 6.96875 C 7.09375 7.246094 7.183594 7.472656 7.347656 7.6875 C 7.519531 7.902344 7.746094 8 8.03125 8 C 8.316406 8 8.542969 7.902344 8.714844 7.6875 C 8.878906 7.472656 8.96875 7.246094 8.96875 6.96875 C 8.96875 6.691406 8.878906 6.460938 8.714844 6.28125 C 8.542969 6.09375 8.316406 6 8.03125 6 Z" />
    <path d="M 11.082031 6 L 11.082031 13.007812 L 13.121094 13.007812 L 13.121094 11.953125 C 13.121094 11.296875 13.289062 10.757812 13.632812 10.324219 C 13.980469 9.890625 14.417969 9.671875 14.945312 9.671875 C 15.246094 9.671875 15.449219 9.710938 15.546875 9.785156 L 15.546875 7.871094 C 15.210938 7.863281 14.882812 7.941406 14.566406 8.105469 C 14.242188 8.261719 13.988281 8.480469 13.789062 8.769531 L 13.121094 9.691406 L 13.121094 6 Z" />
    <path d="M 7.074219 9.027344 L 7.074219 13.007812 L 9.113281 13.007812 L 9.113281 9.027344 Z" />
    <path d="M 16.671875 9.539062 C 16.207031 9.539062 15.78125 9.640625 15.398438 9.839844 C 15.015625 10.039062 14.695312 10.308594 14.4375 10.644531 L 14.0625 11.117188 L 14.0625 9.671875 L 12.054688 9.671875 L 12.054688 17.996094 L 14.0625 17.996094 L 14.0625 14.429688 L 14.4375 14.929688 C 14.695312 15.230469 15.015625 15.480469 15.398438 15.679688 C 15.78125 15.878906 16.207031 15.980469 16.671875 15.980469 C 17.359375 15.980469 17.957031 15.78125 18.460938 15.386719 C 18.964844 14.992188 19.359375 14.453125 19.644531 13.78125 C 19.929688 13.109375 20.070312 12.355469 20.070312 11.511719 C 20.070312 10.667969 19.929688 9.917969 19.644531 9.253906 C 19.359375 8.589844 18.964844 8.066406 18.460938 7.679688 C 17.957031 7.296875 17.359375 7.109375 16.671875 7.109375 Z M 15.976562 9.164062 C 16.375 9.164062 16.722656 9.273438 17.007812 9.496094 C 17.292969 9.71875 17.515625 10.019531 17.667969 10.402344 C 17.820312 10.792969 17.894531 11.222656 17.894531 11.699219 C 17.894531 12.175781 17.820312 12.605469 17.667969 12.988281 C 17.515625 13.363281 17.292969 13.664062 17.007812 13.886719 C 16.722656 14.109375 16.375 14.21875 15.976562 14.21875 C 15.414062 14.21875 14.90625 13.980469 14.457031 13.5 C 14.007812 13.019531 13.785156 12.371094 13.785156 11.550781 C 13.785156 10.730469 14.007812 10.082031 14.457031 9.601562 C 14.90625 9.113281 15.414062 8.871094 15.976562 8.871094 Z" />
    <path d="M 4.082031 9.671875 L 4.082031 13.007812 L 6.121094 13.007812 L 6.121094 11.042969 C 6.121094 10.507812 6.25 10.101562 6.503906 9.820312 C 6.757812 9.539062 7.066406 9.398438 7.4375 9.398438 L 8.480469 9.398438 L 8.480469 7.621094 L 7.769531 7.621094 C 7.339844 7.621094 6.96875 7.753906 6.65625 8.015625 C 6.34375 8.277344 6.121094 8.589844 5.984375 8.957031 L 5.316406 9.953125 L 5.316406 9.671875 Z" />
  </svg>
);

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
              icon={<Fiverr size={24} />}
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
