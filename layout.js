import Navbar from './Navbar';
import { Toaster } from 'react-hot-toast'; // For notifications

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto p-4">{children}</main>
      <footer className="bg-gray-800 text-white p-4 text-center">
        © {new Date().getFullYear()} Property Listings. All rights reserved.
      </footer>
      <Toaster /> {/* Toast notifications */}
    </div>
  );
};

export default Layout;
