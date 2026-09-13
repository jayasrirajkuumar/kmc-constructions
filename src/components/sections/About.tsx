import { contactInfo } from '../../data/content';

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-ivory-100 text-charcoal relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <div className="flex items-center space-x-4 mb-6 md:mb-8">
              <span className="w-12 h-[1px] bg-gold-600"></span>
              <span className="uppercase tracking-[0.2em] text-[10px] md:text-sm font-semibold text-sage-900">About Us</span>
            </div>
            
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-8 leading-tight text-sage-900">
              Built on Trust.<br/>
              <span className="text-gold-600">Designed for Tomorrow.</span>
            </h2>
            
            <div className="space-y-4 md:space-y-6 text-base md:text-lg text-sage-800/80 font-light leading-relaxed">
              <p>
                KMC Builders and Enterprises is a trusted construction and building material business serving Hosur and surrounding areas. We combine quality materials, dependable service and practical construction expertise to help customers build with confidence.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 pt-4">
                {['Quality Materials', 'Reliable Service', 'Construction Expertise', 'Painting Solutions', 'Customer-focused Service'].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3">
                    <span className="w-1.5 h-1.5 bg-gold-500 rounded-full"></span>
                    <span className="font-medium text-sage-900 text-sm md:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mt-10 md:mt-12 pt-6 md:pt-8 border-t border-sage-900/10">
              <p className="font-serif text-xl md:text-2xl text-sage-900 mb-1">{contactInfo.proprietor}</p>
              <p className="text-xs md:text-sm uppercase tracking-widest text-gold-600 font-medium">Proprietor</p>
            </div>
          </div>
          
          <div className="relative mt-8 md:mt-0">
            {/* Image masonry/composition */}
            <div className="relative h-[350px] sm:h-[450px] md:h-[600px] w-full">
              <img 
                src="/assets/about-construction.jpg" 
                alt="Construction Site" 
                className="absolute right-0 top-0 w-4/5 h-[400px] object-cover rounded-sm shadow-xl"
              />
              <img 
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800" 
                alt="Building Materials" 
                className="absolute left-0 bottom-0 w-2/3 h-[300px] object-cover border-8 border-ivory-100 rounded-sm shadow-2xl z-10"
              />
              {/* Decorative accent */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-2 border-r-2 border-gold-400"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 border-t-2 border-l-2 border-gold-400"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
