import { motion } from 'framer-motion';
import { Flame, Users, Sprout, Globe, HeartHandshake } from 'lucide-react';

export default function CoreValues() {
  const values = [
    {
      title: 'Love God',
      description: 'Consecrated devotion to Jesus Christ through a life of prayer, worship, and obedience.',
      icon: Flame,
      color: 'from-orange-500/20 to-red-500/20',
      iconColor: 'text-orange-400',
    },
    {
      title: 'Love Others',
      description: 'Expressing the genuine compassion of Christ, caring for our neighbors and the community.',
      icon: Users,
      color: 'from-blue-500/20 to-indigo-500/20',
      iconColor: 'text-blue-400',
    },
    {
      title: 'Grow Together',
      description: 'Developing spiritual maturity, character, and professional competence in fellowship.',
      icon: Sprout,
      color: 'from-emerald-500/20 to-teal-500/20',
      iconColor: 'text-emerald-400',
    },
    {
      title: 'Impact the World',
      description: 'Financing Outreaches and missions, and demonstrating kingdom dominion in all spheres.',
      icon: Globe,
      color: 'from-brand-gold/15 to-yellow-500/15',
      iconColor: 'text-brand-gold',
    },
  ];

  return (
    <section className="relative py-24 bg-[#030d22] overflow-hidden">
      {/* Background decoration elements */}
      <div className="absolute top-[20%] left-[-10%] w-[35rem] h-[35rem] rounded-full bg-brand-blue/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[30rem] h-[30rem] rounded-full bg-brand-gold/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-montserrat text-xs sm:text-sm font-bold uppercase tracking-widest text-brand-gold mb-3"
          >
            What Governs Us
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-montserrat text-3xl sm:text-4xl font-extrabold text-white"
          >
            Core Values
          </motion.h3>
          <div className="w-12 h-1 bg-brand-gold mx-auto mt-4 rounded-full" />
        </div>

        {/* Highlight Section: Love & Unity (Psalm 133:1) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="glassmorphism p-8 sm:p-12 rounded-3xl relative overflow-hidden group shadow-2xl gold-glow hover:gold-glow-active transition-all duration-300 max-w-4xl mx-auto">
            {/* Soft glowing background spotlight */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-brand-gold/10 rounded-full blur-[100px] pointer-events-none group-hover:bg-brand-gold/15 transition-all duration-300" />
            
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 relative z-10">
              <div className="flex-shrink-0">
                <div className="h-16 w-16 rounded-2xl flex items-center justify-center bg-gradient-to-br from-[#0a2e73] to-brand-gold/20 text-brand-gold border border-brand-gold/40 shadow-inner group-hover:scale-105 transition-transform duration-300">
                  <HeartHandshake className="h-8 w-8 animate-[pulse-glow_2s_infinite]" />
                </div>
              </div>
              
              <div className="flex-1 text-center md:text-left space-y-4">
                <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3">
                  <h4 className="font-montserrat text-2xl font-bold text-white tracking-wide">
                    Love & Unity
                  </h4>
                  <span className="px-3 py-1 bg-brand-gold/10 text-brand-gold font-poppins text-xs font-bold rounded-full border border-brand-gold/20">
                    Psalm 133:1
                  </span>
                </div>
                
                <blockquote className="font-poppins italic text-slate-200 text-lg sm:text-xl border-l-4 border-l-brand-gold md:pl-6 py-2">
                  "How good and pleasant it is when God's people live together in unity!"
                </blockquote>
                
                <p className="font-poppins text-slate-300 text-sm sm:text-base leading-relaxed">
                  We walk in covenant fellowship. We protect each other's dignities, work in harmony, 
                  and raise a banner of corporate love. God commands the blessing of eternal life and 
                  overflowing abundance where brethren live in unity.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Grid of Other 4 Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((val, idx) => (
            <motion.div
              key={val.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glassmorphism p-6 rounded-2xl relative overflow-hidden group shadow-lg border border-white/5 hover:border-brand-gold/20 hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Corner accent radial glow */}
              <div className={`absolute -right-8 -top-8 w-20 h-20 bg-gradient-to-br ${val.color} rounded-full blur-xl group-hover:scale-125 transition-transform duration-300`} />
              
              <div className="space-y-4 relative z-10">
                <div className={`h-12 w-12 rounded-xl flex items-center justify-center bg-white/5 border border-white/10 ${val.iconColor} group-hover:scale-105 transition-transform`}>
                  <val.icon className="h-6 w-6" />
                </div>
                <h4 className="font-montserrat font-bold text-lg text-slate-100 group-hover:text-brand-gold transition-colors duration-200">
                  {val.title}
                </h4>
                <p className="font-poppins text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {val.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
