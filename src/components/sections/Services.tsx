import { ArrowRight, Building2, Hammer, Paintbrush, Truck, HardHat, Wrench } from 'lucide-react';
import { services } from '../../data/content';

const iconMap: Record<string, React.ReactNode> = {
  Building2: <Building2 size={40} strokeWidth={1} />,
  Hammer: <Hammer size={40} strokeWidth={1} />,
  Paintbrush: <Paintbrush size={40} strokeWidth={1} />,
  Truck: <Truck size={40} strokeWidth={1} />,
  HardHat: <HardHat size={40} strokeWidth={1} />,
  Wrench: <Wrench size={40} strokeWidth={1} />,
};

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-32 bg-sage-900 relative overflow-hidden">
      {/* Architectural Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 1) 1px, transparent 1px)', backgroundSize: '100px 100px' }}></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-sage-800/40 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-12 md:mb-32 max-w-2xl">
          <div className="flex items-center space-x-4 mb-4 md:mb-6">
            <span className="w-8 md:w-12 h-[1px] bg-gold-500"></span>
            <span className="uppercase tracking-[0.2em] text-[10px] md:text-sm font-semibold text-gold-400">Our Expertise</span>
          </div>
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-ivory-100 leading-tight">
            Comprehensive <br />
            <span className="text-gold-500/80 italic font-light">Construction Solutions</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 md:gap-y-16">
          {services.map((service, idx) => (
            <div 
              key={service.id}
              className={`group relative flex flex-col ${idx % 2 !== 0 ? 'md:mt-16' : ''}`}
            >
              {/* Massive background number */}
              <div className="absolute -top-10 -right-4 font-serif text-9xl font-bold text-white/[0.02] group-hover:text-gold-500/[0.05] transition-colors duration-700 pointer-events-none select-none">
                {service.id}
              </div>
              
              <div className="relative bg-sage-800/30 backdrop-blur-sm border border-white/5 p-10 hover:bg-sage-800 transition-all duration-500 rounded-sm flex-grow">
                <div className="text-gold-400 mb-8 group-hover:scale-110 group-hover:text-gold-300 transform origin-left transition-all duration-500">
                  {iconMap[service.icon]}
                </div>
                
                <h3 className="text-2xl font-serif text-ivory-100 mb-4 group-hover:text-gold-400 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-ivory-200/60 font-light leading-relaxed mb-8">
                  {service.description}
                </p>
                
                <div className="flex items-center text-gold-500 mt-auto">
                  <div className="w-0 h-[1px] bg-gold-500 group-hover:w-8 transition-all duration-500 ease-out mr-0 group-hover:mr-4"></div>
                  <span className="text-xs uppercase tracking-[0.2em] font-medium opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-500 delay-100">
                    Discover More
                  </span>
                  <ArrowRight size={16} className="ml-auto opacity-50 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-500" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
