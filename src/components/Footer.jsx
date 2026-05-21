import React from 'react';

function Footer() {
  const links = [
    { name: 'About Me', href: '#about' },
    { name: 'Specialties', href: '#specialties' },
    { name: 'Experience', href: '#experience' },
    { name: 'Success Stories', href: '#testimonials' },
    { name: 'Contact & Inquiries', href: '#contact' },
  ];

  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Column 1: Short Bio & Purpose */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-xl">🐾</span>
              <span className="font-extrabold text-lg tracking-tight text-white">
                Dr. Flack vet<span className="text-teal-400 font-medium text-xs ml-1">DVM</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Committed to providing evidence-based, compassionate medical and surgical care for companion animals. Elevating clinical standards daily.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2 text-sm">
              {links.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-teal-400 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Clinical Disclosures / Licensing */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider">Medical Licensing & Compliance</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              All clinical consultations, triage protocols, and surgical assessments are strictly registered under state veterinary board license regulations. Emergency services are run out of accredited hospital facilities.
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Dr. Flack vet, DVM. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#contact" className="hover:underline">Privacy Policy</a>
            <a href="#contact" className="hover:underline">Terms of Care</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;