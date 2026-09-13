import { contactInfo } from '../../data/content';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-sage-800 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-ivory-100 mb-6 md:mb-8 leading-tight">
              Let's Build Something <span className="text-gold-400">Stronger.</span>
            </h2>
            <p className="text-lg md:text-xl text-ivory-200/80 font-light mb-10 md:mb-12 max-w-lg leading-relaxed">
              Have a construction requirement or need quality building materials? Talk to KMC Builders and Enterprises.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 mb-16">
              <a 
                href={`tel:${contactInfo.phone1}`}
                className="flex items-center justify-center space-x-3 bg-gold-600 hover:bg-gold-500 text-charcoal px-8 py-4 rounded-sm font-bold transition-all uppercase tracking-wider text-sm"
              >
                <Phone size={18} />
                <span>Call Now</span>
              </a>
              <a 
                href={`https://wa.me/${contactInfo.phone2.replace('+', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-3 border border-gold-500 hover:bg-gold-500/10 text-gold-400 px-8 py-4 rounded-sm font-bold transition-all uppercase tracking-wider text-sm"
              >
                <MessageCircle size={18} />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>

          <div className="bg-sage-900 border border-white/5 p-8 md:p-12 rounded-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/5 blur-[100px] rounded-full"></div>
            
            <h3 className="font-serif text-3xl text-ivory-100 mb-8">Contact Details</h3>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <Phone className="text-gold-500 mt-1 mr-4 shrink-0" size={24} />
                <div>
                  <span className="block text-xs uppercase tracking-widest text-ivory-200/50 mb-1">Primary Phone</span>
                  <a href={`tel:${contactInfo.phone1}`} className="text-xl text-ivory-100 hover:text-gold-400 transition-colors">
                    {contactInfo.phone1Display}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <MessageCircle className="text-gold-500 mt-1 mr-4 shrink-0" size={24} />
                <div>
                  <span className="block text-xs uppercase tracking-widest text-ivory-200/50 mb-1">WhatsApp</span>
                  <a href={`https://wa.me/${contactInfo.phone2.replace('+', '')}`} className="text-xl text-ivory-100 hover:text-gold-400 transition-colors">
                    {contactInfo.phone2Display}
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="text-gold-500 mt-1 mr-4 shrink-0" size={24} />
                <div>
                  <span className="block text-xs uppercase tracking-widest text-ivory-200/50 mb-1">Email</span>
                  <a href={`mailto:${contactInfo.email}`} className="text-lg text-ivory-100 hover:text-gold-400 transition-colors">
                    {contactInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="text-gold-500 mt-1 mr-4 shrink-0" size={24} />
                <div>
                  <span className="block text-xs uppercase tracking-widest text-ivory-200/50 mb-1">Address</span>
                  <p className="text-ivory-100 leading-relaxed max-w-xs">
                    {contactInfo.address}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
