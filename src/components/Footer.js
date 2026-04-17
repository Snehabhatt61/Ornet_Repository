import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import Icon from './Icon';
import { ICONS } from './icons';

const Footer = () => {
  return (
    <footer className="bg-footer-gradient pt-10 md:pt-24 pb-6 md:pb-12 px-6 md:px-10 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 border-t-2 border-dashed border-outline/30"></div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-20 relative z-10">
        {/* Brand */}
        <div className="col-span-1">
          <div className="flex items-center gap-2 mb-3 md:mb-6">
            <img 
              alt="Artisan Pulse" 
              className="h-5 md:h-8 w-auto mix-blend-multiply opacity-80" 
              src="/logo192.png"
            />
            <span className="text-base md:text-xl font-bold text-on-surface-variant italic font-headline">Artisan Pulse</span>
          </div>
          <p className="text-on-surface-variant font-medium text-[10px] md:text-sm mb-4 md:mb-8 leading-relaxed">
            Your one-stop atelier for all things creative. We believe everyone has an artist within. Let us help you find yours.
          </p>
            <div className="flex gap-3">
              <a className="w-7 h-7 md:w-10 md:h-10 rounded-full bg-primary-container flex items-center justify-center text-on-surface-variant hover:scale-110 transition-transform shadow-sm" href="#">
                <Icon name={ICONS.PUBLIC} size="base" />
              </a>
              <a className="w-7 h-7 md:w-10 md:h-10 rounded-full bg-primary-container flex items-center justify-center text-on-surface-variant hover:scale-110 transition-transform shadow-sm" href="#">
                <Icon name={ICONS.ALTERNATE_EMAIL} size="base" />
              </a>
            </div>
        </div>

        {/* Shop By */}
        <div>
          <h5 className="font-bold text-on-surface-variant mb-3 md:mb-6 uppercase tracking-widest text-[9px] md:text-xs">Shop By</h5>
          <ul className="space-y-2 md:space-y-4">
            <li><a className="text-on-surface-variant hover:text-primary transition-colors text-[10px] md:text-sm font-medium" href="#">MDF Bases</a></li>
            <li><a className="text-on-surface-variant hover:text-primary transition-colors text-[10px] md:text-sm font-medium" href="#">Resin Arts</a></li>
            <li><a className="text-on-surface-variant hover:text-primary transition-colors text-[10px] md:text-sm font-medium" href="#">Jewellery Findings</a></li>
            <li><a className="text-on-surface-variant hover:text-primary transition-colors text-[10px] md:text-sm font-medium" href="#">Bulk Destash</a></li>
          </ul>
        </div>

        {/* The Studio */}
        <div>
          <h5 className="font-bold text-on-surface-variant mb-3 md:mb-6 uppercase tracking-widest text-[9px] md:text-xs">The Studio</h5>
          <ul className="space-y-2 md:space-y-4">
            <li><a className="text-on-surface-variant hover:text-primary transition-colors text-[10px] md:text-sm font-medium underline decoration-on-surface-variant/20 decoration-2 underline-offset-4" href="#">Sustainability</a></li>
            <li><a className="text-on-surface-variant hover:text-primary transition-colors text-[10px] md:text-sm font-medium" href="#">Shipping Policy</a></li>
            <li><a className="text-on-surface-variant hover:text-primary transition-colors text-[10px] md:text-sm font-medium" href="#">Privacy Policy</a></li>
            <li><a className="text-on-surface-variant hover:text-primary transition-colors text-[10px] md:text-sm font-medium" href="#">Contact Us</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h5 className="font-bold text-on-surface-variant mb-3 md:mb-6 uppercase tracking-widest text-[9px] md:text-xs">Newsletter</h5>
          <p className="text-on-surface-variant text-[10px] md:text-sm mb-3 md:mb-6 font-medium">Join our creative family for tutorials and exclusive discounts.</p>
          <div className="flex flex-col gap-2.5">
            <input 
              className="bg-white/40 border-none rounded-xl px-4 py-2 md:py-3 text-[10px] md:text-sm focus:ring-2 focus:ring-primary-container text-on-surface-variant placeholder:text-on-surface-variant/50" 
              placeholder="Your email address" 
              type="email"
            />
            <button className="bg-primary-container text-on-surface-variant py-2 md:py-3 rounded-xl font-bold hover:brightness-105 transition-all shadow-sm text-[10px] md:text-sm">Subscribe</button>
          </div>
        </div>
      </div>

      <div className="border-t border-outline/10 pt-4 md:pt-8 text-center relative z-10">
        <p className="text-[9px] md:text-sm font-semibold text-on-surface-variant/70">© 2024 Artisan Pulse. Handcrafted with Heart.</p>
      </div>

      <div className="absolute -bottom-10 -right-10 w-48 h-48 md:w-64 md:h-64 bg-primary-container/20 rounded-full blur-3xl"></div>
    </footer>
  );
};

export default Footer;