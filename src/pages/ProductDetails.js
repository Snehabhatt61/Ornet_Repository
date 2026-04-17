import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './ProductDetails.css';

const ProductDetails = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const product = {
    id: parseInt(id) || 1,
    name: 'MDF Jali Jharokha',
    price: 2499,
    originalPrice: 3499,
    description: 'Beautiful MDF Jali Jharokha wall art piece with intricate traditional patterns. This stunning piece showcases the finest craftsmanship with detailed geometric cutouts that create beautiful shadow patterns when light passes through.',
    category: 'Home Decor',
    rating: 4.8,
    reviews: 124,
    inStock: true,
    images: [
      'https://images.unsplash.com/photo-1615529182904-14819c35db37?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=600&h=600&fit=crop'
    ],
    features: [
      'Handcrafted with precision',
      'Premium quality MDF material',
      'Traditional Jali pattern design',
      'Easy wall mounting included',
      'Dimensions: 24" x 18" x 2"'
    ],
    artisan: {
      name: 'Rajesh Kumar',
      location: 'Rajasthan, India',
      experience: '15+ years',
      bio: 'Master craftsman specializing in traditional Rajasthani Jali work.'
    }
  };

  const recommendedProducts = [
    {
      id: 2,
      name: 'Handcrafted Wooden Box',
      price: 1899,
      image: 'https://images.unsplash.com/photo-1594040226829-7f251ab46d80?w=300&h=300&fit=crop'
    },
    {
      id: 3,
      name: 'Brass Decorative Lamp',
      price: 3299,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop'
    },
    {
      id: 4,
      name: 'Ceramic Vase Set',
      price: 1599,
      image: 'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=300&h=300&fit=crop'
    }
  ];

  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  return (
    <div className="min-h-screen bg-surface">
      {/* Breadcrumb */}
      <div className="bg-surface-container-lowest border-b border-outline-variant">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex text-sm text-on-surface-variant">
            <Link to="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/products" className="hover:text-primary">Products</Link>
            <span className="mx-2">/</span>
            <span className="text-on-surface font-medium">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div>
            <div className="aspect-square rounded-lg overflow-hidden bg-surface-container mb-4">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-3">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? 'border-primary' : 'border-outline-variant'
                  }`}
                >
                  <img src={img} alt={`View ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="mb-2">
              <span className="bg-primary text-white text-xs px-3 py-1 rounded-full">{product.category}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-on-surface mb-4">{product.name}</h1>
            
            {/* Rating */}
            <div className="flex items-center mb-4">
              <div className="flex text-primary">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-primary' : 'text-outline'}`} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="ml-2 text-on-surface-variant">{product.rating} ({product.reviews} reviews)</span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl font-bold text-primary">₹{product.price.toLocaleString('en-IN')}</span>
              <span className="text-lg text-outline line-through">₹{product.originalPrice.toLocaleString('en-IN')}</span>
              <span className="bg-secondary-container text-on-secondary-container text-sm px-2 py-1 rounded">{discount}% OFF</span>
            </div>

            <p className="text-on-surface-variant mb-6">{product.description}</p>

            {/* Features */}
            <div className="mb-6">
              <h3 className="font-semibold text-on-surface mb-3">Features:</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start text-on-surface-variant">
                    <svg className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center border border-outline-variant rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 hover:bg-surface-container transition-colors"
                >
                  -
                </button>
                <span className="px-6 py-2 border-x border-outline-variant">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 hover:bg-surface-container transition-colors"
                >
                  +
                </button>
              </div>
              <button className="button-gradient flex-1 bg-primary text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary-burnt transition-colors">
                Add to Cart
              </button>
              <button className="p-3 border border-outline-variant rounded-lg hover:border-primary hover:text-primary transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
            </div>

            {/* Artisan Info */}
            <div className="bg-surface-container-low rounded-lg p-6">
              <h3 className="font-semibold text-on-surface mb-3">About the Artisan</h3>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {product.artisan.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-on-surface">{product.artisan.name}</p>
                  <p className="text-on-surface-variant text-sm">{product.artisan.location} • {product.artisan.experience}</p>
                  <p className="text-on-surface-variant text-sm mt-1">{product.artisan.bio}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recommended Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-on-surface mb-8">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommendedProducts.map((item) => (
              <Link
                key={item.id}
                to={`/product/${item.id}`}
                className="group bg-surface rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-outline-variant"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <div className="p-4">
                    <h3 className="font-semibold text-on-surface group-hover:text-primary transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-primary font-bold mt-1">₹{item.price.toLocaleString('en-IN')}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;