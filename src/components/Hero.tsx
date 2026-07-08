import { motion } from 'framer-motion';
import logo from '../assets/logo.jpg';
import { ArrowRight, ChevronDown } from 'lucide-react';

export default function Hero() {
  const handleScrollToForm = () => {
    const formElement = document.querySelector('#partnership');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Gradients & Effects */}
      <div className="absolute inset-0 z-0">
        {/* Radial dark background */}
        <div className="absolute inset-0 bg-radial-gradient from-[#092252] via-[#030d22] to-[#010612]" />
        
        {/* Soft glowing gold & blue radial spots */}
        <div className="absolute top-[20%] left-[20%] w-[35rem] h-[35rem] rounded-full bg-brand-blue/15 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[20%] right-[10%] w-[40rem] h-[40rem] rounded-full bg-brand-gold/5 blur-[150px] pointer-events-none" />

        {/* Dynamic Light Rays overlay */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(45deg,rgba(255,255,255,0)_45%,rgba(255,255,255,1)_50%,rgba(255,255,255,0)_55%)] bg-[length:200%_200%] animate-[spin_60s_linear_infinite]" />
      </div>

      {/* Glowing Cross Element (SVG) */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-30 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.25, 0.4, 0.25]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="relative"
        >
          {/* Outer Gold Glow */}
          <div className="absolute inset-0 w-[400px] h-[400px] bg-brand-gold/10 rounded-full blur-[80px] -translate-x-1/2 -translate-y-1/2" />
          
          <svg width="220" height="380" viewBox="0 0 220 380" fill="none" xmlns="http://www.w3.org/2000/svg" className="filter drop-shadow-[0_0_30px_rgba(244,180,0,0.6)]">
            <path
              d="M110 10V370M30 120H190"
              stroke="url(#cross-gradient)"
              strokeWidth="12"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <defs>
              <linearGradient id="cross-gradient" x1="110" y1="10" x2="110" y2="370" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FFF" />
                <stop offset="0.3" stopColor="#F4B400" />
                <stop offset="1" stopColor="#0A2E73" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-brand-gold/25"
            style={{
              width: Math.random() * 4 + 2 + 'px',
              height: Math.random() * 4 + 2 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
            animate={{
              y: [0, -100 - Math.random() * 150],
              opacity: [0, 0.7, 0],
              scale: [0.5, 1.2, 0.5]
            }}
            transition={{
              duration: 8 + Math.random() * 12,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Animated Logo Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative mb-8"
        >
          {/* Double ring animated border */}
          <div className="absolute inset-0 border border-brand-gold/30 rounded-full animate-ping opacity-25" />
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-2.5 border-2 border-dashed border-brand-gold/20 rounded-full"
          />
          <img
            src={logo}
            alt="Youth Awake Logo"
            className="h-28 w-28 rounded-full object-cover border-4 border-brand-gold relative z-10 shadow-2xl shadow-brand-gold/20"
          />
        </motion.div>

        {/* Headings */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-montserrat text-4xl sm:text-6xl font-extrabold tracking-tight mb-4"
        >
          <span className="text-white">Youth Awake </span>
          <span className="bg-gradient-to-r from-brand-gold to-yellow-500 bg-clip-text text-transparent filter drop-shadow-[0_2px_10px_rgba(244,180,0,0.15)]">
            Financial Giants
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-poppins text-lg sm:text-2xl text-slate-200 font-semibold tracking-wide mb-8"
        >
          Advancing God's Kingdom Through Kingdom Partnership
        </motion.p>

        {/* Paragraph Description */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-3xl font-poppins text-slate-300 text-base sm:text-lg leading-relaxed mb-10 space-y-6"
        >
          <p>
            Youth Awake Financial Giants are young men and women who believe in Jesus Christ and are 
            committed to advancing His agenda here on earth through their God-given resources.
          </p>
          <p>
            We believe God is our source, and money is simply a tool for advancing His Kingdom among the youth. 
            <span className="text-brand-gold font-semibold"> There is a grace for kingdom wealth upon this team.</span>
          </p>
          <p className="font-semibold text-white">
            Join us as we raise a generation that will finance God's work and impact lives globally.
          </p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center gap-4 mb-16"
        >
          <button
            onClick={handleScrollToForm}
            className="flex items-center space-x-2 px-8 py-4 rounded-full font-poppins font-bold text-base text-[#030d22] bg-gradient-to-r from-brand-gold to-yellow-500 hover:from-yellow-400 hover:to-brand-gold shadow-lg shadow-brand-gold/30 hover:shadow-brand-gold/40 transform hover:scale-105 transition-all duration-300 active:scale-95"
          >
            <span>Become a Kingdom Partner</span>
            <ArrowRight className="h-5 w-5" />
          </button>
          
          <a
            href="#vision"
            className="px-8 py-4 rounded-full font-poppins font-semibold text-base text-slate-200 border border-slate-500/50 hover:border-slate-300 hover:bg-white/5 transition-all"
          >
            Explore Our Mandate
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-6 flex flex-col items-center cursor-pointer"
          onClick={() => {
            const nextSec = document.querySelector('#vision');
            nextSec?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <span className="text-xs font-poppins text-slate-400 uppercase tracking-widest mb-2">Scroll Down</span>
          <ChevronDown className="h-5 w-5 text-brand-gold" />
        </motion.div>
      </div>
    </section>
  );
}
