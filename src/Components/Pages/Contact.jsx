

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-gray-700 via-gray-800 to-gray-950">
      <div className="container mx-auto px-6 sm:px-12 lg:px-20 text-white flex-grow py-16">
        <h2
          className="text-3xl font-bold text-center mb-8 mt-20"
          data-aos="fade-down"
        >
          Contact Us
        </h2>
        <p
          className="text-center mb-12"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Have questions or need assistance? Fill out the form below or contact
          us directly!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Form Section */}
          <div
            className="bg-white text-gray-700 shadow-md rounded-lg p-6"
            data-aos="fade-right"
          >
            <form>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your name"
                  className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-yellow-900 focus:border-yellow-800"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your email"
                  className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-yellow-900 focus:border-yellow-800"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  placeholder="Your Message"
                  className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-yellow-800 focus:border-yellow-800"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-gray-600 to-gray-800 hover:to bg-forth text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information Section */}
          <div
            className="space-y-6 ml-14"
            data-aos="fade-left"
          >
            <div className="flex items-center gap-4" data-aos="fade-up" data-aos-delay="300">
              <div className="p-3 bg-gray-600 text-white rounded-full">
                📍
              </div>
              <div>
                <h3 className="font-bold text-lg">Our Location</h3>
                <p>Furniverse, Modern City, Country</p>
              </div>
            </div>
            <div className="flex items-center gap-4" data-aos="fade-up" data-aos-delay="400">
              <div className="p-3  bg-gray-600 text-white rounded-full">
                📞
              </div>
              <div>
                <h3 className="font-bold text-lg">Phone</h3>
                <p>+123 456 7890</p>
              </div>
            </div>
            <div className="flex items-center gap-4" data-aos="fade-up" data-aos-delay="500">
              <div className="p-3  bg-gray-600 text-white rounded-full">
                ✉
              </div>
              <div>
                <h3 className="font-bold text-lg">Email</h3>
                <p>support@Valeria.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4" data-aos="fade-up" data-aos-delay="600">
              <div className="p-3  bg-gray-600 text-white rounded-full">
                🌐
              </div>
              <div>
                <h3 className="font-bold text-lg">Website</h3>
                <p>www.Valeria.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-700 text-white py-20 mt-auto">
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

export default Contact;
