'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Award, Check, MapPin, Eye, Camera, Heart, BookOpen } from 'lucide-react';

function AboutPage() {
  const [activeTab, setActiveTab] = useState('story');

  const stats = [
    { number: '15+', label: 'Years of Artistry' },
    { number: '500+', label: 'Weddings & Sessions' },
    { number: '28', label: 'Global Destinations' },
    { number: '14', label: 'Industry Honors' },
  ];

  return (
    <div className="bg-[#F2EDE7] text-[#2E2219]">
      {/* Header Banner */}
      <section className="relative py-20 bg-[#E7DDD3] border-b border-[#CCBEB1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#997E67] text-xs uppercase tracking-[0.22em] font-semibold mb-3">
            About The Artist
          </p>
          <h1 className="heading-serif text-4xl lg:text-6xl font-bold text-[#2E2219] mb-4">
            Alexander Sterling
          </h1>
          <div className="gold-line" />
          <p className="text-[#5E4D3E] text-base lg:text-lg max-w-2xl mx-auto font-light">
            Blending timeless editorial aesthetics with intimate, spontaneous storytelling.
          </p>
        </div>
      </section>

      {/* Main Narrative */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="relative">
            <div className="aspect-[4/5] rounded-[2px] overflow-hidden border border-[#CCBEB1] shadow-2xl bg-[#E7DDD3]">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
                alt="Alexander Sterling Portrait"
                className="w-full h-full object-cover filter contrast-[1.02]"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-[#F8F2EB] border border-[#CCBEB1] p-6 shadow-xl hidden sm:block max-w-xs">
              <p className="heading-serif text-lg font-bold text-[#2E2219]">"Every moment holds timeless beauty."</p>
              <p className="text-xs text-[#997E67] uppercase tracking-wider mt-1">— Alexander S.</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex gap-4 border-b border-[#CCBEB1]">
              <button
                onClick={() => setActiveTab('story')}
                className={`pb-3 text-xs uppercase tracking-[0.16em] font-medium transition-colors ${
                  activeTab === 'story'
                    ? 'text-[#997E67] border-b-2 border-[#997E67] font-semibold'
                    : 'text-[#5E4D3E] hover:text-[#997E67]'
                }`}
              >
                My Journey
              </button>
              <button
                onClick={() => setActiveTab('philosophy')}
                className={`pb-3 text-xs uppercase tracking-[0.16em] font-medium transition-colors ${
                  activeTab === 'philosophy'
                    ? 'text-[#997E67] border-b-2 border-[#997E67] font-semibold'
                    : 'text-[#5E4D3E] hover:text-[#997E67]'
                }`}
              >
                Artistic Philosophy
              </button>
              <button
                onClick={() => setActiveTab('approach')}
                className={`pb-3 text-xs uppercase tracking-[0.16em] font-medium transition-colors ${
                  activeTab === 'approach'
                    ? 'text-[#997E67] border-b-2 border-[#997E67] font-semibold'
                    : 'text-[#5E4D3E] hover:text-[#997E67]'
                }`}
              >
                Session Approach
              </button>
            </div>

            {activeTab === 'story' && (
              <div className="space-y-4 animate-fadeInUp">
                <h3 className="heading-serif text-3xl font-bold text-[#2E2219]">
                  Fifteen Years of Passion & Visual Storytelling
                </h3>
                <p className="text-[#5E4D3E] leading-relaxed text-sm lg:text-base">
                  What started as a childhood fascination with darkroom prints evolved into an international career photographing extraordinary couples, luxury properties, and milestone celebrations.
                </p>
                <p className="text-[#5E4D3E] leading-relaxed text-sm lg:text-base">
                  Based between New York and destination wedding venues worldwide, my mission is to capture authentic romance with artistic composition and luminous natural tones.
                </p>
                <div className="pt-2 flex items-center gap-2 text-sm text-[#997E67]">
                  <MapPin className="w-4 h-4" />
                  <span>Available for assignments worldwide</span>
                </div>
              </div>
            )}

            {activeTab === 'philosophy' && (
              <div className="space-y-4 animate-fadeInUp">
                <h3 className="heading-serif text-3xl font-bold text-[#2E2219]">
                  Honesty Over Posed Perfection
                </h3>
                <p className="text-[#5E4D3E] leading-relaxed text-sm lg:text-base">
                  I believe the most meaningful photographs are not rigidly staged, but felt. Unrehearsed laughter, tender glances, and spontaneous joy create images that age gracefully over decades.
                </p>
                <p className="text-[#5E4D3E] leading-relaxed text-sm lg:text-base">
                  Light is my medium. Using soft daylight, subtle shadows, and organic textures, every gallery looks like an editorial publication tailored to your story.
                </p>
              </div>
            )}

            {activeTab === 'approach' && (
              <div className="space-y-4 animate-fadeInUp">
                <h3 className="heading-serif text-3xl font-bold text-[#2E2219]">
                  Relaxed, Collaborative, and Unobtrusive
                </h3>
                <p className="text-[#5E4D3E] leading-relaxed text-sm lg:text-base">
                  Many couples tell me they felt nervous in front of cameras until our session began. My gentle direction and calming presence allow you to be entirely yourselves.
                </p>
                <p className="text-[#5E4D3E] leading-relaxed text-sm lg:text-base">
                  During ceremonies and receptions, I work unobtrusively to document raw emotion while you immerse yourselves fully in the moment.
                </p>
              </div>
            )}

            <div className="pt-4">
              <Link href="/contact" className="btn-gold">
                Inquire For Your Date
              </Link>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-16 px-8 bg-[#F8F2EB] border border-[#CCBEB1] rounded-[2px] text-center">
          {stats.map((stat, i) => (
            <div key={i} className="space-y-1">
              <div className="heading-serif text-3xl lg:text-4xl font-bold text-[#997E67]">
                {stat.number}
              </div>
              <div className="text-xs uppercase tracking-wider text-[#5E4D3E] font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default AboutPage;