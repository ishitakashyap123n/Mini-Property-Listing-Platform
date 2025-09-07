import axios from 'axios';
import { useRouter } from 'next/router';
import { toast } from 'react-hot-toast';

export default function PropertyDetails({ property }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div className="text-center text-lg mt-8">Loading property details...</div>;
  }

  if (!property) {
    return <div className="text-center text-lg mt-8">Property not found.</div>;
  }

  return (
    <div className="container mx-auto p-4 bg-white rounded-lg shadow-md">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">{property.title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img
            src={property.image}
            alt={property.title}
            className="w-full h-80 object-cover rounded-lg shadow-sm"
          />
        </div>
        <div>
          <p className="text-indigo-700 text-3xl font-bold mb-4">
            ₹{property.price.toLocaleString('en-IN')}
          </p>
          <p className="text-gray-700 text-lg mb-2">
            <span className="font-semibold">Location:</span> {property.location}
          </p>
          <p className="text-gray-700 text-base leading-relaxed">
            <span className="font-semibold">Description:</span> {property.description}
          </p>
          <p className="text-gray-500 text-sm mt-4">
            Listed on: {new Date(property.createdAt).toLocaleDateString()}
          </p>
        </div>
      </div>
      <div className="mt-8">
        <button
          onClick={() => router.back()}
          className="bg-gray-200 text-gray-800 px-6 py-2 rounded-md hover:bg-gray-300 transition duration-300"
        >
          Back to Listings
        </button>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.params;
  let property = null;

  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/properties/${id}`);
    property = res.data;
  } catch (error) {
    console.error(`Error fetching property ${id}:`, error);
    // Optionally, redirect to a 404 page or show an error message
  }

  return {
    props: {
      property,
    },
  };
}
