



import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

function Service() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <section className="bg-gray-800 py-16 flex-grow">
        <div className="container mx-auto text-center px-4 mt-7">
          <h2 className="text-4xl font-bold text-white mb-8" data-aos="fade-up">
            Our Services
          </h2>
          <p className="text-lg text-white mb-12" data-aos="fade-up" data-aos-delay="200">
            At Valeria Furniture, we are dedicated to providing exceptional services to make your shopping experience seamless and enjoyable. Explore our range of services:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Service Card 1 */}
            <div
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 mb-10"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <h3 className="text-2xl font-semibold text-gray-700 mb-4">Custom Furniture Design</h3>
              <p className="text-gray-700 mb-4">
                We offer bespoke furniture design services to match your style and needs. Whether you want something modern, minimalist, or rustic, we can bring your vision to life.
              </p>
              <button className="bg-gray-700 text-white py-2 px-6 rounded-full hover:bg-gray-800 transition-all duration-300">
                Learn More
              </button>
            </div>

            {/* Service Card 2 */}
            <div
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 mb-10"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <h3 className="text-2xl font-semibold text-gray-700 mb-4">Home Delivery</h3>
              <p className="text-gray-700 mb-4">
                We provide reliable home delivery services to get your furniture to you quickly and safely. Our team ensures smooth delivery with no hassle.
              </p>
              <button className="bg-gray-700 text-white py-2 px-6 rounded-full hover:bg-gray-800 transition-all duration-300">
                Learn More
              </button>
            </div>

            {/* Service Card 3 */}
            <div
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 mb-10"
              data-aos="fade-up"
              data-aos-delay="800"
            >
              <h3 className="text-2xl font-semibold text-gray-700 mb-4">Furniture Assembly</h3>
              <p className="text-gray-700 mb-4">
                Our experts will assemble your furniture quickly and efficiently, ensuring everything is set up perfectly in your home.
              </p>
              <button className="bg-gray-700 text-white py-2 px-6 rounded-full hover:bg-gray-800 transition-all duration-300">
                Learn More
              </button>
            </div>

            {/* Service Card 4 */}
            <div
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 mb-10"
              data-aos="fade-up"
              data-aos-delay="1000"
            >
              <h3 className="text-2xl font-semibold text-gray-700 mb-4">Interior Styling Consultation</h3>
              <p className="text-gray-700 mb-4">
                Our interior styling experts help you decorate your space, selecting furniture and accessories that complement your aesthetic and needs.
              </p>
              <button className="bg-gray-700 text-white py-2 px-6 rounded-full hover:bg-gray-800 transition-all duration-300">
                Learn More
              </button>
            </div>

            {/* Service Card 5 */}
            <div
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 mb-10"
              data-aos="fade-up"
              data-aos-delay="1200"
            >
              <h3 className="text-2xl font-semibold text-gray-700 mb-4">Furniture Refinishing</h3>
              <p className="text-gray-700 mb-4">
                Bring your old furniture back to life with our refinishing service. We restore the beauty of your pieces, making them look as good as new.
              </p>
              <button className="bg-gray-700 text-white py-2 px-6 rounded-full hover:bg-gray-800 transition-all duration-300">
                Learn More
              </button>
            </div>

            {/* Service Card 7 */}
            <div
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 mb-10"
              data-aos="fade-up"
              data-aos-delay="1600"
            >
              <h3 className="text-2xl font-semibold text-gray-700 mb-4">Furniture Repair</h3>
              <p className="text-gray-700 mb-4">
                We offer expert furniture repair services to fix any issues with your furniture, from broken legs to damaged upholstery, restoring it to its original condition.
              </p>
              <button className="bg-gray-700 text-white py-2 px-6 rounded-full hover:bg-gray-800 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/*Quick Links */}
            <div>
              <h3  className="text-lg font-semibold mb-4">Quick Links</h3>
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

            {/*  Contact Us */}
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

            {/* About Valeria Furniture */}
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
}

export default Service;







