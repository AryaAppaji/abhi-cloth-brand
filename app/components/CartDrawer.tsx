"use client";

import Image from "next/image";
import { Product } from "./Products";

export interface CartItem {
  product: Product;
  size: string;
  quantity: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  items: CartItem[];
  onClose: () => void;
  onRemove: (index: number) => void;
  onCheckout: () => void;
  onBrowseClick: () => void;
}

export default function CartDrawer({
  isOpen,
  items,
  onClose,
  onRemove,
  onCheckout,
  onBrowseClick
}: CartDrawerProps) {
  const subtotal = items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  return (
    <div
      className={`fixed inset-0 z-50 transition-opacity duration-500 bg-black/60 backdrop-blur-xs ${
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
      onClick={onClose}
    >
      {/* Cart Drawer Shell */}
      <div
        className={`absolute right-0 top-0 bottom-0 max-w-md w-full bg-brand-offwhite shadow-2xl p-6 sm:p-8 flex flex-col justify-between transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div>
          <div className="flex justify-between items-center pb-6 border-b border-neutral-200/50">
            <h4 className="text-sm font-semibold tracking-widest text-brand-darkgray uppercase flex items-center gap-2">
              <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5h6.75" />
              </svg>
              Shopping Bag ({items.length})
            </h4>
            <button
              onClick={onClose}
              className="p-1.5 text-neutral-400 hover:text-brand-darkgray transition-colors focus:outline-none"
              aria-label="Close cart"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Cart Items List */}
          {items.length === 0 ? (
            <div className="py-20 flex flex-col items-center justify-center text-center">
              <p className="text-sm text-neutral-400 font-light mb-6">
                Your bag is currently empty.
              </p>
              <button
                onClick={onBrowseClick}
                className="px-8 py-3 bg-brand-darkgray text-white text-[10px] font-bold tracking-widest uppercase hover:bg-brand-accent hover:text-brand-darkgray transition-colors duration-300 cursor-pointer"
              >
                Browse Essentials
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-6 py-6 overflow-y-auto max-h-[60vh]">
              {items.map((item, index) => (
                <div key={`${item.product.id}-${item.size}`} className="flex gap-4 border-b border-neutral-100 pb-4">
                  {/* Item Image */}
                  <div className="relative w-16 h-20 bg-neutral-100 flex-shrink-0">
                    <Image
                      src={item.product.image}
                      alt={item.product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  {/* Item Info */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <h5 className="text-xs font-semibold tracking-wide text-brand-darkgray uppercase">
                          {item.product.name}
                        </h5>
                        <button
                          onClick={() => onRemove(index)}
                          className="text-neutral-400 hover:text-red-500 text-[10px] tracking-wider uppercase font-medium focus:outline-none cursor-pointer"
                        >
                          Remove
                        </button>
                      </div>
                      <span className="text-[10px] text-neutral-400 font-semibold tracking-widest uppercase block mt-0.5">
                        Size: {item.size} • Qty: {item.quantity}
                      </span>
                    </div>
                    <span className="text-xs font-bold text-brand-darkgray block mt-2">
                      ${item.product.price * item.quantity} USD
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Subtotal & Checkout */}
        {items.length > 0 && (
          <div className="pt-6 border-t border-neutral-200/50 flex flex-col gap-4">
            <div className="flex justify-between items-baseline">
              <span className="text-xs font-semibold tracking-widest text-brand-darkgray uppercase">
                Subtotal
              </span>
              <span className="text-base font-bold text-brand-darkgray">
                ${subtotal} USD
              </span>
            </div>
            <p className="text-[10px] text-neutral-400 tracking-wider">
              Shipping, duties, and taxes calculated at checkout.
            </p>
            
            <div className="flex flex-col gap-2 mt-2">
              <button
                onClick={onCheckout}
                className="w-full bg-brand-darkgray text-white py-4 text-xs font-semibold tracking-widest uppercase hover:bg-brand-accent hover:text-brand-darkgray transition-all duration-300 cursor-pointer"
              >
                Proceed to Checkout
              </button>
              <button
                onClick={onClose}
                className="w-full py-3 text-[10px] font-bold tracking-widest text-neutral-400 hover:text-brand-darkgray uppercase transition-colors cursor-pointer"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
