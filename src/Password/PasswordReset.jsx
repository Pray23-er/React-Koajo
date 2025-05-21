import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsArrowLeft } from 'react-icons/bs';

function ResetPasswordPage() {
  const [email, setEmail] = useState('yourname@gmail.com'); // Initial value as per the image

  const handleContinue = (event) => {
    event.preventDefault();
    console.log('Reset Password requested for:', email);
    // In a real application, you would send a reset link to this email
    alert(`Reset password link sent to: ${email}`);
  };

  return (
    <div className="min-vh-100 d-flex bg-light">
      {/* Left Placeholder (for the image/branding) */}
      <div className="text-white p-4 d-none d-md-flex flex-column justify-content-center" style={{ width: '400px', backgroundColor:'#276a6a' }}>
        <div className="d-flex align-items-center mb-3">
          <div className="bg-white text-info rounded-circle d-flex justify-content-center align-items-center mr-2" style={{ width: '40px', height: '40px', fontSize: '1.5rem', fontWeight: 'bold' }}>
            Ko
          </div>
          <h1 className="h3 font-weight-bold">ajo</h1>
        </div>
        <h2 className="h4 font-weight-bold mb-3">One Dashboard to Optimize All Financial Insights</h2>
        <p className="small text-white-50">An Integrated Dashboard Designed to Elevate Your Financial Insights and Provide Comprehensive Analysis of Your Economic Landscape.</p>
      </div>

      {/* Right Content - Reset Password Form */}
      <div className="container d-flex align-items-center justify-content-center">
        <div className="bg-white rounded shadow p-4" style={{ maxWidth: '400px', width: '100%' }}>
          <div className="d-flex justify-content-start mb-3">
            <button className="btn btn-link text-secondary">
              <BsArrowLeft size={24} />
            </button>
          </div>
          <h2 className="h5 font-weight-bold text-gray-900 mb-2">Reset Your Password</h2>
          <p className="text-gray-600 mb-3 small">Just follow the steps to get back into your Koajo account!</p>
          <form onSubmit={handleContinue}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label small text-gray-700">Email</label>
              <input
                type="email"
                className="form-control form-control-sm"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
           <a href="/setpassword">
            <button type="button" className="btn btn-warning btn-sm btn-block">
              Continue
            </button>
           </a>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ResetPasswordPage;