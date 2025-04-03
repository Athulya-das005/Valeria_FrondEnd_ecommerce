
// import React, { useState }  from 'react';
// import { Formik, Form, Field } from 'formik';
// import * as Yup from 'yup';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';


// //validation
// const signupValidation = Yup.object({
//     name: Yup.string().min(3, 'Name should be at least 3 characters').required('Please enter your name'),
//     email: Yup.string().email('Please enter a valid email').required('Please enter your email'),
//     password: Yup.string().min(5, 'Password should be at least 5 characters').required('Please enter your password'),
//     cpassword: Yup.string().oneOf([Yup.ref('password')], 'Passwords do not match').required('Please confirm your password'),
// });

// const initialValues = {
//     name: '',
//     email: '',
//     password: '',
//     cpassword: '',
//     cart:[],
//     orders:[],
//     isAdmin:false,
//     isLogged:true
// };

// function SignUp() {
//     const navigate = useNavigate();
//     const [isAdmin, setIsAdmin] = useState(false);
    
//     const gotoSignin = () => {
//         navigate('/signin');
//     };

    
//     const handleSubmit = async (values) => {
//         try {
            
//             const response = await axios.post('http://localhost:5000/users', values);

//             if (response.status === 200) {
             
//                 gotoSignin();
//             }
//         } catch (error) {
            
//             console.error('Error signing up:', error);
//             alert('There was an error signing up. Please try again.');
//         }
//     };

//     return (
//         <div className="min-h-screen bg-gray-900 flex items-center justify-center">
//             <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-lg">
//                 <h2 className="text-3xl font-semibold mb-6 text-center text-gray-100">Sign Up</h2>

//                 <Formik
//                     initialValues={initialValues}
//                     validationSchema={signupValidation}
//                     onSubmit={handleSubmit}
//                 >
//                     {({ errors }) => (
//                         <Form>
//                             {/* Name */}
//                             <div className="mb-6">
//                                 <label htmlFor="name" className="block text-gray-300 font-medium mb-2">Name</label>
//                                 <Field
//                                     type="text"
//                                     name="name"
//                                     className="w-full px-4 py-3 border border-gray-600 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                                 />
//                                 {errors.name && <small className="text-red-500 text-sm">{errors.name}</small>}
//                             </div>

//                             {/* Email */}
//                             <div className="mb-6">
//                                 <label htmlFor="email" className="block text-gray-300 font-medium mb-2">Email</label>
//                                 <Field
//                                     type="email"
//                                     name="email"
//                                     className="w-full px-4 py-3 border border-gray-600 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                                 />
//                                 {errors.email && <small className="text-red-500 text-sm">{errors.email}</small>}
//                             </div>

//                             {/* Password */}
//                             <div className="mb-6">
//                                 <label htmlFor="password" className="block text-gray-300 font-medium mb-2">Password</label>
//                                 <Field
//                                     type="password"
//                                     name="password"
//                                     className="w-full px-4 py-3 border border-gray-600 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                                 />
//                                 {errors.password && <small className="text-red-500 text-sm">{errors.password}</small>}
//                             </div>

//                             {/* Confirm Password */}
//                             <div className="mb-6">
//                                 <label htmlFor="cpassword" className="block text-gray-300 font-medium mb-2">Confirm Password</label>
//                                 <Field
//                                     type="password"
//                                     name="cpassword"
//                                     className="w-full px-4 py-3 border border-gray-600 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                                 />
//                                 {errors.cpassword && <small className="text-red-500 text-sm">{errors.cpassword}</small>}
//                             </div>

//                             {/* Submit Button */}
//                             <div className="mt-6">
//                                 <button
//                                     type="submit"
//                                     className="w-full bg-blue-500 text-white py-3 rounded-md text-lg font-semibold hover:bg-blue-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                                     onClick={gotoSignin}
//                                 >
//                                     Submit
//                                 </button>
//                             </div>
//                         </Form>
//                     )}
//                 </Formik>
//             </div>
//         </div>
//     );
// }

// export default SignUp;





import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  const navigate = useNavigate();
  const [isAdmin,setIsAdmin] = useState(false)
  
  // Define validation schema with Yup
  const validationSchema = Yup.object({
    username: Yup.string()
      .required('Username is required')
      .min(3, 'Username must be at least 3 characters'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required'),
  });

  // Initialize Formik
  const formik = useFormik({
    initialValues: {
      username:'',
      email: '',
      password: '',
      confirmPassword: '',
      cart  :[],
      orders:[],
      isLogged:true
    },
    validationSchema,
    onSubmit: async (values) => {
      console.log('Form Submitted', values);

      const newUser = {
        username:values.username,
        email:values.email,
        password:values.password,
        isAdmin:isAdmin,
        
      }
      try {
        const response = await axios.post('http://localhost:5000/users', newUser, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        console.log(response.data);
        navigate('/signin');
      } catch (error) {
        console.error('Error during sign-up:', error);
        alert(`SignUp failed: ${error.message}`);
      }
    },
  });

  const handleLog = async()=>{
    try {
      const updatedUser = {...formik.values,isLogged:!formik.values.isLogged}

      const response = await axios.patch(`http://localhost:5000/users/${updatedUser.id}`,
        {isLogged:updatedUser.isLogged}
      );
      console.log("updated user",response.data);

      formik.setValues(updatedUser)
      
    }catch (error) {
      console.error("error",error.message);
      
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800">
      <div className="w-[400px] bg-white p-8 rounded-lg shadow-lg shadow-white-00">
        <h1 className="text-3xl font-bold text-center mb-6">Signup</h1>
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-md font-medium text-gray-800">Username</label>
            <input
              id="username"
              name="username"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.username}
              className="w-full p-3 border border-gray-300 rounded-md mt-1 focus:outline-none focus:ring-2 focus:ring-yellow-200"
            />
            {formik.touched.username && formik.errors.username ? (
              <div className="text-red-500">{formik.errors.username}</div>
            ) : null}
          </div>

          <div>
            <label htmlFor="email" className="block text-md font-medium text-gray-800">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              className="w-full p-3 border border-gray-300 rounded-md mt-1 focus:outline-none focus:ring-2 focus:ring-yellow-200"
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-500">{formik.errors.email}</div>
            ) : null}
          </div>

          <div>
            <label htmlFor="password" className="block text-md font-medium text-gray-800">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              className="w-full p-3 border border-gray-300 rounded-md mt-1 focus:outline-none focus:ring-2 focus:ring-yellow-200"
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="text-red-500">{formik.errors.password}</div>
            ) : null}
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-md font-medium text-gray-800">Confirm Password</label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.confirmPassword}
              className="w-full p-3 border border-gray-300 rounded-md mt-1 focus:outline-none focus:ring-2 focus:ring-yellow-200"
            />
            {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
              <div className="text-red-500">{formik.errors.confirmPassword}</div>
            ) : null}
          </div>

           <div className="flex items-center mt-4">
         
            
           </div>
          <button
            type="submit"
            className="w-full mt-4 p-3 font-medium  text-gray-300 rounded-md hover:bg-gray-800 transition duration-300"
          >
            Submit
          </button>
          <p className='text-gray-600 text-sm mt-4'>Already have an account ? <a href="/signin" className='text-indigo-600 font-medium hover:text-indigo-800 hover:underline transition duration-200'>signup</a></p>
        </form>
      </div>
    </div>
  );
};

export default Signup;