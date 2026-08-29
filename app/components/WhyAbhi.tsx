"use client";

export default function WhyAbhi() {
  const differentiators = [
    {
      id: 1,
      title: "Thoughtful Design",
      desc: "Patterns designed using anatomical mapping to guarantee organic drapes that conform seamlessly to natural human silhouettes.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Premium Fabrics",
      desc: "100% traceably sourced natural fibers: Belgian flax linens, extra-long staple organic cotton, and zero-waste merino wool.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122A3 3 0 00.75 18v1.5H22V18a3 3 0 00-8.78-1.878M9.53 16.122a6 6 0 017.94 0M9.53 16.122a3 3 0 003.72 0M12 3v13.5M9.75 5.25h4.5m-4.5 3h4.5m-4.5 3h4.5" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Everyday Wear",
      desc: "Breathable yarns and relaxed structure, crafted to transition effortlessly between professional workspaces and personal leisure.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1.5M12 18.75V21m-7.5-9h1.5m13.5 0h1.5m-2.1-6.3l-1.05 1.05M6.6 17.4l-1.05 1.05m12.8 0l-1.05-1.05M6.6 6.6l-1.05-1.05M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      id: 4,
      title: "Attention to Detail",
      desc: "Finished with clean, double-needle lock seams, natural biodegradable horn buttons, and bias-bound inner borders.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.375 7.5L12 3.75m0 0L8.625 7.5M12 3.75V21M3 8.25h18M3 15.75h18" />
        </svg>
      )
    }
  ];

  return (
    <section id="why-abhi" className="py-24 sm:py-32 bg-brand-offwhite border-b border-neutral-200/40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        <div className="text-center max-w-2xl mx-auto mb-20" data-aos="fade-up">
          <span className="text-[10px] tracking-[0.3em] font-semibold text-neutral-400 uppercase block mb-2">
            05 / CORE VALUES
          </span>
          <h2 className="text-3xl font-light tracking-[0.1em] uppercase text-brand-darkgray">
            Honorable Distinctions
          </h2>
          <p className="text-sm font-light text-neutral-500 mt-4 leading-relaxed">
            Every detail, thread density, and cut is engineered to provide an premium everyday wear experience.
          </p>
        </div>

        {/* Differentiators Grid (4 Column) */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-16">
          {differentiators.map((diff, index) => (
            <div 
              key={diff.id} 
              className="flex flex-col items-start gap-4"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="p-3 bg-brand-warmgray rounded-full text-brand-darkgray">
                {diff.icon}
              </div>
              <h3 className="text-base font-semibold tracking-wide text-brand-darkgray uppercase mt-2">
                {diff.title}
              </h3>
              <p className="text-sm font-light text-neutral-500 leading-relaxed">
                {diff.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
