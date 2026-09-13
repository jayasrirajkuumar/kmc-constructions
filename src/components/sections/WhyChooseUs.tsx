import { ShieldCheck, Clock, Hammer, PaintBucket } from 'lucide-react';

export default function WhyChooseUs() {
  const pillars = [
    {
      title: 'QUALITY MATERIALS',
      desc: 'Carefully selected materials for dependable construction.',
      icon: <ShieldCheck size={32} strokeWidth={1.5} />
    },
    {
      title: 'RELIABLE SERVICE',
      desc: 'Clear communication and customer-focused support.',
      icon: <Clock size={32} strokeWidth={1.5} />
    },
    {
      title: 'STRONGER TOMORROW',
      desc: 'A focus on durable, practical building solutions.',
      icon: <Hammer size={32} strokeWidth={1.5} />
    },
    {
      title: 'PAINTING EXPERTS',
      desc: 'Professional finishing solutions for a polished result.',
      icon: <PaintBucket size={32} strokeWidth={1.5} />
    }
  ];

  return (
    <section className="py-24 bg-ivory-100 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16">
          <span className="inline-block uppercase tracking-[0.2em] text-sm font-semibold text-sage-600 mb-4">Core Values</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-sage-900">
            Why KMC?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-sage-900/10">
          {pillars.map((pillar, idx) => (
            <div key={idx} className={`pt-8 md:pt-0 ${idx !== 0 ? 'md:pl-8' : ''} group`}>
              <div className="text-gold-600 mb-6 group-hover:scale-110 transform transition-transform origin-left">
                {pillar.icon}
              </div>
              <h3 className="text-lg font-bold text-sage-900 mb-4 tracking-wider uppercase">{pillar.title}</h3>
              <p className="text-sage-800/80 font-light leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
