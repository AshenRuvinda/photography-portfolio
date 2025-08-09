import { useEffect, useState } from 'react';
import { getSiteData } from '../api/cms';
import SectionTitle from '../components/ui/SectionTitle';

function HomePage() {
  const [siteData, setSiteData] = useState({});

  useEffect(() => {
    getSiteData().then(data => setSiteData(data));
  }, []);

  return (
    <div className="relative">
      <div
        className="h-[80vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${siteData.heroImage || '/assets/placeholder.jpg'})` }}
      >
        <div className="text-center text-white bg-black bg-opacity-50 p-8 rounded">
          <SectionTitle title={siteData.name || 'Your Name'} />
          <p className="text-2xl mt-4">{siteData.tagline || 'Capturing Moments'}</p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;