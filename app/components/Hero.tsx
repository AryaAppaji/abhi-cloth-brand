"use client";

import Image from "next/image";

export default function Hero() {
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
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.jpg"
          alt="Abhi Editorial Campaign Hero"
          fill
          priority
          className="object-cover object-center scale-105 animate-subtle-zoom"
        />
        <div className="absolute inset-0 bg-black/40 z-10" />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 text-center text-white flex flex-col items-center">
        <span 
          className="text-[10px] sm:text-xs tracking-[0.4em] uppercase font-bold text-brand-accent mb-6 block"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          CAMPAIGN PRE-FALL 2026
        </span>
        <h1 
          className="text-5xl sm:text-7xl md:text-8xl font-extralight tracking-[0.18em] uppercase leading-none mb-8 select-none"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          ABHI
        </h1>
        <p 
          className="max-w-xl text-sm sm:text-base md:text-lg font-light tracking-[0.1em] text-neutral-200/90 leading-relaxed mb-12"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          Shaped by simplicity. Defined by character. A collection of architectural knitwear and organic tailoring.
        </p>
        
        <div 
          className="flex flex-col sm:flex-row items-center gap-6"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          <a
            href="#products"
            onClick={(e) => handleSmoothScroll(e, "products")}
            className="px-10 py-4 bg-white text-brand-darkgray text-xs font-semibold tracking-widest uppercase rounded-full hover:bg-brand-accent transition-all duration-300 hover:scale-[1.03]"
          >
            Shop Collection
          </a>
          <a
            href="#collections"
            onClick={(e) => handleSmoothScroll(e, "collections")}
            className="px-10 py-4 border border-white/40 text-white text-xs font-semibold tracking-widest uppercase rounded-full hover:bg-white/10 hover:border-white transition-all duration-300"
          >
            Explore
          </a>
        </div>
      </div>

      {/* Bottom Editorial Scroll Prompt */}
      <div className="absolute bottom-10 inset-x-0 z-20 text-center flex flex-col items-center justify-center text-white/50">
        <span className="text-[9px] tracking-[0.3em] uppercase mb-2">Scroll Down</span>
        <div className="w-[1px] h-12 bg-white/30 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-brand-accent animate-scroll-line" />
        </div>
      </div>
    </section>
  );
}
