import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsCheckLg } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function PasswordResetSuccessPage() {
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

      {/* Right Content - Password Reset Success Message */}
      <div className="container d-flex align-items-center justify-content-center">
        <div className="bg-white rounded shadow p-4" style={{ maxWidth: '400px', width: '100%' }}>
          <div className="d-flex justify-content-center align-items-center mb-3">
            <div className="bg-success text-white rounded-circle d-flex justify-content-center align-items-center" style={{ width: '80px', height: '80px' }}>
              <BsCheckLg size={40} />
            </div>
          </div>
          <h2 className="h5 font-weight-bold text-gray-900 text-center mb-2">Password Successfully Reset</h2>
          <p className="text-gray-600 text-center small mb-3">Please check your email and create your new password.</p>
        <a
  className="btn btn-warning btn-sm btn-block"
  href="/login"
>
  Login Account
</a>
        </div>
      </div>
    </div>
  );
}

export default PasswordResetSuccessPage;