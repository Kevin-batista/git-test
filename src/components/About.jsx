import React from 'react';

function About() {
  const credentials = [
    { degree: "Doctor of Veterinary Medicine (DVM)", school: "Nairobi University", year: "2018" },
    { degree: "Bachelor of Science in Animal Sciences", school: "Nairobi University", year: "2021" },
    { degree: "B.S. in Animal Sciences", school: "University Of Nairobi", year: "2014" }
  ];

  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Biography & Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight sm:text-4xl">
              Meet Dr. Flavius Kirui
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              My journey into veterinary medicine began with a simple belief: every animal deserves access to precise, high-standard medical treatment balanced with unconditional empathy. Over the last decade, I have dedicated myself to mastering both advanced surgical techniques and complex internal clinical diagnostics.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Whether handling a delicate soft-tissue operation or navigating an overnight emergency triage, my priority remains the safety of the patient and providing transparent, supportive communication to pet owners during high-stress moments.
            </p>
            
            {/* Core Values Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex gap-3">
                <span className="text-teal-600 font-bold">✓</span>
                <div>
                  <h4 className="font-semibold text-slate-900">Patient-First Care</h4>
                  <p className="text-sm text-slate-500">Minimizing patient stress using fear-free clinical handling practices.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-teal-600 font-bold">✓</span>
                <div>
                  <h4 className="font-semibold text-slate-900">Evidence-Based</h4>
                  <p className="text-sm text-slate-500">Treatments strictly rooted in modern veterinary research and data.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Formal Education & Accreditations */}
          <div className="lg:col-span-5 bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              🎓 Academic Foundations
            </h3>
            <div className="space-y-6">
              {credentials.map((edu, idx) => (
                <div key={idx} className="relative pl-6 border-l-2 border-slate-200 last:border-0 pb-1">
                  {/* Small absolute node decoration */}
                  <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-slate-400" />
                  <span className="text-xs font-semibold text-teal-600 block mb-0.5">{edu.year}</span>
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base leading-snug">{edu.degree}</h4>
                  <p className="text-xs sm:text-sm text-slate-500 mt-0.5">{edu.school}</p>
                </div>
              ))}
            </div>

            {/* Affiliations / Badges */}
            <div className="mt-8 pt-6 border-t border-slate-200/60">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Professional Memberships</h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-2.5 py-1 text-xs bg-white rounded-md border border-slate-200 font-medium text-slate-600">AVMA Member</span>
                <span className="px-2.5 py-1 text-xs bg-white rounded-md border border-slate-200 font-medium text-slate-600">AAHA Accredited</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;