'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Aperture, User, Camera, Briefcase, Star, MessageCircle, Home, Award } from 'lucide-react';

function Navbar() {
  const [siteData] = useState({
    name: 'Alexander Sterling'
  });
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navItems = [
    { to: '/', label: 'Home', icon: Home },
    { to: '/about', label: 'About', icon: User },
    { to: '/portfolio', label: 'Portfolio', icon: Camera },
    { to: '/services', label: 'Services', icon: Briefcase },
    { to: '/gallery', label: 'Gallery', icon: Star },
    { to: '/testimonials', label: 'Testimonials', icon: Award },
    { to: '/contact', label: 'Contact', icon: MessageCircle },
  ];

  return (
    <>
      {/* Navigation Bar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled 
          ? 'bg-stone-900/95 backdrop-blur-xl shadow-xl border-b border-stone-700/50' 
          : 'bg-stone-900/80 backdrop-blur-lg'
      }`}>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between py-3">
            
            {/* Logo */}
            <Link 
              to="/" 
              href="/"
              className={`group flex items-center gap-3 transition-all duration-500 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-amber-300/50 rounded-sm ${
                scrolled ? 'text-stone-100' : 'text-white drop-shadow-lg'
              }`}
            >
              <div className={`p-1 border transition-all duration-500 rounded-sm ${
                scrolled 
                  ? 'border-amber-300/60 group-hover:border-amber-300' 
                  : 'border-amber-300/50 group-hover:border-amber-300'
              }`}>
                <Aperture className="w-4 h-4 group-hover:rotate-180 transition-transform duration-700 text-amber-300" />
              </div>
              <div className="flex flex-col">
                <span className="text-base font-light tracking-wide text-stone-100">
                  {siteData.name?.split(' ')[0] || 'Alexander'}
                </span>
                <span className="text-xs font-thin tracking-widest uppercase text-amber-200/90">
                  {siteData.name?.split(' ')[1] || 'Sterling'}
                </span>
              </div>
            </Link>

            {/* Mobile menu button */}
            <button
              aria-label="Toggle navigation menu"
              className={`md:hidden p-2 border transition-all duration-500 rounded-sm hover:scale-110 focus:outline-none focus:ring-2 focus:ring-amber-300/50 ${
                scrolled 
                  ? 'text-stone-100 border-amber-300/60 hover:border-amber-300 hover:bg-amber-300/20' 
                  : 'text-white border-amber-300/50 hover:border-amber-300 hover:bg-amber-300/20'
              }`}
              onClick={() => setIsOpen(!isOpen)}
            >
              <div className="relative w-5 h-5">
                <Menu className={`absolute inset-0 transition-all duration-300 ${
                  isOpen ? 'opacity-0 rotate-180 scale-50' : 'opacity-100 rotate-0 scale-100'
                }`} />
                <X className={`absolute inset-0 transition-all duration-300 ${
                  isOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-180 scale-50'
                }`} />
              </div>
            </button>

            {/* Desktop navigation */}
            <div className="hidden md:flex">
              <ul className="flex items-center gap-1">
                {navItems.map((item, index) => {
                  const isActive = pathname === item.to;
                  return (
                    <li key={item.to} className="relative">
                      <Link
                        href={item.to}
                        className={`
                          group relative flex items-center gap-2 px-3 py-2 transition-all duration-400 
                          focus:outline-none focus:ring-2 focus:ring-amber-300/50 rounded-sm
                          ${isActive 
                            ? scrolled 
                              ? 'text-amber-300 bg-amber-300/15 backdrop-blur-sm border-b-2 border-amber-300' 
                              : 'text-amber-300 bg-amber-300/20 backdrop-blur-sm border-b-2 border-amber-300'
                            : scrolled 
                              ? 'text-stone-200 hover:text-amber-300 hover:bg-amber-300/10' 
                              : 'text-stone-100/90 hover:text-amber-300 hover:bg-amber-300/15'
                          }
                        `}
                        style={{ 
                          animationDelay: `${index * 0.1}s`,
                          transform: `translateY(${scrolled ? 0 : '2px'})`
                        }}
                      >
                        <item.icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                        <span className="font-light tracking-wide text-sm uppercase">
                          {item.label}
                        </span>
                        
                        {/* Elegant underline animation */}
                        <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-px bg-gradient-to-r 
                          transition-all duration-500 ${
                            isActive 
                              ? 'w-full from-amber-300 via-amber-400 to-amber-300' 
                              : 'w-0 group-hover:w-3/4 from-amber-300/70 via-amber-400/70 to-amber-300/70'
                          }`} 
                        />
                        
                        {/* Subtle background gradient */}
                        <div className={`absolute inset-0 bg-gradient-to-r from-amber-300/0 via-amber-300/15 to-amber-300/0 
                          rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`} 
                        />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        {/* Elegant bottom border */}
        <div className={`h-px bg-gradient-to-r from-transparent via-amber-300/40 to-transparent transition-opacity duration-700 ${
          scrolled ? 'opacity-100' : 'opacity-60'
        }`} />
      </nav>

      {/* Mobile navigation overlay */}
      <div className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${
        isOpen ? 'bg-stone-900/70 backdrop-blur-sm' : 'bg-stone-900/0 pointer-events-none'
      }`} onClick={() => setIsOpen(false)} />

      {/* Mobile navigation menu */}
      <div className={`fixed top-0 right-0 bottom-0 z-40 w-80 md:hidden transform transition-all duration-500 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="h-full bg-stone-800/96 backdrop-blur-xl border-l border-stone-600/60 shadow-2xl">
          
          {/* Mobile menu header */}
          <div className="flex items-center justify-between p-6 border-b border-stone-700/70">
            <div className="flex items-center gap-3">
              <div className="p-2 border border-amber-300/60 rounded-sm">
                <Aperture className="w-5 h-5 text-amber-300" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-light text-stone-100 tracking-wide">Menu</span>
                <span className="text-xs font-thin text-amber-200/80 tracking-widest uppercase">Navigation</span>
              </div>
            </div>
            <button
              aria-label="Close navigation menu"
              onClick={() => setIsOpen(false)}
              className="p-2 text-stone-400 hover:text-amber-300 hover:bg-amber-300/20 rounded-sm transition-all duration-300"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile menu items */}
          <div className="p-6">
            <ul className="space-y-2">
              {navItems.map((item, index) => {
                const isActive = pathname === item.to;
                return (
                  <li key={item.to}>
                    <Link
                      href={item.to}
                      onClick={() => setIsOpen(false)}
                      className={`
                        group flex items-center gap-4 px-6 py-4 transition-all duration-400 rounded-sm
                        border-l-4 hover:translate-x-2 focus:outline-none focus:ring-2 focus:ring-amber-300/50
                        ${isActive 
                          ? 'text-amber-300 bg-amber-300/15 border-amber-300 shadow-sm' 
                          : 'text-stone-200 border-transparent hover:text-amber-300 hover:bg-amber-300/10 hover:border-amber-300/60'
                        }
                      `}
                      style={{ 
                        animationDelay: `${index * 0.1}s`,
                        opacity: isOpen ? 1 : 0
                      }}
                    >
                      <div className={`p-2 rounded-sm transition-all duration-300 ${
                        isActive 
                          ? 'bg-amber-300/25 text-amber-300' 
                          : 'bg-stone-700/60 text-stone-300 group-hover:bg-amber-300/20 group-hover:text-amber-300'
                      }`}>
                        <item.icon className="w-4 h-4" />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-light tracking-wide">
                          {item.label}
                        </span>
                        <div className={`h-px bg-gradient-to-r transition-all duration-500 ${
                          isActive 
                            ? 'w-full from-amber-300 to-transparent mt-1' 
                            : 'w-0 group-hover:w-1/2 from-amber-300 to-transparent mt-1'
                        }`} />
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Mobile menu footer */}
            <div className="mt-8 pt-6 border-t border-stone-700/60">
              <div className="text-center text-stone-400">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <div className="h-px w-8 bg-gradient-to-r from-transparent to-amber-300/50" />
                  <Aperture className="w-4 h-4 text-amber-300" />
                  <div className="h-px w-8 bg-gradient-to-l from-transparent to-amber-300/50" />
                </div>
                <p className="text-xs font-light tracking-wider uppercase text-amber-200/70">
                  Fine Art Photography
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;