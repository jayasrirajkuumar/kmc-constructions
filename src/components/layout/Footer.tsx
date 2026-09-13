import { contactInfo } from '../../data/content';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-sage-900 border-t border-white/5 pt-20 pb-24 md:pb-10 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="flex flex-col mb-6">
              <span className="font-serif text-3xl font-bold tracking-wider text-ivory-100 uppercase">KMC</span>
              <span className="text-[0.7rem] tracking-[0.2em] text-gold-400 uppercase font-medium">Builders & Enterprises</span>
            </div>
            <p className="text-ivory-200/70 font-light max-w-sm leading-relaxed italic mb-8">
              "All Building Material Suppliers & Construction Works"
            </p>
            <p className="text-sm text-ivory-200/50 uppercase tracking-widest font-medium">
              Designed with purpose. Built with trust.
            </p>
          </div>
          
          <div>
            <h4 className="text-ivory-100 font-bold uppercase tracking-widest text-sm mb-6">Navigation</h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Services', 'Materials', 'Projects', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-ivory-200/70 hover:text-gold-400 transition-colors text-sm uppercase tracking-wider">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-ivory-100 font-bold uppercase tracking-widest text-sm mb-6">Location</h4>
            <p className="text-ivory-200/70 text-sm leading-relaxed mb-4">
              #G-7, Baby Complex,<br/>
              Sai Baba Nagar, Tank Street,<br/>
              Hosur – 635 109,<br/>
              Tamil Nadu, India.
            </p>
            <p className="text-ivory-200/70 text-sm">
              Proprietor: <span className="text-ivory-100">{contactInfo.proprietor}</span>
            </p>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-ivory-200/40 uppercase tracking-widest gap-4">
          <p>© {currentYear} KMC Builders and Enterprises. All Rights Reserved.</p>
          <button 
            onClick={() => {
              const leads = JSON.parse(localStorage.getItem('kmc_leads') || '[]');
              if (leads.length === 0) {
                alert('No leads collected yet.');
                return;
              }
              const header = 'Date,Name,Phone\n';
              const csv = leads.map((l: any) => `${l.date},"${l.name}","${l.phone}"`).join('\n');
              const blob = new Blob([header + csv], { type: 'text/csv' });
              const url = window.URL.createObjectURL(blob);
              const a = document.createElement('a');
              a.href = url;
              a.download = 'kmc_client_leads.csv';
              a.click();
            }}
            className="hover:text-gold-400 transition-colors"
            title="Download Client Leads (Admin)"
          >
            Admin Access
          </button>
        </div>
      </div>
    </footer>
  );
}
