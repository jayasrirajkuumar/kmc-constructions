export default function Stats() {
  const stats = [
    { number: '10+', label: 'Years of Experience' },
    { number: '100+', label: 'Customers Served' },
    { number: '100%', label: 'Commitment to Quality' },
    { number: 'Hosur', label: '& Surrounding Areas' },
  ];

  return (
    <section className="bg-sage-800 py-20 border-y border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-texture opacity-20"></div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 divide-x divide-white/10">
          {stats.map((stat, index) => (
            <div key={index} className={`flex flex-col items-center text-center ${index !== 0 ? 'pl-8' : ''}`}>
              <span className="font-serif text-4xl md:text-5xl lg:text-6xl text-gold-400 mb-2">{stat.number}</span>
              <span className="text-sm md:text-base text-ivory-200 uppercase tracking-wider font-medium">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
