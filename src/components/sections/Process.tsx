import { processSteps } from '../../data/content';

export default function Process() {
  return (
    <section className="py-16 md:py-32 bg-sage-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-texture opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-8">
          <div>
            <div className="flex items-center space-x-4 mb-4 md:mb-6">
              <span className="w-8 md:w-12 h-[1px] bg-gold-400"></span>
              <span className="uppercase tracking-[0.2em] text-[10px] md:text-sm font-semibold text-gold-400">Our Method</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-ivory-100 leading-tight">
              From Plan <br />
              <span className="text-gold-500/80 italic font-light">to Possibility</span>
            </h2>
          </div>
        </div>

        <div className="relative">
          {/* Subtle architectural lines */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold-500/20 to-transparent -translate-y-1/2"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {processSteps.map((step, index) => (
              <div key={step.id} className="relative group">
                <div className="hidden lg:flex absolute top-1/2 left-1/2 w-8 h-8 -translate-x-1/2 -translate-y-1/2 bg-sage-800 border-[1px] border-gold-500/50 rounded-full z-10 items-center justify-center group-hover:scale-125 group-hover:bg-gold-500/10 transition-all duration-500">
                  <div className="w-2 h-2 bg-gold-400 rounded-full group-hover:bg-gold-300"></div>
                </div>
                
                <div className={`lg:pt-20 ${index % 2 === 0 ? 'lg:-mt-8' : 'lg:mt-32 lg:pt-0'}`}>
                  <div className="flex flex-col p-8 bg-sage-900/40 border border-white/5 rounded-sm hover:bg-sage-900/80 hover:border-gold-500/30 transition-all duration-500 group-hover:-translate-y-2">
                    <span className="font-serif text-6xl font-light text-gold-500/10 mb-6 group-hover:text-gold-500/30 transition-colors duration-500">{step.id}</span>
                    <h3 className="text-2xl font-serif text-ivory-100 mb-3 group-hover:text-gold-400 transition-colors">{step.title}</h3>
                    <p className="text-ivory-200/60 font-light text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
