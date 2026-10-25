'use client';

import { useState, useRef, useEffect } from 'react';
import { Eye, Heart, Share2, ZoomIn, Camera } from 'lucide-react';
import Lightbox from './Lightbox';

function GalleryCard({ item, onClick, index }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`group relative cursor-pointer overflow-hidden rounded-2xl shadow-lg bg-white
        transform transition-all duration-700 hover:scale-[1.02] hover:shadow-2xl
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      onClick={onClick}
      style={{ 
        animationDelay: `${index * 0.1}s`,
        transitionDelay: `${index * 0.05}s`
      }}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={item.image || '/assets/placeholder.jpg'}
          alt={item.title}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
          loading="lazy"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent 
          opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Action Buttons */}
        <div className="absolute top-4 right-4 flex flex-col gap-2 transform translate-x-12 
          group-hover:translate-x-0 transition-transform duration-500">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsLiked(!isLiked);
            }}
            className={`p-2 rounded-full backdrop-blur-md transition-all duration-300 hover:scale-110
              ${isLiked 
                ? 'bg-red-500 text-white shadow-lg shadow-red-500/25' 
                : 'bg-white/20 text-white hover:bg-white/30'
              }`}
          >
            <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
          </button>
          
          <button
            onClick={(e) => {
              e.stopPropagation();
              // Share functionality
            }}
            className="p-2 rounded-full bg-white/20 text-white backdrop-blur-md 
              hover:bg-white/30 transition-all duration-300 hover:scale-110"
          >
            <Share2 className="w-4 h-4" />
          </button>
          
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClick();
            }}
            className="p-2 rounded-full bg-secondary text-white backdrop-blur-md 
              hover:bg-secondary/80 transition-all duration-300 hover:scale-110 shadow-lg shadow-secondary/25"
          >
            <ZoomIn className="w-4 h-4" />
          </button>
        </div>

        {/* View Counter */}
        <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1 
          bg-white/20 backdrop-blur-md rounded-full text-white text-sm
          transform -translate-x-12 group-hover:translate-x-0 transition-transform duration-500">
          <Eye className="w-4 h-4" />
          <span>{Math.floor(Math.random() * 1000) + 100}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 relative overflow-hidden">
        <h3 className="text-lg font-semibold text-gray-800 group-hover:text-secondary 
          transition-colors duration-300 truncate">{item.title}</h3>
        <p className="text-sm text-gray-500 mt-1">{item.category}</p>
        
        {/* Animated underline */}
        <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-secondary to-accent 
          transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
      </div>

      {/* Hover Effect Particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-white rounded-full 
          opacity-0 group-hover:opacity-100 group-hover:animate-ping transform -translate-x-1 -translate-y-1" 
          style={{ animationDelay: '0.2s' }} />
      </div>
    </div>
  );
}

function GalleryGrid({ items }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('all');
  const [sortBy, setSortBy] = useState('recent');

  const filteredItems = items.filter(item => 
    filter === 'all' || item.category.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="space-y-8">
      {/* Filter Controls */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-6 bg-white rounded-2xl shadow-lg">
        <div className="flex flex-wrap gap-2">
          {['all', 'weddings', 'portraits', 'landscapes', 'events'].map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                transform hover:scale-105 capitalize
                ${filter === category
                  ? 'bg-secondary text-white shadow-lg shadow-secondary/25'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="px-4 py-2 rounded-lg border border-gray-200 bg-white text-gray-700 
            focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent
            transition-all duration-300"
        >
          <option value="recent">Most Recent</option>
          <option value="popular">Most Popular</option>
          <option value="title">Title A-Z</option>
        </select>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredItems.map((item, index) => (
          <GalleryCard 
            key={item.id} 
            item={item} 
            onClick={() => setSelectedImage(item)}
            index={index}
          />
        ))}
      </div>

      {/* Empty State */}
      {filteredItems.length === 0 && (
        <div className="text-center py-16">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Camera className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No photos found</h3>
          <p className="text-gray-500">Try adjusting your filters to see more results.</p>
        </div>
      )}

      {/* Lightbox */}
      {selectedImage && (
        <Lightbox image={selectedImage} onClose={() => setSelectedImage(null)} />
      )}
    </div>
  );
}

export default GalleryGrid;