


import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { context_page } from '../../Context/ProductContext';
import axios from 'axios';
import Swal from 'sweetalert2';

const EditDetails = () => {
  const [newName, setNewName] = useState('');
  const [newImage, setNewImage] = useState('');
  const [newPrice, setNewPrice] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [newCategories, setNewCategories] = useState('');
  const [editDetails, setEditDetails] = useState({});
  const [open, setClose] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();
  const { product } = useContext(context_page);

  const details = product.find((product) => product.id === id);

  const valueToChange = {
    image: newImage,
    description: newDescription,
    category: newCategories,
    price: newPrice,
    name: newName,
  };

  useEffect(() => {
    if (details) {
      setEditDetails(details);
      setNewCategories(details.category);
      setNewImage(details.image);
      setNewDescription(details.description);
      setNewName(details.name);
      setNewPrice(details.price);
    }
  }, [details]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/products/${id}`, valueToChange);
      Swal.fire('Product updated successfully!');
      setClose(false);
    } catch (error) {
      console.error('Error updating product', error);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/products/${id}`);
      Swal.fire('Product deleted successfully!');
      navigate(-1); // Navigate back after deleting
    } catch (error) {
      console.error('Error deleting product', error);
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="p-6 ml-56">
      <button
        className="text-2xl font-semibold mb-4 hover:text-blue-600 ml-56"
        onClick={handleBack}
      >
        ⇦
      </button>
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Product Details</h1>
        <ul className="space-y-4">
          <li>
            <img
              className="rounded-lg w-full max-w-xs mx-auto h-64 object-cover"
              src={editDetails.image}
              alt={editDetails.name}
            />
          </li>
          <li className="text-xl font-semibold text-center">{editDetails.name}</li>
          <li className="text-gray-600 text-center">{editDetails.description}</li>
          <li className="text-green-500 font-bold text-center">Price: {editDetails.price}</li>
          <li className="text-center">
            <button
              className="bg-gray-800 via-sixth to-third text-white px-4 py-2 rounded hover:bg-gray-600"
              onClick={() => setClose(true)}
            >
              Edit Product
            </button>
          </li>
        </ul>
      </div>

      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg shadow-lg p-8 w-11/12 max-w-lg">
            <h3 className="text-2xl font-bold mb-4">Edit Product</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700">Product Name</label>
                <input
                  type="text"
                  className="w-full border rounded p-2"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Product Price</label>
                <input
                  type="text"
                  className="w-full border rounded p-2"
                  value={newPrice}
                  onChange={(e) => setNewPrice(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Product Description</label>
                <input
                  type="text"
                  className="w-full border rounded p-2"
                  value={newDescription}
                  onChange={(e) => setNewDescription(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Product Image URL</label>
                <input
                  type="text"
                  className="w-full border rounded p-2"
                  value={newImage}
                  onChange={(e) => setNewImage(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Product Category</label>
                <input
                  type="text"
                  className="w-full border rounded p-2"
                  value={newCategories}
                  onChange={(e) => setNewCategories(e.target.value)}
                />
              </div>
              <div className="flex space-x-4 justify-center">
                <button
                  type="button"
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                  onClick={handleDelete}
                >
                  Delete
                </button>
                <button
                  type="submit"
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                >
                  Save
                </button>
                <button
                  type="button"
                  className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
                  onClick={() => setClose(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditDetails;
