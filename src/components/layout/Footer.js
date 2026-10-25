'use client';

import Link from 'next/link';
import { Instagram, Facebook, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#CCBEB1] bg-[#E7DDD3] text-[#2E2219]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <h3 className="heading-serif text-2xl font-bold tracking-tight text-[#2E2219]">
              Alexander Sterling
            </h3>
            <p className="text-[#997E67] text-xs uppercase tracking-[0.2em] font-semibold">
              Fine Art & Portrait Photography
            </p>
            <p className="text-sm text-[#5E4D3E] leading-relaxed pt-2">
              Creating timeless visual stories with elegance, emotion, and subtle artistic nuance. Available worldwide for bespoke assignments.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#997E67]">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="text-[#5E4D3E] hover:text-[#997E67] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-[#5E4D3E] hover:text-[#997E67] transition-colors">
                  Weddings & Stories
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-[#5E4D3E] hover:text-[#997E67] transition-colors">
                  Portfolio Gallery
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-[#5E4D3E] hover:text-[#997E67] transition-colors">
                  Services & Packages
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-[#5E4D3E] hover:text-[#997E67] transition-colors">
                  About Alexander
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#997E67]">
              Specialties
            </h4>
            <ul className="space-y-2.5 text-sm text-[#5E4D3E]">
              <li>Wedding Ceremonies & Receptions</li>
              <li>Editorial & Fine Art Portraits</li>
              <li>Destination Couples & Elopements</li>
              <li>Events & Brand Storytelling</li>
              <li>Architectural & Villa Photography</li>
            </ul>
          </div>

          {/* Contact & Booking */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#997E67]">
              Direct Inquiry
            </h4>
            <div className="space-y-2.5 text-sm text-[#5E4D3E]">
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#997E67]" />
                <a href="mailto:hello@alexandersterling.com" className="hover:text-[#997E67]">
                  hello@alexandersterling.com
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#997E67]" />
                <a href="tel:+15551234567" className="hover:text-[#997E67]">
                  +1 (555) 123-4567
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#997E67]" />
                <span>New York & Worldwide</span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/contact"
                className="btn-gold text-xs py-2 px-5 inline-flex"
              >
                Book a Session <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-[#CCBEB1]/70 flex flex-col sm:flex-row items-center justify-between text-xs text-[#82705F] gap-4">
          <p>© {currentYear} Alexander Sterling Photography. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/contact" className="hover:text-[#997E67]">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-[#997E67]">
              Terms of Engagement
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;