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
    <footer id="contact" className="relative bg-[#010612] border-t border-white/5 pt-16 pb-8 overflow-hidden">
      {/* Glow highlight spot */}
      <div className="absolute bottom-[-10rem] left-[10%] w-[30rem] h-[30rem] rounded-full bg-brand-blue/15 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          
          {/* Brand Column (md:col-span-5) */}
          <div className="md:col-span-5 space-y-6 text-center md:text-left">
            <a
              href="#home"
              onClick={(e) => handleSmoothScroll(e, '#home')}
              className="inline-flex items-center space-x-3 group"
            >
              <img
                src={logo}
                alt="Youth Awake Logo"
                className="h-12 w-12 rounded-full object-cover border border-brand-gold/30 group-hover:border-brand-gold transition-colors duration-300"
              />
              <span className="font-montserrat font-bold text-xl tracking-wider text-white">
                YOUTH AWAKE
              </span>
            </a>
            
            <p className="font-poppins text-slate-400 text-sm sm:text-base max-w-sm leading-relaxed">
              Advancing God's Kingdom through raised young leaders, dedicated fellowship, and committed kingdom wealth.
            </p>

            <blockquote className="font-poppins text-slate-300 text-xs sm:text-sm italic border-l-2 border-brand-gold pl-4 py-1 inline-block text-left">
              "Arise, shine; for your light has come, and the glory of the Lord rises upon you."
              <cite className="block font-semibold text-brand-gold not-italic mt-1">— Isaiah 60:1</cite>
            </blockquote>
          </div>

          {/* Quick Links Column (md:col-span-3) */}
          <div className="md:col-span-3 text-center md:text-left">
            <h4 className="font-montserrat text-sm font-bold uppercase tracking-wider text-slate-200 mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
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
                    className="font-poppins text-sm text-slate-400 hover:text-brand-gold transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column (md:col-span-4) */}
          <div className="md:col-span-4 text-center md:text-left">
            <h4 className="font-montserrat text-sm font-bold uppercase tracking-wider text-slate-200 mb-6">
              Get in Touch
            </h4>
            <ul className="space-y-4 font-poppins text-sm text-slate-400">
              <li className="flex items-center justify-center md:justify-start space-x-3">
                <MapPin className="h-5 w-5 text-brand-gold flex-shrink-0" />
                <span>Hoolio studio opposite Fatima plaza</span>
              </li>
              <li className="flex items-center justify-center md:justify-start space-x-3">
                <Phone className="h-5 w-5 text-brand-gold flex-shrink-0" />
                <a href="tel:+2348070478646" className="hover:text-white transition-colors">
                  08070478646
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-start space-x-3">
                <Mail className="h-5 w-5 text-brand-gold flex-shrink-0" />
                <a href="mailto:Rachydave022@gmail.com" className="hover:text-white transition-colors">
                  Rachydave022@gmail.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/5 mb-8" />

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 font-poppins text-xs text-slate-500 text-center">
          <p>© 2026 Youth Awake Financial Giants. All Rights Reserved.</p>
          <p>Advancing Jesus Christ in this Generation.</p>
        </div>
      </div>
    </footer>
  );
}
