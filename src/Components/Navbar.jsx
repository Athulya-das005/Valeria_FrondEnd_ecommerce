import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import { FaShoppingCart, FaHeart, FaSearch, FaUser, FaBox, FaBars } from 'react-icons/fa'; // Icons
import ValeriaLogo from '../assets/ValeriaLogo.png'

function Navbar() {
    const [search, setSearch] = useState("");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); 
    const navigate = useNavigate()
    const getUser = localStorage.getItem('user')
    const [isProfile, setIsProfile] = useState(false)
    
    const handleLogout = () => {
        alert("You have logged out");
        navigate('/signin');
    }
    
    const handleProfile = () => {
        setIsProfile(!isProfile);
    }

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="bg-white shadow-md fixed top-0 w-full z-10">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    {/* Mobile Menu Toggle Button */}
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button
                            onClick={toggleMobileMenu}
                            className="text-gray-800 focus:outline-none"
                        >
                            <FaBars size={24} />
                        </button>
                    </div>

                    {/* Logo Section */}
                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                        <Link to="/" className="text-2xl font-bold text-white flex items-center">
                            <img
                                src={ValeriaLogo}
                                alt="Logo"
                                className="h-8 mr-2"
                            />
                            <h5 className="text-gray-500 hover:text-blue-950">VALERIA</h5>
                        </Link>
                    </div>

                    {/* Navbar Links */}
                    <div className="hidden sm:flex items-center space-x-6 mr-10">
                        <Link to="/" className="text-gray-500 hover:text-blue-950">Home</Link>
                        <Link to="/products" className="text-gray-500 hover:text-blue-800">Products</Link>
                        <Link to="/services" className="text-gray-500 hover:text-blue-800">Services</Link>
                        <Link to="/contact" className="text-gray-500 hover:text-blue-800">Contact</Link>
                    </div>

                    {/* Icons Section */}
                    <div className="flex items-center space-x-6 ml-10">
                        <Link to="/orders" className="text-gray-500 hover:text-blue-900">
                            <FaBox size={20} />
                        </Link>
                        <Link to="/cart" className="text-gray-500 hover:text-blue-900">
                            <FaShoppingCart size={20} />
                        </Link>
                        <Link to="/signin" className="text-gray-500 hover:text-blue-900">
                            <FaUser size={20} />
                        </Link>

                        {/* Login/Logout Button */}
                        <button 
                            onClick={handleLogout} 
                            className={`${
                                getUser ? 'bg-gray-500 hover:bg-gray-700 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white'
                            } px-6 py-2 rounded-full text-lg font-semibold transition duration-300`}
                        >
                            {getUser ? "Logout" : "Login"}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="sm:hidden bg-orange-700 p-4 flex flex-col space-y-4">
                        <Link to="/" className="text-white hover:text-blue-600">Home</Link>
                        <Link to="/products" className="text-white hover:text-blue-600">Products</Link>
                        <Link to="/services" className="text-white hover:text-blue-600">Services</Link>
                        <Link to="/contact" className="text-white hover:text-blue-600">Contact</Link>
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <FaSearch className="absolute top-3 right-3 text-gray-400" />
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
