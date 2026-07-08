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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden py-12 sm:py-20 lg:py-24">
      {/* Background Gradients & Effects */}
      <div className="absolute inset-0 z-0">
        {/* Radial dark background */}
        <div className="absolute inset-0 bg-radial-gradient from-[#092252] via-[#030d22] to-[#010612]" />
        
        {/* Soft glowing gold & blue radial spots */}
        <div className="absolute top-[10%] sm:top-[20%] left-[5%] sm:left-[20%] w-[18rem] sm:w-[35rem] h-[18rem] sm:h-[35rem] rounded-full bg-brand-blue/10 blur-[80px] sm:blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[10%] sm:bottom-[20%] right-[2%] sm:right-[10%] w-[20rem] sm:w-[40rem] h-[20rem] sm:h-[40rem] rounded-full bg-brand-gold/5 blur-[100px] sm:blur-[150px] pointer-events-none" />

        {/* Dynamic Light Rays overlay */}
        <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(45deg,rgba(255,255,255,0)_45%,rgba(255,255,255,1)_50%,rgba(255,255,255,0)_55%)] bg-[length:200%_200%] animate-[spin_80s_linear_infinite]" />
      </div>

      {/* Glowing Cross Element (SVG) */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-20 sm:opacity-30 pointer-events-none">
        <motion.div
          animate={{
            scale: [0.95, 1.02, 0.95],
            opacity: [0.15, 0.3, 0.15]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="relative"
        >
          {/* Outer Gold Glow */}
          <div className="absolute inset-0 w-[200px] sm:w-[400px] h-[200px] sm:h-[400px] bg-brand-gold/5 rounded-full blur-[60px] sm:blur-[80px] -translate-x-1/2 -translate-y-1/2" />
          
          <svg width="120" height="240" viewBox="0 0 220 380" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-[220px] sm:h-[380px] filter drop-shadow-[0_0_20px_rgba(244,180,0,0.4)]">
            <path
              d="M110 10V370M30 120H190"
              stroke="url(#cross-gradient)"
              strokeWidth="14"
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
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-brand-gold/20"
            style={{
              width: Math.random() * 3 + 1.5 + 'px',
              height: Math.random() * 3 + 1.5 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
            animate={{
              y: [0, -80 - Math.random() * 100],
              opacity: [0, 0.6, 0],
              scale: [0.5, 1.1, 0.5]
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 4
            }}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center pt-16 sm:pt-20">
        {/* Animated Logo Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative mb-6 sm:mb-8"
        >
          {/* Double ring animated border */}
          <div className="absolute inset-0 border border-brand-gold/30 rounded-full animate-ping opacity-25" />
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-2 border border-dashed border-brand-gold/15 rounded-full"
          />
          <img
            src={logo}
            alt="Youth Awake Logo"
            className="h-20 w-20 sm:h-24 sm:w-24 lg:h-28 lg:w-28 rounded-full object-cover border-3 border-brand-gold relative z-10 shadow-xl shadow-brand-gold/10"
          />
        </motion.div>

        {/* Headings */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-montserrat text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 leading-tight px-2"
        >
          <span className="text-white">Youth Awake </span>
          <span className="block sm:inline bg-gradient-to-r from-brand-gold to-yellow-500 bg-clip-text text-transparent filter drop-shadow-[0_1.5px_6px_rgba(244,180,0,0.15)]">
            Financial Giants
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-poppins text-base sm:text-xl lg:text-2xl text-slate-200 font-semibold tracking-wide mb-6 px-4"
        >
          Advancing God's Kingdom Through Kingdom Partnership
        </motion.p>

        {/* Paragraph Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-2xl font-poppins text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed mb-8 px-2 space-y-4"
        >
          <p>
            Youth Awake Financial Giants are young men and women who believe in Jesus Christ and are 
            committed to advancing His agenda here on earth through their God-given resources.
          </p>
          <p>
            We believe God is our source, and money is simply a tool for advancing His Kingdom among the youth. 
            <span className="text-brand-gold font-semibold block sm:inline"> There is a grace for kingdom wealth upon this team.</span>
          </p>
          <p className="font-semibold text-slate-100">
            Join us as we raise a generation that will finance God's work and impact lives globally.
          </p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 w-full max-w-sm sm:max-w-none px-4 sm:px-0 mb-10"
        >
          <button
            onClick={handleScrollToForm}
            className="flex items-center justify-center space-x-2 py-4 px-6 rounded-full font-poppins font-bold text-base text-[#030d22] bg-gradient-to-r from-brand-gold to-yellow-500 hover:from-yellow-400 hover:to-brand-gold shadow-lg shadow-brand-gold/20 transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 min-h-[48px]"
          >
            <span>Become a Kingdom Partner</span>
            <ArrowRight className="h-5 w-5" />
          </button>
          
          <a
            href="#vision"
            className="flex items-center justify-center py-4 px-6 rounded-full font-poppins font-semibold text-base text-slate-200 border border-slate-600/50 hover:border-slate-300 hover:bg-white/5 transition-all min-h-[48px] active:scale-[0.98]"
          >
            Explore Our Mandate
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center cursor-pointer mt-4 sm:mt-8"
          onClick={() => {
            const nextSec = document.querySelector('#vision');
            nextSec?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <span className="text-xxs font-poppins text-slate-400 uppercase tracking-widest mb-1.5">Scroll Down</span>
          <ChevronDown className="h-4.5 w-4.5 text-brand-gold" />
        </motion.div>
      </div>
    </section>
  );
}
