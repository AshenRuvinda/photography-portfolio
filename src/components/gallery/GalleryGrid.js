import { useState } from 'react';
import GalleryCard from './GalleryCard';
import Lightbox from './Lightbox';

function GalleryGrid({ items }) {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map(item => (
          <GalleryCard key={item.id} item={item} onClick={() => setSelectedImage(item)} />
        ))}
      </div>
      {selectedImage && (
        <Lightbox image={selectedImage} onClose={() => setSelectedImage(null)} />
      )}
    </div>
  );
}

export default GalleryGrid;