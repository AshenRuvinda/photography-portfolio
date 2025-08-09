import { useEffect, useState } from 'react';
import { Camera, Aperture, Send } from 'lucide-react';
import ContactForm from '../components/forms/ContactForm';
import SectionTitle from '../components/ui/SectionTitle';

function ContactPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const mouseParallaxTransform = `translate(${(mousePosition.x - (typeof window !== 'undefined' ? window.innerWidth : 1920) / 2) * 0.002}px, ${
    (mousePosition.y - (typeof window !== 'undefined' ? window.innerHeight : 1080) / 2) * 0.002
  }px)`;

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-stone-50 to-stone-100">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: 'radial-gradient(circle at 25% 25%, #8B4513 1px, transparent 1px)',
            backgroundSize: '80px 80px'
          }} 
        />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 6 }, (_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-amber-200/20 rounded-full animate-float"
            style={{
              left: `${15 + Math.random() * 70}%`,
              top: `${15 + Math.random() * 70}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <div className="relative py-20 bg-gradient-to-br from-stone-800 to-stone-900 overflow-hidden">
        {/* Background Texture */}
        <div className="absolute inset-0 opacity-5">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at center, rgba(245,245,220,0.3) 1px, transparent 1px)`,
              backgroundSize: '60px 60px'
            }}
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div 
            className="text-center text-stone-100 max-w-4xl mx-auto"
            style={{ transform: mouseParallaxTransform }}
          >
            {/* Professional Header */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-20 bg-gradient-to-r from-transparent via-amber-300 to-transparent" />
              <div className="p-2 border border-amber-300/50 rounded-sm">
                <Send className="w-6 h-6 text-amber-300" />
              </div>
              <span className="text-amber-300 font-light tracking-[0.3em] uppercase text-sm">
                Get In Touch
              </span>
              <div className="p-2 border border-amber-300/50 rounded-sm">
                <Camera className="w-6 h-6 text-amber-300" />
              </div>
              <div className="h-px w-20 bg-gradient-to-r from-amber-300 via-transparent to-transparent" />
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light mb-8 tracking-wide">
              Let's Create
              <span className="block text-amber-200 font-thin">Together</span>
            </h1>
            
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-white/60 to-transparent mx-auto mb-8" />
            
            <p className="text-lg md:text-xl text-stone-300 max-w-2xl mx-auto font-light leading-relaxed">
              Ready to capture your story? I'd love to hear about your vision and discuss how we can bring it to life through the art of photography.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="relative -mt-12 z-10">
        <ContactForm />
      </div>

      {/* Simple Call to Action */}
      <div className="relative py-16 bg-gradient-to-r from-stone-200 to-stone-300 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-stone-500" />
              <Aperture className="w-5 h-5 text-stone-600" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-stone-500" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-light text-stone-800 mb-6 tracking-wide">
              Ready to Begin Your Photography Journey?
            </h2>
            <p className="text-lg text-stone-600 font-light leading-relaxed">
              Whether you're planning a special event, need professional portraits, or have 
              a creative project in mind, let's discuss how we can bring your vision to life.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); opacity: 0.2; }
          25% { transform: translateY(-12px) rotate(90deg) scale(1.1); opacity: 0.4; }
          50% { transform: translateY(0px) rotate(180deg) scale(1); opacity: 0.2; }
          75% { transform: translateY(6px) rotate(270deg) scale(0.9); opacity: 0.4; }
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

export default ContactPage;