'use client';

import { useEffect, useState } from 'react';
import { 
  Camera, 
  Aperture, 
  Award, 
  Clock, 
  Eye, 
  Heart, 
  MapPin, 
  Palette,
  Users,
  Star,
  BookOpen,
  Coffee
} from 'lucide-react';

function AboutPage() {
  const [siteData] = useState({
    name: 'Alexander Sterling',
    profileImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    bio: "With over 15 years of experience in fine art and portrait photography, I've dedicated my career to capturing the essence of human emotion and the beauty of fleeting moments. My journey began in the darkrooms of New York's art district, where I learned the fundamentals of composition, light, and storytelling through imagery.",
    style: "My photography style is rooted in classical portraiture with a contemporary twist. I believe in the power of natural light and authentic emotions, preferring to capture genuine moments rather than posed perfection. Each session is a collaborative journey between photographer and subject, resulting in timeless images that tell your unique story.",
    mission: "To create timeless photographs that transcend trends and speak to the soul. I believe that every person has a story worth telling, and my role is to help bring that story to light through thoughtful composition and genuine connection."
  });

  const [activeTab, setActiveTab] = useState('story');

  const achievements = [
    { 
      icon: Award, 
      title: 'International Photography Awards', 
      description: 'Winner of Portrait Photographer of the Year 2023',
      year: '2023'
    },
    { 
      icon: Star, 
      title: 'Wedding Photography Excellence', 
      description: 'Featured in top 10 wedding photographers nationwide',
      year: '2022'
    },
    { 
      icon: BookOpen, 
      title: 'Published Artist', 
      description: 'Work featured in Aperture Magazine and Vogue',
      year: '2021'
    },
    { 
      icon: Users, 
      title: 'Master Workshop Leader', 
      description: 'Teaching advanced portrait techniques internationally',
      year: '2020'
    }
  ];

  const philosophyPoints = [
    {
      icon: Eye,
      title: 'Vision',
      description: 'Every photograph should capture not just how someone looks, but who they truly are.'
    },
    {
      icon: Heart,
      title: 'Connection',
      description: 'The best portraits emerge from genuine connection between photographer and subject.'
    },
    {
      icon: Palette,
      title: 'Artistry',
      description: 'Technical excellence combined with artistic vision creates timeless imagery.'
    },
    {
      icon: Clock,
      title: 'Patience',
      description: 'Great photography requires patience to wait for the perfect moment to unfold.'
    }
  ];

  const stats = [
    { number: '500+', label: 'Portraits Created', icon: Camera },
    { number: '150+', label: 'Weddings Captured', icon: Heart },
    { number: '50+', label: 'Awards Received', icon: Award },
    { number: '15+', label: 'Years Experience', icon: Clock }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 to-stone-100">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-stone-800 to-stone-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute inset-0" 
            style={{
              backgroundImage: 'radial-gradient(circle at 30% 70%, rgba(245,245,220,0.3) 1px, transparent 1px)',
              backgroundSize: '50px 50px'
            }} 
          />
        </div>
        
        <div className="relative z-10 container mx-auto px-6 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-20 bg-gradient-to-r from-transparent via-amber-300 to-transparent" />
              <Aperture className="w-8 h-8 text-amber-300" />
              <div className="h-px w-20 bg-gradient-to-r from-amber-300 via-transparent to-transparent" />
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light mb-6 tracking-wide">
              About <span className="font-thin text-amber-200">Alexander</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-stone-300 font-light max-w-3xl mx-auto leading-relaxed">
              A passionate visual storyteller dedicated to capturing the essence of human connection 
              through the timeless art of photography.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-20">
        {/* Profile Section */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Profile Image */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-200/20 to-stone-300/20 rounded-sm transform rotate-3 group-hover:rotate-6 transition-transform duration-500" />
              <div className="absolute inset-4 border border-stone-300/50 rounded-sm transform -rotate-1 group-hover:-rotate-2 transition-transform duration-500" />
              <img
                src={siteData.profileImage}
                alt={`Portrait of ${siteData.name}`}
                className="relative w-full aspect-[4/5] object-cover rounded-sm shadow-2xl filter grayscale hover:grayscale-0 transition-all duration-700"
              />
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 border-l-2 border-t-2 border-amber-300/60" />
              <div className="absolute -bottom-4 -right-4 w-8 h-8 border-r-2 border-b-2 border-amber-300/60" />
            </div>

            {/* Content */}
            <div className="space-y-8">
              {/* Tab Navigation */}
              <div className="flex gap-2 border-b border-stone-200">
                {[
                  { key: 'story', label: 'My Story', icon: BookOpen },
                  { key: 'philosophy', label: 'Philosophy', icon: Eye },
                  { key: 'approach', label: 'Approach', icon: Palette }
                ].map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    className={`flex items-center gap-2 px-6 py-3 transition-all duration-300 ${
                      activeTab === tab.key
                        ? 'text-amber-700 border-b-2 border-amber-300 bg-amber-50/50'
                        : 'text-stone-600 hover:text-amber-600 hover:bg-stone-50'
                    }`}
                  >
                    <tab.icon className="w-4 h-4" />
                    <span className="font-light tracking-wide">{tab.label}</span>
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="min-h-[300px]">
                {activeTab === 'story' && (
                  <div className="space-y-6 animate-in fade-in duration-500">
                    <h2 className="text-3xl font-light text-stone-800 tracking-wide">
                      The Journey Behind the Lens
                    </h2>
                    <p className="text-lg text-stone-600 font-light leading-relaxed">
                      {siteData.bio}
                    </p>
                    <p className="text-lg text-stone-600 font-light leading-relaxed">
                      What started as a childhood fascination with my grandfather's vintage camera 
                      has evolved into a lifelong passion for preserving memories and celebrating 
                      the human experience. Each photograph I create is a testament to the belief 
                      that every moment, no matter how ordinary it may seem, holds extraordinary beauty.
                    </p>
                    
                    <div className="flex items-center gap-4 pt-4">
                      <MapPin className="w-5 h-5 text-amber-600" />
                      <span className="text-stone-600 font-light">Based in New York City</span>
                    </div>
                  </div>
                )}

                {activeTab === 'philosophy' && (
                  <div className="space-y-8 animate-in fade-in duration-500">
                    <h2 className="text-3xl font-light text-stone-800 tracking-wide">
                      Photography Philosophy
                    </h2>
                    <p className="text-lg text-stone-600 font-light leading-relaxed">
                      {siteData.mission}
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {philosophyPoints.map((point, index) => (
                        <div key={index} className="group">
                          <div className="flex items-start gap-4 p-6 bg-white/50 rounded-sm border border-stone-200 hover:border-amber-200 transition-all duration-300">
                            <div className="p-2 bg-amber-100 rounded-sm group-hover:bg-amber-200 transition-colors duration-300">
                              <point.icon className="w-5 h-5 text-amber-700" />
                            </div>
                            <div>
                              <h3 className="text-lg font-light text-stone-800 mb-2">{point.title}</h3>
                              <p className="text-stone-600 font-light leading-relaxed text-sm">{point.description}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'approach' && (
                  <div className="space-y-6 animate-in fade-in duration-500">
                    <h2 className="text-3xl font-light text-stone-800 tracking-wide">
                      My Creative Approach
                    </h2>
                    <p className="text-lg text-stone-600 font-light leading-relaxed">
                      {siteData.style}
                    </p>
                    <p className="text-lg text-stone-600 font-light leading-relaxed">
                      I work exclusively with natural light whenever possible, believing that 
                      artificial lighting, while technically proficient, cannot match the 
                      emotional depth and authenticity that natural light provides. My sessions 
                      are relaxed and conversational, allowing genuine personalities to shine through.
                    </p>
                    
                    <div className="bg-amber-50 border-l-4 border-amber-300 p-6 rounded-sm">
                      <div className="flex items-start gap-3">
                        <Coffee className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="text-lg font-light text-stone-800 mb-2">Session Experience</h3>
                          <p className="text-stone-600 font-light">
                            Every session begins with coffee and conversation. I believe that 
                            understanding my subjects' stories, dreams, and personalities is 
                            essential to creating photographs that truly represent who they are.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-stone-800 mb-6 tracking-wide">
              A Career in Numbers
            </h2>
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-amber-300 to-transparent mx-auto" />
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center group"
              >
                <div className="relative inline-flex items-center justify-center w-20 h-20 mb-6 
                  border border-stone-300 group-hover:border-amber-300 rounded-sm
                  transition-all duration-500 group-hover:scale-110 bg-white/70 backdrop-blur-sm">
                  <stat.icon className="w-8 h-8 text-stone-600 group-hover:text-amber-600 
                    transition-colors duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-50/0 to-amber-50/50 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-sm" />
                </div>
                
                <h3 className="text-3xl md:text-4xl font-light text-stone-800 mb-2">
                  {stat.number}
                </h3>
                
                <p className="text-stone-600 font-light tracking-wide text-sm uppercase">
                  {stat.label}
                </p>
                
                <div className="mt-3 h-px w-8 bg-gradient-to-r from-transparent via-stone-300 
                  to-transparent mx-auto group-hover:via-amber-300 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-stone-800 mb-6 tracking-wide">
              Recognition & Achievements
            </h2>
            <p className="text-xl text-stone-600 font-light max-w-3xl mx-auto">
              Throughout my career, I've been honored to receive recognition from 
              prestigious photography organizations and publications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="group relative bg-white p-8 rounded-sm border border-stone-200 
                  hover:border-amber-200 hover:shadow-xl transition-all duration-500"
              >
                <div className="flex items-start gap-6">
                  <div className="p-4 bg-amber-100 group-hover:bg-amber-200 rounded-sm 
                    transition-colors duration-300">
                    <achievement.icon className="w-8 h-8 text-amber-700" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-light text-stone-800 group-hover:text-amber-700 
                        transition-colors duration-300">
                        {achievement.title}
                      </h3>
                      <span className="text-sm text-stone-500 font-light px-3 py-1 
                        bg-stone-100 rounded-full">
                        {achievement.year}
                      </span>
                    </div>
                    
                    <p className="text-stone-600 font-light leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
                
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-50/0 to-amber-50/20 
                  rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;