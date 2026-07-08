import logo from '../assets/logo.jpg';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="relative bg-[#010612] border-t border-white/5 pt-12 pb-6 sm:pt-16 sm:pb-8 overflow-hidden w-full">
      {/* Glow highlight spot */}
      <div className="absolute bottom-[-10rem] left-[10%] w-[20rem] sm:w-[30rem] h-[20rem] sm:h-[30rem] rounded-full bg-brand-blue/15 blur-[100px] sm:blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-10 md:mb-12 text-center md:text-left w-full">
          
          {/* Brand Column (md:col-span-5) */}
          <div className="md:col-span-5 space-y-4 sm:space-y-6 flex flex-col items-center md:items-start w-full">
            <a
              href="#home"
              onClick={(e) => handleSmoothScroll(e, '#home')}
              className="inline-flex items-center space-x-3 group z-10"
            >
              <img
                src={logo}
                alt="Youth Awake Logo"
                className="h-10 w-10 sm:h-12 sm:w-12 rounded-full object-cover border border-brand-gold/30 group-hover:border-brand-gold transition-colors duration-300"
              />
              <span className="font-montserrat font-bold text-lg sm:text-xl tracking-wider text-white">
                YOUTH AWAKE
              </span>
            </a>
            
            <p className="font-poppins text-slate-455 text-xs sm:text-sm md:text-base max-w-sm leading-relaxed px-2 sm:px-0">
              Advancing God's Kingdom through raised young leaders, dedicated fellowship, and committed kingdom wealth.
            </p>

            <blockquote className="font-poppins text-slate-300 text-xxs sm:text-xs md:text-sm italic border-l-2 border-brand-gold pl-3 py-1 inline-block text-left max-w-sm mx-auto md:mx-0">
              "Arise, shine; for your light has come, and the glory of the Lord rises upon you."
              <cite className="block font-semibold text-brand-gold not-italic mt-0.5">— Isaiah 60:1</cite>
            </blockquote>
          </div>

          {/* Quick Links Column (md:col-span-3) */}
          <div className="md:col-span-3 w-full">
            <h4 className="font-montserrat text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-200 mb-4 md:mb-6">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {[
                { name: 'Home', href: '#home' },
                { name: 'Vision', href: '#vision' },
                { name: 'Mission', href: '#mission' },
                { name: 'Partnership', href: '#partnership' },
                { name: 'Contact & Info', href: '#contact' },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                    className="font-poppins text-xs sm:text-sm text-slate-400 hover:text-brand-gold transition-colors duration-200 py-1.5 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column (md:col-span-4) */}
          <div className="md:col-span-4 w-full">
            <h4 className="font-montserrat text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-200 mb-4 md:mb-6">
              Get in Touch
            </h4>
            <ul className="space-y-3.5 font-poppins text-xs sm:text-sm text-slate-400 flex flex-col items-center md:items-start w-full">
              <li className="flex items-center space-x-2.5 py-1">
                <MapPin className="h-4.5 w-4.5 text-brand-gold flex-shrink-0" />
                <span>Hoolio studio opposite Fatima plaza</span>
              </li>
              <li className="flex items-center space-x-2.5 py-1">
                <Phone className="h-4.5 w-4.5 text-brand-gold flex-shrink-0" />
                <a href="tel:+2348070478646" className="hover:text-white transition-colors">
                  08070478646
                </a>
              </li>
              <li className="flex items-center space-x-2.5 py-1">
                <Mail className="h-4.5 w-4.5 text-brand-gold flex-shrink-0" />
                <a href="mailto:Rachydave022@gmail.com" className="hover:text-white transition-colors">
                  Rachydave022@gmail.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/5 mb-6 md:mb-8" />

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 font-poppins text-xxs sm:text-xs text-slate-500 text-center w-full">
          <p>© 2026 Youth Awake Financial Giants. All Rights Reserved.</p>
          <p>Advancing Jesus Christ in this Generation.</p>
        </div>
      </div>
    </footer>
  );
}
