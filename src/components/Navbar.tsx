import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.jpg';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Vision', href: '#vision' },
    { name: 'Mission', href: '#mission' },
    { name: 'Partnership', href: '#partnership' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#030d22]/85 backdrop-blur-md border-b border-white/5 py-3 shadow-lg shadow-[#030d22]/50'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleSmoothScroll(e, '#home')}
            className="flex items-center space-x-3 group"
          >
            <img
              src={logo}
              alt="Youth Awake Logo"
              className="h-10 w-10 rounded-full object-cover border border-brand-gold/30 group-hover:border-brand-gold transition-colors duration-300"
            />
            <span className="font-montserrat font-bold text-lg tracking-wider bg-gradient-to-r from-white via-slate-200 to-brand-gold bg-clip-text text-transparent group-hover:opacity-90 transition-opacity">
              YOUTH AWAKE
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.href)}
                className="font-poppins text-sm font-medium text-slate-300 hover:text-brand-gold transition-colors duration-200 relative group py-2"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-gold transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* CTA Button (Desktop) */}
          <div className="hidden md:block">
            <a
              href="#partnership"
              onClick={(e) => handleSmoothScroll(e, '#partnership')}
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-full font-poppins text-sm font-semibold text-[#030d22] bg-gradient-to-r from-brand-gold to-yellow-500 hover:from-yellow-400 hover:to-brand-gold transition-all duration-300 transform hover:scale-[1.03] active:scale-[0.98] shadow-md shadow-brand-gold/20"
            >
              Become a Partner
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white p-2 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-20 left-0 right-0 glassmorphism border-b border-white/10 transition-all duration-300 transform origin-top ${
          isOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-3">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleSmoothScroll(e, item.href)}
              className="block font-poppins px-3 py-2.5 rounded-md text-base font-medium text-slate-300 hover:bg-white/5 hover:text-brand-gold transition-all"
            >
              {item.name}
            </a>
          ))}
          <div className="pt-4 px-3">
            <a
              href="#partnership"
              onClick={(e) => handleSmoothScroll(e, '#partnership')}
              className="block w-full text-center py-3 rounded-full font-poppins text-sm font-semibold text-[#030d22] bg-gradient-to-r from-brand-gold to-yellow-500"
            >
              Become a Partner
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
