'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Eye, X, Filter } from 'lucide-react';

function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedItem, setSelectedItem] = useState(null);

  const categories = ['All', 'Weddings', 'Portraits', 'Events', 'Architecture'];

  const portfolioItems = [
    {
      id: 1,
      title: 'Kandyan Poruwa Vows & Rituals',
      category: 'Weddings',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80',
      description: 'Sacred chanting and family blessings during an auspicious dawn Poruwa ceremony.',
      location: 'Kandy, Sri Lanka',
      year: '2024'
    },
    {
      id: 2,
      title: 'Monochrome Osariya Portrait Study',
      category: 'Portraits',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80',
      description: 'Studio exploration of heritage handloom textures, jewelry, and serene gaze.',
      location: 'Colombo 07, Sri Lanka',
      year: '2024'
    },
    {
      id: 3,
      title: 'Sunset Ramparts Nuptials',
      category: 'Weddings',
      image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1000&q=80',
      description: 'Golden hour portraits against the historic Dutch fort ramparts and ocean breeze.',
      location: 'Galle Fort, Sri Lanka',
      year: '2024'
    },
    {
      id: 4,
      title: 'Bawa Inspired Tropical Architecture',
      category: 'Architecture',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
      description: 'Courtyards, daylight reflection pools, and seamless indoor-outdoor tropical minimalism.',
      location: 'Bentota, Sri Lanka',
      year: '2023'
    },
    {
      id: 5,
      title: 'Grand Ballroom Homecoming Celebration',
      category: 'Events',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1000&q=80',
      description: 'Warm celebratory evening bringing extended families together in joyful dance.',
      location: 'Colombo, Sri Lanka',
      year: '2023'
    },
    {
      id: 6,
      title: 'Ella Tea Estate Pre-Shoot Adventure',
      category: 'Weddings',
      image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1000&q=80',
      description: 'Misty mountain ridgeline portraits with sweeping views over the southern plains.',
      location: 'Ella, Sri Lanka',
      year: '2024'
    },
  ];

  const filtered = selectedCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <div className="bg-[#F2EDE7] text-[#2E2219]">
      {/* Page Header */}
      <section className="py-20 bg-[#E7DDD3] border-b border-[#CCBEB1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#997E67] text-xs uppercase tracking-[0.22em] font-semibold mb-3">
            Visual Stories
          </p>
          <h1 className="heading-serif text-4xl lg:text-6xl font-bold text-[#2E2219] mb-4">
            Weddings & Portfolio
          </h1>
          <div className="gold-line" />
          <p className="text-[#5E4D3E] text-base lg:text-lg max-w-2xl mx-auto font-light">
            A curated selection of ceremonies, editorial portraits, and destination assignments.
          </p>
        </div>
      </section>

      {/* Categories & Filter Bar */}
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

      {/* Portfolio Gallery Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group bg-[#F8F2EB] border border-[#CCBEB1] overflow-hidden rounded-[2px] cursor-pointer hover:border-[#997E67] hover:shadow-xl transition-all duration-500 hover:-translate-y-1.5 animate-fadeInUp flex flex-col"
              style={{ animationDelay: `${idx * 0.08}s` }}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#E7DDD3]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[#2E2219]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="p-3 bg-[#F2EDE7] text-[#2E2219] rounded-full shadow-lg">
                    <Eye className="w-5 h-5 text-[#997E67]" />
                  </div>
                </div>
                <span className="absolute top-3 left-3 bg-[#F2EDE7]/90 backdrop-blur-sm text-[#2E2219] text-[0.65rem] uppercase tracking-wider px-2.5 py-1 font-semibold rounded-sm">
                  {item.category}
                </span>
              </div>

              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="heading-serif text-xl font-bold text-[#2E2219] mb-1.5 group-hover:text-[#997E67] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#82705F] mb-3">
                    {item.location} • {item.year}
                  </p>
                  <p className="text-sm text-[#5E4D3E] leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-[#CCBEB1]/40 flex items-center justify-between text-xs tracking-wider uppercase font-medium text-[#997E67]">
                  <span>View Story</span>
                  <span>→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox / Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2E2219]/90 backdrop-blur-md animate-fadeIn"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="max-w-4xl w-full bg-[#F8F2EB] border border-[#CCBEB1] rounded-[2px] overflow-hidden shadow-2xl animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/10] bg-black">
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="w-full h-full object-contain"
              />
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 p-2 bg-[#F2EDE7]/90 text-[#2E2219] hover:text-[#997E67] rounded-full transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-[0.7rem] uppercase tracking-widest text-[#997E67] font-semibold">
                  {selectedItem.category} • {selectedItem.location}
                </span>
                <h3 className="heading-serif text-2xl font-bold text-[#2E2219] mt-1">
                  {selectedItem.title}
                </h3>
                <p className="text-sm text-[#5E4D3E] mt-1">
                  {selectedItem.description}
                </p>
              </div>
              <Link
                href="/contact"
                className="btn-gold text-xs py-2.5 px-6 whitespace-nowrap"
              >
                Inquire For Similar Shoots
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PortfolioPage;