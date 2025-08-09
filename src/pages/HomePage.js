import { useEffect, useState, useRef } from 'react';
import { ChevronDown, Camera, Award, Users, Aperture, Play, Eye, Clock, MapPin } from 'lucide-react';

function HomePage() {
  const [siteData, setSiteData] = useState({
    name: 'Alexander Sterling',
    tagline: 'Fine Art & Portrait Photography',
    heroImage: 'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
  });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const [statsVisible, setStatsVisible] = useState(false);

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
          setStatsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  const stats = [
    { number: '500', label: 'Satisfied Clients', icon: Users },
    { number: '2000', label: 'Captured Moments', icon: Camera },
    { number: '50', label: 'Awards Received', icon: Award },
    { number: '15', label: 'Years of Excellence', icon: Clock },
  ];

  const parallaxTransform = `translateY(${scrollY * 0.3}px)`;

  const mouseParallaxTransform = `translate(${(mousePosition.x - (typeof window !== 'undefined' ? window.innerWidth : 1920) / 2) * 0.005}px, ${
    (mousePosition.y - (typeof window !== 'undefined' ? window.innerHeight : 1080) / 2) * 0.005
  }px)`;

  return (
    <div className="relative overflow-hidden bg-stone-50">
      {/* Hero Section */}
      <div
        ref={heroRef}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background Image with Subtle Parallax */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{
            backgroundImage: `url(${siteData.heroImage})`,
            transform: parallaxTransform,
          }}
        />

        {/* Elegant Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/40 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/20" />

        {/* Subtle Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 12 }, (_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-amber-200/30 rounded-full animate-float"
              style={{
                left: `${15 + Math.random() * 70}%`,
                top: `${10 + Math.random() * 80}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${6 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div 
          className="relative z-10 text-center text-white px-6 max-w-5xl" 
          style={{ transform: mouseParallaxTransform }}
        >
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-12 duration-1200">
            {/* Professional Header */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-20 bg-gradient-to-r from-transparent via-amber-300 to-transparent" />
              <div className="p-2 border border-amber-300/50 rounded-sm">
                <Aperture className="w-6 h-6 text-amber-300" />
              </div>
              <span className="text-amber-300 font-light tracking-[0.3em] uppercase text-sm">
                Fine Art Photography
              </span>
              <div className="p-2 border border-amber-300/50 rounded-sm">
                <Eye className="w-6 h-6 text-amber-300" />
              </div>
              <div className="h-px w-20 bg-gradient-to-r from-amber-300 via-transparent to-transparent" />
            </div>

            {/* Name and Title */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-light leading-tight tracking-wide">
                <span className="block opacity-0 animate-in fade-in slide-in-from-left duration-1200 delay-400">
                  {siteData.name?.split(' ')[0] || 'Alexander'}
                </span>
                <span className="block font-thin text-amber-200 opacity-0 animate-in fade-in slide-in-from-right duration-1200 delay-700">
                  {siteData.name?.split(' ').slice(1).join(' ') || 'Sterling'}
                </span>
              </h1>
              
              <div className="opacity-0 animate-in fade-in slide-in-from-bottom duration-1200 delay-1000">
                <div className="h-px w-32 bg-gradient-to-r from-transparent via-white/60 to-transparent mx-auto mb-6" />
                <p className="text-lg md:text-xl font-light tracking-wider text-stone-200 uppercase">
                  {siteData.tagline || 'Fine Art & Portrait Photography'}
                </p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-12
              opacity-0 animate-in fade-in slide-in-from-bottom duration-1200 delay-1300">
              
              <button className="group relative px-10 py-4 border border-white/30 
                text-white font-light tracking-wider transition-all duration-500 
                hover:border-amber-300/80 hover:bg-white/5 backdrop-blur-sm
                focus:outline-none focus:ring-2 focus:ring-amber-300/50">
                <span className="relative z-10 flex items-center gap-3 uppercase text-sm">
                  <Camera className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                  View Portfolio
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-300/0 via-amber-300/10 to-amber-300/0 
                  transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
              </button>

              <button className="group flex items-center gap-4 px-8 py-4 text-white/80 
                hover:text-white font-light tracking-wider transition-all duration-300
                focus:outline-none focus:text-amber-300">
                <div className="p-2 border border-white/20 rounded-full group-hover:border-white/40 
                  transition-colors duration-300">
                  <Play className="w-4 h-4" />
                </div>
                <span className="uppercase text-sm">Studio Tour</span>
              </button>
            </div>
          </div>
        </div>

        {/* Elegant Scroll Indicator */}
        <button
          onClick={scrollToContent}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/60 hover:text-amber-300 
            transition-all duration-500 hover:scale-110 group focus:outline-none"
        >
          <div className="flex flex-col items-center gap-3">
            <div className="h-16 w-px bg-gradient-to-b from-transparent via-white/40 to-transparent" />
            <span className="text-xs font-light tracking-[0.2em] uppercase">Explore</span>
            <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
          </div>
        </button>

        {/* Decorative Corner Elements */}
        <div className="absolute top-16 left-16 w-16 h-16">
          <div className="w-full h-px bg-white/20" />
          <div className="w-px h-full bg-white/20" />
        </div>
        <div className="absolute top-16 right-16 w-16 h-16">
          <div className="w-full h-px bg-white/20 ml-auto" />
          <div className="w-px h-full bg-white/20 ml-auto" />
        </div>
        <div className="absolute bottom-16 left-16 w-16 h-16">
          <div className="w-px h-full bg-white/20" />
          <div className="w-full h-px bg-white/20 mt-auto" />
        </div>
        <div className="absolute bottom-16 right-16 w-16 h-16">
          <div className="w-px h-full bg-white/20 ml-auto" />
          <div className="w-full h-px bg-white/20 mt-auto" />
        </div>
      </div>

      {/* Stats Section with Classical Design */}
      <div
        ref={statsRef}
        className="relative py-24 bg-gradient-to-br from-stone-100 to-stone-200 overflow-hidden"
      >
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div 
            className="absolute inset-0" 
            style={{
              backgroundImage: 'radial-gradient(circle at 50% 50%, #8B4513 1px, transparent 1px)',
              backgroundSize: '60px 60px'
            }} 
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-stone-400" />
              <MapPin className="w-5 h-5 text-stone-500" />
              <span className="text-stone-500 font-light tracking-[0.2em] uppercase text-xs">
                Based in New York
              </span>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-stone-400" />
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-stone-800 mb-6 tracking-wide">
              Excellence in Every Frame
            </h2>
            <p className="text-lg md:text-xl text-stone-600 max-w-3xl mx-auto font-light leading-relaxed">
              With over a decade of experience in fine art and portrait photography, 
              I bring technical mastery and artistic vision to every project.
            </p>
          </div>

          {/* Statistics Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`text-center group transition-all duration-1000 ${
                  statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="relative inline-flex items-center justify-center w-24 h-24 mb-6 
                  border border-stone-300 group-hover:border-amber-300/60 rounded-sm
                  transition-all duration-500 group-hover:scale-105 bg-white/50 backdrop-blur-sm">
                  <stat.icon className="w-8 h-8 text-stone-600 group-hover:text-amber-600 
                    transition-colors duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-50/0 to-amber-50/50 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-sm" />
                </div>
                
                <h3 className="text-3xl md:text-4xl font-light text-stone-800 mb-3 
                  group-hover:text-amber-700 transition-colors duration-300">
                  <CountUp end={parseInt(stat.number)} visible={statsVisible} />
                  <span className="text-2xl">+</span>
                </h3>
                
                <p className="text-stone-600 font-light tracking-wide uppercase text-sm">
                  {stat.label}
                </p>
                
                <div className="mt-4 h-px w-12 bg-gradient-to-r from-transparent via-stone-300 
                  to-transparent mx-auto group-hover:via-amber-300 transition-colors duration-300" />
              </div>
            ))}
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

        <div className="container mx-auto px-6 relative z-10 text-center text-stone-100">
          <div className="max-w-4xl mx-auto">
            {/* Section Header */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-20 bg-gradient-to-r from-transparent via-amber-300/60 to-transparent" />
              <Aperture className="w-6 h-6 text-amber-300" />
              <div className="h-px w-20 bg-gradient-to-r from-amber-300/60 via-transparent to-transparent" />
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-8 tracking-wide">
              Let's Create Something
              <span className="block text-amber-200 font-thin">Extraordinary</span>
            </h2>
            
            <p className="text-lg md:text-xl text-stone-300 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              Whether it's a portrait session, wedding, or fine art project, 
              I'm here to bring your vision to life with timeless elegance.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="group relative px-12 py-5 bg-amber-300 hover:bg-amber-400 
                text-stone-900 font-medium tracking-wider transition-all duration-300 
                hover:shadow-2xl hover:shadow-amber-300/20 focus:outline-none focus:ring-2 
                focus:ring-amber-300 hover:scale-105">
                <span className="relative z-10 flex items-center gap-3 uppercase text-sm">
                  Book a Session
                  <Camera className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                </span>
              </button>
              
              <button className="group flex items-center gap-4 px-8 py-5 border border-stone-400/30 
                hover:border-amber-300/60 text-stone-200 hover:text-white font-light 
                tracking-wider transition-all duration-300 hover:bg-white/5 backdrop-blur-sm
                focus:outline-none focus:ring-2 focus:ring-stone-400/50">
                <Award className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                <span className="uppercase text-sm">View Awards</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); opacity: 0.3; }
          25% { transform: translateY(-8px) rotate(90deg) scale(1.1); opacity: 0.6; }
          50% { transform: translateY(0px) rotate(180deg) scale(1); opacity: 0.3; }
          75% { transform: translateY(4px) rotate(270deg) scale(0.9); opacity: 0.6; }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
        }
      `}</style>
    </div>
  );
}

// Refined CountUp component
function CountUp({ end, visible, duration = 2500 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!visible) return;

    let startTime;
    let animationFrame;
    
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Easing function for smoother animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      
      setCount(Math.floor(end * easeOutQuart));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [visible, end, duration]);

  return <span>{count}</span>;
}

export default HomePage;