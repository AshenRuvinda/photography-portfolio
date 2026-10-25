'use client';

import Link from 'next/link';
import { Camera, Heart, Award, ArrowRight, Eye, ChevronDown, CheckCircle2 } from 'lucide-react';

function HomePage() {
  const services = [
    {
      title: 'Wedding Photography',
      description: 'Timeless moments from your most precious day, documented with warmth and cinematic beauty.',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
      tag: 'Weddings',
      href: '/portfolio'
    },
    {
      title: 'Portrait & Lifestyle',
      description: 'Authentic portraits capturing genuine emotion, natural light, and individual soul.',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
      tag: 'Portraits',
      href: '/portfolio'
    },
    {
      title: 'Events & Celebrations',
      description: 'Intimate gatherings, milestone birthdays, and exclusive corporate occasions captured seamlessly.',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80',
      tag: 'Events',
      href: '/services'
    },
    {
      title: 'Brand & Commercial',
      description: 'High-concept creative visuals designed to elevate luxury brands and modern artisans.',
      image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80',
      tag: 'Commercial',
      href: '/services'
    },
    {
      title: 'Villa & Real Estate',
      description: 'Architectural perspectives highlighting luxury spaces, light transitions, and natural geometry.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      tag: 'Architecture',
      href: '/gallery'
    },
    {
      title: 'Fine Art Prints',
      description: 'Curated limited edition prints for interior collectors, homes, and private galleries.',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
      tag: 'Exhibition',
      href: '/gallery'
    }
  ];

  const featuredWorks = [
    {
      title: 'Serenade at Lake Como',
      category: 'Destination Wedding',
      image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Golden Hour in Tuscany',
      category: 'Elopement Story',
      image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Elegance in Monochromatic Light',
      category: 'Fine Art Portrait',
      image: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'The Coastal Villa Residency',
      category: 'Architectural Lifestyle',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
    }
  ];

  return (
    <div className="bg-[#F2EDE7] text-[#2E2219]">
      {/* =========================================================
         HERO SECTION (Hemal Perera Signature Hero)
         ========================================================= */}
      <section className="relative min-h-screen -mt-14 sm:-mt-16 lg:-mt-24 flex items-center justify-center overflow-hidden">
        {/* Background Image with Warm Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?auto=format&fit=crop&w=2000&q=85"
            alt="Photography Hero"
            className="w-full h-full object-cover object-center filter brightness-[0.75] contrast-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#221811]/60 via-[#221811]/45 to-[#221811]/75" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20 pb-16">
          <p className="text-[#FFDBBB] text-[0.65rem] sm:text-xs font-medium tracking-[0.22em] sm:tracking-[0.25em] uppercase mb-4 animate-fadeInUp">
            Premier Fine Art & Wedding Photography
          </p>
          <h1 className="heading-serif text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.15] mb-5 sm:mb-6 animate-fadeInUp">
            Capturing Moments<br />
            <span className="italic font-light text-[#FFDBBB]">That Last Forever</span>
          </h1>
          <p className="text-[#E7DDD3] text-sm sm:text-base lg:text-xl max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed font-light px-2">
            Professional photography that tells your unique story with elegance, genuine emotion, and timeless cinematic artistry.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 justify-center px-4">
            <Link href="/portfolio" className="btn-gold w-full sm:w-auto text-xs py-3 px-7">
              View Weddings
            </Link>
            <Link href="/contact" className="btn-outline-gold !text-white !border-[#FFDBBB] hover:!bg-[#FFDBBB] hover:!text-[#2E2219] w-full sm:w-auto text-xs py-3 px-7">
              Book a Session
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-75">
          <span className="text-[0.65rem] text-[#FFDBBB] tracking-[0.25em] uppercase font-medium">Scroll</span>
          <div className="w-[1px] h-10 bg-gradient-to-b from-[#FFDBBB] to-transparent animate-pulse" />
        </div>
      </section>

      {/* =========================================================
         WHAT WE DO / SERVICES GRID
         ========================================================= */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[#997E67] text-xs tracking-[0.22em] uppercase font-semibold mb-3">
            What We Do
          </p>
          <h2 className="heading-serif text-4xl lg:text-5xl font-bold text-[#2E2219] mb-4">
            Our Photography Services
          </h2>
          <div className="gold-line" />
          <p className="text-[#5E4D3E] text-base max-w-xl mx-auto">
            From intimate ceremonies to grand editorial projects, every frame is crafted to perfection.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="group bg-[#F8F2EB] border border-[#CCBEB1] overflow-hidden rounded-[2px] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl hover:border-[#997E67] flex flex-col"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[#E7DDD3]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 bg-[#F2EDE7]/90 backdrop-blur-sm text-[#2E2219] text-[0.65rem] uppercase tracking-[0.18em] px-2.5 py-1 font-semibold rounded-sm">
                  {item.tag}
                </span>
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="heading-serif text-xl font-bold text-[#2E2219] mb-2 group-hover:text-[#997E67] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#5E4D3E] leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="pt-5 mt-4 border-t border-[#CCBEB1]/40 flex items-center justify-between text-xs tracking-[0.15em] uppercase font-semibold text-[#997E67]">
                  <span>Explore Series</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* =========================================================
         FEATURED WORKS BANNER
         ========================================================= */}
      <section className="bg-[#E7DDD3] border-y border-[#CCBEB1] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <p className="text-[#997E67] text-xs tracking-[0.22em] uppercase font-semibold mb-3">
                Selected Portfolio
              </p>
              <h2 className="heading-serif text-4xl lg:text-5xl font-bold text-[#2E2219]">
                Featured Visual Stories
              </h2>
            </div>
            <Link href="/portfolio" className="btn-gold text-xs py-2.5 px-6 self-start md:self-auto">
              View All Works
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredWorks.map((work, idx) => (
              <Link
                key={idx}
                href="/portfolio"
                className="group relative bg-[#F8F2EB] border border-[#CCBEB1] overflow-hidden rounded-[2px] transition-all duration-500 hover:shadow-xl hover:border-[#997E67]"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2E2219]/80 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <span className="text-[0.7rem] uppercase tracking-[0.2em] text-[#FFDBBB] font-medium block mb-1">
                      {work.category}
                    </span>
                    <h3 className="heading-serif text-2xl font-bold leading-snug text-white group-hover:text-[#FFDBBB] transition-colors">
                      {work.title}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
         PHILOSOPHY / ABOUT TEASER
         ========================================================= */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative z-10 aspect-[4/5] overflow-hidden rounded-[2px] border border-[#CCBEB1] shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
                alt="Alexander Sterling Photographer"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Elegant Accent Box */}
            <div className="absolute -bottom-6 -right-6 w-64 h-64 border-2 border-[#997E67]/40 -z-0 rounded-[2px] hidden sm:block" />
          </div>

          <div className="space-y-6">
            <p className="text-[#997E67] text-xs tracking-[0.22em] uppercase font-semibold">
              Behind The Lens
            </p>
            <h2 className="heading-serif text-4xl lg:text-5xl font-bold text-[#2E2219] leading-tight">
              Crafting Timeless Heirlooms Through Thoughtful Artistry
            </h2>
            <div className="gold-line-left" />
            <p className="text-[#5E4D3E] text-base leading-relaxed">
              With over 15 years capturing weddings, editorial portraits, and authentic human connections across the globe, my approach blends documentarian honesty with high-fashion sophistication.
            </p>
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-sm text-[#2E2219]">
                <CheckCircle2 className="w-5 h-5 text-[#997E67]" />
                <span>Over 500+ couples & families photographed worldwide</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#2E2219]">
                <CheckCircle2 className="w-5 h-5 text-[#997E67]" />
                <span>Published in international wedding & editorial publications</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#2E2219]">
                <CheckCircle2 className="w-5 h-5 text-[#997E67]" />
                <span>Natural light specialists with bespoke heirloom retouching</span>
              </div>
            </div>
            <div className="pt-4">
              <Link href="/about" className="btn-gold">
                Learn More About Alexander
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
         CALL TO ACTION SECTION
         ========================================================= */}
      <section className="bg-[#2E2219] text-[#F2EDE7] py-20 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <p className="text-[#FFDBBB] text-xs uppercase tracking-[0.25em] font-medium">
            Begin Your Story
          </p>
          <h2 className="heading-serif text-4xl lg:text-5xl font-bold text-white">
            Let's Create Something Unforgettable
          </h2>
          <p className="text-[#CCBEB1] text-base lg:text-lg leading-relaxed">
            Reserve your wedding date, portrait session, or commercial commission today. Limited dates available per season.
          </p>
          <div className="pt-4">
            <Link href="/contact" className="btn-gold !bg-[#997E67] hover:!bg-[#664930] !text-white text-sm py-3.5 px-8">
              Inquire Availability
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;