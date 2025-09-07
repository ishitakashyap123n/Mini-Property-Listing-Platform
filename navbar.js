import Link from 'next/link';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <p className="text-white text-2xl font-bold cursor-pointer">Property Listings</p>
        </Link>
        <div className="space-x-4">
          <Link href="/">
            <p className="text-gray-300 hover:text-white cursor-pointer">Home</p>
          </Link>
          {user ? (
            <>
              <Link href="/admin">
                <p className="text-gray-300 hover:text-white cursor-pointer">Admin Panel</p>
              </Link>
              <button onClick={logout} className="text-gray-300 hover:text-white cursor-pointer">
                Logout
              </button>
            </>
          ) : (
            <Link href="/login">
              <p className="text-gray-300 hover:text-white cursor-pointer">Admin Login</p>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
