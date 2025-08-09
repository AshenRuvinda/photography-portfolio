import { useEffect, useState } from 'react';
import { getTestimonials } from '../api/cms';
import TestimonialCard from '../components/ui/TestimonialCard';
import SectionTitle from '../components/ui/SectionTitle';

function TestimonialsPage() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    getTestimonials().then(data => setTestimonials(data));
  }, []);

  return (
    <div className="container py-16">
      <SectionTitle title="Testimonials" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map(testimonial => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>
    </div>
  );
}

export default TestimonialsPage;