import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsArrowLeft } from 'react-icons/bs';

function AddAccountsPage() {
  return (
    <div className="min-vh-100 d-flex bg-light">
      {/* Left Sidebar */}
      <div className="text-white p-4 d-none d-md-flex flex-column justify-content-between" style={{ width: '300px', backgroundColor:'#276a6a'}}>
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
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
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
          <div className="d-flex justify-content-start mb-3">
            <button className="btn btn-link text-secondary">
              <BsArrowLeft size={24} />
            </button>
          </div>
          <div className="d-flex flex-column align-items-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" className="bi bi-bank mb-2 text-secondary" viewBox="0 0 16 16">
              <path d="m8 0 6.61 3h.89a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h.89L8 0ZM3.777 3h8.447L8 1 3.777 3ZM2 4v3h12V4H2Zm1 5v6h10V9H3Zm0 0h10v3H3V9Z"/>
            </svg>
            <h2 className="h5 font-weight-bold text-gray-900 text-center mb-2">Add accounts to see all your finances in one place</h2>
            <p className="text-gray-600 text-center small mb-3">Track multiple account types including bank accounts, investments, and more.</p>
            <a href="/connectaccount">
            <button className="btn btn-warning btn-sm btn-block mb-2">
              Add Account
            </button>
            </a>
            <button className="btn btn-link btn-sm text-secondary">
              Skip for now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddAccountsPage;