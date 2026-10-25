'use client';

import { useEffect, useState, useRef } from 'react';
import { Camera, Award, Users, Clock, Aperture, Eye, Heart, Star, ArrowRight, MapPin, Phone, Mail } from 'lucide-react';

function ServicesPage() {
  const [services, setServices] = useState([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const servicesRef = useRef(null);
  const [servicesVisible, setServicesVisible] = useState(false);

  // Mock services data - replace with your API call
  const mockServices = [
    {
      id: 1,
      title: 'Portrait Photography',
      description: 'Capture your essence with timeless elegance. From professional headshots to intimate personal portraits, each session is crafted to reveal your unique story.',
      price: 'Starting at $450',
      duration: '2-3 hours',
      deliverables: '30+ edited photos',
      icon: Users,
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Professional lighting setup', 'Multiple outfit changes', 'Retouching included', 'Online gallery access']
    },
    {
      id: 2,
      title: 'Wedding Photography',
      description: 'Your love story deserves to be told with artistry and passion. Full-day coverage capturing every precious moment of your special day.',
      price: 'Starting at $2,200',
      duration: '8-12 hours',
      deliverables: '500+ edited photos',
      icon: Heart,
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Engagement session included', 'Second photographer option', 'Wedding album design', 'Same-day preview gallery']
    },
    {
      id: 3,
      title: 'Fine Art Photography',
      description: 'Transform concepts into visual poetry. Collaborative fine art sessions that blend technical excellence with creative vision.',
      price: 'Starting at $850',
      duration: '4-6 hours',
      deliverables: '15+ fine art prints',
      icon: Aperture,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Concept development', 'Styling consultation', 'High-end retouching', 'Limited edition prints']
    },
    {
      id: 4,
      title: 'Commercial Photography',
      description: 'Elevate your brand with compelling visual storytelling. Professional commercial photography that captures your vision and values.',
      price: 'Starting at $1,200',
      duration: 'Full day',
      deliverables: '50+ edited photos',
      icon: Award,
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Brand consultation', 'Multiple locations', 'Commercial license', 'Rush delivery available']
    },
    {
      id: 5,
      title: 'Family Sessions',
      description: 'Preserve precious family moments with warmth and authenticity. Natural, comfortable sessions that capture genuine connections.',
      price: 'Starting at $650',
      duration: '1-2 hours',
      deliverables: '40+ edited photos',
      icon: Users,
      image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Location scouting', 'Wardrobe guidance', 'Pet-friendly sessions', 'Print package options']
    },
    {
      id: 6,
      title: 'Event Photography',
      description: 'Document your special occasions with professional artistry. From corporate events to celebrations, every moment captured beautifully.',
      price: 'Starting at $950',
      duration: '4-8 hours',
      deliverables: '200+ edited photos',
      icon: Star,
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Discrete coverage', 'Quick turnaround', 'Multiple formats', 'Event timeline planning']
    }
  ];

  useEffect(() => {
    // Replace with actual API call
    setServices(mockServices);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setServicesVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (servicesRef.current) {
      observer.observe(servicesRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const parallaxTransform = `translateY(${scrollY * 0.2}px)`;

  return (
    <div className="relative overflow-hidden bg-stone-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-stone-800 to-stone-900">
        {/* Background Texture */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at center, rgba(245,245,220,0.3) 1px, transparent 1px)`,
              backgroundSize: '60px 60px',
              transform: parallaxTransform
            }}
          />
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 8 }, (_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-amber-200/20 rounded-full animate-float"
              style={{
                left: `${20 + Math.random() * 60}%`,
                top: `${20 + Math.random() * 60}%`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${8 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-6 max-w-4xl">
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-12 duration-1200">
            {/* Professional Header */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-20 bg-gradient-to-r from-transparent via-amber-300 to-transparent" />
              <div className="p-2 border border-amber-300/50 rounded-sm">
                <Camera className="w-6 h-6 text-amber-300" />
              </div>
              <span className="text-amber-300 font-light tracking-[0.3em] uppercase text-sm">
                Photography Services
              </span>
              <div className="p-2 border border-amber-300/50 rounded-sm">
                <Eye className="w-6 h-6 text-amber-300" />
              </div>
              <div className="h-px w-20 bg-gradient-to-r from-amber-300 via-transparent to-transparent" />
            </div>

            {/* Title */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-light leading-tight tracking-wide">
                <span className="block">Exceptional</span>
                <span className="block font-thin text-amber-200">Photography Services</span>
              </h1>
              
              <div className="h-px w-32 bg-gradient-to-r from-transparent via-white/60 to-transparent mx-auto mb-6" />
              <p className="text-lg md:text-xl font-light tracking-wide text-stone-200 max-w-2xl mx-auto">
                Each service is thoughtfully crafted to exceed your expectations, 
                combining technical mastery with artistic vision to create timeless imagery.
              </p>
            </div>
          </div>
        </div>

        {/* Decorative Corner Elements */}
        <div className="absolute top-12 left-12 w-12 h-12">
          <div className="w-full h-px bg-white/20" />
          <div className="w-px h-full bg-white/20" />
        </div>
        <div className="absolute top-12 right-12 w-12 h-12">
          <div className="w-full h-px bg-white/20 ml-auto" />
          <div className="w-px h-full bg-white/20 ml-auto" />
        </div>
      </div>

      {/* Services Section */}
      <div
        ref={servicesRef}
        className="relative py-24 bg-gradient-to-br from-stone-50 to-stone-100"
      >
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div 
            className="absolute inset-0" 
            style={{
              backgroundImage: 'radial-gradient(circle at 50% 50%, #8B4513 1px, transparent 1px)',
              backgroundSize: '80px 80px'
            }} 
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-stone-400" />
              <Aperture className="w-5 h-5 text-stone-500" />
              <span className="text-stone-500 font-light tracking-[0.2em] uppercase text-xs">
                Professional Services
              </span>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-stone-400" />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-light text-stone-800 mb-6 tracking-wide">
              Tailored Photography Experiences
            </h2>
            <p className="text-lg text-stone-600 max-w-3xl mx-auto font-light leading-relaxed">
              From intimate portraits to grand celebrations, each service is designed 
              to capture the essence of your unique story with uncompromising quality.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`group relative bg-white/80 backdrop-blur-sm border border-stone-200/50 
                  hover:border-amber-300/30 transition-all duration-700 hover:shadow-2xl 
                  hover:shadow-stone-900/10 hover:-translate-y-2 overflow-hidden
                  ${servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Service Image */}
                <div className="relative h-64 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 
                      group-hover:scale-110"
                    style={{ backgroundImage: `url(${service.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  
                  {/* Service Icon */}
                  <div className="absolute top-6 right-6 p-3 bg-white/20 backdrop-blur-sm 
                    border border-white/30 rounded-sm group-hover:bg-amber-300/90 
                    group-hover:border-amber-300 transition-all duration-500">
                    <service.icon className="w-6 h-6 text-white group-hover:text-stone-900 
                      transition-colors duration-500" />
                  </div>

                  {/* Price Tag */}
                  <div className="absolute bottom-4 left-4 px-4 py-2 bg-stone-900/80 backdrop-blur-sm 
                    text-white text-sm font-light tracking-wide">
                    {service.price}
                  </div>
                </div>

                {/* Service Content */}
                <div className="p-8 space-y-6">
                  <div>
                    <h3 className="text-2xl font-light text-stone-800 mb-3 group-hover:text-amber-700 
                      transition-colors duration-300 tracking-wide">
                      {service.title}
                    </h3>
                    <p className="text-stone-600 font-light leading-relaxed text-sm">
                      {service.description}
                    </p>
                  </div>

                  {/* Service Details */}
                  <div className="grid grid-cols-2 gap-4 py-4 border-t border-b border-stone-200/50">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-stone-400" />
                      <span className="text-xs text-stone-500 font-light">{service.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Camera className="w-4 h-4 text-stone-400" />
                      <span className="text-xs text-stone-500 font-light">{service.deliverables}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <div className="w-1 h-1 bg-amber-300 rounded-full" />
                        <span className="text-xs text-stone-600 font-light">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button className="group/btn w-full flex items-center justify-between px-6 py-3 
                    border border-stone-300 hover:border-amber-300 text-stone-700 hover:text-amber-700 
                    transition-all duration-300 hover:bg-amber-50/50 focus:outline-none 
                    focus:ring-2 focus:ring-amber-300/50">
                    <span className="text-sm font-light tracking-wide uppercase">Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>

                {/* Decorative Border Effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-amber-300/20 
                  transition-all duration-700 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="relative py-24 bg-gradient-to-br from-stone-800 to-stone-900 overflow-hidden">
        {/* Background Texture */}
        <div className="absolute inset-0 opacity-5">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at center, rgba(245,245,220,0.3) 1px, transparent 1px)`,
              backgroundSize: '40px 40px'
            }}
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center text-white max-w-4xl mx-auto">
            {/* Section Header */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-20 bg-gradient-to-r from-transparent via-amber-300/60 to-transparent" />
              <Phone className="w-6 h-6 text-amber-300" />
              <div className="h-px w-20 bg-gradient-to-r from-amber-300/60 via-transparent to-transparent" />
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-8 tracking-wide">
              Ready to Begin
              <span className="block text-amber-200 font-thin">Your Journey?</span>
            </h2>
            
            <p className="text-lg md:text-xl text-stone-300 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              Let's discuss your vision and create something extraordinary together. 
              Each project begins with understanding your unique story and goals.
            </p>
            
            {/* Contact Options */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="flex flex-col items-center gap-4 p-6 border border-stone-600/30 
                hover:border-amber-300/40 transition-all duration-300 hover:bg-white/5 backdrop-blur-sm">
                <Phone className="w-8 h-8 text-amber-300" />
                <div className="text-center">
                  <h3 className="text-lg font-light mb-2">Call Directly</h3>
                  <p className="text-stone-400 text-sm">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex flex-col items-center gap-4 p-6 border border-stone-600/30 
                hover:border-amber-300/40 transition-all duration-300 hover:bg-white/5 backdrop-blur-sm">
                <Mail className="w-8 h-8 text-amber-300" />
                <div className="text-center">
                  <h3 className="text-lg font-light mb-2">Send an Email</h3>
                  <p className="text-stone-400 text-sm">hello@alexsterling.com</p>
                </div>
              </div>
              
              <div className="flex flex-col items-center gap-4 p-6 border border-stone-600/30 
                hover:border-amber-300/40 transition-all duration-300 hover:bg-white/5 backdrop-blur-sm">
                <MapPin className="w-8 h-8 text-amber-300" />
                <div className="text-center">
                  <h3 className="text-lg font-light mb-2">Visit the Studio</h3>
                  <p className="text-stone-400 text-sm">New York, NY</p>
                </div>
              </div>
            </div>
            
            {/* CTA Button */}
            <button className="group relative px-12 py-5 bg-amber-300 hover:bg-amber-400 
              text-stone-900 font-medium tracking-wider transition-all duration-300 
              hover:shadow-2xl hover:shadow-amber-300/20 focus:outline-none focus:ring-2 
              focus:ring-amber-300 hover:scale-105">
              <span className="relative z-10 flex items-center gap-3 uppercase text-sm">
                Start Your Project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); opacity: 0.3; }
          25% { transform: translateY(-12px) rotate(90deg) scale(1.2); opacity: 0.6; }
          50% { transform: translateY(0px) rotate(180deg) scale(1); opacity: 0.3; }
          75% { transform: translateY(6px) rotate(270deg) scale(0.8); opacity: 0.6; }
        }
        .animate-float {
          animation: float 10s ease-in-out infinite;
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
        }
      `}</style>
    </div>
  );
}

export default ServicesPage;