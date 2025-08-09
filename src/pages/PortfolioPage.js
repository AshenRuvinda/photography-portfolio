import { useEffect, useState } from 'react';
import { getPortfolioItems } from '../api/cms';
import GalleryGrid from '../components/gallery/GalleryGrid';
import SectionTitle from '../components/ui/SectionTitle';

function PortfolioPage() {
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    getPortfolioItems().then(data => {
      setItems(data);
      const cats = ['All', ...new Set(data.map(item => item.category))];
      setCategories(cats);
    });
  }, []);

  const filteredItems = selectedCategory === 'All' ? items : items.filter(item => item.category === selectedCategory);

  return (
    <div className="container py-16">
      <SectionTitle title="Portfolio" />
      <div className="flex flex-wrap gap-4 mb-8">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded ${selectedCategory === category ? 'bg-primary text-white' : 'bg-gray-200'}`}
          >
            {category}
          </button>
        ))}
      </div>
      <GalleryGrid items={filteredItems} />
    </div>
  );
}

export default PortfolioPage;