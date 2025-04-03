import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [products, setProduct] = useState(0);
  const [users, setUsers] = useState(0);
  const [orders, setOrders] = useState(0);

  useEffect(() => {
    axios.get('http://localhost:5000/products')
      .then((response) => {
        setProduct(response.data.length);
      });

    axios.get('http://localhost:5000/users')
      .then((response) => {
        const userData = response.data;
        setUsers(userData.length);

        const userOrder = userData.reduce((total, user) => {
          return total + (user.orders ? user.orders.length : 0);
        }, 0);
        setOrders(userOrder);
        console.log("Orders", orders);
      });
  }, [products, users]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-8 px-4">
      <h1 className="text-4xl font-semibold text-gray-800 mb-12">Dashboard</h1>
      
      <div className="flex flex-wrap justify-center gap-6">
        {/* Products Card */}
        <div className="bg-gray-700 p-6 rounded-lg shadow-lg w-72 text-center hover:scale-105 transition-transform duration-300 ease-in-out">
          <h2 className="text-5xl text-gray-100">{products}</h2>
          <p className="text-xl text-gray-100 mt-2">Products</p>
        </div>

        {/* Users Card*/}
        <div className="bg-gray-700 p-6 rounded-lg shadow-lg w-72 text-center hover:scale-105 transition-transform duration-300 ease-in-out">
          <h2 className="text-5xl text-gray-100">{users}</h2>
          <p className="text-xl text-gray-100 mt-2">Users</p> 
        </div>

        {/* Orders Card */}
        <div className="bg-gray-700 p-6 rounded-lg shadow-lg w-72 text-center hover:scale-105 transition-transform duration-300 ease-in-out">
          <h2 className="text-5xl text-gray-100 ">{orders}</h2>
          <p className="text-xl text-gray-100 mt-2">Orders</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;


