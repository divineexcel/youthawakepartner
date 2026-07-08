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
    <section className="relative py-24 bg-[#020918] overflow-hidden">
      {/* Background glow spots */}
      <div className="absolute top-[30%] right-[-10%] w-[35rem] h-[35rem] rounded-full bg-brand-gold/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[35rem] h-[35rem] rounded-full bg-brand-blue/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-montserrat text-xs sm:text-sm font-bold uppercase tracking-widest text-brand-gold mb-3"
          >
            Our Mandate
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-montserrat text-3xl sm:text-4xl font-extrabold text-white"
          >
            Vision & Mission
          </motion.h3>
          <div className="w-12 h-1 bg-brand-gold mx-auto mt-4 rounded-full" />
        </div>

        {/* Vision & Mission Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          {/* Left: Vision Section (lg:col-span-7) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-8"
            id="vision"
          >
            {/* Vision Card */}
            <div className="glassmorphism p-8 sm:p-10 rounded-3xl relative overflow-hidden group shadow-2xl border-l-4 border-l-brand-gold">
              <div className="absolute -right-16 -top-16 w-36 h-36 bg-brand-gold/10 rounded-full blur-2xl group-hover:bg-brand-gold/15 transition-colors duration-300" />
              
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <span className="font-montserrat text-2xl font-bold uppercase tracking-wide text-white">
                  Vision
                </span>
                <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold font-poppins bg-[#0a2e73] text-brand-gold border border-brand-gold/30">
                  ISAIAH 60:1–3
                </span>
              </div>

              <h4 className="font-montserrat text-3xl font-extrabold text-slate-100 mb-4 group-hover:text-brand-gold transition-colors duration-300">
                Arise & Shine
              </h4>

              <p className="font-poppins text-slate-300 text-base sm:text-lg leading-relaxed">
                Youth Awake has a mandate to raise youths who love the Lord Jesus, 
                understand His ways, and are transformed through prayer, the Word, and fellowship.
              </p>
            </div>

            {/* Artwork Interactive Showcase */}
            <div className="relative group rounded-3xl overflow-hidden shadow-2xl border border-white/5">
              <div className="absolute inset-0 bg-[#030d22]/40 group-hover:bg-transparent transition-colors duration-300 z-10" />
              <img
                src={artwork}
                alt="Youth Awake Vision and Mission Artwork"
                className="w-full h-auto object-cover transform group-hover:scale-102 transition-transform duration-700"
              />
              {/* Image Frame Accent */}
              <div className="absolute inset-0 border border-brand-gold/20 rounded-3xl pointer-events-none z-20 group-hover:border-brand-gold/50 transition-colors duration-300" />
            </div>
          </motion.div>

          {/* Right: Mission Section & How We Achieve (lg:col-span-5) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-8"
            id="mission"
          >
            {/* Mission Card */}
            <div className="glassmorphism p-8 sm:p-10 rounded-3xl relative overflow-hidden group shadow-2xl border-l-4 border-l-brand-blue">
              <div className="absolute -right-16 -top-16 w-36 h-36 bg-brand-blue/20 rounded-full blur-2xl group-hover:bg-brand-blue/35 transition-colors duration-300" />
              
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-[#0a2e73] rounded-2xl border border-brand-blue/30 text-brand-gold">
                  <Target className="h-6 w-6" />
                </div>
                <h4 className="font-montserrat text-2xl font-bold uppercase tracking-wide text-white">
                  Mission
                </h4>
              </div>

              <p className="font-poppins text-slate-300 text-base sm:text-lg leading-relaxed">
                Transform the lives of youths and contribute to the growth and advancement 
                of society through the revelation of Jesus Christ.
              </p>
            </div>

            {/* How We Achieve This Section */}
            <div className="space-y-4">
              <h5 className="font-montserrat text-lg font-bold uppercase tracking-wider text-slate-200 pl-2">
                How We Achieve This
              </h5>
              
              <div className="space-y-3">
                {achievements.map((item, idx) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="flex items-start space-x-4 p-5 glassmorphism-light rounded-2xl hover:bg-white/5 transition-colors group"
                  >
                    <div className="flex-shrink-0 mt-0.5">
                      <div className="h-10 w-10 rounded-full flex items-center justify-center bg-[#0a2e73] text-brand-gold border border-brand-gold/30 group-hover:border-brand-gold group-hover:scale-105 transition-all">
                        <item.icon className="h-5 w-5" />
                      </div>
                    </div>
                    <div>
                      <h6 className="font-poppins font-bold text-sm sm:text-base text-slate-100 group-hover:text-brand-gold transition-colors duration-200">
                        {item.title}
                      </h6>
                      <p className="font-poppins text-xs sm:text-sm text-slate-400 mt-1">
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
