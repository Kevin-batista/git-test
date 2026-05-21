import React from 'react';

function Specialties() {
  const specialtiesData = [
    { id: 1, icon: '🩺', title: 'Internal Medicine', description: 'Advanced diagnosis and management of complex chronic conditions, endocrine disorders, and gastrointestinal diseases.' },
    { id: 2, icon: '✂️', title: 'Soft Tissue & Ortho Surgery', description: 'Performing precise surgical interventions ranging from routine procedures to complex fracture repairs and tumor removals.' },
    { id: 3, icon: '🩻', title: 'Diagnostic Imaging', description: 'In-house high-resolution digital radiography (X-rays) and ultrasound monitoring for accurate, real-time internal evaluations.' },
    { id: 4, icon: '🦷', title: 'Veterinary Dentistry', description: 'Comprehensive oral health assessments, digital dental X-rays, ultrasonic scaling, and surgical extractions.' },
    { id: 5, icon: '🚨', title: 'Emergency & Critical Care', description: 'Rapid triaging, stabilization, and intensive care tracking for trauma, toxicities, and acute critical illnesses.' },
    { id: 6, icon: '🦜', title: 'Exotic Pet Medicine', description: 'Specialized healthcare, husbandry consulting, and tailored treatment plans for avian, reptile, and small mammal patients.' }
  ];

  return (
    <section id="specialties" className="py-24 bg-gradient-to-b from-white to-slate-50/50 preserve-3d">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-black text-slate-900 tracking-tight sm:text-5xl">
            Clinical Specialties
          </h2>
          <div className="h-1.5 w-20 bg-gradient-to-r from-teal-500 to-emerald-500 mx-auto mt-4 rounded-full" />
          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            Providing comprehensive veterinary medicine utilizing modern medical equipment and evidence-based treatment strategies.
          </p>
        </div>

        {/* 3D Responsive Grid Setup */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 preserve-3d">
          {specialtiesData.map((specialty) => (
            <div 
              key={specialty.id} 
              className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-teal-900/5 transition-all duration-300 ease-out transform hover:-translate-y-2 preserve-3d group cursor-pointer"
            >
              {/* Volumetric Icon Container Frame */}
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-50 to-emerald-50 text-3xl flex items-center justify-center mb-6 group-hover:from-teal-600 group-hover:to-emerald-600 group-hover:text-white group-hover:scale-110 shadow-inner group-hover:shadow-lg group-hover:shadow-teal-600/20 transition-all duration-300 transform group-hover:translate-z-20">
                {specialty.icon}
              </div>
              
              {/* Text Layered Blocks with translate-z configurations */}
              <h3 className="text-xl font-extrabold text-slate-900 mb-3 group-hover:text-teal-600 transition-colors group-hover:translate-z-10">
                {specialty.title}
              </h3>
              
              <p className="text-slate-600 text-sm leading-relaxed">
                {specialty.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Specialties;