import React from 'react';
import stripelogo from '../../assets/img/stripe.jpeg'; // Adjust the path as necessary
import 'bootstrap/dist/css/bootstrap.min.css';

function KYCPage() {
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
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-shield-fill-check" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.156.643-.216 1.33-.058 2.007C1.72 6.802 1.382 7.815 1.05 9.218-.072 12.553 0 13 0 13s1.601-.586 4.102-1.993c2.5-1.407 5.985-1.407 8.486 0C14 12.414 16 13 16 13s-.072-.447-1.05-3.782c-.158-.677-.218-1.364-.059-2.007a1.54 1.54 0 0 0-1.044-1.263c-.658-.215-1.777-.57-2.887-.87C9.843.266 8.69 0 8 0zm2.146 5.146a.5.5 0 0 1 .708 0l1.447 1.446 2.053-2.053a.5.5 0 0 1 .708.708L9.757 6.854l-1.5 1.5a.5.5 0 0 1-.708 0L5.854 6.854l2.053-2.053a.5.5 0 0 1 .708 0z"/>
              </svg>
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
          <button className="btn btn-warning btn-sm btn-block">
            Verify me
          </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default KYCPage;