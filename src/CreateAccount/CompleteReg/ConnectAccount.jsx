import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsArrowLeft, BsCheckCircleFill } from 'react-icons/bs'; // For icons

function ConnectAccountPage() {
  const bankLogos = [
    { name: 'Chase', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/JPMorgan_Chase_logo.svg/1200px-JPMorgan_Chase_logo.svg.png' },
    { name: 'Wells Fargo', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Wells_Fargo_%282018%29.svg/1280px-Wells_Fargo_%282018%29.svg.png' },
    { name: 'Bank of America', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Bank_of_America_%282012-2019%29_logo.svg/1280px-Bank_of_America_%282012-2019%29_logo.svg.png' },
    { name: 'Citi', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Citibank.svg/1920px-Citibank.svg.png' },
    { name: 'American Express', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/American_Express_logo_%282018%29.svg/1920px-American_Express_logo_%282018%29.svg.png' },
    { name: 'Ally', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Ally_Financial_logo.svg/1280px-Ally_Financial_logo.svg.png' },
    { name: 'Fidelity', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Fidelity_Investments_logo.svg/1280px-Fidelity_Investments_logo.svg.png' },
    { name: 'Vanguard', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Vanguard_Group_logo.svg/1280px-Vanguard_Group_logo.svg.png' },
    { name: 'Robinhood', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Robinhood_logo.svg/1920px-Robinhood_logo.svg.png' },
    { name: 'Chime', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Chime_%28company%29_logo.svg/1280px-Chime_%28company%29_logo.svg.png' },
  ];

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
            <div className="bg-white rounded-circle d-flex justify-content-center align-items-center mr-3" style={{ width: '30px', height: '30px', color: '#28a745' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-person-plus-fill" viewBox="0 0 16 16">
                <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                <path fillRule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13v-1.5a.5.5 0 0 1 .5-.5z"/>
              </svg>
            </div>
            <div>
              <strong className="d-block">Complete</strong>
              <span className="text-white-50 small">Setup is complete! Start managing your finances.</span>
            </div>
          </div>
        </div>
        <div className="text-white-50 small">
          &copy; Koajo. All rights reserved. <br />
          <a href="#" className="text-white-50 text-decoration-underline">Term & Condition</a> | <a href="#" className="text-white-50 text-decoration-underline">Privacy & Policy</a>
        </div>
      </div>

      {/* Right Content */}
      <div className="container d-flex align-items-center justify-content-center">
        <div className="bg-white rounded shadow p-4" style={{ maxWidth: '600px', width: '100%' }}>
          <div className="d-flex justify-content-start mb-3">
            <button className="btn btn-link text-secondary">
              <BsArrowLeft size={24} />
            </button>
          </div>
          <h2 className="h5 font-weight-bold text-gray-900 text-center mb-3">Connect your financial institution to Koajo</h2>
          <div className="mb-3">
            <label htmlFor="searchInstitution" className="form-label visually-hidden">Search all financial institution</label>
            <div className="input-group">
              <input
                type="search"
                className="form-control form-control-sm"
                id="searchInstitution"
                placeholder="Search all financial institution"
              />
              <button className="btn btn-outline-secondary btn-sm" type="button">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </svg>
              </button>
            </div>
          </div>
          <p className="text-center text-gray-600 small mb-3">Or Select from popular ones</p>
          <div className="row row-cols-3 row-cols-md-4 g-2 mb-4">
            {bankLogos.map((bank, index) => (
              <div className="col" key={index}>
                <button className="btn btn-outline-light border rounded d-flex align-items-center justify-content-center p-2 w-100">
                  <img src={bank.url} alt={bank.name} className="img-fluid" style={{ maxHeight: '30px' }} />
                </button>
              </div>
            ))}
          </div>
          <div className="d-flex justify-content-center align-items-center mt-3">
            <p className="text-center text-gray-600 small mr-2 mb-0">Track an asset or cash account</p>
            <button className="btn btn-link btn-sm text-info">Add Manual Account</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConnectAccountPage;