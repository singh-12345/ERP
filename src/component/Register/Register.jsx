import React, { useState } from 'react';
import '../../sass/_register.scss';
import logo1 from '../../assets/logo-5.png';
import logo2 from '../../assets/google-logo.png';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);

  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const togglePassword = () => setShowPassword((prev) => !prev);
  const toggleConfirmPassword = () => setShowConfirmPassword((prev) => !prev);

  const handleRegister = (e) => {
    e.preventDefault();

    // Basic Validation
    const newErrors = {};
    if (!fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!email.trim()) newErrors.email = 'Email is required';
    if (!password.trim()) newErrors.password = 'Password is required';
    if (!confirmPassword.trim()) newErrors.confirmPassword = 'Please confirm your password';
    if (password !== confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    if (!acceptTerms) newErrors.terms = 'You must accept the terms';

    setErrors(newErrors);

    // If no errors, navigate to login
    if (Object.keys(newErrors).length === 0) {
      navigate('/login');
    }
  };

  return (
    <div className="register-container d-flex align-items-center justify-content-center">
      <div className="register-card card shadow p-4">

        {/* Logo & Heading */}
        <div className="text-center mb-4">
          <img src={logo1} alt="ERP Logo" className="logo-up mb-2" style={{ width: '80px' }} />
          <h4 className="mb-0">Create Your ERP Account</h4>
        </div>

        {/* Registration Form */}
        <form onSubmit={handleRegister}>
          <div className="mb-3">
            <label htmlFor="fullName" className="form-label">Full Name</label>
            <input
              type="text"
              className={`form-control ${errors.fullName ? 'is-invalid' : ''}`}
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Enter your name"
            />
            {errors.fullName && <div className="invalid-feedback">{errors.fullName}</div>}
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input
              type="email"
              className={`form-control ${errors.email ? 'is-invalid' : ''}`}
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
          </div>

          <div className="password-wrapper mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              className={`form-control ${errors.password ? 'is-invalid' : ''}`}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
            <button
              type="button"
              className="toggle-password"
              onClick={togglePassword}
              tabIndex={-1}
            >
              {showPassword ? '🙈' : '👁️'}
            </button>
            {errors.password && <div className="invalid-feedback">{errors.password}</div>}
          </div>

          <div className="password-wrapper mb-3">
            <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Enter your confirm password"
            />
            <button
              type="button"
              className="toggle-password"
              onClick={toggleConfirmPassword}
              tabIndex={-1}
            >
              {showConfirmPassword ? '🙈' : '👁️'}
            </button>
            {errors.confirmPassword && <div className="invalid-feedback">{errors.confirmPassword}</div>}
          </div>

          <div className="form-check mb-3">
            <input
              type="checkbox"
              className={`form-check-input ${errors.terms ? 'is-invalid' : ''}`}
              id="terms"
              checked={acceptTerms}
              onChange={(e) => setAcceptTerms(e.target.checked)}
            />
            <label className="form-check-label" htmlFor="terms">
              I accept the <a href="#">Terms and Conditions</a>
            </label>
            {errors.terms && <div className="invalid-feedback d-block">{errors.terms}</div>}
          </div>

          <button type="submit" className="btn btn-success w-100">
            📝 Register
          </button>
        </form>

        {/* Google Sign-Up */}
        <div className="text-center text-muted my-3">OR</div>
        <button className="btn btn-outline w-100 d-flex align-items-center justify-content-center gap-2">
          <img src={logo2} alt="Google" className="google-logo" />
        </button>

        <div className="text-center mt-3 text-sm">
          Already have an account? <a href="/login">Login</a>
        </div>
      </div>
    </div>
  );
}
