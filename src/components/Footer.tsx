
import { Fiverr, Palette, Github, Instagram } from 'lucide-react';

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

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-design-dark py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-gradient">Ali.Design</h3>
            <p className="text-gray-400 mb-6">
              Creating stunning visual experiences that elevate brands and captivate audiences.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="https://fiverr.com" icon={<Fiverr size={20} />} label="Fiverr" />
              <SocialLink href="https://github.com" icon={<Github size={20} />} label="GitHub" />
              <SocialLink href="https://instagram.com" icon={<Instagram size={20} />} label="Instagram" />
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/about">About/Contact</FooterLink>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact</h4>
            <p className="text-gray-400 mb-2">
              <a 
                href="https://wa.me/1234567890" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center hover:text-design-teal transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                WhatsApp
              </a>
            </p>
            <p className="text-gray-400">
              <a 
                href="mailto:alimajid03021980@gmail.com"
                className="inline-flex items-center hover:text-design-teal transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                alimajid03021980@gmail.com
              </a>
            </p>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500">
          <p>&copy; {currentYear} Ali.Design. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const SocialLink = ({ href, icon, label }: SocialLinkProps) => {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="w-10 h-10 flex items-center justify-center rounded-full bg-design-dark border border-gray-700 text-gray-400 hover:bg-design-purple/20 hover:text-white hover:border-design-purple transition-all duration-300"
      aria-label={label}
    >
      {icon}
    </a>
  );
};

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

const FooterLink = ({ href, children }: FooterLinkProps) => {
  return (
    <li>
      <a 
        href={href} 
        className="text-gray-400 hover:text-design-teal transition-colors"
      >
        {children}
      </a>
    </li>
  );
};

export default Footer;
