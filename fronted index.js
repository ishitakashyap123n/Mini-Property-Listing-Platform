import { useEffect, useState } from 'react';
import axios from 'axios';
import PropertyCard from '../components/PropertyCard';
import { toast } from 'react-hot-toast';

export default function Home({ initialProperties }) {
  const [properties, setProperties] = useState(initialProperties);
  const [loading, setLoading] = useState(false);

  // You can use useEffect for client-side fetching if preferred,
  // but getServerSideProps is generally better for SEO and initial load.
  // Example for client-side fetch:
  // useEffect(() => {
  //   const fetchProperties = async () => {
  //     setLoading(true);
  //     try {
  //       const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/properties`);
  //       setProperties(data);
  //     } catch (error) {
  //       toast.error('Failed to fetch properties.');
  //       console.error('Failed to fetch properties:', error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   fetchProperties();
  // }, []);

  if (loading) return <div className="text-center text-lg mt-8">Loading properties...</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Available Properties
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.length > 0 ? (
          properties.map((property) => (
            <PropertyCard key={property._id} property={property} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-600">No properties available yet. Please add some from the Admin Panel!</p>
        )}
      </div>
    </div>
  );
}

// Server-side rendering for initial properties
export async function getServerSideProps() {
  let initialProperties = [];
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/properties`);
    initialProperties = res.data;
  } catch (error) {
    console.error('Error fetching initial properties:', error);
    // You might want to handle this more gracefully, e.g., pass an error prop
  }

  return {
    props: {
      initialProperties,
    },
  };
}
