import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-64 h-screen bg-gray-800 text-white fixed">
        {/* Admin Panel Title at the top */}
        <div className="p-6">
          <h1 className="text-2xl font-bold">Admin Panel</h1>
        </div>
        
        {/* Navigation Links */}
        <ul className="mt-10 space-y-4">
          <li>
            <Link to="#dashboard" className="text-lg hover:text-gray-400 p-4 block">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/admin/productsadmin" className="text-lg hover:text-gray-400 p-4 block">
              Products
            </Link>
          </li>
          <li>
            <Link to="/admin/users" className="text-lg hover:text-gray-400 p-4 block">
              Users
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;























