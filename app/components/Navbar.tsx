"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { prefixPath } from "../utils/paths";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of sticky navbar
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-brand-offwhite/90 backdrop-blur-md border-b border-neutral-200/40 shadow-xs py-4"
          : "bg-transparent py-6"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between">
          
          {/* Brand Wordmark (Abhi) */}
          <div className="flex-1 lg:flex-none">
            <Link
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setIsMobileMenuOpen(false);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="flex items-center gap-3 group"
            >
              <div className="relative h-9 w-9 overflow-hidden rounded-full border border-neutral-200/30 group-hover:border-brand-accent transition-colors duration-300">
                <Image
                  src={prefixPath("/logo.jpeg")}
                  alt="Abhi Logo"
                  fill
                  sizes="36px"
                  className="object-cover"
                />
              </div>
              <span
                className={`text-xl font-bold tracking-[0.25em] uppercase transition-colors duration-300 ${
                  isScrolled || isMobileMenuOpen ? "text-brand-darkgray" : "text-white"
                }`}
              >
                Abhi
              </span>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex flex-1 justify-center">
            <ul className="flex gap-12">
              <li>
                <a
                  href="#collections"
                  onClick={(e) => handleLinkClick(e, "collections")}
                  className={`text-xs font-semibold tracking-[0.2em] uppercase transition-colors duration-300 ${
                    isScrolled ? "text-neutral-600 hover:text-brand-darkgray" : "text-neutral-200 hover:text-white"
                  }`}
                >
                  Collections
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  onClick={(e) => handleLinkClick(e, "products")}
                  className={`text-xs font-semibold tracking-[0.2em] uppercase transition-colors duration-300 ${
                    isScrolled ? "text-neutral-600 hover:text-brand-darkgray" : "text-neutral-200 hover:text-white"
                  }`}
                >
                  Shop
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleLinkClick(e, "about")}
                  className={`text-xs font-semibold tracking-[0.2em] uppercase transition-colors duration-300 ${
                    isScrolled ? "text-neutral-600 hover:text-brand-darkgray" : "text-neutral-200 hover:text-white"
                  }`}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#lookbook"
                  onClick={(e) => handleLinkClick(e, "lookbook")}
                  className={`text-xs font-semibold tracking-[0.2em] uppercase transition-colors duration-300 ${
                    isScrolled ? "text-neutral-600 hover:text-brand-darkgray" : "text-neutral-200 hover:text-white"
                  }`}
                >
                  Lookbook
                </a>
              </li>
            </ul>
          </div>

          {/* Right Action Icons (Desktop) */}
          <div className="hidden lg:flex items-center gap-6 justify-end">
            <button
              aria-label="Search"
              className={`p-1.5 transition-colors duration-300 hover:text-brand-accent ${
                isScrolled ? "text-brand-darkgray" : "text-white"
              }`}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button
              aria-label="Cart"
              className={`p-1.5 relative transition-colors duration-300 hover:text-brand-accent ${
                isScrolled ? "text-brand-darkgray" : "text-white"
              }`}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5h6.75" />
              </svg>
              <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-brand-accent" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className={`p-2 transition-colors duration-300 focus:outline-none z-50 ${
                isScrolled || isMobileMenuOpen ? "text-brand-darkgray" : "text-white"
              }`}
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        <div
          className={`lg:hidden fixed inset-0 bg-brand-offwhite z-40 flex flex-col justify-center items-center transition-all duration-500 ease-in-out ${
            isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
          }`}
        >
          <div className="px-6 w-full flex flex-col gap-8 text-center max-w-sm">
            <a
              href="#collections"
              onClick={(e) => handleLinkClick(e, "collections")}
              className="text-base font-semibold tracking-[0.25em] text-brand-darkgray uppercase hover:text-neutral-500 py-3 border-b border-neutral-200/50"
            >
              Collections
            </a>
            <a
              href="#products"
              onClick={(e) => handleLinkClick(e, "products")}
              className="text-base font-semibold tracking-[0.25em] text-brand-darkgray uppercase hover:text-neutral-500 py-3 border-b border-neutral-200/50"
            >
              Shop
            </a>
            <a
              href="#about"
              onClick={(e) => handleLinkClick(e, "about")}
              className="text-base font-semibold tracking-[0.25em] text-brand-darkgray uppercase hover:text-neutral-500 py-3 border-b border-neutral-200/50"
            >
              About
            </a>
            <a
              href="#lookbook"
              onClick={(e) => handleLinkClick(e, "lookbook")}
              className="text-base font-semibold tracking-[0.25em] text-brand-darkgray uppercase hover:text-neutral-500 py-3 border-b border-neutral-200/50"
            >
              Lookbook
            </a>
            
            <div className="flex justify-center gap-12 mt-6 pt-6">
              <button aria-label="Search" className="text-brand-darkgray hover:text-brand-accent p-2 flex flex-col items-center gap-1">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <span className="text-[10px] tracking-widest uppercase text-neutral-500 font-medium">Search</span>
              </button>
              <button aria-label="Cart" className="text-brand-darkgray hover:text-brand-accent p-2 flex flex-col items-center gap-1 relative">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5h6.75" />
                </svg>
                <span className="text-[10px] tracking-widest uppercase text-neutral-500 font-medium">Bag (1)</span>
                <span className="absolute top-2 right-4 w-2 h-2 rounded-full bg-brand-accent" />
              </button>
            </div>
          </div>
        </div>

      </nav>
    </header>
  );
}