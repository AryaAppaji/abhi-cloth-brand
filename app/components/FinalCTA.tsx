"use client";

import Image from "next/image";

export default function FinalCTA() {
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
    <section className="relative py-32 sm:py-48 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/prod-blazer-main.jpg"
          alt="Abhi Finale Image"
          fill
          className="object-cover object-center grayscale contrast-[1.08] saturate-50"
        />
        <div className="absolute inset-0 bg-neutral-950/50 z-10" />
      </div>

      <div 
        className="relative z-20 text-center px-6 max-w-xl text-white"
        data-aos="zoom-in"
        data-aos-duration="1200"
      >
        <span className="text-[10px] tracking-[0.4em] font-semibold text-brand-accent uppercase block mb-4">
          08 / CONCLUSION
        </span>
        <h2 className="text-4xl sm:text-5xl font-extralight tracking-[0.15em] uppercase mb-8 leading-tight">
          Own the Essentials
        </h2>
        <p className="text-xs sm:text-sm text-neutral-300 font-light tracking-wide leading-relaxed mb-10">
          Secure signature releases from our small-batch collections. Once sold out, these silhouettes are archived indefinitely.
        </p>
        <a
          href="#products"
          onClick={(e) => handleSmoothScroll(e, "products")}
          className="inline-block bg-brand-accent text-brand-darkgray px-12 py-4 text-xs font-semibold tracking-widest uppercase rounded-full hover:bg-white hover:text-brand-darkgray transition-all duration-300 hover:scale-105"
        >
          Shop Abhi
        </a>
      </div>
    </section>
  );
}
