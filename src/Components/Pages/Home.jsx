

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import valeria from '../../assets/ValeriaLogo.png'; 
import AOS from 'aos';
import 'aos/dist/aos.css'; 

//category list for the cards
const categories = [
  { name: 'Beds', image: 'https://i.pinimg.com/736x/bd/e5/32/bde532640936272bce71a2055aa61757.jpg', description: 'Magic coir mattress', rating: 5.0, availibility: "In stock", },
  { name: 'Sofa', image: 'https://i.pinimg.com/736x/49/a2/81/49a281d93e159084944a1401f2df037e.jpg', description: 'Relaxation sofa for your home', rating: 5.0, availibility: "In stock" },
  { name: 'Chair', image: 'https://i.pinimg.com/736x/0a/7c/98/0a7c9809e74ba8a95d361d28c17a29b0.jpg', description: 'Curved wood and sherpa chair', rating: 5.0, availibility: "In stock" },
  { name: 'Table', image: 'https://i.pinimg.com/736x/7d/da/1b/7dda1b299c9641e4d4fbcaee9efec14d.jpg', description: 'Rounded nested coffee table', rating: 5.0, availibility: "In stock" },
  { name: 'Wardrobe', image: 'https://i.pinimg.com/736x/34/ae/54/34ae54ad8bf0c55af67e86b24f80a87c.jpg', description: 'Contemporary style wardrobe', rating: 5.0, availibility: "In stock" },
  { name: 'Study Table', image: 'https://i.pinimg.com/736x/b2/43/dc/b243dc9e085d9fe01b2994d5af41c6fd.jpg', description: 'Solid wood writing desk', rating: 5.0, availibility: "In stock" },
  { name: 'Cushion', image: 'https://i.pinimg.com/736x/de/aa/5c/deaa5c7e0123ab618f837bd662cc61dc.jpg', description: 'Create a stylish cushion', rating: 5.0, availibility: "In stock" },
  { name: 'Shoe Rack', image: 'https://i.pinimg.com/736x/46/6f/fa/466ffa7f9d8d10df0c44d048c4cf65fe.jpg', description: 'Solid shoe rack cover', rating: 5.0, availibility: "In stock" },
];

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1200, 
      easing: 'ease-in-out', 
    });
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/*Image */}
      <div>
        <img
          src="https://www.ulcdn.net/media/collections/listings/Valeria_LP_Header.png?1727949780"
          className="w-full mt-35 mr-32 shadow-lg rounded-xl"
          alt="Header"
          data-aos="fade-up" 
          data-aos-duration="1500" 
        />
      </div>

      {/* About Section */}
      <section className="bg-gray-800 text-white py-16">
        <div className="container mx-auto text-center px-4 mt-8">
          <h2 className="text-4xl font-bold text-white mb-6" data-aos="fade-left" data-aos-duration="1500" data-aos-delay="200">
            Why Choose Valeria Furniture?
          </h2>
          <p className="text-lg text-gray-300 mb-8" data-aos="fade-left" data-aos-duration="1500" data-aos-delay="400">
            At Valeria Furniture, we are passionate about transforming your living spaces into stylish,
            comfortable, and functional havens. Our furniture is crafted with the finest materials, blending
            innovation with timeless design. Whether you’re upgrading your home, office, or any space, our
            collection provides unparalleled quality, comfort, and style. Here's why you should choose us:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300" data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="600">
              <h3 className="text-2xl font-semibold text-gray-700 mb-4">Premium Quality</h3>
              <p className="text-gray-700">
                We source the best materials, ensuring each piece is built to last, with attention to every
                detail and finish.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300" data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="800">
              <h3 className="text-2xl font-semibold text-gray-700 mb-4">Sustainable Designs</h3>
              <p className="text-gray-700">
                Our designs are not only beautiful but also eco-friendly, using sustainable materials and
                processes to minimize our environmental footprint.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300" data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="1000">
              <h3 className="text-2xl font-semibold text-gray-700 mb-4">Customer-Centric Service</h3>
              <p className="text-gray-700">
                We believe in providing exceptional service, from the moment you browse to the delivery of
                your new furniture. Our team is here to ensure you're completely satisfied.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8" data-aos="fade-up" data-aos-duration="1500">
          OUR CATEGORIES
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition-all duration-300"
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay={index * 200}
            >
              <a href={category.link}>
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{category.name}</h3>
                  <p className="text-sm text-gray-500 mb-2">{category.description}</p>
                  <div className="flex items-center space-x-1 text-yellow-500">
                    {/* Displaying rating with stars */}
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={`text-xl ${i < category.rating ? 'text-yellow-500' : 'text-gray-300'}`}>★</span>
                    ))}
                  </div>
                  <p className="text-sm text-gray-400 mt-2">{category.availability}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Images */}
      <div>
        <img
          src="https://www.ulcdn.net/media/collections/listings/Valeria_Landing_Page_Footer.png?1727953401"
          className="w-full mt-20 shadow-lg rounded-xl"
          alt="Footer"
          data-aos="fade-up"
          data-aos-duration="1500"
        />
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-700 text-white py-20 mt-auto ">
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
          <p>&copy; 2024 Valeria Furniture. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;

















