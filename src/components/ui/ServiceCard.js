function ServiceCard({ service }) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
        <p className="text-gray-600 mb-4">{service.description}</p>
        <p className="text-primary font-bold">{service.price}</p>
      </div>
    );
  }
  
  export default ServiceCard;