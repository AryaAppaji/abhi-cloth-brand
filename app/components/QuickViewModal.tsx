"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Product } from "./Products";

interface QuickViewModalProps {
  product: Product;
  onClose: () => void;
  onAddToBag: (product: Product, size: string) => void;
}

export default function QuickViewModal({ product, onClose, onAddToBag }: QuickViewModalProps) {
  const [selectedSize, setSelectedSize] = useState<string | null>(product.sizes[0] || null);
  const [quickViewImageIndex, setQuickViewImageIndex] = useState(0);

  // Reset local state when product changes
  useEffect(() => {
    setSelectedSize(product.sizes[0] || null);
    setQuickViewImageIndex(0);
  }, [product]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs">
      {/* Modal Card */}
      <div className="relative bg-brand-offwhite max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col md:flex-row text-brand-darkgray animate-fade-in">
        
        {/* Left: Gallery Panel */}
        <div className="w-full md:w-1/2 relative bg-brand-warmgray aspect-[4/5] md:aspect-auto md:h-auto min-h-[300px]">
          <Image
            src={quickViewImageIndex === 0 ? product.image : product.hoverImage}
            alt={product.name}
            fill
            className="object-cover"
          />
          
          {/* Alternate view dots selector */}
          <div className="absolute bottom-4 inset-x-0 flex justify-center gap-2.5 z-10">
            <button
              onClick={() => setQuickViewImageIndex(0)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${quickViewImageIndex === 0 ? "bg-brand-accent scale-110" : "bg-white/40 hover:bg-white"}`}
              aria-label="View Image 1"
            />
            <button
              onClick={() => setQuickViewImageIndex(1)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${quickViewImageIndex === 1 ? "bg-brand-accent scale-110" : "bg-white/40 hover:bg-white"}`}
              aria-label="View Image 2"
            />
          </div>

          {/* Close Button overlay (Mobile) */}
          <button
            onClick={onClose}
            className="md:hidden absolute top-4 right-4 p-2 bg-brand-offwhite rounded-full text-brand-darkgray shadow-md focus:outline-none"
            aria-label="Close modal"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Right: Description & Buy Panel */}
        <div className="w-full md:w-1/2 p-8 sm:p-10 flex flex-col justify-between">
          
          {/* Top Details */}
          <div>
            <div className="flex justify-between items-baseline mb-3">
              <span className="text-[10px] tracking-[0.25em] font-semibold text-neutral-400 uppercase">
                {product.category}
              </span>
              {/* Close button (Desktop) */}
              <button
                onClick={onClose}
                className="hidden md:block p-1 text-neutral-400 hover:text-brand-darkgray transition-colors focus:outline-none"
                aria-label="Close modal"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <h3 className="text-2xl font-light tracking-wide text-brand-darkgray uppercase mb-1">
              {product.name}
            </h3>
            <span className="text-lg font-light text-neutral-600 block mb-6">
              ${product.price} USD
            </span>

            <p className="text-sm font-light text-neutral-600 leading-relaxed mb-6">
              {product.description}
            </p>

            {/* Subtext info */}
            <div className="p-4 bg-brand-warmgray/50 rounded-xs mb-6 text-xs text-neutral-500 font-light flex flex-col gap-1.5">
              <span className="font-semibold uppercase text-[9px] tracking-wider text-neutral-400">Composition & Care:</span>
              <span>{product.details}</span>
            </div>

            {/* Size Selector */}
            <div className="mb-8">
              <span className="text-xs font-semibold tracking-widest text-brand-darkgray uppercase block mb-3">
                Select Size
              </span>
              <div className="flex flex-wrap gap-2.5">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 text-xs font-semibold tracking-wider transition-all duration-300 border focus:outline-none ${
                      selectedSize === size
                        ? "bg-brand-darkgray text-white border-brand-darkgray"
                        : "bg-white text-neutral-700 border-neutral-200 hover:border-brand-darkgray hover:text-brand-darkgray"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Add to Cart Actions */}
          <div className="flex flex-col gap-3">
            <button
              onClick={() => selectedSize && onAddToBag(product, selectedSize)}
              disabled={!selectedSize}
              className="w-full bg-brand-darkgray text-white py-4 text-xs font-semibold tracking-widest uppercase hover:bg-brand-accent hover:text-brand-darkgray disabled:opacity-50 disabled:pointer-events-none transition-all duration-300"
            >
              {selectedSize ? `Add To Bag • $${product.price} USD` : "Select a Size"}
            </button>
            <span className="text-[10px] text-center text-neutral-400 tracking-wider">
              Secure checkout processed by Abhi Atelier.
            </span>
          </div>

        </div>

      </div>
    </div>
  );
}
