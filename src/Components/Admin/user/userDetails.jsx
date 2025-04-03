import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const UserDetails = () => {
  const [userData, setUserdata] = useState('');
  const { id } = useParams();
  console.log("User ID:", id);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/users/${id}`)
      .then((response) => {
        setUserdata(response.data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, [id]);

  const handleLog = () => {
    const updatedStatus = !userData.isLogged;
    axios
      .patch(`http://localhost:5000/users/${id}`, { isLogged: updatedStatus })
      .then((response) => {
        setUserdata(response.data);
        console.log("Updated userData:", response.data);
      })
      .catch((error) => {
        console.error("Error updating user data:", error);
      });
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50">
      {/* User Details Card */}
      <div className=" bg-gray-200 p-6 rounded-lg shadow-lg mb-8">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">User Details</h1>
        {userData ? (
          <ul className="space-y-4">
            <li>
              <strong className="font-semibold text-gray-700">Name:</strong> {userData.name}
            </li>
            <li>
              <strong className="font-semibold text-gray-700">Email:</strong> {userData.email}
            </li>
          </ul>
        ) : (
          <p className="text-center text-gray-500">Loading user data...</p>
        )}
      </div>

      {/* Cart Details Card */}
      <div className="bg-gray-200 p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Cart Details</h2>
        {userData && userData.cart && userData.cart.length > 0 ? (
          <ul className="space-y-4">
            {userData.cart.map((item, index) => (
              <li key={index} className="flex space-x-4 p-4 border-b border-gray-200 rounded-md">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <div className="flex flex-col justify-center">
                  <p className="text-lg font-medium">{item.name}</p>
                  <p className="text-gray-500">{item.price}</p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No items in the cart</p>
        )}
      </div>

      {/* Order Details Card */}
      <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Order Details</h2>
        {userData && userData.orders && userData.orders.length > 0 ? (
          <ul className="space-y-4">
            {userData.orders.map((order, index) => (
              <li key={index} className="flex space-x-4 p-4 border-b border-gray-200 rounded-md">
                <img
                  src={order.image}
                  alt={order.name}
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <div className="flex flex-col justify-center">
                  <p className="text-lg font-medium">{order.name}</p>
                  <p className="text-gray-500">{order.price}</p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No orders placed yet</p>
        )}
      </div>
      <div>
      <button
                    onClick={handleLog}
                    className={`px-6 py-2 font-medium text-white rounded-lg shadow-md transition duration-300 ${
                        userData.isLogged ? 'bg-red-500 hover:bg-red-700' : 'bg-green-800 hover:bg-green-700'
                    }`}
                >
                    {userData.isLogged ? 'Block' : 'Unblock'}
                </button>
      </div>
    </div>
  );
};

export default UserDetails;
