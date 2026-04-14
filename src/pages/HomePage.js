import React from 'react';
import { Link } from 'react-router-dom';
import '../components/HomePageStyles.css';

const HomePage = () => {
  const featuredProducts = [
    {
      id: 1,
      name: 'MDF Jali Jharokha',
      price: '₹2,499',
      image: 'https://images.unsplash.com/photo-1615529182904-14819c35db37?w=400&h=400&fit=crop',
      category: 'Home Decor'
    },
    {
      id: 2,
      name: 'Handcrafted Wooden Box',
      price: '₹1,899',
      image: 'https://images.unsplash.com/photo-1594040226829-7f251ab46d80?w=400&h=400&fit=crop',
      category: 'Storage'
    },
    {
      id: 3,
      name: 'Brass Decorative Lamp',
      price: '₹3,299',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      category: 'Lighting'
    },
    {
      id: 4,
      name: 'Ceramic Vase Set',
      price: '₹1,599',
      image: 'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=400&h=400&fit=crop',
      category: 'Decor'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Featured Products */}
      <section className="relative min-h-[350px] md:min-h-[500px] flex flex-col items-center justify-center px-4 md:px-6 py-10 md:py-20 text-center bg-gradient-to-b from-primary-container/40 to-white">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] md:w-[120%] h-[120%] bg-gradient-to-br from-primary-container/20 via-transparent to-secondary-container/20 rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10 max-w-4xl w-full">
          <h1 className="text-2xl md:text-7xl font-extrabold text-on-surface mb-3 md:mb-6 tracking-tight leading-tight">
            Craft Your <span className="text-primary italic">Imagination</span>
          </h1>
          <p className="text-xs md:text-lg text-on-surface-variant mb-6 md:mb-12 max-w-2xl mx-auto px-4">
            Discover curated art supplies and handcrafted essentials for the modern artisan. Handpicked quality, delivered with love.
          </p>
          <div className="relative max-w-2xl mx-auto group px-2">
            <div className="relative flex flex-col md:block">
              <input 
                className="w-full pl-14 pr-4 md:pl-14 md:pr-6 py-3 md:py-6 bg-surface border-none rounded-full shadow-[0_10px_30px_rgba(255,127,0,0.1)] focus:ring-4 focus:ring-primary-container transition-all text-sm md:text-lg placeholder:text-on-surface-variant/50" 
                placeholder="Search for Mdf bases..." 
                type="text"
              />
              <div className="absolute left-6 top-1/2 -translate-y-1/2 text-primary hidden md:block">
                <span className="material-symbols-outlined text-3xl">search</span>
              </div>
              <div className="absolute left-6 top-[22px] md:top-1/2 -translate-y-1/2 text-primary md:hidden">
                <span className="material-symbols-outlined text-xl">search</span>
              </div>
              <button className="mt-3 md:mt-0 md:absolute md:right-3 md:top-1/2 md:-translate-y-1/2 bg-primary-burnt text-white px-5 md:px-8 py-2.5 md:py-3.5 rounded-full font-bold hover:scale-105 transition-transform shadow-lg text-xs md:text-base">
                Find Magic
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="px-4 md:px-10 py-10 md:py-20 bg-surface-container-low">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-8 md:mb-16 gap-3 text-center md:text-left">
          <div>
            <h2 className="text-xl md:text-4xl font-bold text-on-surface mb-1 md:mb-2 font-headline">Shop by Category</h2>
            <div className="h-1 w-12 md:h-1.5 md:w-24 bg-primary-container rounded-full mx-auto md:mx-0"></div>
          </div>
          <a className="text-primary text-xs md:text-base font-bold flex items-center gap-1.5 hover:gap-4 transition-all" href="#">
            Explore All Collections <span className="material-symbols-outlined text-base md:text-2xl">arrow_forward</span>
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-10">
          {/* Category 1 - MDF Bases */}
          <div className="group cursor-pointer">
            <div className="relative bg-surface rounded-md p-2 pt-6 md:pt-10 clip-shadow transition-all duration-300 group-hover:-translate-y-2 border-2 border-transparent category-accent-1">
              <div className="category-clip category-clip-1">
                <div className="w-7 md:w-12 h-1 bg-white/40 rounded-full"></div>
              </div>
              <div className="aspect-square rounded-sm overflow-hidden mb-2 md:mb-3">
                <img 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCV8ZkuRfcD70Fynr9Mxhsdzg-cXOsauA_5TykZtxCg51BtKiHCx_C3t4ktmLw-ZYzKI4j9nINLJ0wOjmONWP35lsPKErrj5s2TzVGP5BmMLQasBEohnotvcmVM2SH-OgIDnn5GPyH58PxGRxKcZoZwgodltivp6YQTvHaq83r-WPeeKdzrgyOs2v3nRJMkdgmZyfjEYX66N3J8wWnyAiMo9VktXFRttPxPsnRp-a4olx22GwxkMiYaXLYnq5_-_MuPTEBCH1yiCvM" 
                  alt="MDF Bases"
                />
              </div>
              <p className="text-center font-bold text-on-surface-variant group-hover:text-primary transition-colors text-sm md:text-lg mb-1 md:mb-2">MDF Bases</p>
            </div>
          </div>

          {/* Category 2 - Crafting Essentials */}
          <div className="group cursor-pointer">
            <div className="relative bg-surface rounded-md p-2 pt-6 md:pt-10 clip-shadow transition-all duration-300 group-hover:-translate-y-2 border-2 border-transparent category-accent-2">
              <div className="category-clip category-clip-2">
                <div className="w-7 md:w-12 h-1 bg-white/40 rounded-full"></div>
              </div>
              <div className="aspect-square rounded-sm overflow-hidden mb-2 md:mb-3">
                <img 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6iSi2jLI9378c6G8YPGSkoEe01sJqPo8aCU76ljdfTnsy3TZfcPN4f6u364asYBaPRTsWvZ4mbWxMzNOGhQeG9-vb3Y3hwXqK0JDjc08EIFNQ09XzZi2gJGU5iDe6lVP_XZOF6Ag4G3Y-boL-T-jxd6hhSuwGCf5ATRtKuOGfNRIrN1qgs-A0yM0XcUJC-u7mijTq_3Sek0mHfgdzmAAxHlhRHE8r0wuZn_PJpAdBrzjHkQ7ajqn9aIkL8d8rpn0Sm2L5m8acPCA" 
                  alt="Crafting Essentials"
                />
              </div>
              <p className="text-center font-bold text-on-surface-variant group-hover:text-primary transition-colors text-sm md:text-lg mb-1 md:mb-2">Crafting Essentials</p>
            </div>
          </div>

          {/* Category 3 - Resin Materials */}
          <div className="group cursor-pointer">
            <div className="relative bg-surface rounded-md p-2 pt-6 md:pt-10 clip-shadow transition-all duration-300 group-hover:-translate-y-2 border-2 border-transparent category-accent-3">
              <div className="category-clip category-clip-3">
                <div className="w-7 md:w-12 h-1 bg-white/40 rounded-full"></div>
              </div>
              <div className="aspect-square rounded-sm overflow-hidden mb-2 md:mb-3">
                <img 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCazRazS-ezdZkAFhWJA8ZNwQcyAKJ4hedED5-Ou06axf-TPgGy2KsyjwgESNVW535MZUdIKkzfRMzCBjQBzwARY-2SKNsPKpVCcqHBLKOH4TV_F2NRAbD2i-eMqOP1iswgUscXjNYLIshrJ28DsnmPYd-Yy67NoqKwBqP_fDNhCovXFn3zP9aKi3Oebg8dmSHQ_nSgts6ejur_kCWvvYH7SVjWOKolsPGFZEqs0G4fBuwP6EGjmX_wAmU1RYlrg6CL-aAdSEl77zE" 
                  alt="Resin Materials"
                />
              </div>
              <p className="text-center font-bold text-on-surface-variant group-hover:text-primary transition-colors text-sm md:text-lg mb-1 md:mb-2">Resin Materials</p>
            </div>
          </div>

          {/* Category 4 - Miniatures */}
          <div className="group cursor-pointer">
            <div className="relative bg-surface rounded-md p-2 pt-6 md:pt-10 clip-shadow transition-all duration-300 group-hover:-translate-y-2 border-2 border-transparent category-accent-4">
              <div className="category-clip category-clip-4">
                <div className="w-7 md:w-12 h-1 bg-white/40 rounded-full"></div>
              </div>
              <div className="aspect-square rounded-sm overflow-hidden mb-2 md:mb-3">
                <img 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZ7ZS3EcZNGPcmOFBVu8EI-EEk5HQwVXsnhQayj_ea0RZrZcqw7F4wNitiV42kDZjtNWkR7VjCJvg1tTENq6FZ8J5HNytGKt4JeeNhZtMTCscEN-FK94d-F2jB2NkE541Z4NqY0rZcbrM--bcl7gkPBLsoqZpmFA9apbVotQdPTJ3vhD5MCsQr99Md0KP5AbEPoky0hqMcQR-w6TL7C6FR9AQkF2Oq88KNmba4MqdSHJRFSr6iA3go3Ly2V6g5DOaJ3mXkboMolh8" 
                  alt="Miniatures"
                />
              </div>
              <p className="text-center font-bold text-on-surface-variant group-hover:text-primary transition-colors text-sm md:text-lg mb-1 md:mb-2">Miniatures</p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Bestsellers */}
      <section className="px-4 md:px-10 py-10 md:py-24 bg-surface-container-lowest">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-xl md:text-4xl font-bold text-on-surface mb-1 md:mb-4 font-headline">Community Bestsellers</h2>
          <p className="text-xs md:text-base text-on-surface-variant max-w-xl mx-auto px-4">The most loved materials used by thousands of artisans across India.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
          {/* Product 1 */}
          <div className="group">
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden mb-3 md:mb-4 bg-surface-container shadow-sm group-hover:shadow-xl transition-all duration-500">
              <img 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnbOwgCFBWBSN24jkG3yS18FoNKlZuveqpQPnuJfoVeFfqfO6malZC7Echlcs1IAojkiKXzKf8KeU5C-2k3f6tm_0NMXpI-WN3tAVPXXgP7KAKlUvlPrqzZbApbgcO0ThsmD7SHPxLLnXKFVOuZfdLWvjJDpS2IDQp8YO31VxwTu0TD0Cs9QKTZcY8pv_-FA6Fxqd2FHo11ms9XX0TMaEs3Wd5sqsyE6ggMKvX-Ul9V7evMlPDewpxcbCov6K6DjiionMankEwGu0" 
                alt="Mandala Art Base"
              />
              <button className="absolute top-3 right-3 md:top-4 md:right-4 bg-white/80 backdrop-blur-md p-1.5 md:p-2 rounded-full text-primary hover:bg-primary hover:text-white transition-colors shadow-sm">
                <span className="material-symbols-outlined text-base md:text-2xl">favorite</span>
              </button>
              <div className="absolute bottom-3 left-3 right-3 translate-y-0 md:translate-y-12 opacity-100 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 transition-all duration-300">
                <button className="w-full bg-primary text-white py-1.5 md:py-3 rounded-full font-bold shadow-lg text-xs md:text-base">Quick Add</button>
              </div>
            </div>
            <h3 className="font-bold text-on-surface text-sm md:text-lg px-1">Mandala Art Base (Set of 3)</h3>
            <div className="flex items-center gap-1.5 mb-0.5 md:mb-1 px-1">
              <div className="flex text-primary-burnt">
                <span className="material-symbols-outlined text-[10px] md:text-sm font-black" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                <span className="material-symbols-outlined text-[10px] md:text-sm font-black" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                <span className="material-symbols-outlined text-[10px] md:text-sm font-black" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                <span className="material-symbols-outlined text-[10px] md:text-sm font-black" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                <span className="material-symbols-outlined text-[10px] md:text-sm font-black" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
              </div>
              <span className="text-[9px] md:text-xs text-on-surface-variant font-bold">(128)</span>
            </div>
            <p className="text-primary font-black text-sm md:text-lg px-1">₹899.00</p>
          </div>

          {/* Product 2 */}
          <div className="group">
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden mb-3 md:mb-4 bg-surface-container shadow-sm group-hover:shadow-xl transition-all duration-500">
              <img 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDztfg20-GCp1A5s4M3UJYJxByO5PSc1bGNLv_XGCLSa62Jd8DPEf9fT18htyQV8BwFJU9sqvNbHp62_PHgyrd6yPl1aPQn4gSx6IUXKMcDN8CfVH44faH5ZIudy5k4W7l5F3qzaEUHnpsaTDDAg_JEOT0fYFefO9ZYiqkN2zAZYuqc27BGWOKCghSI31Yx6Iae8rPTZuZtadaMMDeRX3uZ5A1UvJUkSEZ2SPKz356QXvbBHmKICZisY0HqaTCvXPbXHW247FurHrw" 
                alt="Pearl Effect Resin Pigments"
              />
              <button className="absolute top-3 right-3 md:top-4 md:right-4 bg-white/80 backdrop-blur-md p-1.5 md:p-2 rounded-full text-primary shadow-sm">
                <span className="material-symbols-outlined text-base md:text-2xl">favorite</span>
              </button>
              <div className="absolute bottom-3 left-3 right-3 translate-y-0 md:translate-y-12 opacity-100 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 transition-all duration-300">
                <button className="w-full bg-primary text-white py-1.5 md:py-3 rounded-full font-bold shadow-lg text-xs md:text-base">Quick Add</button>
              </div>
            </div>
            <h3 className="font-bold text-on-surface text-sm md:text-lg px-1">Pearl Effect Resin Pigments</h3>
            <div className="flex items-center gap-1.5 mb-0.5 md:mb-1 px-1">
              <div className="flex text-primary-burnt">
                <span className="material-symbols-outlined text-[10px] md:text-sm font-black" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                <span className="material-symbols-outlined text-[10px] md:text-sm font-black" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                <span className="material-symbols-outlined text-[10px] md:text-sm font-black" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                <span className="material-symbols-outlined text-[10px] md:text-sm font-black" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                <span className="material-symbols-outlined text-[10px] md:text-sm font-black">star</span>
              </div>
              <span className="text-[9px] md:text-xs text-on-surface-variant font-bold">(95)</span>
            </div>
            <p className="text-primary font-black text-sm md:text-lg px-1">₹450.00</p>
          </div>
          {/* Product 3 */}
          <div className="group">
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden mb-3 md:mb-4 bg-surface-container shadow-sm group-hover:shadow-xl transition-all duration-500">
              <img 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuClWy4NV2u2vQBwSLKLqHYHc9K5b1S8DhdigM5-typE7mLplxz-h9o8RBX0IV0sTn0PI0KvzjAJGCsVX-0jsdJjOwrabnOX6VkXbLHSfansb5hmK_Pwv7jO5QAo8YerOq9MbTRH5ufpRoUfhO6oZpTI-ljPRY8lT1Cn-qRGkmbVPcWY6uWR7mXZumMgXCMJzVrJeowYD3OT-8IdeKDKy9leCxdpRAuBDC8E0VOzd-HS5Y33Oht9RUQs7O00sI3FAxajB5dPq9IJe5k" 
                alt="Vintage Scrapbook Stickers"
              />
              <button className="absolute top-3 right-3 md:top-4 md:right-4 bg-white/80 backdrop-blur-md p-1.5 md:p-2 rounded-full text-primary shadow-sm">
                <span className="material-symbols-outlined text-base md:text-2xl">favorite</span>
              </button>
              <div className="absolute bottom-3 left-3 right-3 translate-y-0 md:translate-y-12 opacity-100 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 transition-all duration-300">
                <button className="w-full bg-primary text-white py-1.5 md:py-3 rounded-full font-bold shadow-lg text-xs md:text-base">Quick Add</button>
              </div>
            </div>
            <h3 className="font-bold text-on-surface text-sm md:text-lg px-1">Vintage Scrapbook Stickers</h3>
            <div className="flex items-center gap-1.5 mb-0.5 md:mb-1 px-1">
              <div className="flex text-primary-burnt">
                <span className="material-symbols-outlined text-[10px] md:text-sm font-black" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                <span className="material-symbols-outlined text-[10px] md:text-sm font-black" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                <span className="material-symbols-outlined text-[10px] md:text-sm font-black" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                <span className="material-symbols-outlined text-[10px] md:text-sm font-black" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                <span className="material-symbols-outlined text-[10px] md:text-sm font-black" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
              </div>
              <span className="text-[9px] md:text-xs text-on-surface-variant font-bold">(210)</span>
            </div>
            <p className="text-primary font-black text-sm md:text-lg px-1">₹320.00</p>
          </div>

          {/* Product 4 */}
          <div className="group">
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden mb-3 md:mb-4 bg-surface-container shadow-sm group-hover:shadow-xl transition-all duration-500">
              <img 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBO0W6Vjy5dZVm9HrZYc4j74Zt5e5nVxCu5HIK0GFImql2DKXcqt0AihHGmPMCzQocK3OTrX0hM5xDjduy6iCuq9LqKByHwFa78HKeIvIgqBWzOPZ_l9YzbJNiJHNPrIkmGJzbpRYlNVrJFuW-ZLLkTlSZRJEpIfsyYtZzUayap-rMvO6_wc0I-5PbeEXk3dler-Sxx1DKNiijh79bm8pxYHqPqlt3PyAuuQaIcYisYZQzWtcOK9nMtVG7jY4l_YnHdB2VTfgooFZw" 
                alt="Fine Liner Brushes"
              />
              <button className="absolute top-3 right-3 md:top-4 md:right-4 bg-white/80 backdrop-blur-md p-1.5 md:p-2 rounded-full text-primary shadow-sm">
                <span className="material-symbols-outlined text-base md:text-2xl">favorite</span>
              </button>
              <div className="absolute bottom-3 left-3 right-3 translate-y-0 md:translate-y-12 opacity-100 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 transition-all duration-300">
                <button className="w-full bg-primary text-white py-1.5 md:py-3 rounded-full font-bold shadow-lg text-xs md:text-base">Quick Add</button>
              </div>
            </div>
            <h3 className="font-bold text-on-surface text-sm md:text-lg px-1">Fine Liner Brushes</h3>
            <div className="flex items-center gap-1.5 mb-0.5 md:mb-1 px-1">
              <div className="flex text-primary-burnt">
                <span className="material-symbols-outlined text-[10px] md:text-sm font-black" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                <span className="material-symbols-outlined text-[10px] md:text-sm font-black" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                <span className="material-symbols-outlined text-[10px] md:text-sm font-black" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                <span className="material-symbols-outlined text-[10px] md:text-sm font-black" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                <span className="material-symbols-outlined text-[10px] md:text-sm font-black">star</span>
              </div>
              <span className="text-[9px] md:text-xs text-on-surface-variant font-bold">(56)</span>
            </div>
            <p className="text-primary font-black text-sm md:text-lg px-1">₹599.00</p>
          </div>

        </div>
      </section>

      {/* Trust Strip */}
      <section className="w-full bg-primary-container/20 py-10 md:py-20 px-6 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center">
        <div className="flex flex-col items-center gap-3 md:gap-6 group">
          <div className="w-14 h-14 md:w-24 md:h-24 bg-secondary/5 rounded-2xl flex items-center justify-center text-on-surface-variant shadow-sm group-hover:shadow-md transition-shadow">
            <span className="material-symbols-outlined text-2xl md:text-5xl">flag</span>
          </div>
          <div>
            <h4 className="text-base md:text-xl font-extrabold text-on-surface tracking-tight">100% Made in India</h4>
            <p className="text-[10px] md:text-sm text-on-surface-variant mt-1">Sourced from local artisans</p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-3 md:gap-6 group">
          <div className="w-14 h-14 md:w-24 md:h-24 bg-secondary/5 rounded-2xl flex items-center justify-center text-on-surface-variant shadow-sm group-hover:shadow-md transition-shadow">
            <span className="material-symbols-outlined text-2xl md:text-5xl">auto_fix_high</span>
          </div>
          <div>
            <h4 className="text-base md:text-xl font-extrabold text-on-surface tracking-tight">Customized Gifts</h4>
            <p className="text-[10px] md:text-sm text-on-surface-variant mt-1">Make it truly yours</p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-3 md:gap-6 group">
          <div className="w-14 h-14 md:w-24 md:h-24 bg-secondary/5 rounded-2xl flex items-center justify-center text-on-surface-variant shadow-sm group-hover:shadow-md transition-shadow">
            <span className="material-symbols-outlined text-2xl md:text-5xl">verified</span>
          </div>
          <div>
            <h4 className="text-base md:text-xl font-extrabold text-on-surface tracking-tight">Best Value</h4>
            <p className="text-[10px] md:text-sm text-on-surface-variant mt-1">Premium quality, fair prices</p>
          </div>
        </div>
      </section>
    </div>
  );
};
export default HomePage;

