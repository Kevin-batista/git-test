import React from 'react';

function Testimonials() {
  const reviews = [
    {
      id: 1,
      quote: "Dr. Kirui saved My cow after an unexpected emergency bone obstruction. The surgical precision, late-night text updates, and sheer empathy shown during the process were unmatched.",
      author: "Sarah Atieno",
      role: "Farmer (Friesian)",
      badge: "Emergency Surgery"
    },
    {
      id: 2,
      quote: "Dr. Flavius Kirui's deep understanding of feline internal medicine completely transformed how we manage our senior cat's chronic renal condition. Highly analytical yet deeply gentle.",
      author: "David rono",
      role: "Pet Parent (Luna, Siamese Cat)",
      badge: "Chronic Internal Medicine"
    },
    {
      id: 3,
      quote: "Having collaborated on complex orthopedic cases, I can confidently verify Dr. Morgan's precise clinical diagnostics and impeccable surgical protocols. A highly trusted asset to the veterinary community.",
      author: "Dr. Robert omondi simon, DVM, DACVS",
      role: "Chief of Veterinary Surgery at VRCC",
      badge: "Peer Endorsement"
    }
  ];

  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight sm:text-4xl">
            Patient Success Stories & Reviews
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Hear from families and clinical colleagues who have trusted my medical judgment and surgical care.
          </p>
        </div>

        {/* Testimonials Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((item) => (
            <div 
              key={item.id} 
              className="flex flex-col justify-between p-6 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm relative"
            >
              {/* Large quote marks accent */}
              <span className="absolute top-4 right-6 text-6xl text-teal-200/50 font-serif pointer-events-none">“</span>
              
              <div className="relative z-10">
                {/* Specific clinical track tag */}
                <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-2.5 py-0.5 rounded-full mb-4">
                  {item.badge}
                </span>
                
                <p className="text-slate-600 text-sm sm:text-base italic leading-relaxed mb-6">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Footer info */}
              <div className="pt-4 border-t border-slate-200/60 mt-auto">
                <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                  {item.author}
                </h4>
                <p className="text-xs text-slate-500 mt-0.5">
                  {item.role}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Testimonials;