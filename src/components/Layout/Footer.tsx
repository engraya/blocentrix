import { Link } from 'react-router-dom';
import { blocentrixLogo2 } from '../../assets';
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="w-40 mb-4">
              <img src={blocentrixLogo2} alt="BlocEntrix" className="w-full h-full object-contain" />
            </div>
            <p className="text-gray-300">
              Transforming ideas into digital reality.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/products" className="text-gray-300 hover:text-white">Products</Link></li>
              <li><Link to="/why-us" className="text-gray-300 hover:text-white">Why Us</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white">About</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Email: info@blocentrix.com</li>
              <li>Phone: (555) 123-4567</li>
              <li>Address: 123 Tech Street</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} BlocEntrix. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 