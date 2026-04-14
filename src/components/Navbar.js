import React from 'react';
import { Link } from 'react-router-dom';
import IconButton from './IconButton';

const Navbar = () => {
  return (
    <nav className="sticky top-0 w-full z-50 bg-surface/70 backdrop-blur-xl border-b-1 border-dashed border-outline/30 shadow-[0_20px_20px_-15px_rgba(255,127,0,0.08)] px-4 md:px-6 py-2.5 md:py-4 flex justify-between items-center">
      <div className="flex items-center gap-2 md:gap-4">
        <button className="text-primary hover:scale-105 transition-transform duration-300 md:hidden">
          <span className="material-symbols-outlined text-xl md:text-3xl">menu</span>
        </button>
        <div className="flex items-center gap-1 md:gap-2">
          <img 
            alt="Artisan Pulse" 
            className="h-5 md:h-10 w-auto mix-blend-multiply opacity-80" 
            src="/logo192.png"
          />
          <span className="text-base md:text-2xl font-bold text-primary italic tracking-tight font-headline whitespace-nowrap">Artisan Pulse</span>
        </div>
      </div>

      <div className="hidden lg:flex items-center space-x-8">
        <Link to="/" className="text-on-surface-variant hover:text-primary transition-colors font-medium">Home</Link>
        <Link to="/products" className="text-on-surface-variant hover:text-primary transition-colors font-medium">Shop By Category</Link>
        <Link to="/products" className="text-on-surface-variant hover:text-primary transition-colors font-medium">New Arrivals</Link>
        <Link to="/" className="text-on-surface-variant hover:text-primary transition-colors font-medium">About Us</Link>
      </div>

      <div className="flex items-center space-x-2.5 md:space-x-6">
        <button className="text-primary hover:scale-105 transition-transform duration-300">
          <span className="material-symbols-outlined text-lg md:text-2xl">person</span>
        </button>
        <button className="text-primary hover:scale-105 transition-transform duration-300">
          <span className="material-symbols-outlined text-lg md:text-2xl">favorite</span>
        </button>
         <IconButton
           icon="shopping_cart"
           size="md"
           variant="primary"
           className="relative"
         >
           <span className="absolute -top-1 -right-1 bg-primary text-white text-[7px] md:text-[10px] font-bold px-1 py-0.2 md:px-1.5 md:py-0.5 rounded-full">3</span>
         </IconButton>
      </div>
    </nav>
  );
};

export default Navbar;