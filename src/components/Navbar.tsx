import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.jpg';
import { motion, AnimatePresence } from 'framer-motion';

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

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isOpen
          ? 'bg-[#030d22]/90 backdrop-blur-md border-b border-white/5 py-3 shadow-lg shadow-[#030d22]/50'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleSmoothScroll(e, '#home')}
            className="flex items-center space-x-3 group z-50"
          >
            <img
              src={logo}
              alt="Youth Awake Logo"
              className="h-10 w-10 rounded-full object-cover border border-brand-gold/30 group-hover:border-brand-gold transition-colors duration-300"
            />
            <span className="font-montserrat font-bold text-base sm:text-lg tracking-wider bg-gradient-to-r from-white via-slate-200 to-brand-gold bg-clip-text text-transparent group-hover:opacity-90 transition-opacity">
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
          <div className="md:hidden z-50">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white p-2 focus:outline-none h-12 w-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/5 active:scale-95 transition-all"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Slide-Out Drawer (Full-screen Overlay) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden bg-[#030d22] flex flex-col justify-between pt-28 pb-12 px-6"
          >
            {/* Top background blur spotlight inside mobile menu */}
            <div className="absolute top-[-10rem] right-[-10rem] w-[25rem] h-[25rem] rounded-full bg-brand-blue/20 blur-[100px] pointer-events-none" />
            <div className="absolute bottom-[-10rem] left-[-10rem] w-[25rem] h-[25rem] rounded-full bg-brand-gold/5 blur-[100px] pointer-events-none" />

            {/* Links Stack */}
            <div className="flex flex-col space-y-4">
              {navItems.map((item, idx) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="font-poppins text-2xl font-bold text-slate-300 hover:text-brand-gold py-3 px-4 rounded-2xl active:bg-white/5 hover:bg-white/5 transition-all border border-transparent active:border-white/5 flex items-center"
                  style={{ minHeight: '56px' }}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>

            {/* CTA Button Block at bottom of Mobile Menu */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="w-full"
            >
              <a
                href="#partnership"
                onClick={(e) => handleSmoothScroll(e, '#partnership')}
                className="flex w-full items-center justify-center rounded-full font-poppins text-base font-bold text-[#030d22] bg-gradient-to-r from-brand-gold to-yellow-500 hover:from-yellow-400 hover:to-brand-gold shadow-lg shadow-brand-gold/20"
                style={{ minHeight: '56px' }}
              >
                Become a Partner
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
