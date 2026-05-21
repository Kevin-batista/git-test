import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', petType: 'Dog Patient', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();

    // 1. Target phone number in full international format (Kenya +254)
    const phoneNumber = '254713405850';

    // 2. Format the form data into a clean, bolded list for WhatsApp
    const whatsappMessage = `Hi Dr. Kirui, I'd like to submit a clinical inquiry:
- *Name:* ${formData.name}
- *Email:* ${formData.email}
- *Patient/Case:* ${formData.petType}
- *Details:* ${formData.message}`;

    // 3. Safely URL-encode spaces and special characters
    const encodedMessage = encodeURIComponent(whatsappMessage);

    // 4. Fire open WhatsApp directly with the compiled message
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');

    // Optional: Clear form inputs after redirection
    setFormData({ name: '', email: '', petType: 'Dog Patient', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-slate-50 to-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-black text-slate-900 tracking-tight sm:text-5xl">
            Get In Touch
          </h2>
          <div className="h-1.5 w-16 bg-gradient-to-r from-teal-500 to-emerald-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Block: Emergency Notice Panel with Dual Actions */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 bg-gradient-to-br from-rose-50 to-rose-100/50 border border-rose-200/60 rounded-[2rem] shadow-xl relative overflow-hidden group">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-rose-500/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700" />
              
              <h3 className="text-rose-900 font-black text-lg flex items-center gap-2 mb-3">
                🚨 Emergency Triage Notice
              </h3>
              
              <p className="text-rose-700 text-sm leading-relaxed mb-6">
                If your animal companion requires acute emergency procedures, stabilization, or has ingested toxins, use either rapid contact method below to bypass standard digital communication queues immediately.
              </p>
              
              {/* Responsive dual-button container */}
              <div className="flex flex-col sm:flex-row gap-3">
                {/* 1. Direct Voice Call Link */}
                <a 
                  href="tel:+254713405850" 
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-4 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-2xl text-center text-sm shadow-lg shadow-rose-600/20 hover:shadow-rose-600/30 transition-all transform hover:-translate-y-0.5 focus:outline-none"
                >
                  <span>📞</span> Call Direct Line
                </a>

                {/* 2. Urgent Emergency WhatsApp Link */}
                <a 
                  href="https://wa.me/254713405850?text=🚨%20EMERGENCY:%20I%20have%20an%20urgent%20case%20and%20need%20immediate%20assistance!" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-2xl text-center text-sm shadow-lg shadow-emerald-600/20 hover:shadow-emerald-700/30 transition-all transform hover:-translate-y-0.5 focus:outline-none"
                >
                  <span>💬</span> Urgent WhatsApp
                </a>
              </div>
            </div>

            {/* General Practice Info Module */}
            <div className="p-8 bg-white border border-slate-100 rounded-[2rem] shadow-xl shadow-slate-900/[0.02] space-y-6">
              <h4 className="font-extrabold text-slate-900 text-lg">Practice Disclosures</h4>
              <div className="space-y-4 text-sm text-slate-600">
                <div className="flex gap-4 items-start">
                  <span className="p-2 rounded-xl bg-slate-50 text-teal-600">📍</span>
                  <p className="pt-1">Kericho hospital vet<br /><span className="text-slate-400 text-xs">Kericho chebangang, Nairobi</span></p>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="p-2 rounded-xl bg-slate-50 text-teal-600">✉️</span>
                  <p className="pt-2">kiruiflavus4@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Block: Input Form Panel */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-[2rem] border border-slate-100 shadow-2xl shadow-slate-900/[0.03]">
            <h3 className="text-2xl font-black text-slate-900 mb-8">Send a Clinical Inquiry</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2.5">Your Name</label>
                  <input 
                    type="text" required value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-5 py-3.5 border border-slate-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-teal-500/10 focus:border-teal-600 bg-slate-50/50 transition-all text-sm"
                    placeholder="Jane Doe"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2.5">Email Address</label>
                  <input 
                    type="email" required value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-5 py-3.5 border border-slate-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-teal-500/10 focus:border-teal-600 bg-slate-50/50 transition-all text-sm"
                    placeholder="jane@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2.5">Patient / Case Classification</label>
                <select 
                  value={formData.petType}
                  onChange={(e) => setFormData({...formData, petType: e.target.value})}
                  className="w-full px-5 py-3.5 border border-slate-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-teal-500/10 focus:border-teal-600 bg-slate-50/50 transition-all text-sm appearance-none cursor-pointer"
                >
                  <option value="Dog Patient">Dog Patient</option>
                  <option value="Cat Patient">Cat Patient</option>
                  <option value="Exotic Species">Exotic Species</option>
                  <option value="Professional Peer Collaboration">Professional Peer Collaboration</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2.5">Inquiry Details</label>
                <textarea 
                  rows="4" required value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-5 py-3.5 border border-slate-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-teal-500/10 focus:border-teal-600 bg-slate-50/50 transition-all text-sm resize-none"
                  placeholder="Detail symptoms, historical case data, or diagnostic charts..."
                />
              </div>

              <button 
                type="submit"
                className="w-full py-4 px-6 bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white font-bold rounded-2xl text-center shadow-lg shadow-teal-600/20 hover:shadow-teal-700/30 transition-all transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
              >
                Submit Consultation Inquiry
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;