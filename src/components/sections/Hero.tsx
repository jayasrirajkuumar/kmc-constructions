import { ArrowRight } from 'lucide-react';
import { contactInfo } from '../../data/content';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-32 md:pt-48 pb-16 md:pb-0 overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000" 
          alt="Premium Architecture Construction" 
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-sage-900/95 via-sage-900/90 to-sage-900/60"></div>
        <div className="absolute inset-0 bg-texture mix-blend-overlay opacity-50"></div>
        {/* Subtle grid lines */}
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)', backgroundSize: '100px 100px' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center space-x-2 border border-gold-500/30 bg-sage-900/50 backdrop-blur-sm px-3 md:px-4 py-1.5 mb-6 md:mb-8 rounded-sm">
            <div className="w-1.5 h-1.5 bg-gold-500 rounded-full"></div>
            <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-ivory-200">Serving Hosur & Surrounding Areas</span>
          </div>
          
          <h1 className="font-serif text-[2.5rem] leading-[1.1] sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-4 md:mb-6">
            <span className="block text-ivory-100">KMC BUILDERS</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">AND ENTERPRISES</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-ivory-200 font-light mb-10 max-w-2xl leading-relaxed">
            Building spaces. Supplying quality.<br/>
            Creating a stronger tomorrow.
          </p>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
            <a 
              href={`tel:${contactInfo.phone1}`}
              className="group inline-flex items-center justify-center bg-gold-600 hover:bg-gold-500 text-charcoal px-8 py-4 rounded-sm font-medium transition-all uppercase tracking-wider text-sm"
            >
              <span>Get a Quote</span>
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#services"
              className="inline-flex items-center justify-center border border-ivory-100/20 hover:border-gold-400 hover:bg-gold-400/5 text-ivory-100 px-8 py-4 rounded-sm font-medium transition-all uppercase tracking-wider text-sm"
            >
              Explore Our Services
            </a>
          </div>
        </div>
      </div>

      {/* Floating Brand Card */}
      <div className="hidden lg:flex absolute bottom-12 right-12 z-10 border border-gold-500/20 bg-sage-900/80 backdrop-blur-md p-6 max-w-sm rounded-sm shadow-2xl">
        <div>
          <div className="font-serif text-2xl font-bold tracking-wider text-ivory-100 uppercase mb-1">KMC</div>
          <div className="text-[0.6rem] tracking-[0.2em] text-gold-400 uppercase font-medium mb-4 pb-4 border-b border-white/10">Builders & Enterprises</div>
          <p className="text-sm text-ivory-200 font-light leading-relaxed italic">
            "Quality Materials • Reliable Service • Stronger Tomorrow"
          </p>
        </div>
      </div>
    </section>
  );
}
