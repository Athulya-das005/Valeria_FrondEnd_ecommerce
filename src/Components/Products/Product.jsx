


import React, { useContext, useEffect, useState } from 'react';
import { context_page } from '../Context/ProductContext';
import AOS from 'aos';

import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Product = () => {
  const { product } = useContext(context_page);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
    });
  }, []);

  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredProducts(product);
    } else {
      setFilteredProducts(
        product.filter((product) => product.category === selectedCategory)
      );
    }
  }, [selectedCategory, product]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleNavigate = (productId) => {
    navigate(`/productdetails/${productId}`);
  };

  return (
    <div className="flex flex-col min-h-screen">
    
      <div className="flex-grow bg-gray-100 pt-8 mb-5">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-12 max-w-[800px] mx-auto mt-10">
            <p className="text-sm text-blue-900 font-medium pt-6">Top Selling Products</p>
            <h1 className="text-2xl font-bold text-gray-700">Explore Our Products</h1>
          </div>

          {/* Category Buttons */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-4 mb-8">
            {["All", "Bed", "Sofa", "Chair", "Table"].map((category) => (
              <button
                key={category}
                className={`px-6 py-3 rounded-full text-lg font-medium transition duration-300 transform ${
                  selectedCategory === category
                    ? "bg-gray-700 text-white scale-105"
                    : "bg-gray-200 text-dark hover:bg-gray-700 hover:text-white"
                }`}
                onClick={() => handleCategoryChange(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Product Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {Array.isArray(filteredProducts) && filteredProducts.length > 0 ? (
              filteredProducts.map((product, index) => (
                <div
                  key={product.id}
                  className="bg-white shadow-lg rounded-2xl overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
                  data-aos="fade-up"
                  data-aos-delay={`${index * 100}`}
                  onClick={() => handleNavigate(product.id)}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-56 w-full object-cover rounded-t-2xl"
                  />
                  <div className="p-6">
                    <h2 className="text-xl font-semibold text-dark">{product.name}</h2>
                    <p className="text-sm text-gray-500 my-2">{product.description}</p>
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-lg text-primary font-semibold">
                        {product.price}
                      </span>
                      <span
                        className={`text-sm ${
                          product.availability === "In stock"
                            ? "text-red-600"
                            : "text-green-600"
                        }`}
                      >
                        {product.availability || "In stock"}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-xl text-gray-500">No products available.</p>
            )}
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left Side: Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul>
                <li>
                  <Link to="/" className="hover:text-gray-400">Home</Link>
                </li>
                <li>
                  <Link to="/products" className="hover:text-gray-400">Products</Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-gray-400">Services</Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-gray-400">Contact Us</Link>
                </li>
              </ul>
            </div>

            {/* Middle: Contact Us */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <ul>
                <li>
                  <p>Email: <a href="mailto:info@valeriafurniture.com" className="hover:text-gray-400">info@valeriafurniture.com</a></p>
                </li>
                <li>
                  <p>Phone: <a href="tel:+1234567890" className="hover:text-gray-400">+1 (234) 567-890</a></p>
                </li>
                <li>
                  <p>Address: 123 Valeria St, Modern City, CA</p>
                </li>
              </ul>
            </div>

            {/* Right Side: About Valeria Furniture */}
            <div>
              <h3 className="text-lg font-semibold mb-4">About Valeria Furniture</h3>
              <p>
                Valeria Furniture creates beautifully designed, high-quality furniture that combines style with functionality. Our products are made to elevate your living space and bring comfort to every home.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="bg-gray-800 text-center py-4 mt-8">
          <p>&copy; 2024 Valeria Furniture. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Product;
