"use client";

import { useState } from "react";

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setNewsletterSubscribed(true);
      setNewsletterEmail("");
      setTimeout(() => setNewsletterSubscribed(false), 5000);
    }
  };

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
    <footer className="bg-brand-darkgray text-neutral-400 py-16 sm:py-24 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Logo Wordmark & Slogan */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <span className="text-3xl font-bold tracking-[0.3em] text-white uppercase">
              ABHI
            </span>
            <p className="text-xs leading-relaxed text-neutral-500 font-light max-w-sm">
              A modern contemporary brand specializing in small-batch apparel, high-precision tailoring, and organic fibers for daily living.
            </p>
            <div className="flex gap-6 mt-2">
              <a href="#" className="hover:text-brand-accent text-neutral-500 transition-colors">
                <span className="text-[10px] tracking-[0.2em] uppercase font-semibold">Instagram</span>
              </a>
            </div>
          </div>

          {/* Link Column 1 (Shop) */}
          <div className="col-span-2 lg:col-span-2 flex flex-col gap-4">
            <span className="text-xs font-semibold text-white tracking-widest uppercase">
              Shop
            </span>
            <ul className="flex flex-col gap-2.5 text-xs font-light">
              <li><a href="#products" onClick={(e) => handleSmoothScroll(e, "products")} className="hover:text-white transition-colors">All Products</a></li>
              <li><a href="#collections" onClick={(e) => handleSmoothScroll(e, "collections")} className="hover:text-white transition-colors">Collections</a></li>
              <li><a href="#" className="hover:text-white transition-colors">New Releases</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Core Essentials</a></li>
            </ul>
          </div>

          {/* Link Column 2 (Company) */}
          <div className="col-span-2 lg:col-span-2 flex flex-col gap-4">
            <span className="text-xs font-semibold text-white tracking-widest uppercase">
              Company
            </span>
            <ul className="flex flex-col gap-2.5 text-xs font-light">
              <li><a href="#about" onClick={(e) => handleSmoothScroll(e, "about")} className="hover:text-white transition-colors">Philosophy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Fabric Sourcing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Care Guide</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div>
              <span className="text-xs font-semibold text-white tracking-widest uppercase block mb-2">
                Stay Informed
              </span>
              <p className="text-xs text-neutral-500 font-light">
                Subscribe to receive notice of limited seasonal editions and lookbook releases.
              </p>
            </div>

            {newsletterSubscribed ? (
              <div className="py-2.5 px-4 bg-brand-accent/15 border border-brand-accent/30 text-brand-accent rounded-xs text-xs font-medium tracking-wide">
                Welcome to Abhi. Access instructions have been dispatched.
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex border-b border-neutral-700 pb-2 hover:border-brand-accent transition-colors duration-300">
                <input
                  type="email"
                  required
                  placeholder="Enter email address"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="flex-1 bg-transparent border-0 text-white placeholder-neutral-600 focus:outline-none focus:ring-0 text-xs font-light tracking-widest"
                />
                <button
                  type="submit"
                  className="text-white hover:text-brand-accent text-xs font-semibold tracking-widest uppercase focus:outline-none transition-colors"
                >
                  Submit
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Legal / Secondary Footer Section */}
        <div className="mt-16 sm:mt-20 pt-8 border-t border-neutral-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] text-neutral-600 font-medium tracking-widest uppercase">
          <span>© {new Date().getFullYear()} ABHI CLOTHING. ALL RIGHTS RESERVED.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-neutral-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-neutral-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-neutral-400 transition-colors">Accessibility</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
