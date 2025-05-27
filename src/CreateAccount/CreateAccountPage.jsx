import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';

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
      <div className="text-white p-4 d-none d-md-flex flex-column justify-content-between" style={{ width: '300px',backgroundColor:'#276a6a' }}>
        <div>
          <h1 className="h3 font-weight-bold mb-4">
            Ko<span className="text-warning">ajo</span>
          </h1>
          <div className="d-flex align-items-center mb-3">
            <div className="bg-white rounded-circle d-flex justify-content-center align-items-center mr-3" style={{ width: '30px', height: '30px', color: '#28a745' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-person-plus-fill" viewBox="0 0 16 16">
                <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                <path fillRule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13v-1.5a.5.5 0 0 1 .5-.5z"/>
              </svg>
            </div>
            <div>
              <strong className="d-block">Create Account</strong>
              <span className="text-white-50 small">Create your account or log in to start.</span>
            </div>
          </div>
          <div className="d-flex align-items-center mb-3">
            <div className="bg-secondary rounded-circle d-flex justify-content-center align-items-center mr-3" style={{ width: '30px', height: '30px' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-clock-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.5V3.5z"/>
              </svg>
            </div>
            <div>
              <strong className="d-block">Confirmation Code</strong>
              <a href="/email"><span className="text-white-50 small">Verify your email with the code sent to your inbox.</span></a>
            </div>
          </div>
          <div className="d-flex align-items-center mb-3">
            <div className="bg-secondary rounded-circle d-flex justify-content-center align-items-center mr-3" style={{ width: '30px', height: '30px' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-shield-fill-check" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.156.643-.216 1.33-.058 2.007C1.72 6.802 1.382 7.815 1.05 9.218-.072 12.553 0 13 0 13s1.601-.586 4.102-1.993c2.5-1.407 5.985-1.407 8.486 0C14 12.414 16 13 16 13s-.072-.447-1.05-3.782c-.158-.677-.218-1.364-.059-2.007a1.54 1.54 0 0 0-1.044-1.263c-.658-.215-1.777-.57-2.887-.87C9.843.266 8.69 0 8 0zm2.146 5.146a.5.5 0 0 1 .708 0l1.447 1.446 2.053-2.053a.5.5 0 0 1 .708.708L9.757 6.854l-1.5 1.5a.5.5 0 0 1-.708 0L5.854 6.854l2.053-2.053a.5.5 0 0 1 .708 0z"/>
              </svg>
            </div>
            <div>
              <strong className="d-block">KYC</strong>
              <a href="/kycConfirmation"><span className="text-white-50 small">Verify your identity to Continue with Kooja.</span></a>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <div className="bg-secondary rounded-circle d-flex justify-content-center align-items-center mr-3" style={{ width: '30px', height: '30px' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
              </svg>
            </div>
            <div>
              <strong className="d-block">Complete</strong>
             <a href="/addaccount">
              <span className="text-white-50 small">Add your account to Continue</span>
             </a>
            </div>
          </div>
        </div>
        <div className="text-white-50 small">
          © Koajo. All rights reserved. <br />
          <a href="#" className="text-white-50 text-decoration-underline">Term & Condition</a> | <a href="#" className="text-white-50 text-decoration-underline">Privacy & Policy</a>
        </div>
      </div>

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
            <button type="submit" className="btn btn-warning btn-sm btn-block">
              Login
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