import React from 'react';
import stripelogo from '../../assets/img/stripe.jpeg'; // Adjust the path as necessary
import 'bootstrap/dist/css/bootstrap.min.css';
import RegistrationSideBar from '../RegistrationSideBar';

function KYCPage() {
  return (
    <div className="min-vh-100 d-flex bg-light">
      {/* Left Sidebar */}
      <RegistrationSideBar/>

      {/* Right Content */}
      <div className="container d-flex align-items-center justify-content-center">
        <div className="bg-white rounded shadow p-4" style={{ maxWidth: '400px', width: '100%' }}>
          <div className="d-flex justify-content-start mb-3">
            <button className="btn btn-link text-secondary">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5a.5.5 0 0 0 .5-.5z"/>
              </svg>
            </button>
          </div>
          <div className="d-flex flex-column align-items-center mb-4">
            <img
              src={stripelogo}
              alt="Stripe Logo"
              className="img-fluid mb-3"
              style={{ maxWidth: '150px' }}
            />
            <h2 className="h5 font-weight-bold text-gray-900 text-center mb-2">Verify your identity to continue with Kooja</h2>
            <p className="text-gray-600 text-center small">
              Get ready to take a photo of your ID and a selfie
            </p>
          </div>
          <a href="/MobileVerification">
          <button className="btn btn-warning btn-sm btn-block" style={{ width:330 }}>
            Verify me
          </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default KYCPage;