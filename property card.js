import Link from 'next/link';

const PropertyCard = ({ property }) => {
  return (
    <Link href={`/property/${property._id}`}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2 text-gray-800">{property.title}</h3>
          <p className="text-indigo-600 font-bold mb-1">
            ₹{property.price.toLocaleString('en-IN')}
          </p>
          <p className="text-gray-600 text-sm">{property.location}</p>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;
