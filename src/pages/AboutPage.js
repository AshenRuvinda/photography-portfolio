import { useEffect, useState } from 'react';
import { getSiteData } from '../api/cms';
import SectionTitle from '../components/ui/SectionTitle';

function AboutPage() {
  const [siteData, setSiteData] = useState({});

  useEffect(() => {
    getSiteData().then(data => setSiteData(data));
  }, []);

  return (
    <div className="container py-16">
      <SectionTitle title="About Me" />
      <div className="flex flex-col md:flex-row items-center gap-8">
        <img
          src={siteData.profileImage || '/assets/placeholder.jpg'}
          alt="Profile"
          className="w-full md:w-1/3 rounded-lg shadow-lg object-cover"
        />
        <div>
          <h3 className="text-2xl font-semibold mb-4">My Story</h3>
          <p className="text-lg mb-4">{siteData.bio || 'Your biography goes here.'}</p>
          <h3 className="text-2xl font-semibold mb-4">Photography Style</h3>
          <p className="text-lg">{siteData.style || 'Your style description goes here.'}</p>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;