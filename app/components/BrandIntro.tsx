"use client";

export default function BrandIntro() {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="about" className="py-24 sm:py-32 border-b border-neutral-200/40 bg-brand-offwhite overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Massive Slogan Statement */}
          <div className="lg:col-span-7" data-aos="fade-right" data-aos-duration="1200">
            <span className="text-[10px] tracking-[0.3em] font-semibold text-neutral-400 uppercase block mb-4">
              01 / PHILOSOPHY
            </span>
            <blockquote className="text-2xl sm:text-3xl md:text-4xl font-light leading-relaxed text-brand-darkgray italic tracking-wide">
              “We believe the clothing we wear should be a quiet sanctuary—a second skin that frames our character rather than masking it.”
            </blockquote>
          </div>

          {/* Right Column: Detailed Narrative */}
          <div 
            className="lg:col-span-5 flex flex-col gap-6 text-neutral-600 font-light text-sm sm:text-base leading-relaxed"
            data-aos="fade-left"
            data-aos-duration="1200"
            data-aos-delay="200"
          >
            <p>
              Abhi was born from a desire to strip away the noise of modern fashion and return to pure essentials. Our aesthetic is modern, minimalist, and uncompromised, prioritizing soft natural textures, anatomical ease, and a sophisticated color spectrum of sand, charcoal, stone, and bone.
            </p>
            <p>
              Every garment is meticulously developed in our atelier using hand-selected organic linen, Japanese raw denim, and Italian extra-fine merino yarn. We do not design for trends; we tailor for timeless existence.
            </p>
            <div className="pt-2">
              <a 
                href="#why-abhi"
                onClick={(e) => handleSmoothScroll(e, "why-abhi")}
                className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-brand-darkgray hover:text-brand-accent border-b border-brand-darkgray/30 hover:border-brand-accent pb-1 transition-all duration-300"
              >
                Discover Our Craftsmanship
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
