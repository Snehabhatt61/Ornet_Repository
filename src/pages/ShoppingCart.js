import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import './ShoppingCart.css';

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'MDF Jali Jharokha',
      price: 2499,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1615529182904-14819c35db37?w=200&h=200&fit=crop'
    },
    {
      id: 2,
      name: 'Handcrafted Wooden Box',
      price: 1899,
      quantity: 2,
      image: 'https://images.unsplash.com/photo-1594040226829-7f251ab46d80?w=200&h=200&fit=crop'
    },
    {
      id: 3,
      name: 'Brass Decorative Lamp',
      price: 3299,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop'
    }
  ]);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 199;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-surface">
  <main className="pt-24 pb-16 max-w-screen-xl mx-auto px-6">
    <h1 className="text-4xl font-black tracking-tighter mb-8 text-[#2f2f2e]">
      Your Cart
    </h1>
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      <div className="lg:col-span-8 space-y-3">
        <div className="cart-card grid grid-cols-12 gap-4 items-center">
          <div className="col-span-12 sm:col-span-3">
            <div
              className="relative w-full aspect-square bg-surface-container overflow-hidden rounded-lg flex-shrink-0 mx-auto"
              style={{ width: "50%" }}
            >
              <img
                alt="MDF Jali Jharokha"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsJkgX3-jnQ8IOb2GpfyPqTxozd7oGINyklwlMCdB3pkpSxRDeAfPWh7hqE23mSaCne088Dbux1mdePUIU3wjRacg4995Og36K3tIC5tKk2gdL0r0BHpErdQC8rT5uskl2A4N_CN8O1CfMfd_4tlDHJ91gM7wH2BGo5y0MLyXa9y0LHGdEkeSurmcFSOpVtjjPc0B6Xp2UzJj0Dmnp6NWf5k5EwTF7Ebwl3G8P5ph4p-EZ7JvwwKQ3bOCLcqCEpgzdGO3kaZiokqw"
              />
            </div>
          </div>
          <div className="col-span-12 sm:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1 text-left">
              <h3 className="text-lg font-bold tracking-tight text-[#2f2f2e]">
                MDF Jali Jharokha
              </h3>
              <p className="text-on-surface text-sm line-clamp-1 opacity-80">
                Hand-carved architectural wall piece.
              </p>
              <div className="text-on-surface-variant text-sm font-medium tracking-wide flex flex-col">
                <span>
                  <strong className="font-bold">Size:</strong> 18x24 inches
                </span>
                <span>
                  <strong className="font-bold">Finish:</strong> Walnut
                </span>
              </div>
              <p className="text-base font-bold mt-1 text-[#2f2f2e]">₹2,499</p>
            </div>
            <div className="flex flex-col justify-between items-start md:items-end gap-3">
              <div className="flex items-center bg-surface-container-low border border-outline-variant/20 rounded-full px-2 py-1">
                <button className="hover:text-primary p-0.5">
                  <span
                    className="material-symbols-outlined text-sm"
                    data-icon="remove"
                  >
                    remove
                  </span>
                </button>
                <span className="mx-3 font-bold text-xs">1</span>
                <button className="hover:text-primary p-0.5">
                  <span
                    className="material-symbols-outlined text-sm"
                    data-icon="add"
                  >
                    add
                  </span>
                </button>
              </div>
              <button className="text-on-surface-variant hover:text-error transition-colors flex items-center gap-1 py-1">
                <span
                  className="material-symbols-outlined text-base"
                  data-icon="delete"
                >
                  delete
                </span>
                <span className="text-[9px] uppercase font-bold tracking-widest">
                  Remove
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="cart-card grid grid-cols-12 gap-4 items-center">
          <div className="col-span-12 sm:col-span-3">
            <div
              className="relative w-full aspect-square bg-surface-container overflow-hidden rounded-lg flex-shrink-0 mx-auto"
              style={{ width: "50%" }}
            >
              <img
                alt="Ceramic Vase"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnBP7ZqxTSxUZD5m_Zg6gRiD3W4wQRSrJNgR_4rS48eZFcY8oSCqOmiMv_VyOhdxoRrfFgx8DqkGZDFwk9L4mVtXjHcyjB9cPk46P3YiWGvPYXXi47tXVhEHd0JMOG6UgQb1_IvHuA7dFCAyH7xq6wLvX5ioC_floVTc4lYZlTnSIeT7cSZEkrvfTT1LyfoLMt-gCrWwQZtJcMRwUDdj8fdBJ_HsE9lK8lDrCmzPzN2NTWOsW1pcIHRB7X-zY3QPwVM0-fzuQQLNI"
              />
            </div>
          </div>
          <div className="col-span-12 sm:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1 text-left">
              <h3 className="text-lg font-bold tracking-tight text-[#2f2f2e]">
                Terra Speckled Vase
              </h3>
              <p className="text-on-surface text-sm line-clamp-1 opacity-80">
                Minimalist stoneware, kiln-fired with natural basalt speckles.
              </p>
              <div className="text-on-surface-variant text-sm font-medium tracking-wide flex flex-col">
                <span>
                  <strong className="font-bold">Size:</strong> Large
                </span>
                <span>
                  <strong className="font-bold">Color:</strong> Natural Earth
                </span>
              </div>
              <p className="text-base font-bold mt-1 text-[#2f2f2e]">₹1,850</p>
            </div>
            <div className="flex flex-col justify-between items-start md:items-end gap-3">
              <div className="flex items-center bg-surface-container-low border border-outline-variant/20 rounded-full px-2 py-1">
                <button className="hover:text-primary p-0.5">
                  <span
                    className="material-symbols-outlined text-sm"
                    data-icon="remove"
                  >
                    remove
                  </span>
                </button>
                <span className="mx-3 font-bold text-xs">1</span>
                <button className="hover:text-primary p-0.5">
                  <span
                    className="material-symbols-outlined text-sm"
                    data-icon="add"
                  >
                    add
                  </span>
                </button>
              </div>
              <button className="text-on-surface-variant hover:text-error transition-colors flex items-center gap-1 py-1">
                <span
                  className="material-symbols-outlined text-base"
                  data-icon="delete"
                >
                  delete
                </span>
                <span className="text-[9px] uppercase font-bold tracking-widest">
                  Remove
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <aside className="lg:col-span-4 sticky top-24">
        <div className="bg-[#f3f0ef] border-t-[3px] border-[#a33700] p-6 rounded-b-xl shadow-sm">
          <h2 className="text-sm font-bold uppercase tracking-widest mb-4 text-[#2f2f2e] border-b border-outline-variant/20 pb-3">
            Order Summary
          </h2>
          <div className="space-y-3">
            <div className="flex justify-between text-on-surface-variant">
              <span className="text-xs">Subtotal</span>
              <span className="font-bold">₹4,349</span>
            </div>
            <div className="flex justify-between text-on-surface-variant items-center">
              <span className="text-xs">Shipping</span>
              <span className="text-secondary font-bold uppercase text-[9px] tracking-widest text-right">
                Calculated at checkout
              </span>
            </div>
            <div className="pt-4 mt-4 border-t border-outline-variant/20 flex justify-between items-baseline">
              <span className="text-sm font-bold">Estimated Total</span>
              <span className="text-2xl font-black text-[#2f2f2e]">₹4,349</span>
            </div>
          </div>
          <div className="mt-6">
            <button className="button-gradient w-full py-3 px-4 rounded-full text-on-primary font-bold text-[11px] tracking-widest uppercase flex items-center justify-center hover:scale-[1.02] transition-all shadow-lg shadow-primary/20">
              PROCEED &amp; SEND ON WHATSAPP
            </button>
          </div>
          <div className="mt-6 bg-surface-container-low border border-outline-variant/20 rounded-lg p-3 flex gap-3 items-center">
            <span
              className="material-symbols-outlined text-secondary text-lg"
              data-icon="verified_user"
            >
              verified_user
            </span>
            <span className="text-[10px] font-medium text-on-surface-variant leading-tight">
              Every purchase supports local Indian artisans directly.
            </span>
          </div>
        </div>
      </aside>
    </div>
    <section className="mt-16 relative">
      <div className="flex flex-col mb-8">
        <span className="text-primary font-bold uppercase tracking-[0.2em] text-[10px]">
          Explore more
        </span>
        <h2 className="text-3xl font-black tracking-tighter mt-1 text-[#2f2f2e]">
          Recommended for You
        </h2>
      </div>
      <div className="relative overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="group cursor-pointer">
            <div className="relative aspect-[4/5] bg-surface-container overflow-hidden rounded-lg mb-3 border border-outline-variant/10">
              <div className="absolute top-3 right-3 z-10 bg-tertiary text-on-tertiary px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-widest shadow-lg">
                SALE
              </div>
              <img
                alt="Wooden Toy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsJkgX3-jnQ8IOb2GpfyPqTxozd7oGINyklwlMCdB3pkpSxRDeAfPWh7hqE23mSaCne088Dbux1mdePUIU3wjRacg4995Og36K3tIC5tKk2gdL0r0BHpErdQC8rT5uskl2A4N_CN8O1CfMfd_4tlDHJ91gM7wH2BGo5y0MLyXa9y0LHGdEkeSurmcFSOpVtjjPc0B6Xp2UzJj0Dmnp6NWf5k5EwTF7Ebwl3G8P5ph4p-EZ7JvwwKQ3bOCLcqCEpgzdGO3kaZiokqw"
              />
            </div>
            <h4 className="text-sm font-bold tracking-tight text-[#2f2f2e]">
              Kondapalli Wood Toys
            </h4>
            <div className="flex gap-2 mt-0.5 items-baseline">
              <span className="text-primary font-black text-sm">₹1,200</span>
              <span className="text-on-surface-variant line-through text-[10px]">
                ₹1,800
              </span>
            </div>
          </div>
          <div className="group cursor-pointer">
            <div className="relative aspect-[4/5] bg-surface-container overflow-hidden rounded-lg mb-3 border border-outline-variant/10">
              <img
                alt="Brass Lamp"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6jHAgZrG4D3efFo9sYD8aAC-FzTG2UwguwQrmYAH7kkrVt4gA1z-fezvEFuo26KSc42zpUa5lC__dLOGQfGkt48LbJtHLFwBeKjjRCtVUWv4VElsYrvEUhaHE7EsR5AioubOSHe_Bc_80yA2ZoyM5ERF6d0QrE-m8IPAAK-P_DxcCIF8IV5w9ZCGJ4IV9RH9HhC_jLSiQ1u_aXqE3HIH65gnEe4sLaHUniz5R8rUDDx51ohCkNcdG6y1w3qzSjmIGwg7F8m68xo0"
              />
            </div>
            <h4 className="text-sm font-bold tracking-tight text-[#2f2f2e]">
              Beaten Brass Diya
            </h4>
            <div className="mt-0.5">
              <span className="text-on-surface font-black text-sm">₹3,450</span>
            </div>
          </div>
          <div className="group cursor-pointer">
            <div className="relative aspect-[4/5] bg-surface-container overflow-hidden rounded-lg mb-3 border border-outline-variant/10">
              <div className="absolute top-3 right-3 z-10 bg-tertiary text-on-tertiary px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-widest shadow-lg">
                SALE
              </div>
              <img
                alt="Handwoven Rug"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBz3_yJXHSzcoAwXm2_w6u_-lnFVkl6crIVndjaWavtlcuQ5CtSbFOB4jPmpqcDQFDHSyeLlaL1MhkfnF04TSGBh9g2xiQgkcSiVpJoIu-E59kP2mUr_1NOSBZrA5BvtXep-JBuP3qVWh6r1l2sk9EaeYrqzPHvCC94IUQWeiZw-Dtlsh04z59Xnq35uhwd87RHn4wKI6a_xSgAUTx_x-srMYSwk0edw1SWYOJ2rZGdL5YhdKKoo3Vkz1NKj_e8bNrHeuhMrfnWKho"
              />
            </div>
            <h4 className="text-sm font-bold tracking-tight text-[#2f2f2e]">
              Indigo Ikat Runner
            </h4>
            <div className="flex gap-2 mt-0.5 items-baseline">
              <span className="text-primary font-black text-sm">₹5,600</span>
              <span className="text-on-surface-variant line-through text-[10px]">
                ₹8,200
              </span>
            </div>
          </div>
          <div className="group cursor-pointer hidden md:block">
            <div className="relative aspect-[4/5] bg-surface-container overflow-hidden rounded-lg mb-3 border border-outline-variant/10">
              <img
                alt="Blue Pottery"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnBP7ZqxTSxUZD5m_Zg6gRiD3W4wQRSrJNgR_4rS48eZFcY8oSCqOmiMv_VyOhdxoRrfFgx8DqkGZDFwk9L4mVtXjHcyjB9cPk46P3YiWGvPYXXi47tXVhEHd0JMOG6UgQb1_IvHuA7dFCAyH7xq6wLvX5ioC_floVTc4lYZlTnSIeT7cSZEkrvfTT1LyfoLMt-gCrWwQZtJcMRwUDdj8fdBJ_HsE9lK8lDrCmzPzN2NTWOsW1pcIHRB7X-zY3QPwVM0-fzuQQLNI"
              />
            </div>
            <h4 className="text-sm font-bold tracking-tight text-[#2f2f2e]">
              Jaipur Blue Vase
            </h4>
            <div className="mt-0.5">
              <span className="text-on-surface font-black text-sm">₹2,100</span>
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-2 mt-8">
          <button className="w-2 h-2 rounded-full bg-primary transition-all" />
          <button className="w-1.5 h-1.5 rounded-full bg-outline-variant/40 hover:bg-outline-variant transition-all" />
          <button className="w-1.5 h-1.5 rounded-full bg-outline-variant/40 hover:bg-outline-variant transition-all" />
        </div>
      </div>
    </section>
  </main>
    </div>
  );
};

export default ShoppingCart;