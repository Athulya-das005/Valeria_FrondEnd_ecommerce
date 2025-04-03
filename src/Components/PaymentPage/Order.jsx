import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Order = () => {
  const [orders, setOrders] = useState([]);
  const userId = localStorage.getItem('user');
  console.log('user', userId);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/users/${userId}`)
      .then((response) => {
        const userdata = response.data;
        if (!userdata.orders) {
          axios
            .patch(`http://localhost:5000/users/${userId}`, { orders: [] })
            .then(() => {
              console.log('orders are empty');
            })
            .catch((error) => {
              console.error('error fetching', error);
            });
        } else {
          setOrders(userdata.orders);
        }
      })
      .catch((error) => {
        console.error('Error fetching user data', error);
      });
  }, [userId]);

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center ">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-4xl">
        <h1 className="text-3xl font-bold text-center mb-6 mt-16">Your Orders</h1>

        {orders.length === 0 ? (
          <h2 className="text-xl text-center text-gray-500">No orders found</h2>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {orders.map((product) => (
              <div
                key={product.id}
                className="border p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 ease-in-out"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover rounded-md mb-4"
                />
                <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
                <p className="text-gray-600 mt-2">{product.description}</p>
                <p className="text-lg font-semibold text-gray-800 mt-2">{product.price}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Order;
