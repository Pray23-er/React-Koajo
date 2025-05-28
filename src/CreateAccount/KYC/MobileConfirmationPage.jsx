import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import stripelogo from '../../assets/img/stripe.jpeg'; // Adjust the path as necessary
import { BsArrowLeft, BsCheckCircleFill } from 'react-icons/bs'; // For icons
import RegistrationSideBar from '../RegistrationSideBar';

function MobileVerificationPage() {
  return (
    <div className="min-vh-100 d-flex bg-light">
      {/* Left Sidebar */}
      <RegistrationSideBar/>

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