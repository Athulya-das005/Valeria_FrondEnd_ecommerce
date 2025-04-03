import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const User = () => {
  const [user, setUser] = useState([]);
 
  const navigate=useNavigate()
  const handleNavigate =(id)=>{
    console.log("jdhf",id);
    
    navigate(`/admin/userdetails/${id}`)
  }

  useEffect(() => {
    axios.get('http://localhost:5000/users')
      .then((response) => {
        const filteredUser = response.data.filter((u)=>!u.email.startsWith('admin'))
        setUser(filteredUser);
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      });
  }, []);

  return (
    <div className="container mx-auto p-6 ">
      <h1 className="text-3xl font-bold text-center mb-6">User List</h1>

      {/* Table for displaying user data */}
      <table className="min-w-full table-auto border-collapse border border-black bg-gray-100 ml-56">
        <thead>
          <tr>
            <th className="border px-4 py-2 text-left">ID</th>
            <th className="border px-4 py-2 text-left">Username</th>
            <th className="border px-4 py-2 text-left">Email</th>
            <th className="border px-4 py-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {user.map((userData) => (
            <tr key={userData.id}>
              <td className="border px-4 py-2">{userData.id}</td>
              <td className="border px-4 py-2">{userData.name}</td>
              <td className="border px-4 py-2">{userData.email}</td>
              <td className="border px-4 py-2">
                <button className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600" onClick={()=>handleNavigate(userData.id)}>
                  View More
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default User;
