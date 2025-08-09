import { useEffect, useState } from 'react';
import { getSiteData } from '../../api/cms';

function Footer() {
  const [siteData, setSiteData] = useState({});

  useEffect(() => {
    getSiteData().then(data => setSiteData(data));
  }, []);

  return (
    <footer className="bg-primary text-white py-8">
      <div className="container flex flex-col md:flex-row justify-between items-center">
        <p>&copy; {new Date().getFullYear()} {siteData.name || 'Your Name'}. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          {siteData.socialLinks && (
            <>
              <a href={siteData.socialLinks.instagram} className="hover:text-secondary">Instagram</a>
              <a href={siteData.socialLinks.twitter} className="hover:text-secondary">Twitter</a>
              <a href={siteData.socialLinks.email} className="hover:text-secondary">Email</a>
            </>
          )}
        </div>
      </div>
    </footer>
  );
}

export default Footer;