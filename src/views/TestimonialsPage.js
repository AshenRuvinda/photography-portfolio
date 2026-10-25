'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Star, Quote, ArrowLeft, ArrowRight } from 'lucide-react';

function TestimonialsPage() {
  const testimonials = [
    {
      id: 1,
      quote: "Working with Kasun was the best decision we made for our wedding. He preserved every sacred nuance of our Poruwa ceremony with such elegance, and our gallery looks like a luxury editorial magazine.",
      author: "Kavindi & Dinuka Jayawardena",
      event: "Poruwa Ceremony, Cinnamon Grand Colombo",
      date: "September 2024",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
    },
    {
      id: 2,
      quote: "Kasun has an uncanny gift for making you forget the camera exists. During our pre-shoot in Galle Fort, we were completely relaxed, and the photos feel deeply intimate, genuine, and timeless.",
      author: "Sachini & Roshan Silva",
      event: "Destination Pre-Shoot, Galle Fort",
      date: "July 2024",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80"
    },
    {
      id: 3,
      quote: "From our first consultation to the final heirloom gallery delivery, Kasun's dedication and artistic eye were extraordinary. Our parents and family still rave about how respectful and attentive he was.",
      author: "Dulani & Malinda Wickramasinghe",
      event: "Traditional Kandyan Wedding, Kandy",
      date: "May 2024",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
    },
    {
      id: 4,
      quote: "Every single photograph captures the light and atmosphere of the southern coast in such a poetic way. Truly an artist of the highest caliber in Sri Lanka.",
      author: "Hiruni & Chamath Fernando",
      event: "Coastal Sunset Wedding, Bentota",
      date: "November 2023",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80"
    }
  ];

  return (
    <div className="bg-[#F2EDE7] text-[#2E2219]">
      {/* Header */}
      <section className="py-20 bg-[#E7DDD3] border-b border-[#CCBEB1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#997E67] text-xs uppercase tracking-[0.22em] font-semibold mb-3">
            Client Words
          </p>
          <h1 className="heading-serif text-4xl lg:text-6xl font-bold text-[#2E2219] mb-4">
            Treasured Stories
          </h1>
          <div className="gold-line" />
          <p className="text-[#5E4D3E] text-base lg:text-lg max-w-2xl mx-auto font-light">
            Reflections from couples and clients whose milestones were captured forever.
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={t.id}
              className="bg-[#F8F2EB] border border-[#CCBEB1] rounded-[2px] p-8 lg:p-10 shadow-sm hover:shadow-xl hover:border-[#997E67] transition-all duration-500 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 text-[#997E67] mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-[#997E67]/40 mb-4" />
                <p className="heading-serif italic text-base lg:text-lg text-[#2E2219] leading-relaxed mb-6 font-normal">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-6 border-t border-[#CCBEB1]/50 flex items-center gap-4">
                <img
                  src={t.image}
                  alt={t.author}
                  className="w-12 h-12 rounded-full object-cover border border-[#997E67]/50"
                />
                <div>
                  <h4 className="heading-serif text-base font-bold text-[#2E2219]">
                    {t.author}
                  </h4>
                  <p className="text-xs text-[#82705F]">
                    {t.event} • {t.date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 p-12 bg-[#E7DDD3] border border-[#CCBEB1] rounded-[2px] text-center max-w-3xl mx-auto space-y-4">
          <h3 className="heading-serif text-3xl font-bold text-[#2E2219]">
            Ready to Begin Your Visual Journey?
          </h3>
          <p className="text-sm text-[#5E4D3E]">
            Contact Alexander to check date availability and schedule your initial consultation.
          </p>
          <div className="pt-2">
            <Link href="/contact" className="btn-gold">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TestimonialsPage;