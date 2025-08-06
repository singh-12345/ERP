import React from 'react'
import logo1  from '../../assets/logo-5.png'
import '../../sass/_login.scss'; // Optional for custom tweaks
import logo2 from '../../assets/google-logo.png'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // State to hold and display validation errors
  const [errors, setErrors] = useState({});


  const [showPassword , setshowPassword] = useState(false);
  const togglePassword = () => {
    setshowPassword((prev)=>!prev);
  }

  const navigate = useNavigate();

  // --- VALIDATION LOGIC ---
  // This function checks the form's state and returns if it's valid
  const validateForm = () => {
    const newErrors = {};

    // Check if email is empty
    if (!email) {
      newErrors.email = 'Email is required';
    }

    // Check if password is empty
    if (!password) {
      newErrors.password = 'Password is required';
    }
    
    // Update the errors state
    setErrors(newErrors);

    // Return true if the newErrors object is empty (meaning no errors)
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const isFormValid = validateForm();

    // 2. If, and only if, the form is valid, then navigate
    if (isFormValid) {
      console.log('Form is valid. Navigating to profile...');
      // In a real app, you would perform an API call here to authenticate the user
      navigate('/profile');
    } else {
      console.log('Form is invalid. Please check the errors.');
    }

  };

  const handleGoogleLogin = () => {
    // OAuth logic here
    console.log('Redirecting for Google Login...');

    navigate('/profile');
  };

  return (
    <div className="login-container d-flex align-items-center justify-content-center">
      <div className="login-card card shadow">
        <div className="text-center mb-4">
          <img src={logo1} alt="ERP Logo" className="logo-up" />
          <h4 className="mb-0">Welcome to ERP</h4>
        </div>

        <form onSubmit={handleLogin} noValidate>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              className={`form-control ${errors.email ? 'is-invalid' : ''}`}
              id="email"
              value={email}
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
            />
            {/* Conditionally render the error message */}
            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
          </div>

          <div className="password-wrapper mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type={showPassword ? 'text': 'password'}
              className={`form-control ${errors.password ? 'is-invalid' : ''}`}
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button 
             type='button'
             className='toggle-password'
             onClick={togglePassword}
             tabIndex={-1}
            >
              {showPassword ? '🙈' : '👁️'}
            </button>
            {/* Conditionally render the error message */}
            {errors.password && <div className="invalid-feedback">{errors.password}</div>}
          </div>
           
          <button onClick={handleLogin} type="submit" className="btn btn-primary w-100 mb-3">
            🔒 Sign In
          </button>
        </form>

        <div className="text-center text-muted my-2">OR</div>

        <button onClick={handleGoogleLogin} className="btn btn-outline-secondry d-flex align-items-center justify-content-center gap-2 w-100">
          <img src={logo2} alt="Google" className='google-logo' />
          {/* Login with Google */}
        </button>

        <div className="d-flex justify-content-between mt-3 text-sm">
          <a href="#" className="text-decoration-none">Forgot Password?</a>
          <a href="/register" className="text-decoration-none">Register</a>
        </div>
      </div>
    </div>
  );
}





// const Login = () => {

//   return (
//     <div>
//       {/* <div>
//           <img src={Logo} alt="technohunk-logo" className='img-fluid' />
//       </div> */}
      
//       <div>
//         <h1>Welcome to ERP</h1>
//       </div>
//       <div className='flex flex-col'>
//        <input type="email" 
//        name='Email'
//        placeholder='email'
//       />
//       </div>
//       <div>
//       <input type="password" 
//       name='password'
//       placeholder='password' />
//       </div>
//       <div>
//         <button>Login</button>
//       </div>
//       <div>
//         <button>Sign in with Google</button>
//       </div>

     
//     </div>
//   )

// }

// export default Login;