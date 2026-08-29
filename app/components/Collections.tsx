"use client";

import Image from "next/image";

export default function Collections() {
  return (
    <section id="collections" className="py-24 sm:py-32 bg-brand-warmgray/40 border-b border-neutral-200/40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 gap-4" data-aos="fade-up">
          <div>
            <span className="text-[10px] tracking-[0.3em] font-semibold text-neutral-400 uppercase block mb-2">
              02 / ARCHIVES
            </span>
            <h2 className="text-3xl font-light tracking-[0.1em] uppercase text-brand-darkgray">
              Curated Collections
            </h2>
          </div>
          <p className="text-sm text-neutral-500 font-light max-w-sm">
            Discover cohesive wardrobe narratives built with consistent fiber weights and color harmonies.
          </p>
        </div>

        {/* Asymmetrical 3-Column Collection Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          
          {/* Collection 1 */}
          <div 
            className="group cursor-pointer flex flex-col md:translate-y-4 transition-all duration-700"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-200">
              <Image
                src="/images/collection-linen.jpg"
                alt="The Linen Series"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-black/10 transition-colors duration-500 group-hover:bg-black/25" />
              <div className="absolute top-6 left-6">
                <span className="text-[10px] font-semibold tracking-widest text-white uppercase bg-black/30 px-3 py-1.5 backdrop-blur-xs">
                  Summer / Fall
                </span>
              </div>
            </div>
            <div className="mt-6 flex justify-between items-baseline">
              <div>
                <span className="text-[9px] tracking-widest text-neutral-400 font-semibold uppercase block mb-1">01</span>
                <h3 className="text-lg font-light tracking-wide text-brand-darkgray uppercase group-hover:text-brand-accent transition-colors duration-300">
                  The Linen Series
                </h3>
              </div>
              <span className="text-xs font-semibold text-brand-darkgray tracking-widest group-hover:translate-x-1 transition-transform duration-300">
                Explore →
              </span>
            </div>
          </div>

          {/* Collection 2 */}
          <div 
            className="group cursor-pointer flex flex-col md:-translate-y-4 transition-all duration-700"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-200">
              <Image
                src="/images/collection-knits.jpg"
                alt="Sculpted Knits"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-black/10 transition-colors duration-500 group-hover:bg-black/25" />
              <div className="absolute top-6 left-6">
                <span className="text-[10px] font-semibold tracking-widest text-white uppercase bg-black/30 px-3 py-1.5 backdrop-blur-xs">
                  Soft Volume
                </span>
              </div>
            </div>
            <div className="mt-6 flex justify-between items-baseline">
              <div>
                <span className="text-[9px] tracking-widest text-neutral-400 font-semibold uppercase block mb-1">02</span>
                <h3 className="text-lg font-light tracking-wide text-brand-darkgray uppercase group-hover:text-brand-accent transition-colors duration-300">
                  Sculpted Knits
                </h3>
              </div>
              <span className="text-xs font-semibold text-brand-darkgray tracking-widest group-hover:translate-x-1 transition-transform duration-300">
                Explore →
              </span>
            </div>
          </div>

          {/* Collection 3 */}
          <div 
            className="group cursor-pointer flex flex-col md:translate-y-8 transition-all duration-700"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-200">
              <Image
                src="/images/collection-tailoring.jpg"
                alt="Everyday Tailoring"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-black/10 transition-colors duration-500 group-hover:bg-black/25" />
              <div className="absolute top-6 left-6">
                <span className="text-[10px] font-semibold tracking-widest text-white uppercase bg-black/30 px-3 py-1.5 backdrop-blur-xs">
                  Structured Fluidity
                </span>
              </div>
            </div>
            <div className="mt-6 flex justify-between items-baseline">
              <div>
                <span className="text-[9px] tracking-widest text-neutral-400 font-semibold uppercase block mb-1">03</span>
                <h3 className="text-lg font-light tracking-wide text-brand-darkgray uppercase group-hover:text-brand-accent transition-colors duration-300">
                  Everyday Tailoring
                </h3>
              </div>
              <span className="text-xs font-semibold text-brand-darkgray tracking-widest group-hover:translate-x-1 transition-transform duration-300">
                Explore →
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
