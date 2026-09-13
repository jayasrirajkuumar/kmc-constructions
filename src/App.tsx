import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Stats from './components/sections/Stats';
import Services from './components/sections/Services';
import BuildingMaterials from './components/sections/BuildingMaterials';
import Projects from './components/sections/Projects';
import Process from './components/sections/Process';
import WhyChooseUs from './components/sections/WhyChooseUs';
import Testimonials from './components/sections/Testimonials';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import MobileActionBar from './components/layout/MobileActionBar';
import LeadPopup from './components/layout/LeadPopup';

function App() {
  return (
    <div className="min-h-screen bg-sage-900 selection:bg-gold-500/30 selection:text-gold-200 text-ivory-100 font-sans antialiased overflow-x-hidden">
      <Navbar />
      <LeadPopup />
      <main>
        <Hero />
        <div className="bg-sage-900 border-y border-white/5 py-8 text-center overflow-hidden relative">
          <div className="absolute inset-0 bg-texture opacity-30"></div>
          <div className="relative z-10 flex flex-wrap justify-center gap-8 md:gap-16 px-6 max-w-7xl mx-auto items-center">
            {['Quality Materials', 'Reliable Service', 'Stronger Tomorrow', 'Painting Experts'].map((text, i) => (
              <div key={i} className="flex items-center space-x-3">
                <span className="w-1.5 h-1.5 bg-gold-500 rounded-full"></span>
                <span className="text-sm uppercase tracking-[0.2em] font-medium text-ivory-200">{text}</span>
              </div>
            ))}
          </div>
        </div>
        <About />
        <Stats />
        <Services />
        <BuildingMaterials />
        <Projects />
        <Process />
        <WhyChooseUs />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <MobileActionBar />
    </div>
  );
}

export default App;
