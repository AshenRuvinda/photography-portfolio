import { useEffect, useState, useRef } from 'react';
import { 
  Filter, 
  Grid3X3, 
  Grid, 
  Search, 
  X, 
  Aperture,
  Camera,
  Eye,
  Heart,
  Download,
  Share2,
  Calendar,
  MapPin,
  Tag,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  RotateCcw,
  ZoomIn,
  ZoomOut,
  FullScreen,
  Settings,
  Clock
} from 'lucide-react';

function GalleryPage() {
  const [images] = useState([
    {
      id: 1,
      title: 'Morning Dew Portrait',
      category: 'Portraits',
      tags: ['natural-light', 'outdoor', 'golden-hour'],
      image: 'https://images.unsplash.com/photo-1494790108755-2616c9998a86?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      thumbnail: 'https://images.unsplash.com/photo-1494790108755-2616c9998a86?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      date: '2024-03-15',
      location: 'Central Park, NYC',
      likes: 142,
      views: 1250
    },
    {
      id: 2,
      title: 'Urban Architecture',
      category: 'Architecture',
      tags: ['urban', 'modern', 'geometry'],
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      thumbnail: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      date: '2024-03-12',
      location: 'Manhattan, NYC',
      likes: 89,
      views: 890
    },
    {
      id: 3,
      title: 'Wedding Bliss',
      category: 'Weddings',
      tags: ['celebration', 'love', 'ceremony'],
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      thumbnail: 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      date: '2024-03-10',
      location: 'Brooklyn Bridge',
      likes: 234,
      views: 2100
    },
    {
      id: 4,
      title: 'Sunset Landscape',
      category: 'Nature',
      tags: ['sunset', 'landscape', 'serene'],
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      thumbnail: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      date: '2024-03-08',
      location: 'Hudson Valley',
      likes: 178,
      views: 1560
    },
    {
      id: 5,
      title: 'Corporate Excellence',
      category: 'Corporate',
      tags: ['professional', 'business', 'executive'],
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      thumbnail: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      date: '2024-03-05',
      location: 'Corporate Office',
      likes: 95,
      views: 750
    },
    {
      id: 6,
      title: 'Family Moments',
      category: 'Family',
      tags: ['family', 'generations', 'love'],
      image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      thumbnail: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      date: '2024-03-02',
      location: 'Home Studio',
      likes: 156,
      views: 1340
    },
    {
      id: 7,
      title: 'Street Photography',
      category: 'Street',
      tags: ['urban', 'candid', 'documentary'],
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      thumbnail: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      date: '2024-02-28',
      location: 'SoHo District',
      likes: 213,
      views: 1890
    },
    {
      id: 8,
      title: 'Elegant Bride',
      category: 'Weddings',
      tags: ['bridal', 'elegant', 'vintage'],
      image: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      thumbnail: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      date: '2024-02-25',
      location: 'Grand Ballroom',
      likes: 267,
      views: 2340
    },
    {
      id: 9,
      title: 'Senior Portrait',
      category: 'Portraits',
      tags: ['senior', 'graduation', 'milestone'],
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      date: '2024-02-20',
      location: 'University Campus',
      likes: 98,
      views: 820
    }
  ]);
  
  const [filteredImages, setFilteredImages] = useState(images);
  const [categories, setCategories] = useState(['All', 'Portraits', 'Weddings', 'Corporate', 'Family', 'Nature', 'Architecture', 'Street']);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState('masonry'); // masonry, grid, list
  const [sortBy, setSortBy] = useState('recent');
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isSlideshow, setIsSlideshow] = useState(false);
  const [liked, setLiked] = useState(new Set());
  const [zoom, setZoom] = useState(1);
  const pageRef = useRef(null);
  const slideshowInterval = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFilteredImages(images);
      setIsLoading(false);
      setIsVisible(true);
    }, 800);

    return () => clearTimeout(timer);
  }, [images]);

  useEffect(() => {
    let filtered = [...images];

    if (selectedCategory !== 'All') {
      filtered = filtered.filter(image => 
        image.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    if (searchTerm.trim()) {
      filtered = filtered.filter(image =>
        image.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        image.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())) ||
        image.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    switch (sortBy) {
      case 'title':
        filtered.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'popular':
        filtered.sort((a, b) => b.likes - a.likes);
        break;
      case 'views':
        filtered.sort((a, b) => b.views - a.views);
        break;
      case 'recent':
      default:
        filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
        break;
    }

    setFilteredImages(filtered);
  }, [images, selectedCategory, searchTerm, sortBy]);

  const clearFilters = () => {
    setSelectedCategory('All');
    setSearchTerm('');
    setSortBy('recent');
  };

  const handleImageClick = (image, index) => {
    setSelectedImage(image);
    setCurrentImageIndex(index);
    setZoom(1);
  };

  const closeModal = () => {
    setSelectedImage(null);
    stopSlideshow();
    setZoom(1);
  };

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % filteredImages.length;
    setCurrentImageIndex(nextIndex);
    setSelectedImage(filteredImages[nextIndex]);
    setZoom(1);
  };

  const prevImage = () => {
    const prevIndex = currentImageIndex === 0 ? filteredImages.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(prevIndex);
    setSelectedImage(filteredImages[prevIndex]);
    setZoom(1);
  };

  const startSlideshow = () => {
    setIsSlideshow(true);
    slideshowInterval.current = setInterval(nextImage, 3000);
  };

  const stopSlideshow = () => {
    setIsSlideshow(false);
    if (slideshowInterval.current) {
      clearInterval(slideshowInterval.current);
    }
  };

  const toggleLike = (imageId) => {
    setLiked(prev => {
      const newLiked = new Set(prev);
      if (newLiked.has(imageId)) {
        newLiked.delete(imageId);
      } else {
        newLiked.add(imageId);
      }
      return newLiked;
    });
  };

  const handleZoomIn = () => setZoom(prev => Math.min(prev + 0.5, 3));
  const handleZoomOut = () => setZoom(prev => Math.max(prev - 0.5, 0.5));
  const resetZoom = () => setZoom(1);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-stone-50 flex items-center justify-center">
        <div className="text-center space-y-6">
          <div className="relative">
            <div className="w-20 h-20 border-2 border-stone-300 border-t-amber-300 rounded-full animate-spin mx-auto" />
            <Camera className="w-8 h-8 text-amber-600 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </div>
          <div>
            <p className="text-stone-700 font-light tracking-wide mb-2">Loading Gallery</p>
            <p className="text-stone-500 text-sm">Preparing your visual journey...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div ref={pageRef} className="min-h-screen bg-gradient-to-br from-stone-50 to-stone-100">
      {/* Hero Section */}
      <div className="relative py-20 bg-gradient-to-br from-stone-800 to-stone-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: 'radial-gradient(circle at 40% 60%, rgba(245,245,220,0.3) 1px, transparent 1px)',
              backgroundSize: '50px 50px'
            }}
          />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center text-white">
          <div className={`space-y-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-amber-300 to-transparent" />
              <Aperture className="w-7 h-7 text-amber-300" />
              <div className="h-px w-16 bg-gradient-to-r from-amber-300 via-transparent to-transparent" />
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wide">
              Visual <span className="font-thin text-amber-200">Gallery</span>
            </h1>
            
            <p className="text-lg md:text-xl text-stone-300 font-light max-w-2xl mx-auto leading-relaxed">
              Explore a comprehensive collection of moments captured through my lens, 
              each telling its unique story of beauty, emotion, and artistry.
            </p>
            
            {/* Gallery Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-2xl mx-auto">
              {[
                { number: images.length, label: 'Images', icon: Camera },
                { number: categories.length - 1, label: 'Categories', icon: Tag },
                { number: images.reduce((sum, img) => sum + img.likes, 0), label: 'Total Likes', icon: Heart },
                { number: Math.floor(images.reduce((sum, img) => sum + img.views, 0) / 1000), label: 'K Views', icon: Eye }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 mb-3 
                    border border-amber-300/30 rounded-sm">
                    <stat.icon className="w-5 h-5 text-amber-300" />
                  </div>
                  <div className="text-xl font-light text-amber-200 mb-1">{stat.number}</div>
                  <div className="text-xs text-stone-400 uppercase tracking-wider font-light">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        {/* Classical Filter Controls */}
        <div className={`bg-white shadow-md border border-stone-300 mb-12 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {/* Search Bar */}
          <div className="px-8 py-6 border-b border-stone-200 bg-stone-50">
            <div className="max-w-2xl mx-auto relative">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search images by title, tags, or location..."
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
                      <option value="popular">Most Liked</option>
                      <option value="views">Most Viewed</option>
                      <option value="title">Title (A-Z)</option>
                    </select>
                  </div>

                  {/* View Mode */}
                  <div className="flex items-center gap-2">
                    <label className="text-sm font-medium text-stone-600">View:</label>
                    <div className="flex border-2 border-stone-300">
                      <button
                        onClick={() => setViewMode('masonry')}
                        className={`p-2 transition-all duration-300 ${
                          viewMode === 'masonry'
                            ? 'bg-amber-600 text-white'
                            : 'bg-white text-stone-600 hover:bg-stone-50'
                        }`}
                        title="Masonry View"
                      >
                        <Grid className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => setViewMode('grid')}
                        className={`p-2 border-l border-stone-300 transition-all duration-300 ${
                          viewMode === 'grid'
                            ? 'bg-amber-600 text-white'
                            : 'bg-white text-stone-600 hover:bg-stone-50'
                        }`}
                        title="Grid View"
                      >
                        <Grid3X3 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Results Count & Clear */}
                <div className="flex items-center gap-4">
                  <div className="text-sm text-stone-600">
                    <span className="font-medium text-amber-700">{filteredImages.length}</span> 
                    {filteredImages.length === 1 ? ' image' : ' images'} found
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

        {/* Gallery Grid */}
        <div className={`transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {filteredImages.length > 0 ? (
            <div className={`grid gap-4 ${
              viewMode === 'masonry' 
                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
                : viewMode === 'grid'
                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
                : 'grid-cols-1 max-w-4xl mx-auto'
            }`}>
              {filteredImages.map((image, index) => (
                <div
                  key={image.id}
                  className={`group relative bg-white rounded-sm shadow-lg border border-stone-200 overflow-hidden 
                    hover:shadow-xl transition-all duration-500 cursor-pointer ${
                    viewMode === 'masonry' ? 'break-inside-avoid' : ''
                  }`}
                  onClick={() => handleImageClick(image, index)}
                >
                  <div className={`relative overflow-hidden ${
                    viewMode === 'grid' ? 'aspect-square' : 'aspect-auto'
                  }`}>
                    <img
                      src={image.thumbnail}
                      alt={image.title}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent 
                      opacity-0 group-hover:opacity-100 transition-all duration-500" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-3 left-3 px-2 py-1 bg-white/90 backdrop-blur-sm 
                      text-stone-700 text-xs uppercase tracking-wider font-light rounded-sm">
                      {image.category}
                    </div>
                    
                    {/* Like Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleLike(image.id);
                      }}
                      className={`absolute top-3 right-3 p-2 backdrop-blur-sm rounded-full border transition-all duration-300 ${
                        liked.has(image.id)
                          ? 'bg-red-500 text-white border-red-500'
                          : 'bg-white/20 text-white border-white/30 hover:bg-white/30'
                      }`}
                    >
                      <Heart className={`w-3 h-3 ${liked.has(image.id) ? 'fill-current' : ''}`} />
                    </button>
                    
                    {/* View Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 
                      group-hover:opacity-100 transition-all duration-500">
                      <div className="p-3 bg-white/20 backdrop-blur-md rounded-full border border-white/30">
                        <Eye className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 space-y-2">
                    <h3 className="text-lg font-light text-stone-800 tracking-wide group-hover:text-amber-700 
                      transition-colors duration-300 line-clamp-1">
                      {image.title}
                    </h3>
                    
                    <div className="flex items-center justify-between text-xs text-stone-500">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        <span className="line-clamp-1">{image.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>{formatDate(image.date)}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-xs text-stone-500">
                        <div className="flex items-center gap-1">
                          <Heart className="w-3 h-3" />
                          <span>{image.likes}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="w-3 h-3" />
                          <span>{image.views}</span>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-1">
                        {image.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-stone-100 text-stone-600 text-xs rounded-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* No Results */
            <div className="text-center py-20">
              <div className="w-20 h-20 bg-stone-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-10 h-10 text-stone-400" />
              </div>
              <h3 className="text-2xl font-light text-stone-800 mb-4">No Images Found</h3>
              <p className="text-stone-600 font-light mb-6 max-w-md mx-auto">
                Try adjusting your search criteria or browse different categories.
              </p>
              <button
                onClick={clearFilters}
                className="px-6 py-3 bg-amber-600 text-white rounded-sm font-light tracking-wider
                  hover:bg-amber-700 transition-all duration-300 uppercase"
              >
                View All Images
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
          onClick={closeModal}
        >
          {/* Modal Content */}
          <div className="max-w-7xl max-h-full w-full h-full flex flex-col p-4">
            {/* Header Controls */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4">
                <h3 className="text-white text-xl font-light">{selectedImage.title}</h3>
                <span className="px-3 py-1 bg-white/10 text-white/80 text-sm rounded-sm">
                  {selectedImage.category}
                </span>
              </div>
              
              <div className="flex items-center gap-2">
                {/* Zoom Controls */}
                <button onClick={handleZoomOut} className="p-2 bg-white/10 text-white rounded-sm hover:bg-white/20">
                  <ZoomOut className="w-4 h-4" />
                </button>
                <span className="text-white/80 text-sm px-2">{Math.round(zoom * 100)}%</span>
                <button onClick={handleZoomIn} className="p-2 bg-white/10 text-white rounded-sm hover:bg-white/20">
                  <ZoomIn className="w-4 h-4" />
                </button>
                <button onClick={resetZoom} className="p-2 bg-white/10 text-white rounded-sm hover:bg-white/20">
                  <RotateCcw className="w-4 h-4" />
                </button>
                
                {/* Slideshow Controls */}
                <button 
                  onClick={isSlideshow ? stopSlideshow : startSlideshow}
                  className="p-2 bg-white/10 text-white rounded-sm hover:bg-white/20"
                >
                  {isSlideshow ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </button>
                
                <button onClick={closeModal} className="p-2 bg-white/10 text-white rounded-sm hover:bg-white/20">
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            {/* Main Image Area */}
            <div className="flex-1 flex items-center justify-center relative" onClick={(e) => e.stopPropagation()}>
              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-4 z-10 p-3 bg-black/50 text-white rounded-full hover:bg-black/70 
                  transition-all duration-300"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 z-10 p-3 bg-black/50 text-white rounded-full hover:bg-black/70 
                  transition-all duration-300"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
              
              {/* Image Container */}
              <div className="max-w-full max-h-full overflow-hidden rounded-sm">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="max-w-full max-h-full object-contain transition-transform duration-300"
                  style={{ transform: `scale(${zoom})` }}
                />
              </div>
            </div>
            
            {/* Footer Info */}
            <div className="mt-4 bg-black/30 backdrop-blur-sm rounded-sm p-4">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-4 text-white/80 text-sm">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{selectedImage.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(selectedImage.date)}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-6 text-white/60 text-sm">
                    <div className="flex items-center gap-1">
                      <Heart className="w-4 h-4" />
                      <span>{selectedImage.likes} likes</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      <span>{selectedImage.views} views</span>
                    </div>
                    <div className="text-white/40">
                      {currentImageIndex + 1} of {filteredImages.length}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-1 mt-2">
                    {selectedImage.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-white/10 text-white/70 text-xs rounded-sm"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleLike(selectedImage.id);
                    }}
                    className={`p-3 rounded-sm transition-all duration-300 ${
                      liked.has(selectedImage.id)
                        ? 'bg-red-500 text-white'
                        : 'bg-white/10 text-white hover:bg-white/20'
                    }`}
                  >
                    <Heart className={`w-5 h-5 ${liked.has(selectedImage.id) ? 'fill-current' : ''}`} />
                  </button>
                  
                  <button className="p-3 bg-white/10 text-white rounded-sm hover:bg-white/20 transition-all duration-300">
                    <Share2 className="w-5 h-5" />
                  </button>
                  
                  <button className="p-3 bg-white/10 text-white rounded-sm hover:bg-white/20 transition-all duration-300">
                    <Download className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default GalleryPage;