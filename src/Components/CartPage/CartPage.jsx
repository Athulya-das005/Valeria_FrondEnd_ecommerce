import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
  const [cartEntry, setCartEntry] = useState({ cart: [] });

  const userId = localStorage.getItem('user');
  const navigate=useNavigate()

  useEffect(() => {
    if (userId) {
      axios
        .get(`http://localhost:5000/users/${userId}`)
        .then((response) => {
          setCartEntry(response.data);
        })
        .catch((error) => {
          console.error('Error fetching user data', error);
        });
    }
  }, [userId]);

  return (
    <div className="container mx-auto p-8 bg-gray-50 rounded-lg shadow-lg mt-24">
      <div>
        {Array.isArray(cartEntry.cart) && cartEntry.cart.length > 0 ? (
          cartEntry.cart.map((item) => (
            <div key={item.id} className="flex items-center border-b border-gray-200 py-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-32 h-32 object-cover rounded-md mr-6"
              />
              <div className="flex-grow">
                <h2 className="text-xl font-semibold">{item.name}</h2>
                <p className="text-gray-600">{item.description}</p>
                <span className="text-lg font-bold text-gray-800">{item.price}</span>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-lg text-gray-500 mt-10">Your cart is empty</div>
        )}
      </div>

      {cartEntry.cart.length > 0 && (
        <div className="mt-8 flex justify-center">
          <button onClick={()=>navigate('/payform')} className="px-6 py-3 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-600 transition-colors">
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
