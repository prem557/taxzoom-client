import { Link } from 'react-router-dom';
import { FaExclamationTriangle } from 'react-icons/fa';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center px-4">
      <FaExclamationTriangle className="text-orange-600 text-6xl mb-6" />
      <h1 className="text-4xl font-bold mb-4 text-gray-800">404 - Page Not Found</h1>
      <p className="text-gray-600 mb-6">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link to="/" className="bg-blue-700 hover:bg-blue-800 text-white px-5 py-3 rounded-lg font-semibold">
        Go to Home
      </Link>
    </div>
  );
}
