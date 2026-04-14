import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import '../components/ProductListing.css';
import Dropdown from '../components/Dropdown';
import Card from '../components/Card';
import Badge from '../components/Badge';

const ProductListing = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('featured');

  const products = [
    {
      id: 1,
      name: 'MDF Jali Jharokha',
      price: 2499,
      image: 'https://images.unsplash.com/photo-1615529182904-14819c35db37?w=400&h=400&fit=crop',
      category: 'Home Decor',
      description: 'Beautiful MDF Jali Jharokha wall art piece with intricate traditional patterns.'
    },
    {
      id: 2,
      name: 'Handcrafted Wooden Box',
      price: 1899,
      image: 'https://images.unsplash.com/photo-1594040226829-7f251ab46d80?w=400&h=400&fit=crop',
      category: 'Storage',
      description: 'Elegant wooden storage box with hand-carved details.'
    },
    {
      id: 3,
      name: 'Brass Decorative Lamp',
      price: 3299,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      category: 'Lighting',
      description: 'Traditional brass lamp with antique finish.'
    },
    {
      id: 4,
      name: 'Ceramic Vase Set',
      price: 1599,
      image: 'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=400&h=400&fit=crop',
      category: 'Decor',
      description: 'Set of 3 handcrafted ceramic vases in earthy tones.'
    },
    {
      id: 5,
      name: 'Rug Weaving Art',
      price: 4599,
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop',
      category: 'Textiles',
      description: 'Handwoven rug with traditional geometric patterns.'
    },
    {
      id: 6,
      name: 'Metal Wall Sculpture',
      price: 3899,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop',
      category: 'Art',
      description: 'Contemporary metal wall art piece for modern interiors.'
    },
    {
      id: 7,
      name: 'Clay Pottery Set',
      price: 1299,
      image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=400&h=400&fit=crop',
      category: 'Decor',
      description: 'Set of 5 rustic clay pots for plants or decor.'
    },
    {
      id: 8,
      name: 'Wooden Serving Tray',
      price: 2199,
      image: 'https://images.unsplash.com/photo-1585045503438-3602962f97c3?w=400&h=400&fit=crop',
      category: 'Kitchen',
      description: 'Handcrafted teakwood serving tray with brass inlay.'
    }
  ];

  const categories = ['All', 'Home Decor', 'Storage', 'Lighting', 'Decor', 'Textiles', 'Art', 'Kitchen'];

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch(sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'name':
        return a.name.localeCompare(b.name);
      default:
        return a.id - b.id;
    }
  });

  return (
    <div className="min-h-screen bg-surface">
      {/* Page Header */}
      <div className="bg-on-surface text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-2">Product Collection</h1>
          <p className="text-gray-300">Explore our curated artisan crafts</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters */}
        <div className="bg-surface-container rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-primary text-white'
                      : 'bg-surface-container-high text-on-surface hover:bg-surface-container-highest'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Sort */}
            <div className="flex items-center gap-2 relative">
              <label className="text-on-surface-variant text-sm">Sort by:</label>
              <Dropdown
                options={[
                  { label: 'Featured', value: 'featured' },
                  { label: 'Price, low to high', value: 'price-low' },
                  { label: 'Price, high to low', value: 'price-high' },
                  { label: 'Alphabetically, A-Z', value: 'name' }
                ]}
                selectedValue={sortBy}
                onChange={setSortBy}
                placeholder="Sort by"
              />
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {sortedProducts.map((product) => (
            <Card
              key={product.id}
              image={product.image}
              title={product.name}
              price={`₹${product.price.toLocaleString('en-IN')}`}
              badge={<Badge variant="primary">{product.category}</Badge>}
              onClick={() => {}}
            />
          ))}
        </div>

        {sortedProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-on-surface-variant text-lg">No products found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductListing;