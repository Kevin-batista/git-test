import React, { useState, useEffect } from 'react';

// Reusable smooth count-up utility component
function AnimatedCounter({ target, duration = 1500, decimals = 0, suffix = "" }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime = null;
    const targetNumber = parseFloat(target);

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const progressPercentage = Math.min(progress / duration, 1);
      
      const easeProgress = progressPercentage * (2 - progressPercentage);
      
      const currentCount = easeProgress * targetNumber;
      setCount(currentCount);

      if (progress < duration) {
        requestAnimationFrame(animate);
      } else {
        setCount(targetNumber);
      }
    };

    requestAnimationFrame(animate);
  }, [target, duration]);

  return (
    <span>
      {count.toFixed(decimals)}
      {suffix}
    </span>
  );
}

function Hero() {
  // EASY ASSET CONFIGURATION
  // Paste your video and image URLs here. They can be web links or local project public paths.
  const mediaConfig = {
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-veterinarian-checking-a-puppy-41687-large.mp4", 
    doctorImageUrl: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=600"
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-teal-50 via-white to-emerald-50/40 py-20 lg:py-28 preserve-3d">
      {/* Dynamic Deep Ambient Orbs */}
      <div className="absolute top-12 right-12 -z-10 h-80 w-80 rounded-full bg-teal-200/40 blur-3xl animate-pulse duration-[6000ms]" />
      <div className="absolute bottom-12 left-12 -z-10 h-72 w-72 rounded-full bg-emerald-100/40 blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column Text Block */}
          <div className="space-y-8 lg:col-span-7 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-teal-500/10 to-emerald-500/10 border border-teal-500/20 text-teal-800 text-xs font-bold uppercase tracking-widest shadow-sm">
              ✨ Advanced Veterinary & Surgery
            </div>
            
            <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight leading-[1.15]">
              Compassionate Care, <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-emerald-600">
                Advanced Precision.
              </span>
            </h1>
            
            <p className="text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Providing specialized internal medicine, complex soft-tissue surgery, and responsive critical triage. Over 8 years of clinical excellence putting your pet's comfort and long-term health first.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
              <a 
                href="#contact" 
                className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-base font-bold rounded-2xl text-white bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 transition-all shadow-lg shadow-teal-600/20 hover:shadow-teal-700/30 transform hover:-translate-y-0.5"
              >
                Book Consultation
              </a>
              <a 
                href="#specialties" 
                className="inline-flex justify-center items-center px-8 py-4 border border-slate-200 text-base font-bold rounded-2xl text-slate-700 bg-white/80 backdrop-blur-md hover:bg-slate-50 transition-all shadow-sm hover:border-slate-300 transform hover:-translate-y-0.5"
              >
                View Specialties
              </a>
            </div>

            {/* Premium Metric Modules */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-200/80 max-w-md mx-auto lg:mx-0">
              <div className="group">
                <p className="text-3xl font-extrabold text-slate-900 group-hover:text-teal-600 transition-colors">
                  <AnimatedCounter target="1.5" decimals={1} suffix="k+" />
                </p>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Patients</p>
              </div>
              <div className="group">
                <p className="text-3xl font-extrabold text-teal-600">
                  <AnimatedCounter target="8" suffix="+ Yrs" />
                </p>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Experience</p>
              </div>
              <div className="group">
                <p className="text-3xl font-extrabold text-slate-900 group-hover:text-emerald-600 transition-colors">
                  <AnimatedCounter target="99.8" decimals={1} suffix="%" />
                </p>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Success Rate</p>
              </div>
            </div>
          </div>

          {/* Right Column: Split Video & Picture Canvas */}
          <div className="lg:col-span-5 flex justify-center perspective-3d">
            <div className="relative w-full max-w-md sm:max-w-xl transition-all duration-500 ease-out transform hover:rotate-y-6 hover:rotate-x-3 preserve-3d group">
              
              {/* Outer Deep Shadows Layer */}
              <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-tr from-teal-600 to-emerald-400 opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-500" />
              
              {/* Core Container Frame */}
              <div className="aspect-[4/3] sm:aspect-[16/11] w-full rounded-[2rem] bg-gradient-to-b from-white to-slate-50 border border-white p-4 shadow-2xl preserve-3d flex items-center justify-center relative backdrop-blur-xl">
                
                {/* 3D Floating Element 1: Top Left Award Badge */}
                <div className="absolute -top-6 -left-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-slate-100 z-20 transition-transform duration-500 group-hover:translate-z-30 group-hover:translate-x-2">
                  <div className="flex items-center gap-3">
                    <span className="p-2.5 rounded-xl bg-teal-50 text-xl">🏆</span>
                    <div>
                      <h4 className="font-black text-xs text-slate-800">Top Rated Vet</h4>
                      <p className="text-[10px] font-semibold text-slate-400">Clinical Excellence</p>
                    </div>
                  </div>
                </div>

                {/* 3D Floating Element 2: Bottom Right Triage Badge */}
                <div className="absolute -bottom-4 -right-6 bg-slate-900/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-slate-800 z-20 transition-transform duration-500 group-hover:translate-z-30 group-hover:-translate-x-2">
                  <p className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-400 mb-0.5">Live Status</p>
                  <p className="text-xs text-white font-bold flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping inline-block" />
                    Available for Emergency 
                  </p>
                </div>

                {/* Split Interactive Screen Core */}
                <div className="w-full h-full rounded-[1.5rem] overflow-hidden grid grid-cols-12 gap-2 bg-slate-100 group-hover:translate-z-10 transition-transform duration-500">
                  
                  {/* Media Part A: Embedded Video Module (7 cols wide) */}
                  <div className="col-span-7 relative h-full bg-slate-900 overflow-hidden">
                    <video 
                      src={mediaConfig.videoUrl}
                      autoPlay 
                      muted 
                      loop 
                      playsInline
                      className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute bottom-3 left-3 bg-slate-900/60 backdrop-blur-sm px-2.5 py-1 rounded-lg border border-white/10">
                      <p className="text-[9px] font-bold text-white tracking-wider uppercase flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
                        Clinical Reel
                      </p>
                    </div>
                  </div>

                  {/* Media Part B: Doctor Portrait Picture (5 cols wide) */}
                  <div className="col-span-5 relative h-full bg-slate-200 overflow-hidden">
                    <img 
                      src={mediaConfig.doctorImageUrl} 
                      alt="Dr. Kirui Portrait" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute bottom-3 left-3 bg-teal-900/80 backdrop-blur-sm px-2.5 py-1 rounded-lg border border-teal-500/20">
                      <p className="text-[9px] font-bold text-teal-200 tracking-wider uppercase">
                        Dr. Flack vet
                      </p>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;