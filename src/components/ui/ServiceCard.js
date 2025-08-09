import { useState, useRef, useEffect } from 'react';
import { ArrowRight, Check, Star, Clock, Users, Camera } from 'lucide-react';

const serviceIcons = {
  'Wedding Photography': Camera,
  'Portrait Session': Users,
  'Event Photography': Star,
  default: Camera
};

function ServiceCard({ service, index = 0, onSelect }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);
  
  const ServiceIcon = serviceIcons[service.title] || serviceIcons.default;

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

  const features = service.features || [
    'High-resolution images',
    'Online gallery access',
    'Professional editing',
    'Fast delivery'
  ];

  const duration = service.duration || '2-4 hours';
  const rating = service.rating || 5;

  return (
    <div
      ref={cardRef}
      className={`group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl 
        transition-all duration-700 transform hover:scale-[1.02] hover:-translate-y-2
        overflow-hidden cursor-pointer
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ 
        transitionDelay: `${index * 0.1}s`,
        animationDelay: `${index * 0.1}s`
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onSelect && onSelect(service)}
    >
      {/* Background gradient overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-accent/5 
        opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

      {/* Top section with icon and rating */}
      <div className="relative p-8 pb-4">
        <div className="flex items-start justify-between mb-6">
          <div className={`p-4 rounded-2xl bg-gradient-to-br from-secondary to-accent 
            shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3
            ${isHovered ? 'shadow-secondary/25' : ''}`}>
            <ServiceIcon className="w-8 h-8 text-white" />
          </div>
          
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 transition-all duration-300 delay-${i * 50} ${
                  i < rating 
                    ? 'text-yellow-400 fill-current transform group-hover:scale-125' 
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-secondary 
          transition-colors duration-300">
          {service.title}
        </h3>
        
        <p className="text-gray-600 leading-relaxed mb-6">
          {service.description}
        </p>

        {/* Duration indicator */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <Clock className="w-4 h-4" />
          <span>{duration}</span>
        </div>
      </div>

      {/* Features list */}
      <div className="px-8 pb-6">
        <ul className="space-y-3">
          {features.map((feature, idx) => (
            <li 
              key={idx} 
              className={`flex items-center gap-3 text-gray-700 transition-all duration-300 delay-${idx * 100}
                ${isHovered ? 'translate-x-2' : ''}`}
            >
              <div className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center
                group-hover:bg-green-200 transition-colors duration-300">
                <Check className="w-3 h-3 text-green-600" />
              </div>
              <span className="text-sm font-medium">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom section with price and CTA */}
      <div className="relative p-8 pt-4">
        {/* Animated border */}
        <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent 
          via-gray-200 to-transparent" />
        
        <div className="flex items-center justify-between">
          <div>
            <span className="text-3xl font-bold text-primary group-hover:text-secondary 
              transition-colors duration-300">
              {service.price}
            </span>
            {service.originalPrice && (
              <span className="text-lg text-gray-400 line-through ml-2">
                {service.originalPrice}
              </span>
            )}
          </div>

          <button className="relative overflow-hidden bg-primary text-white px-6 py-3 rounded-xl 
            font-semibold transition-all duration-300 hover:bg-secondary hover:scale-105 
            hover:shadow-lg hover:shadow-secondary/25 group/btn">
            <span className="flex items-center gap-2 relative z-10">
              Select
              <ArrowRight className="w-4 h-4 transition-transform duration-300 
                group-hover/btn:translate-x-1" />
            </span>
            
            {/* Button hover effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-secondary to-accent 
              transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300 
              origin-left" />
          </button>
        </div>
      </div>

      {/* Popular badge */}
      {service.popular && (
        <div className="absolute -top-2 -right-2 bg-gradient-to-r from-accent to-secondary 
          text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg 
          transform rotate-12 animate-bounce">
          Popular
        </div>
      )}

      {/* Hover particles effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 bg-secondary rounded-full opacity-0 
              group-hover:opacity-100 transition-opacity duration-500 delay-${i * 100}
              animate-float`}
            style={{
              left: `${10 + (i * 12)}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}
      </div>

      {/* Shine effect */}
      <div className="absolute inset-0 transform -skew-x-12 -translate-x-full 
        group-hover:translate-x-full transition-transform duration-1000 
        bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </div>
  );
}

// Enhanced Services Grid Component
function ServicesGrid({ services }) {
  const [selectedService, setSelectedService] = useState(null);

  const handleServiceSelect = (service) => {
    setSelectedService(service);
    // Here you could open a modal, navigate to booking, etc.
    console.log('Selected service:', service);
  };

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">
            Services
          </span>
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Professional photography services tailored to capture your most precious moments
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard 
            key={service.id} 
            service={service} 
            index={index}
            onSelect={handleServiceSelect}
          />
        ))}
      </div>

      {/* CTA Section */}
      <div className="text-center bg-gradient-to-r from-primary/5 to-accent/5 rounded-3xl p-12">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          Need a Custom Package?
        </h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Every project is unique. Let's discuss your specific needs and create 
          a tailored photography package just for you.
        </p>
        <button className="bg-gradient-to-r from-secondary to-accent text-white 
          font-bold px-8 py-4 rounded-xl hover:shadow-xl hover:shadow-secondary/25 
          transition-all duration-300 hover:scale-105 transform">
          Get Custom Quote
        </button>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

export { ServiceCard, ServicesGrid };
export default ServiceCard;