"use client";

import Image from "next/image";

export default function Editorial() {
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
    <section className="relative h-[80vh] min-h-[500px] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/editorial.jpg"
          alt="Abhi Lifestyle Editorial"
          fill
          className="object-cover object-center grayscale contrast-110"
        />
        <div className="absolute inset-0 bg-neutral-900/40 z-10" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-12">
        <div className="lg:col-span-6 text-white flex flex-col justify-center items-start">
          <span 
            className="text-[10px] tracking-[0.4em] font-semibold text-brand-accent uppercase mb-4"
            data-aos="fade-right"
          >
            04 / EDITORIAL MOVEMENT
          </span>
          <h2 
            className="text-3xl sm:text-5xl font-extralight tracking-[0.15em] uppercase leading-tight mb-6"
            data-aos="fade-right"
            data-aos-delay="150"
          >
            Garments in Motion
          </h2>
          <p 
            className="text-sm sm:text-base font-light tracking-[0.08em] text-neutral-200 leading-relaxed mb-8 max-w-md"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            We design patterns that move dynamically with the stride, allowing fluid wind passage and maintaining structural silhouettes under light, natural dynamics.
          </p>
          <a
            href="#lookbook"
            onClick={(e) => handleSmoothScroll(e, "lookbook")}
            className="px-8 py-3.5 border border-white/50 text-white text-xs font-semibold tracking-widest uppercase hover:bg-brand-accent hover:text-brand-darkgray hover:border-brand-accent transition-all duration-300"
            data-aos="fade-right"
            data-aos-delay="450"
          >
            View Lookbook Spread
          </a>
        </div>
      </div>
    </section>
  );
}
