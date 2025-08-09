import { useEffect, useState, useRef } from 'react';
import { Quote, Star, Heart, Camera, Award, Users, Eye, Aperture, ArrowLeft, ArrowRight } from 'lucide-react';

function TestimonialsPage() {
  const [testimonials, setTestimonials] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const testimonialsRef = useRef(null);
  const [testimonialsVisible, setTestimonialsVisible] = useState(false);

  // Mock testimonials data - replace with your API call
  const mockTestimonials = [
    {
      id: 1,
      name: 'Sarah & Michael Chen',
      service: 'Wedding Photography',
      rating: 5,
      text: 'Alexander captured our wedding day with such artistry and emotion. Every photo tells a story, and we are absolutely thrilled with the results. His professionalism and creative eye made our special day even more magical.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      location: 'New York',
      date: 'September 2024'
    },
    {
      id: 2,
      name: 'Emily Rodriguez',
      service: 'Portrait Photography',
      rating: 5,
      text: 'Working with Alexander was an incredible experience. He has this amazing ability to make you feel comfortable and confident in front of the camera. The portraits he created are absolutely stunning and capture my personality perfectly.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      location: 'Manhattan',
      date: 'August 2024'
    },
    {
      id: 3,
      name: 'David Thompson',
      service: 'Commercial Photography',
      rating: 5,
      text: 'Alexander elevated our brand imagery beyond our expectations. His technical expertise and creative vision helped us tell our story in a way that truly resonates with our audience. Outstanding work from a true professional.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      location: 'Brooklyn',
      date: 'July 2024'
    },
    {
      id: 4,
      name: 'Lisa & James Wilson',
      service: 'Family Photography',
      rating: 5,
      text: 'Our family session with Alexander was magical. He captured genuine moments of joy and connection that we\'ll treasure forever. His patience with our young children and ability to create natural, beautiful photos is remarkable.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      location: 'Central Park',
      date: 'October 2024'
    },
    {
      id: 5,
      name: 'Alexandra Mitchell',
      service: 'Fine Art Photography',
      rating: 5,
      text: 'Alexander\'s fine art photography is nothing short of extraordinary. He transformed my vision into breathtaking imagery that exceeded all my expectations. His artistic eye and technical mastery are truly exceptional.',
      image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      location: 'SoHo Studio',
      date: 'June 2024'
    },
    {
      id: 6,
      name: 'Robert & Grace Kim',
      service: 'Event Photography',
      rating: 5,
      text: 'Alexander photographed our corporate gala and the results were phenomenal. He captured the energy and elegance of the evening perfectly. His discrete presence and professional approach made the entire process seamless.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      location: 'Midtown',
      date: 'November 2024'
    }
  ];

  // Featured testimonials for the hero carousel
  const featuredTestimonials = mockTestimonials.slice(0, 3);

  useEffect(() => {
    // Replace with actual API call
    setTestimonials(mockTestimonials);
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
          setTestimonialsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (testimonialsRef.current) {
      observer.observe(testimonialsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredTestimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [featuredTestimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredTestimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredTestimonials.length) % featuredTestimonials.length);
  };

  const parallaxTransform = `translateY(${scrollY * 0.2}px)`;

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-amber-400 fill-current' : 'text-stone-300'}`}
      />
    ));
  };

  return (
    <div className="relative overflow-hidden bg-stone-50">
      {/* Hero Section with Featured Testimonial Carousel */}
      <div className="relative min-h-[70vh] pt-20 pb-12 flex items-center justify-center overflow-hidden bg-gradient-to-br from-stone-800 to-stone-900">
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
          {Array.from({ length: 6 }, (_, i) => (
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
        <div className="relative z-10 text-center text-white px-4 sm:px-6 max-w-5xl mx-auto w-full">
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-12 duration-1200">
            {/* Professional Header */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-20 bg-gradient-to-r from-transparent via-amber-300 to-transparent" />
              <div className="p-2 border border-amber-300/50 rounded-sm">
                <Heart className="w-6 h-6 text-amber-300" />
              </div>
              <span className="text-amber-300 font-light tracking-[0.3em] uppercase text-sm">
                Client Stories
              </span>
              <div className="p-2 border border-amber-300/50 rounded-sm">
                <Quote className="w-6 h-6 text-amber-300" />
              </div>
              <div className="h-px w-20 bg-gradient-to-r from-amber-300 via-transparent to-transparent" />
            </div>

            {/* Title */}
            <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-12">
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-light leading-tight tracking-wide">
                <span className="block">Words from</span>
                <span className="block font-thin text-amber-200">Treasured Clients</span>
              </h1>
              
              <div className="h-px w-24 sm:w-32 bg-gradient-to-r from-transparent via-white/60 to-transparent mx-auto mb-4 sm:mb-6" />
              <p className="text-base sm:text-lg md:text-xl font-light tracking-wide text-stone-200 max-w-2xl mx-auto px-4">
                The greatest reward is seeing the joy and satisfaction in my clients' faces 
                when they see their precious moments transformed into timeless art.
              </p>
            </div>

            {/* Featured Testimonial Carousel */}
            <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-sm p-4 sm:p-6 lg:p-8 max-w-4xl mx-auto">
              <div className="relative overflow-hidden min-h-[200px] sm:min-h-[250px]">
                {featuredTestimonials.map((testimonial, index) => (
                  <div
                    key={testimonial.id}
                    className={`transition-all duration-700 ${
                      index === currentSlide 
                        ? 'opacity-100 translate-x-0' 
                        : index < currentSlide 
                        ? 'opacity-0 -translate-x-full absolute inset-0'
                        : 'opacity-0 translate-x-full absolute inset-0'
                    }`}
                  >
                    <div className="text-center space-y-4 sm:space-y-6">
                      <Quote className="w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12 text-amber-300 mx-auto opacity-60" />
                      
                      <blockquote className="text-sm sm:text-base lg:text-xl font-light leading-relaxed text-white/90 italic px-2">
                        "{testimonial.text}"
                      </blockquote>
                      
                      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16 rounded-full border-2 border-amber-300/50"
                        />
                        <div className="text-center sm:text-left">
                          <h4 className="font-medium text-amber-200 text-sm sm:text-base">{testimonial.name}</h4>
                          <p className="text-xs sm:text-sm text-stone-300">{testimonial.service}</p>
                          <div className="flex gap-1 mt-1 justify-center sm:justify-start">
                            {renderStars(testimonial.rating)}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Carousel Controls */}
              <div className="flex items-center justify-between mt-6 sm:mt-8">
                <button
                  onClick={prevSlide}
                  className="p-2 sm:p-3 text-white/60 hover:text-amber-300 transition-colors duration-300 
                    hover:bg-white/10 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-300/50"
                >
                  <ArrowLeft className="w-4 sm:w-5 h-4 sm:h-5" />
                </button>
                
                <div className="flex gap-2 sm:gap-3">
                  {featuredTestimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2 sm:w-3 h-2 sm:h-3 rounded-full transition-all duration-300 focus:outline-none
                        ${index === currentSlide ? 'bg-amber-300' : 'bg-white/30 hover:bg-white/50'}`}
                    />
                  ))}
                </div>
                
                <button
                  onClick={nextSlide}
                  className="p-2 sm:p-3 text-white/60 hover:text-amber-300 transition-colors duration-300 
                    hover:bg-white/10 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-300/50"
                >
                  <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5" />
                </button>
              </div>
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

      {/* All Testimonials Section */}
      <div
        ref={testimonialsRef}
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

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-stone-400" />
              <Users className="w-5 h-5 text-stone-500" />
              <span className="text-stone-500 font-light tracking-[0.2em] uppercase text-xs">
                Client Experiences
              </span>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-stone-400" />
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-stone-800 mb-6 tracking-wide">
              Every Story Matters
            </h2>
            <p className="text-base sm:text-lg text-stone-600 max-w-3xl mx-auto font-light leading-relaxed px-4">
              Behind every photograph is a unique story, a special moment, and a satisfied client. 
              These testimonials reflect our commitment to excellence and personal connection.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`group relative bg-white/90 backdrop-blur-sm border border-stone-200/50 
                  hover:border-amber-300/30 transition-all duration-700 hover:shadow-2xl 
                  hover:shadow-stone-900/10 hover:-translate-y-1 p-6 sm:p-8
                  ${testimonialsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Quote Icon */}
                <div className="absolute -top-3 -right-3 w-10 h-10 sm:w-12 sm:h-12 bg-amber-300 rounded-full 
                  flex items-center justify-center shadow-lg group-hover:scale-110 
                  transition-transform duration-300">
                  <Quote className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                </div>

                <div className="space-y-4 sm:space-y-6">
                  {/* Rating */}
                  <div className="flex gap-1 mb-3 sm:mb-4">
                    {renderStars(testimonial.rating)}
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="text-stone-700 font-light leading-relaxed italic text-sm sm:text-base">
                    "{testimonial.text}"
                  </blockquote>

                  {/* Service Badge */}
                  <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-stone-100 border border-stone-200 
                    text-xs font-light tracking-wide text-stone-600 rounded-full">
                    <Camera className="w-3 h-3" />
                    {testimonial.service}
                  </div>

                  {/* Client Info */}
                  <div className="flex items-center gap-3 sm:gap-4 pt-3 sm:pt-4 border-t border-stone-200/50">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-stone-200 group-hover:border-amber-300/50 
                        transition-colors duration-300"
                    />
                    <div className="flex-1">
                      <h4 className="font-medium text-stone-800 group-hover:text-amber-700 
                        transition-colors duration-300 text-sm sm:text-base">{testimonial.name}</h4>
                      <div className="flex items-center gap-2 text-xs text-stone-500 mt-1">
                        <span>{testimonial.location}</span>
                        <span>•</span>
                        <span>{testimonial.date}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-amber-300/20 
                  transition-all duration-700 pointer-events-none rounded-sm" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative py-20 bg-gradient-to-br from-stone-100 to-stone-200">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 max-w-4xl mx-auto">
            <div className="space-y-2 sm:space-y-3">
              <div className="text-3xl sm:text-4xl font-light text-stone-800">500+</div>
              <div className="text-stone-600 font-light tracking-wide uppercase text-xs sm:text-sm">Happy Clients</div>
            </div>
            <div className="space-y-2 sm:space-y-3">
              <div className="text-3xl sm:text-4xl font-light text-stone-800">98%</div>
              <div className="text-stone-600 font-light tracking-wide uppercase text-xs sm:text-sm">Satisfaction Rate</div>
            </div>
            <div className="space-y-2 sm:space-y-3">
              <div className="text-3xl sm:text-4xl font-light text-stone-800">4.9/5</div>
              <div className="text-stone-600 font-light tracking-wide uppercase text-xs sm:text-sm">Average Rating</div>
            </div>
            <div className="space-y-2 sm:space-y-3">
              <div className="text-3xl sm:text-4xl font-light text-stone-800">15+</div>
              <div className="text-stone-600 font-light tracking-wide uppercase text-xs sm:text-sm">Years Experience</div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
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

        <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center text-stone-100">
          <div className="max-w-4xl mx-auto">
            {/* Section Header */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-20 bg-gradient-to-r from-transparent via-amber-300/60 to-transparent" />
              <Aperture className="w-6 h-6 text-amber-300" />
              <div className="h-px w-20 bg-gradient-to-r from-amber-300/60 via-transparent to-transparent" />
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-6 sm:mb-8 tracking-wide">
              Join Our Community of
              <span className="block text-amber-200 font-thin">Satisfied Clients</span>
            </h2>
            
            <p className="text-base sm:text-lg md:text-xl text-stone-300 mb-8 sm:mb-12 max-w-2xl mx-auto font-light leading-relaxed px-4">
              Your story deserves to be told with the same care and artistry that has earned 
              the trust of hundreds of clients. Let's create something beautiful together.
            </p>
            
            {/* CTA Button */}
            <button className="group relative px-12 py-5 bg-amber-300 hover:bg-amber-400 
              text-stone-900 font-medium tracking-wider transition-all duration-300 
              hover:shadow-2xl hover:shadow-amber-300/20 focus:outline-none focus:ring-2 
              focus:ring-amber-300 hover:scale-105">
              <span className="relative z-10 flex items-center gap-3 uppercase text-sm">
                Share Your Story
                <Heart className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
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

export default TestimonialsPage;