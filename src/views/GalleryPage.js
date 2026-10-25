'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Eye, Heart, X, ZoomIn, ZoomOut } from 'lucide-react';

function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeImage, setActiveImage] = useState(null);

  const categories = ['All', 'Weddings', 'Portraits', 'Events', 'Lifestyle', 'Architecture'];

  const images = [
    {
      id: 1,
      title: 'Embrace in the Olive Groves',
      category: 'Weddings',
      url: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85',
      location: 'Crete, Greece'
    },
    {
      id: 2,
      title: 'Golden Hour Silhouette',
      category: 'Weddings',
      url: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=85',
      location: 'Lake Como, Italy'
    },
    {
      id: 3,
      title: 'High-Fashion Portraiture',
      category: 'Portraits',
      url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=85',
      location: 'New York, USA'
    },
    {
      id: 4,
      title: 'Alpine Elopement Exchange',
      category: 'Weddings',
      url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=85',
      location: 'Zermatt, Switzerland'
    },
    {
      id: 5,
      title: 'Warm Candlelit Gala Dinner',
      category: 'Events',
      url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=85',
      location: 'Florence, Italy'
    },
    {
      id: 6,
      title: 'Serene Coastal Villa',
      category: 'Architecture',
      url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
      location: 'Mallorca, Spain'
    },
    {
      id: 7,
      title: 'Intimate Bridal Preparation',
      category: 'Weddings',
      url: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=85',
      location: 'Santorini, Greece'
    },
    {
      id: 8,
      title: 'Editorial Studio Profile',
      category: 'Portraits',
      url: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=1200&q=85',
      location: 'London, UK'
    },
    {
      id: 9,
      title: 'Sunlit Veranda Architecture',
      category: 'Architecture',
      url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=85',
      location: 'Cannes, France'
    }
  ];

  const filtered = selectedCategory === 'All'
    ? images
    : images.filter(img => img.category === selectedCategory);

  return (
    <div className="bg-[#F2EDE7] text-[#2E2219]">
      {/* Header */}
      <section className="py-20 bg-[#E7DDD3] border-b border-[#CCBEB1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#997E67] text-xs uppercase tracking-[0.22em] font-semibold mb-3">
            High-Resolution Exhibition
          </p>
          <h1 className="heading-serif text-4xl lg:text-6xl font-bold text-[#2E2219] mb-4">
            Curated Gallery
          </h1>
          <div className="gold-line" />
          <p className="text-[#5E4D3E] text-base lg:text-lg max-w-2xl mx-auto font-light">
            An expansive view of captured light, fleeting emotions, and architectural forms.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 text-xs uppercase tracking-[0.16em] font-medium rounded-[2px] transition-all duration-300 ${
                selectedCategory === cat
                  ? 'bg-[#997E67] text-white shadow-md'
                  : 'bg-[#F8F2EB] text-[#5E4D3E] border border-[#CCBEB1] hover:border-[#997E67] hover:text-[#997E67]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Masonry / Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((img, idx) => (
            <div
              key={img.id}
              onClick={() => setActiveImage(img)}
              className="group relative aspect-[4/5] bg-[#E7DDD3] border border-[#CCBEB1] overflow-hidden rounded-[2px] cursor-pointer shadow-sm hover:shadow-xl hover:border-[#997E67] transition-all duration-500 hover:-translate-y-1 animate-fadeInUp"
              style={{ animationDelay: `${idx * 0.05}s` }}
            >
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2E2219]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                <span className="text-[0.65rem] uppercase tracking-widest text-[#FFDBBB] font-semibold">
                  {img.category}
                </span>
                <h4 className="heading-serif text-lg font-bold text-white">
                  {img.title}
                </h4>
                <p className="text-xs text-[#E7DDD3]">{img.location}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2E2219]/95 backdrop-blur-md animate-fadeIn"
          onClick={() => setActiveImage(null)}
        >
          <div
            className="max-w-5xl w-full max-h-[90vh] flex flex-col items-center relative animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveImage(null)}
              className="absolute -top-12 right-0 p-2 text-white/80 hover:text-white transition-colors"
              aria-label="Close image"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="relative max-h-[80vh] overflow-hidden rounded-[2px] border border-[#CCBEB1]/40 shadow-2xl">
              <img
                src={activeImage.url}
                alt={activeImage.title}
                className="max-h-[75vh] w-auto object-contain"
              />
            </div>
            <div className="mt-4 text-center text-white">
              <h3 className="heading-serif text-xl font-bold">{activeImage.title}</h3>
              <p className="text-xs text-[#FFDBBB] uppercase tracking-widest mt-1">
                {activeImage.category} • {activeImage.location}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default GalleryPage;