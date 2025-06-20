import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import stripelogo from '../../assets/img/stripe.jpeg';
import { BsArrowLeft, BsCheckCircleFill } from 'react-icons/bs'; // For icons
import RegistrationSideBar from '../RegistrationSideBar';

function StripeKYCConfirmationPage() {
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
            <img
              src={stripelogo}
              alt="Stripe Logo"
              className="img-fluid mb-2"
              style={{ maxWidth: '150px' }}
            />
            <h2 className="h5 font-weight-bold text-gray-900 text-center mb-3">Kooja works with Stripe to verify your identity</h2>
            <ul className="list-unstyled text-gray-600 small">
              <li className="d-flex align-items-start mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-camera-fill mr-2" viewBox="0 0 16 16">
                  <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                  <path d="M2 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H2zm12 1a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V5a.5.5 0 0 1 .5-.5h12z"/>
                </svg>
                You'll take a photo of a valid ID, then take a selfie to make sure it's yours.
              </li>
              <li className="d-flex align-items-start mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-shield-lock-fill mr-2" viewBox="0 0 16 16">
                  <path d="M12 0h-8a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm-2 9a1.97 1.97 0 0 1-1.017-1.342L10.3 6.248a1.5 1.5 0 0 0-2.12-2.122L7.34 7.656A1.97 1.97 0 0 1 6 9c-.276 0-.522.027-.764.085a.5.5 0 0 0-.271.276l-.906.906a.5.5 0 0 0 .708.708l.906-.906a2.021 2.021 0 0 1 .764.086c1.227 0 2.127-1.5 2.127-3z"/>
                </svg>
                Rocket Rides will only have access to this verification data.
              </li>
              <li className="d-flex align-items-start mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill mr-2" viewBox="0 0 16 16">
                  <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                </svg>
                Stripe uses biometric technology on your images to make sure it's you. You can delete your data at any time.
              </li>
            </ul>
            <a href="#" className="text-info small text-decoration-underline mb-3">Stripe Privacy Policy · English (United States)</a>
            <a href="/kyc">
            <button className="btn btn-warning btn-sm btn-block mb-2" style={{ width:200,
            marginLeft:50 }}>
              Agree and Continue <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right ml-2" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M1 8a.5.5 0 0 0 .5.5h11.793l-3.146 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 7.5H1.5a.5.5 0 0 0-.5.5z"/>
              </svg>
            </button>
            </a>
            <button className="btn btn-danger btn-sm btn-block" style={{ width:200,
            marginLeft:50 }}>
              Decline
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StripeKYCConfirmationPage;