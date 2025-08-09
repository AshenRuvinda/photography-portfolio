function Lightbox({ image, onClose }) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
        <div className="relative max-w-4xl w-full p-4">
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-white text-2xl"
          >
            &times;
          </button>
          <img
            src={image.image}
            alt={image.title}
            className="w-full h-auto rounded-lg"
          />
          <div className="text-white text-center mt-4">
            <h3 className="text-xl font-semibold">{image.title}</h3>
            <p>{image.description}</p>
          </div>
        </div>
      </div>
    );
  }
  
  export default Lightbox;