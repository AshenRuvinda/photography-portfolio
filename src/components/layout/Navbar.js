'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import profile from '@/data/profile.json';

function Navbar() {
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
    { to: '/', label: 'Home' },
    { to: '/portfolio', label: 'Weddings & Stories' },
    { to: '/gallery', label: 'Portfolio' },
    { to: '/services', label: 'Services' },
    { to: '/about', label: 'About' },
    { to: '/testimonials', label: 'Testimonials' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#F2EDE7]/95 backdrop-blur-md shadow-sm border-b border-[#CCBEB1]/70 py-2 sm:py-2.5 lg:py-3'
            : 'bg-[#F2EDE7] border-b border-[#CCBEB1]/40 py-2.5 sm:py-3 lg:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex flex-col group min-w-0 pr-2">
              <span className="heading-serif text-lg sm:text-2xl lg:text-3xl font-bold tracking-tight text-[#2E2219] group-hover:text-[#997E67] transition-colors duration-300 truncate leading-tight">
                {profile.brand.name}
              </span>
              <span className="text-[0.55rem] sm:text-[0.65rem] tracking-[0.22em] sm:tracking-[0.28em] uppercase text-[#997E67] font-medium leading-none mt-0.5">
                {profile.brand.profession} • {profile.brand.country}
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-7">
              {navItems.map((item) => {
                const isActive = pathname === item.to;
                return (
                  <Link
                    key={item.to}
                    href={item.to}
                    className={`relative text-[0.82rem] font-medium tracking-[0.08em] uppercase py-1 transition-colors duration-200 ${
                      isActive
                        ? 'text-[#997E67] font-semibold'
                        : 'text-[#2E2219] hover:text-[#997E67]'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#997E67] rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Book Now + Mobile Toggle */}
            <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
              <Link
                href="/contact"
                className="hidden sm:inline-flex btn-gold text-xs py-2 px-5 sm:py-2.5 sm:px-6"
              >
                Book Now
              </Link>

              {/* Minimalist Hamburger Button */}
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle navigation menu"
                aria-expanded={isOpen}
                className="lg:hidden flex flex-col justify-center items-center w-9 h-9 p-2 rounded text-[#2E2219] hover:text-[#997E67] focus:outline-none transition-colors"
              >
                <span
                  className={`block w-5 h-[1.5px] bg-current transition-all duration-300 ease-in-out ${
                    isOpen ? 'rotate-45 translate-y-[5px]' : ''
                  }`}
                />
                <span
                  className={`block w-5 h-[1.5px] bg-current my-[3.5px] transition-all duration-200 ease-in-out ${
                    isOpen ? 'opacity-0 scale-x-0' : 'opacity-100'
                  }`}
                />
                <span
                  className={`block w-5 h-[1.5px] bg-current transition-all duration-300 ease-in-out ${
                    isOpen ? '-rotate-45 -translate-y-[5px]' : ''
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isOpen && (
          <div className="lg:hidden border-t border-[#CCBEB1]/60 bg-[#F2EDE7] shadow-xl animate-fadeIn">
            <div className="max-w-7xl mx-auto px-5 py-4 divide-y divide-[#CCBEB1]/30">
              <nav className="py-2 flex flex-col space-y-1">
                {navItems.map((item) => {
                  const isActive = pathname === item.to;
                  return (
                    <Link
                      key={item.to}
                      href={item.to}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center justify-between py-2.5 px-3 rounded text-[0.82rem] font-medium uppercase tracking-[0.12em] transition-colors ${
                        isActive
                          ? 'text-[#997E67] font-semibold bg-[#E7DDD3]/70'
                          : 'text-[#2E2219] hover:text-[#997E67] hover:bg-[#E7DDD3]/40'
                      }`}
                    >
                      <span>{item.label}</span>
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#997E67]" />
                      )}
                    </Link>
                  );
                })}
              </nav>

              <div className="pt-4 pb-2">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="btn-gold w-full text-center text-xs py-3 tracking-widest uppercase font-medium"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

export default Navbar;