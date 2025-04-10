
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Close mobile menu when changing routes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);
  
  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-design-dark/90 backdrop-blur-sm py-3 shadow-lg' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-white font-bold text-2xl hover:opacity-80 transition-opacity">
          <span className="text-gradient">Idress</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLink to="/" isActive={location.pathname === '/'}>Home</NavLink>
          <NavLink to="/about" isActive={location.pathname === '/about'}>Contact</NavLink>
        </div>
        
        {/* Mobile Navigation Toggle */}
        <button 
          className="md:hidden text-white p-2" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-design-dark/95 backdrop-blur-lg">
          <div className="flex flex-col items-center py-6 space-y-6">
            <NavLink to="/" isActive={location.pathname === '/'}>Home</NavLink>
            <NavLink to="/about" isActive={location.pathname === '/about'}>Contact</NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

interface NavLinkProps {
  to: string;
  isActive: boolean;
  children: React.ReactNode;
}

const NavLink = ({ to, isActive, children }: NavLinkProps) => {
  return (
    <Link
      to={to}
      className={`relative text-lg transition-all duration-300 ${
        isActive 
          ? 'text-white font-medium' 
          : 'text-gray-400 hover:text-white'
      }`}
    >
      {children}
      <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-design-teal transform origin-bottom-right transition-transform duration-300 ${
        isActive ? 'scale-x-100' : 'scale-x-0 hover:scale-x-100 hover:origin-bottom-left'
      }`} />
    </Link>
  );
};

export default Navbar;
