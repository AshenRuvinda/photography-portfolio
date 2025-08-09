// Simulated CMS API using JSON files
import portfolioData from '../data/portfolio.json';
import servicesData from '../data/services.json';
import testimonialsData from '../data/testimonials.json';
import siteData from '../data/site.json';

// Fetch site-wide data
export const getSiteData = () => {
  return Promise.resolve(siteData);
};

// Fetch portfolio items
export const getPortfolioItems = () => {
  return Promise.resolve(portfolioData);
};

// Fetch services
export const getServices = () => {
  return Promise.resolve(servicesData);
};

// Fetch testimonials
export const getTestimonials = () => {
  return Promise.resolve(testimonialsData);
};