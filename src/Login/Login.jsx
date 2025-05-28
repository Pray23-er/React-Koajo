import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();
    console.log('Login submitted:', { email, password, rememberMe });
    // In a real application, you would handle the API call here
    alert('Login submitted!');
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-vh-100 d-flex bg-light">
     <div className="text-white p-5 d-none d-md-flex flex-column justify-content-between" style={{ width: '40%',
        backgroundColor:'#276a6a'
        }}>
        <div>
          <div className="">
            <div  style={{ fontSize: '2.5rem',
              fontWeight: 'bold',
              color: 'white',
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              padding:'15px',
              borderRadius: '10px',
              marginTop:'450px',
              width:'auto', /* Changed from 80px to auto */
              alignItems:'center',
              display: 'inline-block',  /* Added display: inline-block */
              lineHeight: '1',        /*Added lineHeight*/
              }}>
              Ko
            </div>
          </div>
          <p className="lead" style={{ fontSize: '1.3rem' }}>
            Whether it's a home, a business, or the freedom to travel, your savings are the foundation of your dreams.
          </p>
        </div>
        <p className="text-white-50 small">
          An Integrated Dashboard Designed to Elevate Your Financial Insights and Provide Comprehensive Analysis of your Economic Landscape
        </p>
        <div className="bg-white-50 rounded-pill" style={{ height: '8px', width: '60%' }}>
          <div className="bg-warning rounded-pill" style={{ height: '8px', width: '40%' }}></div>
        </div>
      </div>

      <div className="container d-flex align-items-center justify-content-center">
        <div className="card shadow-sm p-4" style={{ maxWidth: '400px', width: '100%' }}>
          <h2 className="h5 font-weight-bold text-gray-900 mb-3">Login First to Your Account</h2>
          <p className="text-gray-600 mb-4 small">Sign in to your Koajo account to access all Koajo products.</p>
          <form onSubmit={handleLogin}>
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-eye-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                    <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8z" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="mb-3 d-flex justify-content-between align-items-center">
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
              <a href="/resetpassword" className="text-info small">
                Forgot Password
              </a>
            </div>
            <button type="buttton" className="btn btn-warning btn-sm btn-block">
              <a href="/userdashboard">Login</a>
            </button>
          </form>
          <hr className="my-3" />
          <p className="text-center text-muted small mb-2">or login with</p>
          <button className="btn btn-outline-secondary btn-sm btn-block d-flex align-items-center justify-content-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-google text-danger mr-2"
              viewBox="0 0 16 16"
            >
              <path d="M15.545 6.558a9.829 9.829 0 0 1 .2-2.278H8.292v3.451H12.184c.871 1.635 2.133 4.14 2.133 4.14-.646-2.05-2.099-3.844-4.914-3.844-2.816 0-5.189 2.327-5.189 5.202 0 2.875 2.373 5.199 5.189 5.199 2.903 0 4.852-2.011 4.852-4.914 0-1.112-.224-2.051-.635-2.838H8.292v-3.451h7.119z" />
            </svg>
            Google
          </button>
          <p className="mt-3 text-center text-muted small">
            Don't have an account? <a href="/createaccount" className="text-info">Register Here</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;