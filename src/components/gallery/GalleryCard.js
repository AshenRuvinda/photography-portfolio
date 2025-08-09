function GalleryCard({ item, onClick }) {
    return (
      <div
        className="group relative cursor-pointer overflow-hidden rounded-lg shadow-lg"
        onClick={onClick}
      >
        <img
          src={item.image || '/assets/placeholder.jpg'}
          alt={item.title}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <p className="text-white text-lg font-semibold">{item.title}</p>
        </div>
      </div>
    );
  }
  
  export default GalleryCard;