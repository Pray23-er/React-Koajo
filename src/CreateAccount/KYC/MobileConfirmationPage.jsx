import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import stripelogo from '../../assets/img/stripe.jpeg'; // Adjust the path as necessary
import { BsArrowLeft, BsCheckCircleFill } from 'react-icons/bs'; // For icons

function MobileVerificationPage() {
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
              <BsCheckCircleFill size={18} />
            </div>
            <div>
              <strong className="d-block">Create Account</strong>
              <span className="text-white-50 small">Create your account or log in to start.</span>
            </div>
          </div>
          <div className="d-flex align-items-center mb-3">
            <div className="bg-white rounded-circle d-flex justify-content-center align-items-center mr-3" style={{ width: '30px', height: '30px', color: '#28a745' }}>
              <BsCheckCircleFill size={18} />
            </div>
            <div>
              <strong className="d-block">Confirmation Code</strong>
              <span className="text-white-50 small">Verify your email with the code sent to your inbox.</span>
            </div>
          </div>
          <div className="d-flex align-items-center mb-3">
            <div className="bg-white rounded-circle d-flex justify-content-center align-items-center mr-3" style={{ width: '30px', height: '30px', color: '#28a745' }}>
              <BsCheckCircleFill size={18} />
            </div>
            <div>
              <strong className="d-block">KYC</strong>
              <span className="text-white-50 small">Verify your identity to Continue with Kooja</span>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <div className="bg-secondary rounded-circle d-flex justify-content-center align-items-center mr-3" style={{ width: '30px', height: '30px' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-person-plus-fill" viewBox="0 0 16 16">
                <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                <path fillRule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13v-1.5a.5.5 0 0 1 .5-.5z"/>
              </svg>
            </div>
            <div>
              <strong className="d-block">Complete</strong>
              <span className="text-white-50 small">Add your account to Continue</span>
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
            <div className="progress w-75 mb-2" style={{ height: '8px' }}>
              <div className="progress-bar bg-info" role="progressbar" style={{ width: '50%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <img
              src={stripelogo}
              alt="Stripe Logo"
              className="img-fluid mb-2"
              style={{ maxWidth: '150px' }}
            />
            <h2 className="h5 font-weight-bold text-gray-900 text-center mb-3">Continue on your mobile device</h2>
            <p className="text-gray-600 text-center small mb-3">
              Scan the QR code to use the camera on your mobile device.
            </p>
            <div className="bg-light p-3 rounded">
              {/* Placeholder for QR Code */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="120" height="120">
                <rect width="20" height="20" fill="#333"/>
                <rect x="80" width="20" height="20" fill="#333"/>
                <rect y="80" width="20" height="20" fill="#333"/>
                <rect x="20" y="20" width="20" height="20" fill="#333"/>
                <rect x="60" y="20" width="20" height="20" fill="#333"/>
                <rect x="20" y="60" width="20" height="20" fill="#333"/>
                <rect x="60" y="60" width="20" height="20" fill="#333"/>
                {/* More QR code pattern elements */}
                <rect x="40" y="40" width="20" height="20" fill="#555"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileVerificationPage;