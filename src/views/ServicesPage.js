'use client';

import Link from 'next/link';
import { Camera, Users, Clock, Award, CheckCircle, ArrowRight } from 'lucide-react';

function ServicesPage() {
  const packages = [
    {
      title: 'Full Day Poruwa & Reception Experience',
      tagline: 'Comprehensive documentation from dawn Poruwa customs to late night celebration.',
      price: 'LKR 380,000',
      duration: 'Up to 10 Hours',
      features: [
        'Two dedicated professional photographers',
        'Pre-wedding consultation & Auspicious Poruwa timeline planning',
        '650+ hand-retouched high resolution digital photographs',
        'Private online gallery with full high-res download rights',
        'Complimentary pre-shoot session in Galle Fort or Colombo',
        'Signature heirloom preview gallery delivered within 48 hours',
      ],
      recommended: true,
    },
    {
      title: 'Intimate Ceremony & Homecoming',
      tagline: 'For heartfelt registration ceremonies, homecomings, and micro-weddings.',
      price: 'LKR 220,000',
      duration: 'Up to 5 Hours',
      features: [
        'Single master photographer coverage',
        'Location scouting & natural light direction',
        '300+ high resolution edited photographs',
        'Private online gallery with full sharing access',
        'Sneak-peek highlight gallery delivered within 72 hours',
      ],
      recommended: false,
    },
    {
      title: 'Destination Couple & Portrait Session',
      tagline: 'Pre-shoots in Ella, Mirissa, Nuwara Eliya tea hills, or Galle Fort.',
      price: 'LKR 95,000',
      duration: 'Up to 3 Hours',
      features: [
        'Multiple outfit & location changes within session time',
        'Creative mood-board direction & candid posing guidance',
        '45 signature editorial finished photographs',
        'Online gallery selection and instant high-res downloads',
      ],
      recommended: false,
    },
  ];

  return (
    <div className="bg-[#F2EDE7] text-[#2E2219]">
      {/* Header */}
      <section className="py-20 bg-[#E7DDD3] border-b border-[#CCBEB1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#997E67] text-xs uppercase tracking-[0.22em] font-semibold mb-3">
            Investment & Packages
          </p>
          <h1 className="heading-serif text-4xl lg:text-6xl font-bold text-[#2E2219] mb-4">
            Bespoke Services
          </h1>
          <div className="gold-line" />
          <p className="text-[#5E4D3E] text-base lg:text-lg max-w-2xl mx-auto font-light">
            Every session is treated as an original work of art tailored to your individual vision.
          </p>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className={`relative bg-[#F8F2EB] border rounded-[2px] p-8 flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                pkg.recommended
                  ? 'border-[#997E67] shadow-lg ring-1 ring-[#997E67]'
                  : 'border-[#CCBEB1]'
              }`}
            >
              {pkg.recommended && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#997E67] text-white text-[0.65rem] uppercase tracking-[0.2em] px-4 py-1 font-semibold rounded-full shadow-sm">
                  Most Preferred
                </span>
              )}

              <div>
                <h3 className="heading-serif text-2xl font-bold text-[#2E2219] mb-2">
                  {pkg.title}
                </h3>
                <p className="text-xs text-[#5E4D3E] leading-relaxed mb-6">
                  {pkg.tagline}
                </p>

                <div className="py-6 border-y border-[#CCBEB1]/50 mb-6 flex items-baseline justify-between">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-[#82705F] block">Starting at</span>
                    <span className="heading-serif text-3xl lg:text-4xl font-bold text-[#997E67]">
                      {pkg.price}
                    </span>
                  </div>
                  <span className="text-xs text-[#5E4D3E] font-medium bg-[#E7DDD3] px-3 py-1 rounded-sm">
                    {pkg.duration}
                  </span>
                </div>

                <ul className="space-y-3 mb-8 text-sm text-[#5E4D3E]">
                  {pkg.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-[#997E67] flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <Link
                  href="/contact"
                  className={`w-full text-center text-xs py-3 px-6 ${
                    pkg.recommended ? 'btn-gold' : 'btn-outline-gold'
                  }`}
                >
                  Reserve This Experience
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ or Custom Commissions */}
      <section className="bg-[#E7DDD3] border-t border-[#CCBEB1] py-20 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-2xl mx-auto space-y-4">
          <p className="text-[#997E67] text-xs uppercase tracking-[0.2em] font-semibold">
            Custom Projects
          </p>
          <h2 className="heading-serif text-3xl lg:text-4xl font-bold text-[#2E2219]">
            Have a Destination or Unique Brief?
          </h2>
          <p className="text-[#5E4D3E] text-sm lg:text-base leading-relaxed">
            I craft custom coverage for multi-day weddings across Europe, Americas, and Asia, as well as commercial assignments and luxury real estate retreats.
          </p>
          <div className="pt-4">
            <Link href="/contact" className="btn-gold">
              Request a Custom Proposal
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ServicesPage;