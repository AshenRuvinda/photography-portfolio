'use client';

import { useEffect, useState, useRef } from 'react';
import { 
  Filter, 
  Grid3X3, 
  List, 
  Search, 
  X, 
  Aperture,
  Camera,
  Eye,
  Heart,
  Users,
  Clock,
  Star,
  Award,
  ChevronDown
} from 'lucide-react';

function PortfolioPage() {
  const [items] = useState([
    // Sample portfolio data
    {
      id: 1,
      title: 'Golden Hour Portrait',
      category: 'Portraits',
      image: 'https://images.unsplash.com/photo-1494790108755-2616c9998a86?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Natural light portrait capturing authentic emotion',
      year: '2024'
    },
    {
      id: 2,
      title: 'Wedding Ceremony',
      category: 'Weddings',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Intimate moment during vow exchange',
      year: '2024'
    },
    {
      id: 3,
      title: 'Corporate Executive',
      category: 'Corporate',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Professional headshot for business leader',
      year: '2023'
    },
    {
      id: 4,
      title: 'Family Heritage',
      category: 'Family',
      image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Three generations captured together',
      year: '2023'
    },
    {
      id: 5,
      title: 'Bridal Portrait',
      category: 'Weddings',
      image: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Elegant bridal portrait with vintage styling',
      year: '2024'
    },
    {
      id: 6,
      title: 'Senior Portrait',
      category: 'Portraits',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Contemporary senior portrait with artistic flair',
      year: '2023'
    }
  ]);
  
  const [filteredItems, setFilteredItems] = useState(items);
  const [categories, setCategories] = useState(['All', 'Portraits', 'Weddings', 'Corporate', 'Family']);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('recent');
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const pageRef = useRef(null);

  useEffect(() => {
    // Simulate loading and set up initial state
    const timer = setTimeout(() => {
      setFilteredItems(items);
      setIsLoading(false);
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, [items]);

  useEffect(() => {
    let filtered = [...items];

    if (selectedCategory !== 'All') {
      filtered = filtered.filter(item => 
        item.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    if (searchTerm.trim()) {
      filtered = filtered.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    switch (sortBy) {
      case 'title':
        filtered.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'category':
        filtered.sort((a, b) => a.category.localeCompare(b.category));
        break;
      case 'recent':
      default:
        filtered.sort((a, b) => b.id - a.id);
        break;
    }

    setFilteredItems(filtered);
  }, [items, selectedCategory, searchTerm, sortBy]);

  const clearFilters = () => {
    setSelectedCategory('All');
    setSearchTerm('');
    setSortBy('recent');
  };

  const handleImageClick = (item) => {
    setSelectedImage(item);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-stone-50 flex items-center justify-center">
        <div className="text-center space-y-6">
          <div className="relative">
            <div className="w-20 h-20 border-2 border-stone-300 border-t-amber-300 rounded-full animate-spin mx-auto" />
            <Aperture className="w-8 h-8 text-amber-600 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </div>
          <div>
            <p className="text-stone-700 font-light tracking-wide mb-2">Curating Portfolio</p>
            <p className="text-stone-500 text-sm">Loading finest work...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div ref={pageRef} className="min-h-screen bg-gradient-to-br from-stone-50 to-stone-100">
      {/* Hero Section */}
      <div className="relative py-24 bg-gradient-to-br from-stone-800 to-stone-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: 'radial-gradient(circle at 30% 70%, rgba(245,245,220,0.4) 1px, transparent 1px)',
              backgroundSize: '60px 60px'
            }}
          />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center text-white">
          <div className={`space-y-8 transition-all duration-1200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            {/* Header */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-20 bg-gradient-to-r from-transparent via-amber-300 to-transparent" />
              <Camera className="w-8 h-8 text-amber-300" />
              <div className="h-px w-20 bg-gradient-to-r from-amber-300 via-transparent to-transparent" />
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-wide">
              Portfolio <span className="font-thin text-amber-200">Collection</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-stone-300 font-light max-w-3xl mx-auto leading-relaxed">
              A curated selection of my finest work, showcasing the artistry and 
              emotion captured through years of dedicated photography.
            </p>
            
            {/* Portfolio Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-3xl mx-auto">
              {[
                { number: items.length, label: 'Featured Works', icon: Star },
                { number: categories.length - 1, label: 'Categories', icon: Eye },
                { number: 500, label: 'Total Sessions', icon: Users },
                { number: 15, label: 'Years Active', icon: Clock }
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 mb-4 
                    border border-amber-300/30 rounded-sm group-hover:border-amber-300/60 
                    transition-all duration-300">
                    <stat.icon className="w-6 h-6 text-amber-300" />
                  </div>
                  <div className="text-2xl font-light text-amber-200 mb-1">{stat.number}+</div>
                  <div className="text-sm text-stone-400 uppercase tracking-wider font-light">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-20">
        {/* Classical Filter Controls */}
        <div className={`bg-white shadow-md border border-stone-300 mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {/* Search Bar */}
          <div className="px-8 py-6 border-b border-stone-200 bg-stone-50">
            <div className="max-w-2xl mx-auto relative">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search portfolio by title or description..."
                className="w-full px-5 py-4 border-2 border-stone-300 bg-white text-stone-700
                  focus:outline-none focus:border-amber-500 transition-all duration-300 text-base
                  placeholder:text-stone-400"
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm('')}
                    className="p-1 hover:bg-stone-100 transition-colors duration-200"
                  >
                    <X className="w-4 h-4 text-stone-500" />
                  </button>
                )}
                <Search className="w-5 h-5 text-stone-400" />
              </div>
            </div>
          </div>

          {/* Filter Section */}
          <div className="px-8 py-6">
            <div className="space-y-6">
              
              {/* Category Filters */}
              <div>
                <h3 className="text-sm font-medium text-stone-700 uppercase tracking-wider mb-3">
                  Categories
                </h3>
                <div className="flex flex-wrap gap-3">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-5 py-2 border-2 text-sm font-medium transition-all duration-300 ${
                        selectedCategory === category
                          ? 'bg-amber-600 text-white border-amber-600'
                          : 'bg-white text-stone-700 border-stone-300 hover:border-amber-400 hover:text-amber-600'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Controls Row */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-4 border-t border-stone-200">
                
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  {/* Sort Controls */}
                  <div className="flex items-center gap-2">
                    <label className="text-sm font-medium text-stone-600">Sort by:</label>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="px-3 py-2 border-2 border-stone-300 bg-white text-stone-700 
                        focus:outline-none focus:border-amber-500 text-sm cursor-pointer"
                    >
                      <option value="recent">Most Recent</option>
                      <option value="title">Title (A-Z)</option>
                      <option value="category">Category</option>
                    </select>
                  </div>

                  {/* View Mode */}
                  <div className="flex items-center gap-2">
                    <label className="text-sm font-medium text-stone-600">View:</label>
                    <div className="flex border-2 border-stone-300">
                      <button
                        onClick={() => setViewMode('grid')}
                        className={`p-2 transition-all duration-300 ${
                          viewMode === 'grid'
                            ? 'bg-amber-600 text-white'
                            : 'bg-white text-stone-600 hover:bg-stone-50'
                        }`}
                        title="Grid View"
                      >
                        <Grid3X3 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => setViewMode('list')}
                        className={`p-2 border-l border-stone-300 transition-all duration-300 ${
                          viewMode === 'list'
                            ? 'bg-amber-600 text-white'
                            : 'bg-white text-stone-600 hover:bg-stone-50'
                        }`}
                        title="List View"
                      >
                        <List className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Results Count & Clear */}
                <div className="flex items-center gap-4">
                  <div className="text-sm text-stone-600">
                    <span className="font-medium text-amber-700">{filteredItems.length}</span> 
                    {filteredItems.length === 1 ? ' work' : ' works'} found
                  </div>
                  
                  {(selectedCategory !== 'All' || searchTerm) && (
                    <button
                      onClick={clearFilters}
                      className="px-4 py-2 bg-stone-600 text-white text-sm font-medium 
                        hover:bg-stone-700 transition-all duration-300"
                    >
                      Clear Filters
                    </button>
                  )}
                </div>
              </div>

              {/* Active Filters Display */}
              {(selectedCategory !== 'All' || searchTerm) && (
                <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-stone-200">
                  <span className="text-sm font-medium text-stone-600">Active filters:</span>
                  
                  {selectedCategory !== 'All' && (
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-amber-100 
                      text-amber-800 text-sm border border-amber-200">
                      Category: {selectedCategory}
                      <button
                        onClick={() => setSelectedCategory('All')}
                        className="ml-1 hover:bg-amber-200 p-0.5 transition-colors duration-200"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  )}
                  
                  {searchTerm && (
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-stone-100 
                      text-stone-700 text-sm border border-stone-200">
                      Search: "{searchTerm}"
                      <button
                        onClick={() => setSearchTerm('')}
                        className="ml-1 hover:bg-stone-200 p-0.5 transition-colors duration-200"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className={`transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {filteredItems.length > 0 ? (
            <div className={`grid gap-8 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
                : 'grid-cols-1 max-w-4xl mx-auto'
            }`}>
              {filteredItems.map((item, index) => (
                <div
                  key={item.id}
                  className="group relative bg-white rounded-sm shadow-lg border border-stone-200 overflow-hidden 
                    hover:shadow-2xl hover:shadow-stone-300/20 transition-all duration-500 hover:scale-[1.02] cursor-pointer"
                  onClick={() => handleImageClick(item)}
                >
                  {viewMode === 'grid' ? (
                    /* Grid View */
                    <>
                      <div className="relative aspect-[4/5] overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover transition-all duration-700 
                            group-hover:scale-110 filter group-hover:brightness-110"
                          loading="lazy"
                        />
                        
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent 
                          opacity-0 group-hover:opacity-100 transition-all duration-500" />
                        
                        {/* Category Badge */}
                        <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm 
                          text-stone-700 text-xs uppercase tracking-wider font-light rounded-sm">
                          {item.category}
                        </div>
                        
                        {/* View Button */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 
                          group-hover:opacity-100 transition-all duration-500">
                          <div className="p-4 bg-white/20 backdrop-blur-md rounded-full border border-white/30
                            hover:bg-white/30 transition-all duration-300">
                            <Eye className="w-6 h-6 text-white" />
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-6 space-y-3">
                        <h3 className="text-xl font-light text-stone-800 tracking-wide group-hover:text-amber-700 
                          transition-colors duration-300">
                          {item.title}
                        </h3>
                        <p className="text-stone-600 font-light text-sm leading-relaxed">
                          {item.description}
                        </p>
                        <div className="flex items-center justify-between pt-2">
                          <span className="text-xs text-stone-500 uppercase tracking-wider">{item.year}</span>
                          <div className="flex items-center gap-1">
                            <Award className="w-3 h-3 text-amber-500" />
                            <span className="text-xs text-amber-600">Featured</span>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    /* List View */
                    <div className="flex gap-8 p-6">
                      <div className="w-32 h-32 flex-shrink-0 relative overflow-hidden rounded-sm">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                          loading="lazy"
                        />
                      </div>
                      <div className="flex-1 space-y-4">
                        <div className="flex items-start justify-between">
                          <h3 className="text-2xl font-light text-stone-800 tracking-wide group-hover:text-amber-700 
                            transition-colors duration-300">
                            {item.title}
                          </h3>
                          <span className="text-sm text-stone-500 uppercase tracking-wider px-3 py-1 
                            bg-stone-100 rounded-sm">
                            {item.category}
                          </span>
                        </div>
                        <p className="text-stone-600 font-light leading-relaxed">
                          {item.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-stone-500">{item.year}</span>
                          <div className="flex items-center gap-2 px-4 py-2 text-amber-600 hover:text-amber-700 
                            hover:bg-amber-50 rounded-sm transition-all duration-300">
                            <Eye className="w-4 h-4" />
                            <span className="text-sm font-light">View</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            /* No Results State */
            <div className="text-center py-20">
              <div className="w-24 h-24 bg-stone-200 rounded-full flex items-center justify-center mx-auto mb-8">
                <Search className="w-12 h-12 text-stone-400" />
              </div>
              <h3 className="text-3xl font-light text-stone-800 mb-4 tracking-wide">No Works Found</h3>
              <p className="text-stone-600 font-light mb-8 max-w-md mx-auto leading-relaxed">
                {searchTerm || selectedCategory !== 'All'
                  ? "Your search criteria didn't match any works in the collection. Try adjusting your filters."
                  : "The portfolio collection is currently being curated."}
              </p>
              {(searchTerm || selectedCategory !== 'All') && (
                <button
                  onClick={clearFilters}
                  className="px-8 py-4 bg-amber-600 text-white rounded-sm font-light tracking-wider
                    hover:bg-amber-700 transition-all duration-300 hover:scale-105 uppercase"
                >
                  View All Works
                </button>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/90 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div className="max-w-4xl max-h-full relative" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="max-w-full max-h-[80vh] object-contain rounded-sm shadow-2xl"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8 rounded-b-sm">
              <h3 className="text-2xl font-light text-white mb-2 tracking-wide">{selectedImage.title}</h3>
              <p className="text-white/80 font-light">{selectedImage.description}</p>
              <div className="flex items-center justify-between mt-4">
                <span className="text-white/60 text-sm uppercase tracking-wider">{selectedImage.category}</span>
                <span className="text-white/60 text-sm">{selectedImage.year}</span>
              </div>
            </div>
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 p-3 bg-black/50 text-white rounded-full hover:bg-black/70 
                transition-all duration-300"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default PortfolioPage;