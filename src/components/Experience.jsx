import React from 'react';

function Experience() {
  const timelineData = [
    {
      id: 1,
      period: '2023 - Present',
      role: 'Senior Veterinary Surgeon',
      organization: 'Metropolitan Animal Hospital',
      details: 'Leading soft-tissue surgical interventions and managing complex internal medicine cases. Mentoring junior residents and overseeing the installation of modern diagnostic ultrasound units.'
    },
    {
      id: 2,
      period: '2020 - 2023',
      role: 'Emergency Veterinarian',
      organization: 'Valley Veterinary Emergency & Critical Care',
      details: 'Managed high-stress triage, trauma response, and critical care stabilization during overnight and weekend shifts. Handled acute toxicities and emergency surgical operations.'
    },
    {
      id: 3,
      period: '2018 - 2020',
      role: 'Veterinary Resident (Internal Medicine)',
      organization: 'University Teaching Hospital',
      details: 'Completed an intensive residency program focusing on advanced veterinary pharmacology, diagnostic imaging, and endocrinology research.'
    }
  ];

  return (
    <section id="experience" className="py-16 bg-slate-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight sm:text-4xl">
            Clinical Experience & Milestones
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            A chronological timeline of my clinical practice, specialized residencies, and contributions to veterinary care.
          </p>
        </div>

        {/* Timeline Structure */}
        <div className="relative border-l-2 border-teal-200 ml-4 md:ml-32 space-y-12">
          {timelineData.map((item) => (
            <div key={item.id} className="relative">
              
              {/* Timeline Dot Indicator */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-teal-600 border-4 border-white shadow-sm" />

              {/* Time Block (Positioned left on desktop) */}
              <div className="md:absolute md:-left-32 md:top-1 md:w-24 md:text-right">
                <span className="text-sm font-bold text-teal-600 bg-teal-50 px-2.5 py-1 rounded-md inline-block md:bg-transparent md:p-0">
                  {item.period}
                </span>
              </div>

              {/* Card Body Content */}
              <div className="ml-6 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm max-w-3xl">
                <h3 className="text-xl font-bold text-slate-900">
                  {item.role}
                </h3>
                <p className="text-sm font-semibold text-slate-500 mt-0.5 mb-3">
                  {item.organization}
                </p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.details}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Experience;