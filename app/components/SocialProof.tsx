"use client";

export default function SocialProof() {
  const testimonials = [
    {
      id: 1,
      quote: "“The fabric quality is outstanding. The Sora Blazer has a heavy, satisfying knit drape that still feels incredibly airy in hot offices. It feels deliberate and beautifully quiet.”",
      author: "Eleanor V.",
      location: "New York"
    },
    {
      id: 2,
      quote: "“Abhi has completely simplified my mornings. Their Lune Linen Trousers fit beautifully and drape with an architectural flow. It feels premium and lasts through long flights without creasing horribly.”",
      author: "Marcus T.",
      location: "Copenhagen"
    },
    {
      id: 3,
      quote: "“Extremely responsive brand support and impeccable delivery presentation. The coat arrived wrapped in natural linen dust-jackets with a handwritten letter. That attention to detail is rare today.”",
      author: "Sora K.",
      location: "Tokyo"
    }
  ];

  return (
    <section className="py-24 sm:py-32 bg-brand-offwhite border-b border-neutral-200/40 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="text-[10px] tracking-[0.3em] font-semibold text-neutral-400 uppercase block mb-2">
            07 / VERDICTS
          </span>
          <h2 className="text-2xl font-light tracking-[0.1em] uppercase text-brand-darkgray">
            Quiet Reflections
          </h2>
        </div>

        {/* Minimal quotes column stack */}
        <div className="flex flex-col gap-16 md:gap-24">
          {testimonials.map((test, index) => (
            <div 
              key={test.id} 
              className="flex flex-col items-center text-center max-w-3xl mx-auto"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <p className="text-lg sm:text-xl font-light text-brand-darkgray leading-relaxed italic">
                {test.quote}
              </p>
              <div className="mt-6 flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
                <span className="text-xs font-semibold tracking-widest uppercase text-brand-darkgray">{test.author}</span>
                <span className="text-xs text-neutral-400 tracking-wider">/ {test.location}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
