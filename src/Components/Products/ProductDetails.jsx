import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';


const ProductDetails = () => {
  const { id } = useParams();
  console.log("id", id);

  const [productDetails, setProductDetails] = useState(null);
  const [userData,setUserData]=useState({cart:[]})
  const navigate=useNavigate()


  useEffect(() => {
    axios
      .get(`http://localhost:5000/products/${id}`)
      .then((response) => {
        setProductDetails(response.data);
      })
      .catch((error) => {
        console.error("Error fetching product details:", error);
      });
  }, [id]);

  const userId = localStorage.getItem('user')
  console.log("users",userId);

  useEffect(()=>{
    if(userId){
        axios.get(`http://localhost:5000/users/${userId}`)
        .then((response)=>{
         const userdata=response.data
         console.log("uu",userdata);
         setUserData(userdata)
        })
        .catch((error)=>{
            console.error("error while fetching",error);
            
        })
    }
  },[userId])

  const handleCart =(id)=>{
    const userId=localStorage.getItem('user')

    if(!userId){
        alert('Please login to view your cart')
        return;
    }
    axios.get(`http://localhost:5000/products/${id}`)
    .then((response)=>{
        const productToAdd=response.data
        
        const cart=Array.isArray(userData.cart)?userData.cart : []
        console.log("fhu",cart);
        
        const productInCart= cart.find((prd)=>prd.id===productToAdd.id)
        console.log("cart",productInCart);
        
      
        if(productInCart){
            alert('Product already exist')
            navigate('/cart')
            
        }else if(!userId){
            alert('Please login to see the cart')
        }else{
            const updatedCart=[...cart,productToAdd]
            axios.patch(`http://localhost:5000/users/${userId}`,{cart:updatedCart})
            .then(()=>{
                setUserData((prev)=>({...prev,cart:updatedCart}))
                alert('Product added successfully')
                navigate('/cart')
            })
            .catch((error)=>{
                console.error("error updating cart",error);
                
            })
        }
        
    })
    .catch((error)=>{
        console.error("error fetching",error);
        
    })
  }
  

  if (!productDetails) {
    return <div className="text-center text-lg text-gray-500">Loading...</div>;
  }

  return (
    <div className="bg-gray-200 mb-10 ">
      <div className="w-[700px] mx-auto rounded-lg shadow-lg bg-white mt-12 pb-16">
        {/* Product Image */}
        <div className="flex justify-center"> 
          <img
            src={productDetails.image}
            alt={productDetails.name}
            className="w-full h-96 object-cover rounded-t-lg mt-5"
          />
        </div>

        {/* Product Details Below Image */}
        <div className="p-4 space-y-3 mt-2"> 
          <h1 className="text-3xl font-semibold text-gray-800">{productDetails.name}</h1>
          <p className="text-lg text-gray-600">{productDetails.description}</p>

          {/* Product Price and Rating */}
          <div className="flex justify-between items-center">
            <span className="text-2xl font-bold text-gray-900">{productDetails.price}</span>
          
          </div>

          {/* Add to Cart Button */}
          <button className="bg-gray-500 text-white py-3 px-6 rounded-lg shadow-md hover:bg-primary-dark focus:outline-none transition duration-300" onClick={()=>handleCart(productDetails.id)}>
            Add to Cart
          </button>
        </div>
      </div>
    
    </div>
  );
};

export default ProductDetails;
