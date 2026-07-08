import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Check, MessageSquare, RefreshCw } from 'lucide-react';
import confetti from 'canvas-confetti';

interface SuccessScreenProps {
  fullName: string;
  wantsWhatsApp: boolean;
  onReset: () => void;
}

export default function SuccessScreen({ fullName, wantsWhatsApp, onReset }: SuccessScreenProps) {
  useEffect(() => {
    // Fire confetti when success screen mounts
    const duration = 4 * 1000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.8 },
        colors: ['#F4B400', '#0A2E73', '#FFFFFF']
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.8 },
        colors: ['#F4B400', '#0A2E73', '#FFFFFF']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    
    frame();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5 }}
      className="glassmorphism p-8 sm:p-12 rounded-3xl text-center max-w-2xl mx-auto shadow-2xl gold-glow relative overflow-hidden"
    >
      {/* Background soft spots */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-brand-gold/10 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-brand-blue/20 rounded-full blur-2xl pointer-events-none" />

      {/* Animated Success Badge */}
      <div className="flex justify-center mb-6">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.2, 1] }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="h-20 w-20 rounded-full bg-[#10b981]/15 border-2 border-[#10b981] flex items-center justify-center text-[#10b981] shadow-lg shadow-[#10b981]/25"
        >
          <Check className="h-10 w-10 stroke-[3]" />
        </motion.div>
      </div>

      {/* Headline */}
      <h3 className="font-montserrat text-3xl font-extrabold text-white mb-4">
        🎉 Registration Successful!
      </h3>
      
      {/* Personalized Greeting */}
      <p className="font-poppins font-semibold text-brand-gold text-lg mb-4">
        Shalom, {fullName}!
      </p>

      {/* Message */}
      <div className="font-poppins text-slate-300 text-sm sm:text-base leading-relaxed space-y-4 mb-8">
        <p>
          Thank you for registering as a Youth Awake Financial Giants Partner. 
          Your registration has been received successfully.
        </p>
        <p>
          We sincerely appreciate your willingness to partner with us in advancing 
          God's Kingdom and impacting the lives of young people.
        </p>
        <blockquote className="font-semibold text-white bg-white/5 py-3 px-4 rounded-xl italic border-l-2 border-brand-gold max-w-lg mx-auto">
          "May the Lord bless, increase, and reward you abundantly for your generosity and commitment."
        </blockquote>
      </div>

      {/* Conditional WhatsApp Section */}
      {wantsWhatsApp && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="p-6 bg-[#075e54]/10 border border-[#075e54]/40 rounded-2xl max-w-md mx-auto mb-8 shadow-inner"
        >
          <div className="flex items-center justify-center space-x-2 text-[#25d366] mb-3">
            <MessageSquare className="h-5 w-5 fill-[#25d366]" />
            <h4 className="font-poppins font-bold text-sm sm:text-base">
              Join Our WhatsApp Community
            </h4>
          </div>
          <p className="font-poppins text-xs sm:text-sm text-slate-300 mb-4 leading-relaxed">
            You're just one step away from becoming part of our online family. 
            Click the button below to join our official WhatsApp community.
          </p>
          <a
            href="https://chat.whatsapp.com/KlC4finQZLA1pvGDnFS5BU?mode=gi_t"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-full px-6 py-3 rounded-full font-poppins font-bold text-sm text-white bg-[#25d366] hover:bg-[#128c7e] transition-colors shadow-md shadow-[#25d366]/20"
          >
            Join WhatsApp Community
          </a>
        </motion.div>
      )}

      {/* Action Button: Register Another */}
      <div className="flex justify-center">
        <button
          onClick={onReset}
          className="flex items-center space-x-2 px-6 py-3 rounded-full font-poppins font-semibold text-xs text-slate-300 hover:text-white border border-slate-600 hover:border-slate-400 hover:bg-white/5 transition-all"
        >
          <RefreshCw className="h-4 w-4" />
          <span>Register Another Partner</span>
        </button>
      </div>
    </motion.div>
  );
}
