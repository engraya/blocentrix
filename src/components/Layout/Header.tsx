import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { blocentrixLogo } from '../../assets';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { to: '#', label: 'Products' },
        { to: '#', label: 'About' },
        { to: '#', label: 'Why Us' },
        { to: '#', label: 'Contact' }
    ];

    return (
        <header className="sticky top-0 z-50 bg-white shadow">
            <div className="flex justify-between items-center max-w-7xl mx-auto py-4 px-6 sm:px-10 lg:px-16">
                {/* Logo */}
                <div className="flex-shrink-0">
                    <Link to="/" className="flex items-center text-gray-800 text-lg font-bold">
                        <div className="flex items-center text-2xl font-semibold">
                            <div className="w-40 mr-2">
                                <img src={blocentrixLogo} alt="Blocentrix Logo" className="w-full h-full object-contain" />
                            </div>
                        </div>
                    </Link>
                </div>
                {/* Hamburger Menu Icon */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} aria-label="Toggle Menu">
                        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                    </button>
                </div>
                {/* Desktop Navigation and Buttons */}
                <div className={`absolute md:static top-[72px] left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none transition-all duration-300 ease-in-out ${
                    isOpen ? 'block' : 'hidden'
                } md:flex md:items-center md:flex-1 z-40`}>
                    {/* Navigation Links */}
                    <nav className="md:flex-1 md:flex md:justify-center">
                        <div className="flex flex-col md:flex-row md:items-center md:space-x-8 px-6 md:px-0 py-4 md:py-0">
                            {navLinks.map((link) => (
                                <Link 
                                    key={link.to} 
                                    to={link.to} 
                                    className="text-gray-700 hover:text-purple-600 py-2 md:py-0 transition-colors duration-200"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </nav>
                    {/* Auth Buttons - Mobile: Stack, Desktop: Row */}
                    <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4 px-6 md:px-0 pb-6 md:pb-0">
                        <Link to="/login" className="w-full md:w-auto">
                            <button className="w-full md:w-auto px-5 py-2 rounded-lg cursor-pointer outline outline-purple-600 hover:bg-purple-50 transition-colors duration-200">
                                <span className="text-violet-800 text-base font-normal">Sign In</span>
                            </button>
                        </Link>
                        <Link to="/register" className="w-full md:w-auto">
                            <button className="w-full md:w-auto px-5 py-2 bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors duration-200">
                                <span className="text-white text-base font-normal">Get Started</span>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header; 