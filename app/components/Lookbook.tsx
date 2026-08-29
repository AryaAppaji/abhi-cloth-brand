"use client";

import Image from "next/image";
import { prefixPath } from "../utils/paths";

export default function Lookbook() {
  return (
    <section id="lookbook" className="py-24 sm:py-32 bg-brand-warmgray/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        <div className="max-w-xl mb-16" data-aos="fade-up">
          <span className="text-[10px] tracking-[0.3em] font-semibold text-neutral-400 uppercase block mb-2">
            06 / JOURNAL
          </span>
          <h2 className="text-3xl font-light tracking-[0.1em] uppercase text-brand-darkgray">
            Lookbook Spread
          </h2>
          <p className="text-sm font-light text-neutral-500 mt-2">
            Capturing quiet moments in natural environments. Light, fabric, and structure in focus.
          </p>
        </div>

        {/* Asymmetric Masonry / Editorial Image Grid */}
        <div className="grid grid-cols-12 gap-6 md:gap-8 items-start">
          
          {/* Image 1: Tall vertical (Left side) */}
          <div 
            className="col-span-12 md:col-span-5 relative aspect-[2/3] w-full overflow-hidden bg-neutral-200"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <Image
              src={prefixPath("/images/lookbook-1.jpg")}
              alt="Abhi Lookbook Autumn Editorial"
              fill
              className="object-cover transition-transform duration-700 ease-out hover:scale-103"
            />
            <div className="absolute bottom-6 left-6 text-white text-[10px] tracking-widest uppercase bg-black/30 px-3 py-1">
              Plate 014 / Pre-Fall
            </div>
          </div>

          {/* Right side group containing offset images */}
          <div className="col-span-12 md:col-span-7 grid grid-cols-12 gap-6 md:gap-8">
            
            {/* Image 2: Wide horizontal (Top right) */}
            <div 
              className="col-span-12 relative aspect-[3/2] w-full overflow-hidden bg-neutral-200"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1200"
            >
              <Image
                src={prefixPath("/images/lookbook-2.jpg")}
                alt="Abhi Atelier Studio Lookbook"
                fill
                className="object-cover transition-transform duration-700 ease-out hover:scale-103"
              />
              <div className="absolute bottom-6 left-6 text-white text-[10px] tracking-widest uppercase bg-black/30 px-3 py-1">
                Atelier / Detail View
              </div>
            </div>

            {/* Image 3: Square / Portrait offset (Bottom left of right side) */}
            <div 
              className="col-span-12 md:col-span-6 relative aspect-square w-full overflow-hidden bg-neutral-200"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1200"
            >
              <Image
                src={prefixPath("/images/prod-coat-hover.jpg")}
                alt="Abhi Linen Suit Editorial"
                fill
                className="object-cover transition-transform duration-700 ease-out hover:scale-103"
              />
              <div className="absolute bottom-6 left-6 text-white text-[10px] tracking-widest uppercase bg-black/30 px-3 py-1">
                Plate 019 / Texture
              </div>
            </div>

            {/* Image 4: Tall vertical (Bottom right of right side) */}
            <div 
              className="col-span-12 md:col-span-6 relative aspect-[3/4] w-full overflow-hidden bg-neutral-200 md:translate-y-12"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="1200"
            >
              <Image
                src={prefixPath("/images/prod-trousers-main.jpg")}
                alt="Abhi Trousers drape close up"
                fill
                className="object-cover transition-transform duration-700 ease-out hover:scale-103"
              />
              <div className="absolute bottom-6 left-6 text-white text-[10px] tracking-widest uppercase bg-black/30 px-3 py-1">
                Plate 022 / Fit
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
