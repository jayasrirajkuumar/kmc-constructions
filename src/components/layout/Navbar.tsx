import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { contactInfo } from '../../data/content';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Active section detection
      const sections = ['home', 'about', 'services', 'materials', 'projects', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 200; // Offset for navbar

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Materials', href: '#materials' },
    { name: 'Projects', href: '#projects' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-sage-900/95 backdrop-blur-md py-4 shadow-lg shadow-black/20' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center">
        <a href="#home" className="flex items-center z-50 mr-12 lg:mr-16">
          <img 
            src="/assets/kmc-logo-final.png" 
            alt="KMC Builders & Enterprises" 
            className={`w-auto object-contain transition-all duration-300 ${isScrolled ? 'h-[40px] md:h-[60px] lg:h-[80px]' : 'h-[50px] md:h-[80px] lg:h-[120px]'}`}
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center justify-between flex-1">
          <div className="flex space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className={`text-sm hover:text-gold-400 transition-colors relative group uppercase tracking-widest ${activeSection === link.href.substring(1) ? 'text-gold-400' : 'text-ivory-200'}`}
              >
                {link.name}
                <span className={`absolute -bottom-2 left-0 h-[1px] bg-gold-400 transition-all duration-300 group-hover:w-full ${activeSection === link.href.substring(1) ? 'w-full' : 'w-0'}`}></span>
              </a>
            ))}
          </div>
          <a 
            href={`tel:${contactInfo.phone1}`}
            className="hidden lg:flex items-center space-x-2 border border-gold-500/50 hover:bg-gold-500/10 px-5 py-2.5 rounded-sm transition-colors text-sm uppercase tracking-wider text-gold-400"
          >
            <Phone size={16} />
            <span>Get a Quote</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-ivory-100 hover:text-gold-400 transition-colors ml-auto"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-sage-900 border-t border-white/5 transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-screen py-6' : 'max-h-0 py-0'}`}>
        <div className="flex flex-col space-y-6 px-6">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-lg font-serif hover:text-gold-400 transition-colors uppercase tracking-widest ${activeSection === link.href.substring(1) ? 'text-gold-400' : 'text-ivory-100'}`}
            >
              {link.name}
            </a>
          ))}
          <a 
            href={`tel:${contactInfo.phone1}`}
            className="flex items-center justify-center space-x-2 bg-gold-600 text-charcoal px-6 py-3 rounded-sm font-medium uppercase tracking-wider mt-4"
          >
            <Phone size={18} />
            <span>Call Now</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
