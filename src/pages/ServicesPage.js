import { useEffect, useState } from 'react';
import { getServices } from '../api/cms';
import ServiceCard from '../components/ui/ServiceCard';
import SectionTitle from '../components/ui/SectionTitle';

function ServicesPage() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    getServices().then(data => setServices(data));
  }, []);

  return (
    <div className="container py-16">
      <SectionTitle title="Services" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map(service => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
}

export default ServicesPage;