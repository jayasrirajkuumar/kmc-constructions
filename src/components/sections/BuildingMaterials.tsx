import { materials, contactInfo } from '../../data/content';
import { ArrowUpRight } from 'lucide-react';

export default function BuildingMaterials() {
  return (
    <section id="materials" className="py-16 md:py-32 bg-ivory-100 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-20 gap-6 md:gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center space-x-4 mb-4 md:mb-6">
              <span className="w-8 md:w-12 h-[1px] bg-sage-600"></span>
              <span className="uppercase tracking-[0.2em] text-[10px] md:text-sm font-semibold text-sage-600">Supply & Trade</span>
            </div>
            <h2 className="font-serif text-4xl md:text-6xl font-bold text-sage-900 leading-tight">
              Premium <br />
              <span className="text-gold-600 italic font-light">Building Materials</span>
            </h2>
          </div>
          <a 
            href={`https://wa.me/${contactInfo.phone2.replace('+', '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center space-x-2 border border-sage-900/20 hover:border-sage-900 bg-transparent hover:bg-sage-900 text-sage-900 hover:text-ivory-100 px-6 py-3 md:px-8 md:py-4 rounded-sm font-medium transition-all duration-300 uppercase tracking-wider text-xs md:text-sm w-fit"
          >
            <span>Ask About Materials</span>
            <ArrowUpRight size={18} className="group-hover:rotate-45 transition-transform duration-300" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {materials.map((material) => (
            <div 
              key={material.id}
              className="group relative h-[300px] sm:h-[350px] md:h-[400px] overflow-hidden rounded-sm cursor-pointer shadow-lg"
            >
              <img 
                src={material.image} 
                alt={material.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sage-900 via-sage-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="flex justify-between items-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="max-w-[80%]">
                    <div className="w-8 h-[2px] bg-gold-500 mb-6 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-100"></div>
                    <h3 className="text-2xl font-serif text-ivory-100 group-hover:text-gold-400 transition-colors duration-300 leading-snug">
                      {material.title}
                    </h3>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-gold-400 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
