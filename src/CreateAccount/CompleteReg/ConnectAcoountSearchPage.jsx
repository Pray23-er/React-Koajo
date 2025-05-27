import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsArrowLeft, BsCheckCircleFill, BsSearch } from 'react-icons/bs'; // Added BsSearch import


import chaseLogo from '../../assets/banklogos/chaselogo.jpeg';
import wellsFargoLogo from '../../assets/banklogos/wellsfargo.jpeg';
import bankOfAmericaLogo from '../../assets/banklogos/bankof ame.jpeg';
import citiLogo from '../../assets/banklogos/citibank.jpeg';
import americanExpressLogo from '../../assets/banklogos/American Express.jpeg';
import allyLogo from '../../assets/banklogos/Ally.jpeg';
import fidelityLogo from '../../assets/banklogos/Fidelity.jpeg';
import vanguardLogo from '../../assets/banklogos/Vanguard.jpeg';
import robinhoodLogo from '../../assets/banklogos/robinhood.jpeg';
import chimeLogo from '../../assets/banklogos/chime.jpeg';


function ConnectAccountSearchPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([
    { name: 'WiseBanyan-Beta (Now Avos Bank)', url: 'wisebanyan.com' },
    // Add more search results as needed
  ]);

  // Data URLs for bank logos to ensure they always load
  const bankLogos = [
      { name: 'Chase', url: chaseLogo }, // Use the imported image variable
      { name: 'Wells Fargo', url: wellsFargoLogo },
      { name: 'Bank of America', url: bankOfAmericaLogo },
      { name: 'Citi', url: citiLogo },
      { name: 'American Express', url: americanExpressLogo },
      { name: 'Ally', url: allyLogo },
      { name: 'Fidelity', url: fidelityLogo },
      { name: 'Vanguard', url: vanguardLogo },
      { name: 'Robinhood', url: robinhoodLogo },
      { name: 'Chime', url: chimeLogo },
      // Add other bank logos here, using their imported variables
    ];
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    // In a real application, you would filter search results based on the input
    // For this example, we'll keep the initial results.
  };

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
          <h2 className="h5 font-weight-bold text-gray-900 text-center mb-3">Connect your financial institution to Numera</h2>
          <div className="mb-3">
            <label htmlFor="searchInstitution" className="form-label visually-hidden">Search all financial institution</label>
            <div className="input-group">
              <input
                type="search"
                className="form-control form-control-sm"
                id="searchInstitution"
                placeholder="wise..."
                value={searchTerm}
                onChange={handleSearchChange}
              />
              <button className="btn btn-outline-secondary btn-sm" type="button">
                <BsSearch size={16} /> {/* Using BsSearch icon from react-icons */}
              </button>
            </div>
          </div>
          {searchResults.length > 0 && (
            <ul className="list-group mb-3">
              {searchResults.map((result, index) => (
                <li key={index} className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                  <div>
                    <strong className="text-gray-800">{result.name}</strong>
                    {result.url && <p className="text-gray-600 small mb-0">{result.url}</p>}
                  </div>
                  <button className="btn btn-sm btn-outline-primary">Connect</button>
                </li>
              ))}
            </ul>
          )}
          <p className="text-center text-gray-600 small mb-2">Cannot find your institution? <a href="#" className="text-info">Send request</a> or <a href="#" className="text-info">Get help</a>.</p>
          <hr className="my-3" />
          <p className="text-center text-gray-600 small mb-3">Or Select from popular ones</p>
          <div className="row row-cols-3 row-cols-md-4 g-2 mb-4">
            {bankLogos.map((bank, index) => (
              <div className="col" key={index}>
                <button className="btn btn-outline-light border rounded d-flex align-items-center justify-content-center p-2 w-100">
                  <img src={bank.url} alt={bank.name} className="img-fluid" style={{ maxHeight: '100px' }} />
                </button>
              </div>
            ))}
          </div>
          <div className="d-flex justify-content-center align-items-center mt-3">
            <p className="text-center text-gray-600 small mr-2 mb-0">Track an asset or cash account</p>
            <a href="/setupcomplete"><button className="btn btn-primary btn-sm text-info">Complete</button></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConnectAccountSearchPage;
