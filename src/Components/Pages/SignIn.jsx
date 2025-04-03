

// import axios from "axios";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// function SignIn() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();


//   const handleSubmit = () => {

//     // Fetching all users from the backend:-

//     axios
//       .get("http://localhost:5000/users")
//       .then((res) => {
//         const user = res.data.find(
//           (user) => user.email === email && user.password === password
//         );

//         if (user) {
                                                 
//           console.log("User signed in:", user);
//           localStorage.setItem('user', user.id);
//           localStorage.setItem('isAdmin', user.isAdmin);
           
//           if (user.id === 'cda5') {
//               navigate('/admin');
//           } else {
//               navigate('/');
//           }
//       } else{
//           alert("Invalid email or password.");
//       }

//       })
      
      
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//         setError("An error occurred. Please try again.");
//       });
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
//         <h2 className="text-3xl font-extrabold text-center mb-6 text-gray-700">Sign In</h2>

//         {error && <div className="text-red-500 text-center mb-4">{error}</div>}

//         <ul>
//           {/*Email Input*/}
//           <li className="mb-6">
//             <label
//               htmlFor="email"
//               className="block text-gray-700 font-semibold mb-2 text-lg"
//             >
//               Email Address
//             </label>
//             <input
//               id="email"
//               type="text"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full px-4 py-3 border border-gray-300 rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all"
//             />
//           </li>

//           {/*Password Input*/}
//           <li className="mb-6">
//             <label
//               htmlFor=" password "
//               className="block text-gray-700 font-semibold mb-2 text-lg"
//             >
//               Password
//             </label>
//             <input
//               id=" password "
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full px-4 py-3 border border-gray-300 rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all"
//             />
//           </li>
           

//           {/* Submit Button */}
//           <li>
//             <button
//               onClick={handleSubmit}
//               className="w-full bg-gray-500 text-white py-3 rounded-md text-lg font-semibold hover:bg-gray-600 transition-all focus:outline-none focus:ring-2 focus:ring-gray-500"
//             >
//               Sign In
//             </button>
//             <p className="text-center text-gray-700 mt-4">
//               You don't have an account?{" "}
//               <a href="/signup" className="text-gray-600 hover:text-gray-800 font-semibold transition-colors duration-200">
//                 Signup
//                </a>
//             </p>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default SignIn;




import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

function SignIn() {
  const [userData, setUserData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get('http://localhost:5000/users')
      .then((response) => {
        setUserData(response.data);
      })
      .catch((error) => {
        console.error('Something went wrong', error);
      });
  }, []);
  
  // Formik configuration
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email format')
        .required('Email is required'),
      password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
    }),
    onSubmit: (values) => {
      const user = userData.find(
        (user) => user.email === values.email && user.password === values.password
      );
      console.log(user);
      
      
      
      if (user) {
        localStorage.setItem('user', user.id);
        localStorage.setItem('isAdmin', user.isAdmin);
        if(user.id === 'cda5' ){
          navigate('/admin')
        }else if(!user.isLogged){
          alert("you are restricted")
          
        }else{ 
          navigate('/');
        }
      } else {
        alert('Invalid credentials, try again');
      }
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800">
      <div className="w-[400px] bg-white p-8 rounded-lg shadow-lg ">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Sign In</h2>
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-md font-medium text-gray-800">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              onBlur={formik.handleBlur}
              className={`w-full p-3 border ${
                formik.touched.email && formik.errors.email
                  ? 'border-red-500'
                  : 'border-gray-300'
              } rounded-md mt-1 focus:outline-none focus:ring-2 focus:ring-yellow-200`}
              placeholder="Enter your email"
            />
            {formik.touched.email && formik.errors.email && (
              <div className="text-red-500 text-sm">{formik.errors.email}</div>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-md font-medium text-gray-800">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              onBlur={formik.handleBlur}
              className={`w-full p-3 border ${
                formik.touched.password && formik.errors.password
                  ? 'border-red-500'
                  : 'border-gray-300'
              } rounded-md mt-1 focus:outline-none focus:ring-2 focus:ring-yellow-200`}
              placeholder="Enter your password"
            />
            {formik.touched.password && formik.errors.password && (
              <div className="text-red-500 text-sm">{formik.errors.password}</div>
            )}
          </div>

          <button
            type="submit"
            className="w-full mt-7 p-3 font-medium bg-gray-300 text-black rounded-md hover:bg-gray-600 transition duration-300"
          >
            Submit
          </button>
          <p className='text-gray-600 text-sm mt-4'>You dont have an account ? <a href="/signup" className='text-indigo-600 font-medium hover:text-indigo-800 hover:underline transition duration-200'>signup</a></p>
        </form>
      </div>
    </div>
  );
}

export default SignIn;