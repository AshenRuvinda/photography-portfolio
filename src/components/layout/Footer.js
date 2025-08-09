import { useEffect, useState } from 'react';
import { 
  Aperture, 
  Mail, 
  Phone, 
  MapPin, 
  Instagram, 
  Facebook, 
  Twitter, 
  Camera, 
  Award,
  Clock,
  Heart
} from 'lucide-react';

function Footer() {
  const [siteData] = useState({
    name: 'Alexander Sterling',
    email: 'hello@alexandersterling.com',
    phone: '+1 (555) 123-4567',
    address: '123 Art District, New York, NY 10001',
    socialLinks: {
      instagram: 'https://instagram.com/alexandersterling',
      facebook: 'https://facebook.com/alexandersterling',
      twitter: 'https://twitter.com/alexandersterling'
    }
  });

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'About', href: '/about' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Services', href: '/services' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Testimonials', href: '/testimonials' },
    { label: 'Contact', href: '/contact' }
  ];

  const services = [
    { label: 'Portrait Sessions', href: '/services/portraits' },
    { label: 'Wedding Photography', href: '/services/weddings' },
    { label: 'Fine Art Prints', href: '/services/prints' },
    { label: 'Commercial Work', href: '/services/commercial' }
  ];

  const socialLinks = [
    { 
      name: 'Instagram', 
      icon: Instagram, 
      href: siteData.socialLinks?.instagram,
      color: 'hover:text-pink-400'
    },
    { 
      name: 'Facebook', 
      icon: Facebook, 
      href: siteData.socialLinks?.facebook,
      color: 'hover:text-blue-400'
    },
    { 
      name: 'Twitter', 
      icon: Twitter, 
      href: siteData.socialLinks?.twitter,
      color: 'hover:text-sky-400'
    }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 text-stone-100 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: 'radial-gradient(circle at 25% 75%, rgba(245,245,220,0.3) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }} 
        />
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 border border-amber-300/30 rounded-sm">
                <Aperture className="w-8 h-8 text-amber-300" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-light tracking-wide text-white">
                  {siteData.name?.split(' ')[0] || 'Alexander'}
                </span>
                <span className="text-lg font-thin tracking-widest uppercase text-amber-200">
                  {siteData.name?.split(' ')[1] || 'Sterling'}
                </span>
              </div>
            </div>

            <p className="text-stone-300 font-light leading-relaxed">
              Capturing life's most precious moments through the lens of artistic vision and 
              technical excellence. Every photograph tells a story worth preserving.
            </p>

            <div className="flex items-center gap-3 text-stone-400">
              <Award className="w-4 h-4" />
              <span className="text-sm font-light tracking-wide">Award-Winning Photography</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-light tracking-wider text-amber-200 uppercase relative">
              Navigation
              <div className="absolute bottom-0 left-0 w-12 h-px bg-gradient-to-r from-amber-300 to-transparent mt-2" />
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-2 text-stone-300 hover:text-amber-300 
                      transition-all duration-300 hover:translate-x-1"
                  >
                    <div className="w-1 h-1 bg-stone-500 rounded-full group-hover:bg-amber-300 
                      transition-colors duration-300" />
                    <span className="font-light tracking-wide">{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-lg font-light tracking-wider text-amber-200 uppercase relative">
              Services
              <div className="absolute bottom-0 left-0 w-12 h-px bg-gradient-to-r from-amber-300 to-transparent mt-2" />
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="group flex items-center gap-2 text-stone-300 hover:text-amber-300 
                      transition-all duration-300 hover:translate-x-1"
                  >
                    <Camera className="w-3 h-3 text-stone-500 group-hover:text-amber-300 
                      transition-colors duration-300" />
                    <span className="font-light tracking-wide">{service.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-light tracking-wider text-amber-200 uppercase relative">
              Contact
              <div className="absolute bottom-0 left-0 w-12 h-px bg-gradient-to-r from-amber-300 to-transparent mt-2" />
            </h3>
            
            <div className="space-y-4">
              <a 
                href={`mailto:${siteData.email}`}
                className="group flex items-start gap-3 text-stone-300 hover:text-amber-300 
                  transition-all duration-300"
              >
                <Mail className="w-4 h-4 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <span className="font-light">{siteData.email}</span>
              </a>
              
              <a 
                href={`tel:${siteData.phone}`}
                className="group flex items-start gap-3 text-stone-300 hover:text-amber-300 
                  transition-all duration-300"
              >
                <Phone className="w-4 h-4 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <span className="font-light">{siteData.phone}</span>
              </a>
              
              <div className="flex items-start gap-3 text-stone-300">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span className="font-light">{siteData.address}</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="text-sm font-light tracking-wider text-stone-400 uppercase">
                Follow My Work
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`group p-3 border border-stone-700 hover:border-amber-300/50 rounded-sm 
                      transition-all duration-300 hover:scale-110 hover:bg-amber-50/5 ${social.color}`}
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Divider */}
      <div className="relative z-10">
        <div className="h-px bg-gradient-to-r from-transparent via-stone-600 to-transparent" />
      </div>

      {/* Bottom Section */}
      <div className="relative z-10 container mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
          
          {/* Copyright */}
          <div className="flex items-center gap-4 text-stone-400">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span className="font-light text-sm">
                &copy; {currentYear} {siteData.name || 'Alexander Sterling'}. All rights reserved.
              </span>
            </div>
          </div>

          {/* Additional Links */}
          <div className="flex items-center gap-6 text-stone-400">
            <a 
              href="/privacy" 
              className="text-sm font-light tracking-wide hover:text-amber-300 transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a 
              href="/terms" 
              className="text-sm font-light tracking-wide hover:text-amber-300 transition-colors duration-300"
            >
              Terms of Service
            </a>
          </div>

          {/* Made with love */}
          <div className="flex items-center gap-2 text-stone-500">
            <span className="text-sm font-light">Crafted with</span>
            <Heart className="w-4 h-4 text-amber-400" />
            <span className="text-sm font-light">in New York</span>
          </div>
        </div>
      </div>

      {/* Elegant Corner Decorations */}
      <div className="absolute bottom-0 left-0 w-32 h-32 border-l border-b border-stone-700/50 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r border-b border-stone-700/50 pointer-events-none" />
      
      {/* Subtle Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
    </footer>
  );
}

export default Footer;