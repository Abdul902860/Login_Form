// import React, {useState} from 'react'
// import './style.css'
// import   { Visibility,VisibilityOff } from '@mui/icons-material'
// import { InputAdornment , IconButton } from '@mui/material';
// import { toast } from 'react-hot-toast';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios'
// const Login = () => {

//     const navigate = useNavigate();
//   const [formErrors, setFormErrors] = useState({ email: null, password: null });
//   const [formValues, setFormValues] = useState({ email: "", password: "" });
//   const [showPassword, setShowPassword] = useState(false);


//   const handleChange = (e) => {
    
//     const { name, value } = e.target;
//     setFormValues(prev => ({ ...prev, [name]: value }));
    
//   };

//   const togglePasswordVisibility = () => {
//     setShowPassword((prev) => !prev);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setFormErrors({ email: null, password: null })
//     console.log("form value", formValues);
//     let errorCheck = false;
//     if (!formValues.email) {
//       setFormErrors(pv => ({ ...pv, email: "Username is required" }));
//       errorCheck = true;
//     } else {
//       const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
//       if (!regex.test(formValues.email)) {
//         setFormErrors(pv => ({ ...pv, email: "Invalid Username" }))
//         errorCheck = true;
//       }
//     }
//     if (!formValues.password) {
//       setFormErrors(pv => ({ ...pv, password: "Please fill password." }))
//       errorCheck = true;
//     };
//     if (errorCheck) {

//       alert("Fix error");
//       return;
//     }

//     axios.post("http://localhost:5000/login",formValues )
//       .then(res => {
//         console.log("Res", res);
//         if (res.data === "Success") {
//           toast.success("Welcome User");
//           setTimeout(() => {
//             navigate("/dashboard")
            
//           }, 3000);
//         }else{
//           toast.error("No User exist")
//         }
        
//       })
//       .catch(err => console.log("Error logging user", err))


//   };
// // const image = ("login-bg-1.svg")

//   return (
//     <>
//    <div  style={{backgroundImage:"url(login-bg-1.svg)", backgroundRepeat:"no-repeat", backgroundSize:"", marginBottom:'100px'}}>
//       {/* <img src='login-bg-1.svg' alt='LoginBackground' height={"500px"} width={"1400px"}  /> */}
//       <div className='d-flex justify-content-center' style={{position:"absolute" , marginLeft:"650px" }}>
//         <img src='Logo.svg' alt='logo' />
//       </div>
//         <h5 style={{color:'white',display:'flex',justifyContent:'center', marginTop:'100px', marginLeft:'550px',marginBottom:"0px", position:'absolute'}}>Online Project Management</h5>
//     <div className='d-flex justify-content-center align-items-center  100-w vh-100'> 
//         <div className='form-container p-5 mt-3 rounded bg-white border' style={{boxShadow:" 3px 5px 10px #888888 " }}>
    
       

//             <form action=''>
//                 <h6 className='text-center 100-w '>Login to  get Started</h6>
//                 <div className='mb-2 p-2' >
//                     <label htmlFor='email'>Email</label>
//                     <input type="email"
//                      placeholder='Username' 
//                      className='form-control' 
//                      onChange={(e)=>handleChange(e)}

//                     />
//                 </div>
//                 {formErrors.email && <span className="text-danger">{formErrors.email}</span>}

//                 <div className='mb-2 p-2'>
//                     <label htmlFor='password'>Password</label>
//                     <input type="password"
//                      placeholder='Password'
//                      className='form-control'
//                      onChange={(e)=>handleChange(e)}
//                      InputProps={{
//                     endAdornment: (
//                       <InputAdornment position="end">
//                         <IconButton onClick={togglePasswordVisibility}>
//                           {showPassword ? <VisibilityOff /> : <Visibility />}
//                         </IconButton>
//                       </InputAdornment>
//                     ),
//                   }}
//                       />
//                 </div>
//                 {formErrors.password && <span className="text-danger">{formErrors.password}</span>}

//                 <p className='text-end mt-1 p-2'>
//                    <a href='#'> Forgot Password </a>

//                 </p>
//                 <div className=' d-flex justify-content-center align-items-center m-4'>

//                 <button className='btn btn-secondary'
//                  style={{borderRadius:"50px",width:"150px"}}
//                  onSubmit={(e)=>handleSubmit(e)}
//                  >LogIn</button>
//                 </div>
//             </form>

//         </div>
//         </div>
        
//         </div>
//         </>

//   )
// }

// export default Login

import React, { useState } from 'react';
import './style.css';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { InputAdornment, IconButton } from '@mui/material';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();
  const [formErrors, setFormErrors] = useState({ email: null, password: null });
  const [formValues, setFormValues] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors({ email: null, password: null });
    console.log('form value', formValues);
    let errorCheck = false;
    if (!formValues.email) {
      setFormErrors((pv) => ({ ...pv, email: 'Username is required' }));
      errorCheck = true;
    } else {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
      if (!regex.test(formValues.email)) {
        setFormErrors((pv) => ({ ...pv, email: 'Invalid Username' }));
        errorCheck = true;
      }
    }
    if (!formValues.password) {
      setFormErrors((pv) => ({ ...pv, password: 'Please fill password.' }));
      errorCheck = true;
    }
    if (errorCheck) {
      alert('Fix error');
      return;
    }

    axios
      .post('http://localhost:5000/login', formValues)
      .then((res) => {
        console.log('Res', res);
        if (res.data === 'Success') {
          toast.success('Welcome User');
          setTimeout(() => {
            navigate('/dashboard');
          }, 3000);
        } else {
          toast.error('No User exists');
        }
      })
      .catch((err) => console.log('Error logging user', err));
  };

  return (
    <div 
      className='login-bg'
      style={{
        // marginBottom: '100px',
        backgroundImage: "url('login-bg-1.svg')",
        backgroundRepeat: 'no-repeat',
        // backgroundSize: 'cover',
      }}
    >
      <div className='logo-container d-flex justify-content-center'>
        <img src='Logo.svg' alt='logo'  />
      </div>
      <h5 className='text-center text-white mt-5'>Online Project Management</h5>
     <div className='d-flex justify-content-center align-items-center'>
     <div className='form-container bg-white border rounded' style={{height:'380px',marginTop:'80px', boxShadow:" 3px 5px 10px #888888"}} >
        <form onSubmit={handleSubmit}>
          <h6 className='text-center mt-2'>Login to get Started</h6>
          <div className='mb-2 p-2'> 
>
            <label htmlFor='email'>Email</label>
            
            <input
              type='email'
              name='email'
              placeholder='Username'
              className='form-control'
              onChange={handleChange}
            />
           
           {formErrors.password && <span className='text-danger'>{formErrors.password}</span>}
          </div>
          <div className='mb-2 p-2'>
            <label htmlFor='password'>Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              name='password'
              placeholder='Password'
              width='80px'
              className='form-control'
              onChange={handleChange}
              endAdornment={
                <InputAdornment position='end'>
                  <IconButton onClick={togglePasswordVisibility}>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
            {formErrors.password && <span className='text-danger'>{formErrors.password}</span>}
          </div>
          <p className='text-end mt-1 p-2'>
            <a href='#'>Forgot Password</a>
          </p>
          <div className='d-flex justify-content-center align-items-center m-4'>
            <button className='btn btn-primary' style={{ borderRadius: '50px', width: '150px' }}>
              Log In
            </button>
          </div>
        </form>
      </div>
     </div>
    </div>
  );
};

export default Login;
