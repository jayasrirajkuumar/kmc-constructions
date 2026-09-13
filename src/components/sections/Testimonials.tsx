import { Quote, Star } from 'lucide-react';
import { testimonials } from '../../data/content';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-32 bg-sage-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-texture opacity-30"></div>
      
      {/* Decorative gradient orb */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] md:w-[800px] h-[300px] md:h-[400px] bg-gold-500/5 blur-[80px] md:blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-12 md:mb-20">
          <div className="flex items-center justify-center space-x-4 mb-4 md:mb-6">
            <span className="w-8 md:w-12 h-[1px] bg-gold-500"></span>
            <span className="inline-block uppercase tracking-[0.2em] text-[10px] md:text-sm font-semibold text-gold-400">Client Feedback</span>
            <span className="w-8 md:w-12 h-[1px] bg-gold-500"></span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-ivory-100">
            What Our Customers Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div 
              key={testimonial.id}
              className={`bg-sage-800/40 backdrop-blur-sm border border-white/5 p-10 relative flex flex-col rounded-sm hover:bg-sage-800/80 hover:border-gold-500/20 transition-all duration-500 hover:-translate-y-2 ${idx === 1 ? 'md:mt-12' : ''}`}
            >
              <Quote className="absolute top-8 right-8 text-gold-500/10" size={80} strokeWidth={1} />
              
              <div className="flex space-x-1 mb-8">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={16} className="text-gold-500 fill-gold-500" />
                ))}
              </div>
              
              <p className="text-lg font-light text-ivory-200/90 italic mb-10 relative z-10 leading-relaxed flex-grow">
                "{testimonial.text}"
              </p>
              
              <div className="flex flex-col mt-auto pt-8 border-t border-white/5">
                <h4 className="font-bold text-ivory-100 uppercase tracking-widest text-sm mb-1">{testimonial.name}</h4>
                <span className="text-gold-400 text-xs uppercase tracking-wider">{testimonial.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
