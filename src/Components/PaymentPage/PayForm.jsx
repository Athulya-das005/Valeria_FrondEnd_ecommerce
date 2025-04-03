import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const PayForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });
  const [userData, setUserData] = useState({});
  const [userCart, setUserCart] = useState([]);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  useEffect(() => {
    const userId = localStorage.getItem('user');
    if (!userId) {
      console.error('User ID is not available in local storage');
      return;
    }

    axios
      .get(`http://localhost:5000/users/${userId}`)
      .then((res) => {
        setUserData(res.data);
        setUserCart(res.data.cart);
      })
      .catch((error) => {
        console.error('Error fetching user data', error);
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userId = localStorage.getItem('user');
    if (!userId) {
      console.error('User ID is not available in local storage');
      return;
    }

    try {
      const updatedOrders = [...(userData.orders || []), ...userCart];

      await axios.patch(`http://localhost:5000/users/${userId}`, {
        cart: [],
        orders: updatedOrders,
      });

      // sucess message
      Swal.fire('Payment success', 'Your order has been placed!', 'success');
      navigate('/');
    } catch (error) {
      console.error(
        'Error updating user data',
        error.response?.data || error.message
      );
      Swal.fire('Payment failed', 'Something went wrong. Please try again.', 'error');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-2xl font-semibold text-center mb-6">Payment Information</h2>
        <form onSubmit={handleSubmit}>
          <div className="space-y-6">
            {/* Full Name */}
            <div>
              <label htmlFor="name" className="block text-lg font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md mt-2"
                placeholder="John Doe"
                required
              />
            </div>

            {/* Email Address */}
            <div>
              <label htmlFor="email" className="block text-lg font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md mt-2"
                placeholder="john.doe@example.com"
                required
              />
            </div>

            {/* Card Number */}
            <div>
              <label htmlFor="cardNumber" className="block text-lg font-medium text-gray-700">
                Credit Card Number
              </label>
              <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md mt-2"
                placeholder="1234 5678 9876 5432"
                required
              />
            </div>

            {/* Expiry Date and CVV */}
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label htmlFor="expiryDate" className="block text-lg font-medium text-gray-700">
                  Expiry Date (MM/YY)
                </label>
                <input
                  type="text"
                  id="expiryDate"
                  name="expiryDate"
                  value={formData.expiryDate}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md mt-2"
                  placeholder="MM/YY"
                  required
                />
              </div>

              <div>
                <label htmlFor="cvv" className="block text-lg font-medium text-gray-700">
                  CVV
                </label>
                <input
                  type="text"
                  id="cvv"
                  name="cvv"
                  value={formData.cvv}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md mt-2"
                  placeholder="123"
                  required
                />
              </div>
            </div>

            {/* Display Cart Items */}
            <div>
              <h3 className="text-lg font-semibold text-gray-700">Your Cart:</h3>
              <ul className="space-y-4 mt-4">
                {userCart.map((item) => (
                  <li key={item.id} className="flex justify-between">
                    <span>{item.name}</span>
                    <span>${item.price}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Submit Button */}
            <div className="mt-6 flex justify-center">
              <button
                type="submit"
                className="px-8 py-3 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-600 transition-colors"
              >
                Pay Now
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PayForm;
