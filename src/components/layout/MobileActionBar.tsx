import { contactInfo } from '../../data/content';
import { Phone, MessageCircle, ArrowRight } from 'lucide-react';

export default function MobileActionBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full z-50 bg-sage-900 border-t border-white/10 shadow-[0_-8px_30px_rgba(0,0,0,0.5)]">
      <div className="flex items-center divide-x divide-white/10">
        <a 
          href={`tel:${contactInfo.phone1}`}
          className="flex-1 flex flex-col items-center justify-center py-3 text-ivory-100 hover:bg-white/5 transition-colors active:bg-white/10"
        >
          <Phone size={18} className="mb-1 text-gold-400" />
          <span className="text-[10px] uppercase tracking-widest font-semibold">Call</span>
        </a>
        <a 
          href={`https://wa.me/${contactInfo.phone2.replace('+', '')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center py-3 text-ivory-100 hover:bg-white/5 transition-colors active:bg-white/10"
        >
          <MessageCircle size={18} className="mb-1 text-gold-400" />
          <span className="text-[10px] uppercase tracking-widest font-semibold">WhatsApp</span>
        </a>
        <a 
          href="#contact"
          className="flex-1 flex flex-col items-center justify-center py-3 bg-gold-600 text-charcoal active:bg-gold-500 transition-colors"
        >
          <ArrowRight size={18} className="mb-1" />
          <span className="text-[10px] uppercase tracking-widest font-bold">Get Quote</span>
        </a>
      </div>
    </div>
  );
}
