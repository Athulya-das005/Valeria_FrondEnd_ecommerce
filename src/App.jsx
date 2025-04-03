import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import SignUp from './Components/SignUp';
import SignIn from './Components/Pages/SignIn';
import Home from './Components/Pages/Home';
import Navbar from './Components/Navbar';
import Service from './Components/Pages/Services';
import Contact from './Components/Pages/Contact';
import ProductProvider from './Components/Context/ProductContext';
import Product from './Components/Products/Product';
import ProductDetails from './Components/Products/productDetails';
import CartPage from './Components/CartPage/CartPage';
import PayForm from './Components/PaymentPage/PayForm';
import Order from './Components/PaymentPage/Order';
import AdminMain from './Components/Admin/AdminMain';
import Dashboard from './Components/Admin/Dashboard';
import ProductsAdmin from './Components/Admin/Products/Products';
import SideBar from './Components/Admin/SideBar'; // Import Sidebar
import EditDetails from './Components/Admin/Products/EditDetails';
import AddProducts from './Components/Admin/AddProducts';
import User from './Components/Admin/user/user';
import UserDetails from './Components/Admin/user/userDetails';
function App() {
  return (
    <ProductProvider>
      <Router>
        <AppContent />
      </Router>
    </ProductProvider>
  );
}

function AppContent() {
  const location = useLocation();
  const excludeRoutes = ["/payform", "/signin", "/signup"];
  const hideNavbar = location.pathname.startsWith("/admin") || excludeRoutes.some(path => location.pathname === path);

  return (
    <>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/services' element={<Service />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/products' element={<Product />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/productdetails/:id' element={<ProductDetails />} />
        <Route path='/payform' element={<PayForm />} />
        <Route path='/orders' element={<Order />} />

        {/* Admin routes */}

        <Route path='/admin' element={<AdminMain />}>
          <Route index element={<Dashboard />} />
          <Route path='productsadmin' element={<ProductsAdmin />} />
          <Route path='editDetails/:id' element={<EditDetails/>}/>
          <Route path='addProduct' element={<AddProducts/>}/>
          <Route path='users' element={<User/>}/>
          <Route path='userdetails/:id' element={<UserDetails/>}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
