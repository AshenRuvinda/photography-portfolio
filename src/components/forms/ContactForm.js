import { useState, useRef, useEffect } from 'react';
import { Send, User, Mail, MessageSquare, CheckCircle, AlertCircle, MapPin, Phone, Clock, Camera, Award, Aperture } from 'lucide-react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [focusedField, setFocusedField] = useState('');
  const [errors, setErrors] = useState({});
  const [isVisible, setIsVisible] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (formRef.current) {
      observer.observe(formRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const validateField = (name, value) => {
    const newErrors = { ...errors };

    switch (name) {
      case 'name':
        if (!value.trim()) {
          newErrors.name = 'Name is required';
        } else if (value.trim().length < 2) {
          newErrors.name = 'Name must be at least 2 characters';
        } else {
          delete newErrors.name;
        }
        break;
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value) {
          newErrors.email = 'Email is required';
        } else if (!emailRegex.test(value)) {
          newErrors.email = 'Please enter a valid email';
        } else {
          delete newErrors.email;
        }
        break;
      case 'message':
        if (!value.trim()) {
          newErrors.message = 'Message is required';
        } else if (value.trim().length < 10) {
          newErrors.message = 'Message must be at least 10 characters';
        } else {
          delete newErrors.message;
        }
        break;
      default:
        break;
    }

    setErrors(newErrors);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateField(name, value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus('');

    // Validate all fields
    Object.keys(formData).forEach(key => {
      if (key !== 'subject') validateField(key, formData[key]);
    });

    if (Object.keys(errors).length > 0) {
      setIsLoading(false);
      return;
    }

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  const inputClasses = (fieldName) => `
    w-full px-4 py-4 pl-12 bg-white/80 backdrop-blur-sm border border-stone-200 
    rounded-sm transition-all duration-300 focus:outline-none focus:ring-0 
    font-light text-stone-700 placeholder:text-stone-400
    ${errors[fieldName] 
      ? 'border-red-300 focus:border-red-500 bg-red-50/50' 
      : focusedField === fieldName
        ? 'border-amber-300 focus:border-amber-400 shadow-lg shadow-amber-100/50 bg-white'
        : 'hover:border-stone-300 hover:bg-white/90'
    }
  `;

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Studio Location',
      details: ['123 Photography Street', 'Creative District, New York 10001'],
      color: 'text-amber-600'
    },
    {
      icon: Phone,
      title: 'Get In Touch',
      details: ['+1 (555) 123-4567', 'hello@alexandersterling.com'],
      color: 'text-stone-600'
    },
    {
      icon: Clock,
      title: 'Studio Hours',
      details: ['Monday - Friday: 9AM - 6PM', 'Saturday: 10AM - 4PM'],
      color: 'text-stone-500'
    }
  ];

  return (
    <div className="relative bg-gradient-to-br from-stone-50 to-stone-100 overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: 'radial-gradient(circle at 25% 25%, #8B4513 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }} 
        />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 8 }, (_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-amber-200/20 rounded-full animate-float"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 py-24">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-amber-300 to-transparent" />
            <div className="p-2 border border-amber-300/50 rounded-sm">
              <Camera className="w-5 h-5 text-amber-600" />
            </div>
            <span className="text-amber-600 font-light tracking-[0.2em] uppercase text-sm">
              Let's Connect
            </span>
            <div className="p-2 border border-amber-300/50 rounded-sm">
              <Aperture className="w-5 h-5 text-amber-600" />
            </div>
            <div className="h-px w-20 bg-gradient-to-r from-amber-300 via-transparent to-transparent" />
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-stone-800 mb-6 tracking-wide">
            Start Your Story
            <span className="block text-amber-700 font-thin">With Me</span>
          </h2>
          <p className="text-lg md:text-xl text-stone-600 max-w-3xl mx-auto font-light leading-relaxed">
            Every great photograph begins with a conversation. Let's discuss your vision 
            and create something timeless together.
          </p>
        </div>

        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-16 items-start max-w-7xl mx-auto">
            {/* Contact Info - Takes 2 columns */}
            <div className="lg:col-span-2 space-y-8">
              <div className="space-y-8">
                {contactInfo.map((item, index) => (
                  <div
                    key={index}
                    className={`group p-8 bg-white/70 backdrop-blur-sm border border-stone-200/50 
                      rounded-sm shadow-lg hover:shadow-2xl hover:shadow-stone-300/20 
                      transition-all duration-500 hover:-translate-y-2
                      ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
                    style={{ 
                      transitionDelay: `${index * 0.15}s`,
                    }}
                  >
                    <div className="flex items-start gap-6">
                      <div className="p-4 bg-stone-100 border border-stone-200 rounded-sm 
                        group-hover:border-amber-300/50 group-hover:bg-amber-50/50 
                        transition-all duration-300">
                        <item.icon className={`w-6 h-6 ${item.color} group-hover:text-amber-600 
                          transition-colors duration-300`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-light text-stone-800 mb-3 tracking-wide">
                          {item.title}
                        </h3>
                        {item.details.map((detail, idx) => (
                          <p key={idx} className="text-stone-600 font-light leading-relaxed">
                            {detail}
                          </p>
                        ))}
                        <div className="mt-4 h-px w-16 bg-gradient-to-r from-stone-300 to-transparent 
                          group-hover:from-amber-300 transition-colors duration-300" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Professional Quote */}
              <div className="p-8 bg-gradient-to-br from-amber-50/50 to-stone-100/50 
                border border-amber-200/30 rounded-sm backdrop-blur-sm">
                <div className="flex items-center gap-4 mb-6">
                  <Award className="w-6 h-6 text-amber-600" />
                  <h3 className="text-lg font-light text-stone-800 tracking-wide">
                    Why Work With Me
                  </h3>
                </div>
                <blockquote className="text-stone-600 font-light italic leading-relaxed mb-4">
                  "Photography is not just about capturing moments—it's about preserving emotions, 
                  telling stories, and creating art that transcends time."
                </blockquote>
                <cite className="text-sm text-amber-600 font-light tracking-wider uppercase">
                  — Alexander Sterling
                </cite>
              </div>
            </div>

            {/* Contact Form - Takes 3 columns */}
            <div
              ref={formRef}
              className={`lg:col-span-3 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="bg-white/80 backdrop-blur-sm border border-stone-200/50 
                rounded-sm shadow-2xl shadow-stone-300/10 overflow-hidden">
                
                {/* Form Header */}
                <div className="p-8 bg-gradient-to-r from-stone-800 to-stone-900 text-white">
                  <h3 className="text-2xl font-light mb-3 tracking-wide">Send Me a Message</h3>
                  <p className="text-stone-300 font-light">
                    I'll respond within 24 hours to discuss your project
                  </p>
                  
                  {/* Decorative elements */}
                  <div className="flex items-center gap-4 mt-6">
                    <div className="h-px flex-1 bg-gradient-to-r from-amber-300/50 to-transparent" />
                    <div className="w-2 h-2 bg-amber-300 rounded-full" />
                    <div className="h-px flex-1 bg-gradient-to-l from-amber-300/50 to-transparent" />
                  </div>
                </div>
                
                <div className="p-8 space-y-8">
                  {/* Name & Email Row */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="relative">
                      <label className="block text-sm font-light text-stone-600 mb-2 tracking-wider uppercase">
                        Full Name *
                      </label>
                      <div className="relative">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
                          <User className={`w-5 h-5 transition-colors duration-300 ${
                            focusedField === 'name' ? 'text-amber-600' : 'text-stone-400'
                          }`} />
                        </div>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('name')}
                          onBlur={() => setFocusedField('')}
                          placeholder="Your full name"
                          className={inputClasses('name')}
                        />
                      </div>
                      {errors.name && (
                        <p className="mt-2 text-sm text-red-500 flex items-center gap-2">
                          <AlertCircle className="w-4 h-4" />
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div className="relative">
                      <label className="block text-sm font-light text-stone-600 mb-2 tracking-wider uppercase">
                        Email Address *
                      </label>
                      <div className="relative">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
                          <Mail className={`w-5 h-5 transition-colors duration-300 ${
                            focusedField === 'email' ? 'text-amber-600' : 'text-stone-400'
                          }`} />
                        </div>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('email')}
                          onBlur={() => setFocusedField('')}
                          placeholder="your.email@example.com"
                          className={inputClasses('email')}
                        />
                      </div>
                      {errors.email && (
                        <p className="mt-2 text-sm text-red-500 flex items-center gap-2">
                          <AlertCircle className="w-4 h-4" />
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject Field */}
                  <div className="relative">
                    <label className="block text-sm font-light text-stone-600 mb-2 tracking-wider uppercase">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('subject')}
                      onBlur={() => setFocusedField('')}
                      placeholder="What type of photography session are you interested in?"
                      className="w-full px-4 py-4 bg-white/80 backdrop-blur-sm border border-stone-200 
                        rounded-sm transition-all duration-300 focus:outline-none 
                        focus:border-amber-300 hover:border-stone-300 hover:bg-white/90 
                        font-light text-stone-700 placeholder:text-stone-400"
                    />
                  </div>

                  {/* Message Field */}
                  <div className="relative">
                    <label className="block text-sm font-light text-stone-600 mb-2 tracking-wider uppercase">
                      Your Message *
                    </label>
                    <div className="relative">
                      <div className="absolute left-4 top-4 z-10">
                        <MessageSquare className={`w-5 h-5 transition-colors duration-300 ${
                          focusedField === 'message' ? 'text-amber-600' : 'text-stone-400'
                        }`} />
                      </div>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField('')}
                        placeholder="Tell me about your vision, event, or project. What story would you like to capture?"
                        rows="6"
                        className={`${inputClasses('message')} resize-none pt-4`}
                      />
                    </div>
                    {errors.message && (
                      <p className="mt-2 text-sm text-red-500 flex items-center gap-2">
                        <AlertCircle className="w-4 h-4" />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="flex items-center justify-between pt-6">
                    <p className="text-sm text-stone-500 font-light">
                      * Required fields
                    </p>
                    
                    <button
                      type="button"
                      onClick={handleSubmit}
                      disabled={isLoading || Object.keys(errors).length > 0}
                      className="group relative px-12 py-4 bg-gradient-to-r from-stone-800 to-stone-900 
                        hover:from-amber-600 hover:to-amber-700 text-white font-light tracking-wider 
                        transition-all duration-500 hover:shadow-2xl hover:shadow-amber-600/20 
                        hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed 
                        disabled:hover:scale-100 focus:outline-none focus:ring-2 focus:ring-amber-300/50
                        border border-stone-700 hover:border-amber-600"
                    >
                      <div className="flex items-center gap-3 relative z-10 uppercase text-sm">
                        {isLoading ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white" />
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                          </>
                        )}
                      </div>
                    </button>
                  </div>

                  {/* Status Messages */}
                  {status && (
                    <div className={`p-6 rounded-sm border transition-all duration-300 ${
                      status === 'success' 
                        ? 'bg-green-50/50 text-green-700 border-green-200/50' 
                        : 'bg-red-50/50 text-red-700 border-red-200/50'
                    }`}>
                      <div className="flex items-start gap-4">
                        {status === 'success' ? (
                          <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                        ) : (
                          <AlertCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                        )}
                        <div>
                          <p className="font-medium mb-1">
                            {status === 'success' ? 'Message sent successfully!' : 'Failed to send message.'}
                          </p>
                          <p className="text-sm opacity-80 font-light">
                            {status === 'success' 
                              ? "Thank you for reaching out. I'll get back to you within 24 hours to discuss your project." 
                              : 'Please try again or contact me directly using the information provided.'}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.2; }
          25% { transform: translateY(-6px) rotate(90deg); opacity: 0.4; }
          50% { transform: translateY(0px) rotate(180deg); opacity: 0.2; }
          75% { transform: translateY(3px) rotate(270deg); opacity: 0.4; }
        }
        .animate-float {
          animation: float 10s ease-in-out infinite;
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
        }
      `}</style>
    </div>
  );
}

export default ContactForm;