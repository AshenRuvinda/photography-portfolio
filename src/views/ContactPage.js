'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Calendar, Clock, CheckCircle2 } from 'lucide-react';

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Wedding Photography',
    date: '',
    location: '',
    message: '',
  });

  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: 'Wedding Photography',
        date: '',
        location: '',
        message: '',
      });
    }, 1000);
  };

  return (
    <div className="bg-[#F2EDE7] text-[#2E2219]">
      {/* Header */}
      <section className="py-20 bg-[#E7DDD3] border-b border-[#CCBEB1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#997E67] text-xs uppercase tracking-[0.22em] font-semibold mb-3">
            Inquiries & Booking
          </p>
          <h1 className="heading-serif text-4xl lg:text-6xl font-bold text-[#2E2219] mb-4">
            Connect With Alexander
          </h1>
          <div className="gold-line" />
          <p className="text-[#5E4D3E] text-base lg:text-lg max-w-2xl mx-auto font-light">
            Share the details of your upcoming wedding, portrait commission, or special project.
          </p>
        </div>
      </section>

      {/* Main Form & Info */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Direct Details Sidebar */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h2 className="heading-serif text-3xl font-bold text-[#2E2219] mb-3">
                Let's Discuss Your Vision
              </h2>
              <div className="gold-line-left mb-4" />
              <p className="text-sm text-[#5E4D3E] leading-relaxed">
                I limit my calendar to a select number of weddings and commissions each year to ensure uncompromising dedication and artistry for each client.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5 p-4 bg-[#F8F2EB] border border-[#CCBEB1] rounded-[2px]">
                <Mail className="w-5 h-5 text-[#997E67] mt-0.5" />
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-[#997E67]">
                    Email Inquiries
                  </h4>
                  <p className="text-sm text-[#2E2219] font-medium mt-0.5">
                    hello@alexandersterling.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 bg-[#F8F2EB] border border-[#CCBEB1] rounded-[2px]">
                <Phone className="w-5 h-5 text-[#997E67] mt-0.5" />
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-[#997E67]">
                    Phone & WhatsApp
                  </h4>
                  <p className="text-sm text-[#2E2219] font-medium mt-0.5">
                    +1 (555) 123-4567
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 bg-[#F8F2EB] border border-[#CCBEB1] rounded-[2px]">
                <MapPin className="w-5 h-5 text-[#997E67] mt-0.5" />
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-[#997E67]">
                    Location & Travel
                  </h4>
                  <p className="text-sm text-[#2E2219] font-medium mt-0.5">
                    Studio in SoHo, New York. Regular travel across Europe, Sri Lanka, & Asia.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-[#E7DDD3] border border-[#CCBEB1] rounded-[2px]">
              <h4 className="heading-serif text-lg font-bold text-[#2E2219] mb-2">
                Response Time
              </h4>
              <p className="text-xs text-[#5E4D3E] leading-relaxed">
                All inquiries are answered personally within 24 to 48 hours. If inquiring about a wedding date, please include the ceremony venue or destination.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7 bg-[#F8F2EB] border border-[#CCBEB1] rounded-[2px] p-8 lg:p-12 shadow-lg">
            {status === 'success' ? (
              <div className="text-center py-12 space-y-4 animate-fadeIn">
                <CheckCircle2 className="w-12 h-12 text-[#997E67] mx-auto" />
                <h3 className="heading-serif text-3xl font-bold text-[#2E2219]">
                  Inquiry Received
                </h3>
                <p className="text-sm text-[#5E4D3E] max-w-md mx-auto">
                  Thank you for reaching out. Alexander will review your date and details and get back to you shortly.
                </p>
                <button
                  onClick={() => setStatus('')}
                  className="btn-gold text-xs py-2 px-6 mt-4"
                >
                  Send Another Note
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#2E2219] mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Eleanor Vance"
                      className="w-full px-4 py-3 bg-[#F2EDE7] border border-[#CCBEB1] rounded-[2px] text-sm text-[#2E2219] focus:outline-none focus:border-[#997E67] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#2E2219] mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. eleanor@example.com"
                      className="w-full px-4 py-3 bg-[#F2EDE7] border border-[#CCBEB1] rounded-[2px] text-sm text-[#2E2219] focus:outline-none focus:border-[#997E67] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#2E2219] mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-4 py-3 bg-[#F2EDE7] border border-[#CCBEB1] rounded-[2px] text-sm text-[#2E2219] focus:outline-none focus:border-[#997E67] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#2E2219] mb-2">
                      Photography Service
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 bg-[#F2EDE7] border border-[#CCBEB1] rounded-[2px] text-sm text-[#2E2219] focus:outline-none focus:border-[#997E67] transition-colors"
                    >
                      <option value="Wedding Photography">Wedding Photography</option>
                      <option value="Intimate Elopement">Intimate Elopement</option>
                      <option value="Editorial & Portrait">Editorial & Portrait</option>
                      <option value="Events & Celebrations">Events & Celebrations</option>
                      <option value="Villa & Real Estate">Villa & Real Estate</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#2E2219] mb-2">
                      Target Date
                    </label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-4 py-3 bg-[#F2EDE7] border border-[#CCBEB1] rounded-[2px] text-sm text-[#2E2219] focus:outline-none focus:border-[#997E67] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#2E2219] mb-2">
                      Event Location / City
                    </label>
                    <input
                      type="text"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      placeholder="e.g. Lake Como, Italy"
                      className="w-full px-4 py-3 bg-[#F2EDE7] border border-[#CCBEB1] rounded-[2px] text-sm text-[#2E2219] focus:outline-none focus:border-[#997E67] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#2E2219] mb-2">
                    Tell Me About Your Story & Vision *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about yourselves, the style you're envisioning, and any details you'd love to share..."
                    className="w-full px-4 py-3 bg-[#F2EDE7] border border-[#CCBEB1] rounded-[2px] text-sm text-[#2E2219] focus:outline-none focus:border-[#997E67] transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-gold w-full text-center text-xs py-3.5 tracking-[0.2em]"
                >
                  {isSubmitting ? 'Sending Details...' : 'Send Inquiry'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;