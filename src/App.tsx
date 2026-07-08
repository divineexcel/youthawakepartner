import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VisionMission from './components/VisionMission';
import CoreValues from './components/CoreValues';
import RegistrationForm from './components/RegistrationForm';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen text-slate-100 bg-[#030d22] relative">
      {/* Background ambient light overlay */}
      <div className="absolute top-[120vh] right-[5%] w-[45rem] h-[45rem] rounded-full bg-brand-gold/5 blur-[150px] pointer-events-none z-0" />
      <div className="absolute top-[220vh] left-[5%] w-[40rem] h-[40rem] rounded-full bg-brand-blue/10 blur-[130px] pointer-events-none z-0" />
      
      {/* Navbar */}
      <Navbar />

      {/* Main Sections */}
      <main className="relative z-10">
        {/* Hero Section */}
        <Hero />

        {/* Vision & Mission Sections */}
        <VisionMission />

        {/* Core Values Section */}
        <CoreValues />

        {/* Partnership Form Section */}
        <section id="partnership" className="relative py-24 bg-[#020918]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[35rem] h-[35rem] rounded-full bg-brand-blue/15 blur-[120px] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <RegistrationForm />
          </div>
        </section>
      </main>

      {/* Footer & Contact */}
      <Footer />
    </div>
  );
}
