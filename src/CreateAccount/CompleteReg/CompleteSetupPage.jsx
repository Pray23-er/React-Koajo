import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsCheckLg } from 'react-icons/bs';

function SetupCompletePage() {
  return (
    <div className="min-vh-100 d-flex bg-light">
      {/* Left Sidebar */}
      <div className="text-white p-4 d-none d-md-flex flex-column justify-content-between" style={{ width: '300px', backgroundColor:'#276a6a' }}>
        <div>
          <h1 className="h3 font-weight-bold mb-4">
            Ko<span className="text-warning">ajo</span>
          </h1>
          <div className="d-flex align-items-center mb-3">
            <div className="bg-white rounded-circle d-flex justify-content-center align-items-center mr-3" style={{ width: '30px', height: '30px', color: '#28a745' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-check-lg" viewBox="0 0 16 16">
                <path d="M12.736 3.97a.7.7 0 0 1 1.047 0c.286.289.29.756 0 1.045L6.5 12.046l-3.97-3.97a.7.7 0 0 1 1.042-.018l3.72 3.712 9.32-9.318a.719.719 0 0 1 1.047 0z"/>
              </svg>
            </div>
            <div>
              <strong className="d-block">Create Account</strong>
              <span className="text-white-50 small">Create your account or log in to start.</span>
            </div>
          </div>
          <div className="d-flex align-items-center mb-3">
            <div className="bg-white rounded-circle d-flex justify-content-center align-items-center mr-3" style={{ width: '30px', height: '30px', color: '#28a745' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-check-lg" viewBox="0 0 16 16">
                <path d="M12.736 3.97a.7.7 0 0 1 1.047 0c.286.289.29.756 0 1.045L6.5 12.046l-3.97-3.97a.7.7 0 0 1 1.042-.018l3.72 3.712 9.32-9.318a.719.719 0 0 1 1.047 0z"/>
              </svg>
            </div>
            <div>
              <strong className="d-block">Confirmation Code</strong>
              <span className="text-white-50 small">Verify your email with the code sent to your inbox.</span>
            </div>
          </div>
          <div className="d-flex align-items-center mb-3">
            <div className="bg-white rounded-circle d-flex justify-content-center align-items-center mr-3" style={{ width: '30px', height: '30px', color: '#28a745' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-check-lg" viewBox="0 0 16 16">
                <path d="M12.736 3.97a.7.7 0 0 1 1.047 0c.286.289.29.756 0 1.045L6.5 12.046l-3.97-3.97a.7.7 0 0 1 1.042-.018l3.72 3.712 9.32-9.318a.719.719 0 0 1 1.047 0z"/>
              </svg>
            </div>
            <div>
              <strong className="d-block">KYC</strong>
              <span className="text-white-50 small">Verify your identity to Continue with Kooja</span>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <div className="bg-white rounded-circle d-flex justify-content-center align-items-center mr-3" style={{ width: '30px', height: '30px', color: '#28a745' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-check-lg" viewBox="0 0 16 16">
                <path d="M12.736 3.97a.7.7 0 0 1 1.047 0c.286.289.29.756 0 1.045L6.5 12.046l-3.97-3.97a.7.7 0 0 1 1.042-.018l3.72 3.712 9.32-9.318a.719.719 0 0 1 1.047 0z"/>
              </svg>
            </div>
            <div>
              <strong className="d-block">Complete</strong>
              <span className="text-white-50 small">Setup is complete! Start managing your finances.</span>
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
          <div className="d-flex justify-content-center align-items-center mb-3">
            <div className="bg-success text-white rounded-circle d-flex justify-content-center align-items-center" style={{ width: '80px', height: '80px' }}>
              <BsCheckLg size={40} />
            </div>
          </div>
          <h2 className="h5 font-weight-bold text-gray-900 text-center mb-3">Set up complete!</h2>
          <p className="text-gray-600 text-center small mb-4">You're ready to shoot for the stars.</p>
          <button className="btn btn-warning btn-sm btn-block">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

export default SetupCompletePage;