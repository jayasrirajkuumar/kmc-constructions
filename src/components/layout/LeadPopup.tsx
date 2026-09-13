import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export default function LeadPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    // Check if user already saw/submitted the popup in this session
    const hasSeenPopup = sessionStorage.getItem('kmc_lead_popup_seen');
    
    if (!hasSeenPopup) {
      // Show popup after 3 seconds
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Save to local storage for "Excel" download
    const existingLeads = JSON.parse(localStorage.getItem('kmc_leads') || '[]');
    const newLead = {
      date: new Date().toLocaleDateString(),
      name,
      phone
    };
    localStorage.setItem('kmc_leads', JSON.stringify([...existingLeads, newLead]));
    
    setIsSubmitted(true);
    
    // Close after showing thank you message
    setTimeout(() => {
      handleClose();
    }, 2000);
  };

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('kmc_lead_popup_seen', 'true');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-sage-900/90 backdrop-blur-sm" onClick={handleClose}></div>
      
      <div className="relative bg-ivory-100 w-full max-w-md p-8 rounded-sm shadow-2xl animate-fade-in">
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 text-sage-900/50 hover:text-sage-900 transition-colors"
        >
          <X size={24} />
        </button>

        {isSubmitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-gold-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-gold-600 text-2xl">✓</span>
            </div>
            <h3 className="font-serif text-3xl text-sage-900 mb-2 font-bold">Thank You!</h3>
            <p className="text-sage-800/70">We will contact you shortly.</p>
          </div>
        ) : (
          <>
            <div className="text-center mb-8">
              <span className="inline-block uppercase tracking-[0.2em] text-xs font-semibold text-gold-600 mb-2">Welcome</span>
              <h3 className="font-serif text-3xl text-sage-900 font-bold leading-tight">
                Looking to Build?
              </h3>
              <p className="text-sage-800/70 mt-2 text-sm">
                Leave your details below and our experts will get back to you with a free consultation.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs uppercase tracking-widest text-sage-900/70 mb-2 font-semibold">
                  Name
                </label>
                <input 
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-white border border-sage-900/20 px-4 py-3 text-sage-900 focus:outline-none focus:border-gold-500 rounded-sm transition-colors"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-sage-900/70 mb-2 font-semibold">
                  Phone Number
                </label>
                <input 
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-white border border-sage-900/20 px-4 py-3 text-sage-900 focus:outline-none focus:border-gold-500 rounded-sm transition-colors"
                  placeholder="Enter your mobile number"
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-gold-600 hover:bg-gold-500 text-charcoal font-bold uppercase tracking-wider text-sm py-4 rounded-sm transition-colors mt-4 shadow-lg shadow-gold-500/20"
              >
                Request Call Back
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
