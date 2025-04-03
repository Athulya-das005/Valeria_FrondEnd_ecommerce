import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');
  const [price, setPrice] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Product object to send in the POST request
    const newProduct = {
      name,
      description,
      category,
      image,
      price: parseFloat(price), // Ensuring price is a number
    };

    try {
      // Send POST request to add the product to db.json 
      await axios.post('http://localhost:5000/products', newProduct);
      // Alert user that the product was added successfully
      alert('Product added successfully!');
      // Redirect to products page after adding the product
      navigate('/admin/productsadmin');
    } catch (error) {
      console.error('Error adding product:', error);
      alert('Error adding product. Please try again.');
    }
  };

  return (
    <div className="container mx-auto p-6 bg-gray-100 ml-auto">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800 ">Add Product</h1>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="mb-4">
          <label className="block text-gray-700">Product Name</label>
          <input
            type="text"
            className="w-full border rounded p-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Product Description</label>
          <textarea
            className="w-full border rounded p-2"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Product Category</label>
          <input
            type="text"
            className="w-full border rounded p-2"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Product Image URL</label>
          <input
            type="text"
            className="w-full border rounded p-2"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Product Price</label>
          <input
            type="number"
            className="w-full border rounded p-2"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="bg-gray-700 text-white px-6 py-2 rounded hover:bg-gray-800"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
