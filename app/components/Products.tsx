"use client";

import Image from "next/image";
import { prefixPath } from "../utils/paths";

export interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  details: string;
  price: number;
  image: string;
  hoverImage: string;
  sizes: string[];
}

interface ProductsProps {
  products: Product[];
  onQuickView: (product: Product) => void;
}

export default function Products({ products, onQuickView }: ProductsProps) {
  return (
    <section id="products" className="py-24 sm:py-32 bg-brand-offwhite overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-16" data-aos="fade-up">
          <div>
            <span className="text-[10px] tracking-[0.3em] font-semibold text-neutral-400 uppercase block mb-2">
              03 / THE EDITIONS
            </span>
            <h2 className="text-3xl font-light tracking-[0.1em] uppercase text-brand-darkgray">
              Featured Wardrobe
            </h2>
          </div>
          <div className="mt-4 md:mt-0">
            <span className="text-xs font-semibold tracking-widest text-brand-darkgray bg-brand-accent px-4 py-2 uppercase rounded-full">
              Free Worldwide Shipping
            </span>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {products.map((product, index) => (
            <div 
              key={product.id} 
              className="group flex flex-col"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              
              {/* Image Container with Double Hover Swap & Slide-up Quick View */}
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-brand-warmgray">
                
                {/* Primary Image */}
                <Image
                  src={prefixPath(product.image)}
                  alt={product.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-opacity duration-700 ease-in-out group-hover:opacity-0"
                />
                
                {/* Hover Image */}
                <Image
                  src={prefixPath(product.hoverImage)}
                  alt={`${product.name} Alternate View`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover absolute inset-0 opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-100 scale-100 group-hover:scale-102"
                />

                {/* Top-left collection label */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="text-[9px] font-bold tracking-widest uppercase text-brand-darkgray bg-brand-offwhite px-2.5 py-1">
                    {product.category.split(" ")[0]}
                  </span>
                </div>

                {/* Quick View slide-up overlay */}
                <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out bg-linear-to-t from-black/45 to-transparent z-20">
                  <button
                    onClick={() => onQuickView(product)}
                    className="w-full bg-brand-offwhite text-brand-darkgray py-3 text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-brand-accent transition-colors duration-300"
                  >
                    Quick View
                  </button>
                </div>
              </div>

              {/* Details */}
              <div className="mt-4 flex flex-col gap-1.5">
                <div className="flex justify-between items-baseline">
                  <h3 className="text-sm font-semibold tracking-wide text-brand-darkgray uppercase">
                    {product.name}
                  </h3>
                  <span className="text-sm font-light text-neutral-500">
                    ${product.price} USD
                  </span>
                </div>
                <p className="text-xs text-neutral-400 font-light line-clamp-1 italic">
                  {product.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
