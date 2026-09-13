import { projects } from '../../data/content';
import { MapPin } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 bg-charcoal text-ivory-100 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block uppercase tracking-[0.2em] text-[10px] md:text-sm font-semibold text-gold-400 mb-4">Featured Work</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold">
            Recent Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className={`group relative overflow-hidden rounded-sm ${index % 3 === 0 ? 'md:col-span-2 h-[350px] md:h-[500px]' : 'h-[300px] md:h-[400px]'}`}
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-sage-900/20 group-hover:bg-sage-900/60 transition-colors duration-500"></div>
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="inline-block px-3 py-1 bg-gold-600 text-charcoal text-xs font-semibold uppercase tracking-wider mb-4 rounded-sm">
                    {project.category}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-serif text-ivory-100 mb-2">{project.title}</h3>
                  <div className="flex items-center text-ivory-200/80">
                    <MapPin size={16} className="mr-2" />
                    <span className="text-sm">{project.location}</span>
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
