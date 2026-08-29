"use client";

import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BrandIntro from "./components/BrandIntro";
import Collections from "./components/Collections";
import Products, { Product } from "./components/Products";
import Editorial from "./components/Editorial";
import WhyAbhi from "./components/WhyAbhi";
import Lookbook from "./components/Lookbook";
import SocialProof from "./components/SocialProof";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import QuickViewModal from "./components/QuickViewModal";
import CartDrawer, { CartItem } from "./components/CartDrawer";

// Product catalog database
const featuredProducts: Product[] = [
  {
    id: 1,
    name: "Sora Knit Blazer",
    category: "Everyday Tailoring",
    description: "Relaxed unstructured blazer knitted from a premium organic cotton and merino wool blend. Features drop shoulders, patch pockets, and natural horn buttons.",
    details: "70% Organic Cotton, 30% Extra-fine Merino Wool. Soft, mid-weight structure. Cold hand wash.",
    price: 180,
    image: "/images/prod-blazer-main.jpg",
    hoverImage: "/images/prod-blazer-hover.jpg",
    sizes: ["XS", "S", "M", "L", "XL"]
  },
  {
    id: 2,
    name: "Lune Linen Trousers",
    category: "The Linen Series",
    description: "Wide-leg trousers in a textured mid-weight linen. Double-pleated front with a fluid drape, hook-and-bar closure, and adjustable waist tabs.",
    details: "100% Belgian Linen. Relaxed leg silhouette. Breathable and pre-washed for extra softness.",
    price: 140,
    image: "/images/prod-trousers-main.jpg",
    hoverImage: "/images/prod-trousers-hover.jpg",
    sizes: ["28", "30", "32", "34", "36"]
  },
  {
    id: 3,
    name: "Kiri Rib Cardigan",
    category: "Sculpted Knits",
    description: "A close-fitting mock-neck cardigan in a dry ribbed cotton knit. Detailed with a double-ended matte zipper and clean finished margins.",
    details: "100% Pima Cotton. Ribbed texture. Machine wash cold on delicate cycle.",
    price: 160,
    image: "/images/prod-cardigan-main.jpg",
    hoverImage: "/images/prod-cardigan-hover.jpg",
    sizes: ["XS", "S", "M", "L", "XL"]
  },
  {
    id: 4,
    name: "Dune Utility Coat",
    category: "Everyday Tailoring",
    description: "Structural outerwear crafted from water-resistant dry cotton canvas. Features a stand collar, concealed button placket, and deep utility pockets.",
    details: "100% Cotton Canvas. Windproof. Spot clean or professional dry clean.",
    price: 220,
    image: "/images/prod-coat-main.jpg",
    hoverImage: "/images/prod-coat-hover.jpg",
    sizes: ["S", "M", "L", "XL"]
  }
];

export default function Home() {
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Initialize AOS (Animate on Scroll)
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
      offset: 120, // trigger animation earlier
    });
  }, []);

  // Auto-close cart drawer after activity timer (5s)
  useEffect(() => {
    if (isCartOpen && cartItems.length > 0) {
      const timer = setTimeout(() => {
        setIsCartOpen(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isCartOpen, cartItems]);

  // Open Quick View Modal
  const handleOpenQuickView = (product: Product) => {
    setActiveProduct(product);
  };

  // Add Product to Interactive Cart
  const handleAddToBag = (product: Product, size: string) => {
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(
        (item) => item.product.id === product.id && item.size === size
      );

      if (existingItemIndex > -1) {
        const newItems = [...prevItems];
        newItems[existingItemIndex].quantity += 1;
        return newItems;
      } else {
        return [...prevItems, { product, size, quantity: 1 }];
      }
    });

    setActiveProduct(null); // close quick view modal
    setIsCartOpen(true); // open side cart drawer to show feedback
  };

  // Remove Item from Cart
  const handleRemoveFromCart = (index: number) => {
    setCartItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  // Checkout Simulator
  const handleCheckout = () => {
    alert("Order processing simulated. Under actual deployment, this directs to the Stripe/Shopify secure gateway.");
    setCartItems([]);
    setIsCartOpen(false);
  };

  // Return to products grid
  const handleBrowseClick = () => {
    setIsCartOpen(false);
    const element = document.getElementById("products");
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
    <div className="relative min-h-screen bg-brand-offwhite text-brand-darkgray font-sans selection:bg-brand-accent selection:text-brand-darkgray">
      
      {/* Sticky scroll-aware navigation */}
      <Navbar />

      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Brand Introduction */}
      <BrandIntro />

      {/* 3. Featured Collection */}
      <Collections />

      {/* 4. Featured Products Grid */}
      <Products products={featuredProducts} onQuickView={handleOpenQuickView} />

      {/* 5. Editorial Section */}
      <Editorial />

      {/* 6. Why Abhi Section */}
      <WhyAbhi />

      {/* 7. Asymmetrical Lookbook Section */}
      <Lookbook />

      {/* 8. Customer Testimonials Section */}
      <SocialProof />

      {/* 9. Final Call to Action */}
      <FinalCTA />

      {/* 10. Footer Section */}
      <Footer />

      {/* Quick View overlay Modal */}
      {activeProduct && (
        <QuickViewModal
          product={activeProduct}
          onClose={() => setActiveProduct(null)}
          onAddToBag={handleAddToBag}
        />
      )}

      {/* Slide-out Shopping Bag Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        items={cartItems}
        onClose={() => setIsCartOpen(false)}
        onRemove={handleRemoveFromCart}
        onCheckout={handleCheckout}
        onBrowseClick={handleBrowseClick}
      />

    </div>
  );
}
