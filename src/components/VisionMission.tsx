import { motion } from 'framer-motion';
import artwork from '../assets/vision_mission_artwork.jpg';
import { BookOpen, Sparkles, Layers, Globe, Target } from 'lucide-react';

export default function VisionMission() {
  const achievements = [
    {
      id: 1,
      title: 'Teachings, Trainings & Discipleship',
      description: 'Equipping youths with sound doctrine, leadership capacity, and spiritual maturity.',
      icon: BookOpen,
    },
    {
      id: 2,
      title: 'Prayers',
      description: 'Building a consistent and fiery altar of communion with the Father.',
      icon: Sparkles,
    },
    {
      id: 3,
      title: 'Structure',
      description: 'Creating orderly networks and systems for fellowship, accountability, and growth.',
      icon: Layers,
    },
    {
      id: 4,
      title: 'Outreaches',
      description: 'Spreading the light of Christ to campus environments, cities, and communities.',
      icon: Globe,
    },
  ];

  return (
    <section className="relative py-16 sm:py-24 bg-[#020918] overflow-hidden">
      {/* Background glow spots */}
      <div className="absolute top-[30%] right-[-10%] w-[15rem] sm:w-[35rem] h-[15rem] sm:h-[35rem] rounded-full bg-brand-gold/5 blur-[80px] sm:blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[18rem] sm:w-[35rem] h-[18rem] sm:h-[35rem] rounded-full bg-brand-blue/10 blur-[80px] sm:blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-montserrat text-xs font-bold uppercase tracking-widest text-brand-gold mb-2.5"
          >
            Our Mandate
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-montserrat text-2xl sm:text-4xl font-extrabold text-white"
          >
            Vision & Mission
          </motion.h3>
          <div className="w-10 h-1 bg-brand-gold mx-auto mt-3.5 rounded-full" />
        </div>

        {/* Vision & Mission Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start mb-16 sm:mb-20">
          
          {/* Left: Vision Section (lg:col-span-7) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 sm:space-y-8 w-full"
            id="vision"
          >
            {/* Vision Card */}
            <div className="glassmorphism p-6 sm:p-10 rounded-2xl sm:rounded-3xl relative overflow-hidden group shadow-2xl border-l-4 border-l-brand-gold w-full">
              <div className="absolute -right-16 -top-16 w-36 h-36 bg-brand-gold/10 rounded-full blur-2xl group-hover:bg-brand-gold/15 transition-colors duration-300" />
              
              <div className="flex items-center justify-between gap-4 mb-4 sm:mb-6">
                <span className="font-montserrat text-xl sm:text-2xl font-bold uppercase tracking-wide text-white">
                  Vision
                </span>
                <span className="inline-flex items-center px-3.5 py-1 rounded-full text-xxs sm:text-xs font-bold font-poppins bg-[#0a2e73] text-brand-gold border border-brand-gold/20">
                  ISAIAH 60:1–3
                </span>
              </div>

              <h4 className="font-montserrat text-2xl sm:text-3xl font-extrabold text-slate-100 mb-3.5 group-hover:text-brand-gold transition-colors duration-300">
                Arise & Shine
              </h4>

              <p className="font-poppins text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed">
                Youth Awake has a mandate to raise youths who love the Lord Jesus, 
                understand His ways, and are transformed through prayer, the Word, and fellowship.
              </p>
            </div>

            {/* Artwork Interactive Showcase */}
            <div className="relative group rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-white/5 w-full">
              <div className="absolute inset-0 bg-[#030d22]/30 group-hover:bg-transparent transition-colors duration-300 z-10" />
              <img
                src={artwork}
                alt="Youth Awake Vision and Mission Artwork"
                className="w-full h-auto object-cover transform group-hover:scale-[1.01] transition-transform duration-500"
              />
              <div className="absolute inset-0 border border-brand-gold/15 rounded-2xl sm:rounded-3xl pointer-events-none z-20 group-hover:border-brand-gold/40 transition-colors duration-300" />
            </div>
          </motion.div>

          {/* Right: Mission Section & How We Achieve (lg:col-span-5) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 space-y-6 sm:space-y-8 w-full"
            id="mission"
          >
            {/* Mission Card */}
            <div className="glassmorphism p-6 sm:p-10 rounded-2xl sm:rounded-3xl relative overflow-hidden group shadow-2xl border-l-4 border-l-brand-blue w-full">
              <div className="absolute -right-16 -top-16 w-36 h-36 bg-brand-blue/20 rounded-full blur-2xl group-hover:bg-brand-blue/35 transition-colors duration-300" />
              
              <div className="flex items-center space-x-3 mb-4 sm:mb-6">
                <div className="p-2.5 bg-[#0a2e73] rounded-xl border border-brand-blue/30 text-brand-gold flex-shrink-0">
                  <Target className="h-5.5 w-5.5" />
                </div>
                <h4 className="font-montserrat text-xl sm:text-2xl font-bold uppercase tracking-wide text-white">
                  Mission
                </h4>
              </div>

              <p className="font-poppins text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed">
                Transform the lives of youths and contribute to the growth and advancement 
                of society through the revelation of Jesus Christ.
              </p>
            </div>

            {/* How We Achieve This Section */}
            <div className="space-y-4 w-full">
              <h5 className="font-montserrat text-base sm:text-lg font-bold uppercase tracking-wider text-slate-200 pl-1">
                How We Achieve This
              </h5>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 sm:gap-4">
                {achievements.map((item, idx) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    className="flex items-start space-x-3.5 p-4 sm:p-5 glassmorphism-light rounded-xl sm:rounded-2xl hover:bg-white/5 transition-colors group w-full"
                  >
                    <div className="flex-shrink-0 mt-0.5">
                      <div className="h-9 w-9 sm:h-10 sm:w-10 rounded-full flex items-center justify-center bg-[#0a2e73] text-brand-gold border border-brand-gold/20 group-hover:border-brand-gold group-hover:scale-105 transition-all">
                        <item.icon className="h-4.5 w-4.5 sm:h-5 sm:w-5" />
                      </div>
                    </div>
                    <div>
                      <h6 className="font-poppins font-bold text-sm sm:text-base text-slate-100 group-hover:text-brand-gold transition-colors duration-200">
                        {item.title}
                      </h6>
                      <p className="font-poppins text-xs text-slate-400 mt-0.5 sm:mt-1">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
