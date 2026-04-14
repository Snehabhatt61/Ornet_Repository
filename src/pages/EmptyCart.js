import React from 'react';
import { Link } from 'react-router-dom';

const EmptyCart = () => {
  return (
    <div className="min-h-screen bg-surface flex items-center justify-center">
      <div className="max-w-lg mx-auto px-4 text-center">
        {/* Empty Cart Icon */}
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto bg-surface-container rounded-full flex items-center justify-center">
            <svg className="w-16 h-16 text-outline-variant" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
        </div>

        {/* Empty Cart Message */}
        <h1 className="text-3xl font-bold text-on-surface mb-4">Your Cart is Empty</h1>
        <p className="text-on-surface-variant mb-8">
          Looks like you haven't added any items to your cart yet. 
          Discover our beautiful collection of handcrafted artisan products.
        </p>

        {/* CTA Button */}
        <Link
          to="/products"
          className="inline-block bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-burnt transition-colors"
        >
          Start Shopping
        </Link>

        {/* Additional Links */}
        <div className="mt-12">
          <h2 className="text-lg font-semibold text-on-surface mb-4">You might also like</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/" className="text-primary hover:underline">
              Browse Featured Products
            </Link>
            <span className="text-outline">|</span>
            <Link to="/products" className="text-primary hover:underline">
              View All Collections
            </Link>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 grid grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-12 h-12 mx-auto bg-surface rounded-full flex items-center justify-center mb-3 shadow-sm">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-sm text-on-surface-variant">Authentic Handcrafted</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 mx-auto bg-surface rounded-full flex items-center justify-center mb-3 shadow-sm">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <p className="text-sm text-on-surface-variant">Free Shipping</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 mx-auto bg-surface rounded-full flex items-center justify-center mb-3 shadow-sm">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <p className="text-sm text-on-surface-variant">Secure Checkout</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmptyCart;