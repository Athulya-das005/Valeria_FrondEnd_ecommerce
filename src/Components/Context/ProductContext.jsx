import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const context_page = createContext();

const ProductProvider = ({ children }) => {
    const [product, setProduct] = useState([]);

  useEffect(()=>{
    const fetchData = async ()=>{
        try {
            const response=await axios.get('http://localhost:5000/products')
            let product=response.data
            setProduct(product)
            console.log("prod",product);
            
        }catch(error){
            console.log("error while fetching",error);
            
        }
    }
    fetchData()
  },[])

    return (
        <context_page.Provider value={{ product }}>
            {children}
        </context_page.Provider>
    );
};

export default ProductProvider;
