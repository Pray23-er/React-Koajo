import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';
import RegistrationSideBar from './RegistrationSideBar';

function CreateAccountPage() {
  const [email, setEmail] = useState('');
  const [mobilePhone, setMobilePhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleCreateAccount = (event) => {
    event.preventDefault();
    console.log('Create Account submitted:', { email, mobilePhone, password, confirmPassword, rememberMe });
    // In a real application, you would handle the API call here
    alert('Create Account submitted!');
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="min-vh-100 d-flex bg-light">
      {/* Left Sidebar */}
      <RegistrationSideBar/>
      {/* Right Content */}
      <div className="container d-flex align-items-center justify-content-center">
        <div className="bg-white rounded shadow p-4" style={{ maxWidth: '400px', width: '100%' }}>
          <h2 className="h5 font-weight-bold text-gray-900 mb-3">Let's Create Your Account</h2>
          <p className="text-gray-600 mb-4 small">Get started with Koajo and take control of your finances.</p>
          <form onSubmit={handleCreateAccount}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label small text-gray-700">Email</label>
              <input
                type="email"
                className="form-control form-control-sm"
                id="email"
                placeholder="Enter Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="mobilePhone" className="form-label small text-gray-700">Mobile Phone</label>
              <input
                type="tel"
                className="form-control form-control-sm"
                id="mobilePhone"
                placeholder="Enter Your mobile phone"
                value={mobilePhone}
                onChange={(e) => setMobilePhone(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label small text-gray-700">Password</label>
              <div className="input-group input-group-sm">
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="form-control"
                  id="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <BsEyeSlashFill /> : <BsEyeFill />}
                </button>
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label small text-gray-700">Confirm Password</label>
              <div className="input-group input-group-sm">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  className="form-control"
                  id="confirmPassword"
                  placeholder="Enter your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  onClick={toggleConfirmPasswordVisibility}
                >
                  {showConfirmPassword ? <BsEyeSlashFill /> : <BsEyeFill />}
                </button>
              </div>
            </div>
            <div className="mb-3 d-flex align-items-center">
              <div className="form-check small">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="rememberMe"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <label className="form-check-label text-gray-700" htmlFor="rememberMe">
                  Remember me
                </label>
              </div>
          
            </div>
          <button type="submit" className="btn btn-warning btn-sm btn-block" style={{ width:200,
            marginLeft:50
           }}>
              Register
            </button>
          </form>
          <p className="mt-3 text-center text-gray-600 small">
            Already have an account? <a href="/login" className="text-info">Login Here</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default CreateAccountPage;