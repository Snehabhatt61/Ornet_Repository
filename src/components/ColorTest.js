import React from 'react';

const ColorTest = () => {
  return (
    <div className="p-8 space-y-4">
      <h1 className="text-3xl font-bold text-brand-dark">Color Test</h1>
      <div className="flex gap-4">
        <div className="w-32 h-32 bg-brand-gold border border-gray-300"></div>
        <div className="w-32 h-32 bg-brand-dark border border-gray-300"></div>
        <div className="w-32 h-32 bg-brand-light border border-gray-300"></div>
      </div>
      <p className="text-brand-gold text-xl">Gold text on white</p>
      <p className="text-brand-dark text-xl">Dark text on white</p>
      <p className="bg-brand-dark text-white p-4">White text on dark background</p>
    </div>
  );
};

export default ColorTest;