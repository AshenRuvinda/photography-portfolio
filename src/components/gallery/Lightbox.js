import { useEffect, useState } from 'react';
import { X, Download, Share2, Heart, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from 'lucide-react';

function Lightbox({ image, onClose, images = [], currentIndex = 0, onNavigate }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          if (onNavigate && currentIndex > 0) {
            onNavigate(currentIndex - 1);
          }
          break;
        case 'ArrowRight':
          if (onNavigate && currentIndex < images.length - 1) {
            onNavigate(currentIndex + 1);
          }
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNavigate, currentIndex, images.length]);

  const handleMouseDown = (e) => {
    if (zoom > 1) {
      setIsDragging(true);
      setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging && zoom > 1) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleZoomIn = () => {
    setZoom(prev => Math.min(prev + 0.5, 3));
  };

  const handleZoomOut = () => {
    setZoom(prev => {
      const newZoom = Math.max(prev - 0.5, 1);
      if (newZoom === 1) {
        setPosition({ x: 0, y: 0 });
      }
      return newZoom;
    });
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = image.image;
    link.download = `${image.title}.jpg`;
    link.click();
  };

  return (
    <div 
      className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50
        animate-in fade-in duration-300"
      onClick={onClose}
    >
      {/* Navigation arrows */}
      {onNavigate && images.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              if (currentIndex > 0) onNavigate(currentIndex - 1);
            }}
            disabled={currentIndex === 0}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full 
              bg-white/10 backdrop-blur-md text-white hover:bg-white/20 
              transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed
              z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              if (currentIndex < images.length - 1) onNavigate(currentIndex + 1);
            }}
            disabled={currentIndex === images.length - 1}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full 
              bg-white/10 backdrop-blur-md text-white hover:bg-white/20 
              transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed
              z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      {/* Top controls */}
      <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10">
        <div className="flex items-center gap-4 text-white">
          <h3 className="text-xl font-semibold">{image.title}</h3>
          {images.length > 1 && (
            <span className="text-sm opacity-75">{currentIndex + 1} / {images.length}</span>
          )}
        </div>
        
        <div className="flex items-center gap-2">
          {/* Zoom controls */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleZoomOut();
            }}
            className="p-2 rounded-full bg-white/10 backdrop-blur-md text-white 
              hover:bg-white/20 transition-all duration-300 hover:scale-110"
          >
            <ZoomOut className="w-5 h-5" />
          </button>

          <span className="text-white text-sm px-2">{Math.round(zoom * 100)}%</span>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handleZoomIn();
            }}
            className="p-2 rounded-full bg-white/10 backdrop-blur-md text-white 
              hover:bg-white/20 transition-all duration-300 hover:scale-110"
          >
            <ZoomIn className="w-5 h-5" />
          </button>

          {/* Action buttons */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsLiked(!isLiked);
            }}
            className={`p-2 rounded-full backdrop-blur-md transition-all duration-300 hover:scale-110
              ${isLiked 
                ? 'bg-red-500 text-white' 
                : 'bg-white/10 text-white hover:bg-white/20'
              }`}
          >
            <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handleDownload();
            }}
            className="p-2 rounded-full bg-white/10 backdrop-blur-md text-white 
              hover:bg-white/20 transition-all duration-300 hover:scale-110"
          >
            <Download className="w-5 h-5" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              // Share functionality
            }}
            className="p-2 rounded-full bg-white/10 backdrop-blur-md text-white 
              hover:bg-white/20 transition-all duration-300 hover:scale-110"
          >
            <Share2 className="w-5 h-5" />
          </button>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 backdrop-blur-md text-white 
              hover:bg-red-500/20 hover:text-red-300 transition-all duration-300 hover:scale-110"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Image container */}
      <div 
        className="relative max-w-5xl max-h-[80vh] w-full h-full flex items-center justify-center p-4"
        onClick={(e) => e.stopPropagation()}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        style={{ cursor: zoom > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default' }}
      >
        <div 
          className={`relative transition-all duration-300 ${
            isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
          style={{
            transform: `translate(${position.x}px, ${position.y}px) scale(${zoom})`,
            transition: isDragging ? 'none' : 'transform 0.3s ease-out',
          }}
        >
          <img
            src={image.image}
            alt={image.title}
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            onLoad={() => setIsLoaded(true)}
            draggable={false}
          />
          
          {/* Loading indicator */}
          {!isLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-900 rounded-lg">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-white"></div>
            </div>
          )}
        </div>
      </div>

      {/* Bottom info */}
      <div className="absolute bottom-4 left-4 right-4 z-10">
        <div className="bg-black/50 backdrop-blur-md rounded-lg p-4 text-white">
          <p className="text-center">{image.description}</p>
          {image.category && (
            <p className="text-center text-sm opacity-75 mt-2">Category: {image.category}</p>
          )}
        </div>
      </div>

      {/* Touch indicators for mobile */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 text-white/50 text-xs text-center md:hidden">
        <p>Tap image to zoom • Swipe to navigate</p>
      </div>
    </div>
  );
}

export default Lightbox;