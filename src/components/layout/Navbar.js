import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { getSiteData } from '../../api/cms';
import { useEffect } from 'react';

function Navbar() {
  const [siteData, setSiteData] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    getSiteData().then(data => setSiteData(data));
  }, []);

  const navItems = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/portfolio', label: 'Portfolio' },
    { to: '/services', label: 'Services' },
    { to: '/testimonials', label: 'Testimonials' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="bg-primary text-white sticky top-0 z-50">
      <div className="container flex items-center justify-between py-4">
        <Link to="/" className="text-2xl font-bold">
          {siteData.name || 'Your Name'}
        </Link>
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
        <div className={`md:flex ${isOpen ? 'block' : 'hidden'} md:block`}>
          <ul className="flex flex-col md:flex-row gap-4 md:gap-8">
            {navItems.map(item => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) => `hover:text-secondary ${isActive ? 'text-secondary' : ''}`}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;