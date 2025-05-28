import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsArrowLeft, BsCheckCircleFill } from 'react-icons/bs'; // For icons

// Import your local bank logo images here
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
import RegistrationSideBar from '../RegistrationSideBar';
// Add imports for any other logos you have

function ConnectAccountPage() {
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

  return (
    <div className="min-vh-100 d-flex bg-light">
      {/* Left Sidebar */}
      <RegistrationSideBar/>

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
                  <img src={bank.url} alt={bank.name} className="img-fluid" style={{ maxHeight: '100px' }} />
                </button>
              </div>
            ))}
          </div>
          <div className="d-flex justify-content-center align-items-center mt-3">
            <p className="text-center text-gray-600 small mr-2 mb-0">Track an asset or cash account</p>
            <a href="/searchaccount"><button className="btn btn-link btn-sm text-info">Add Manual Account</button></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConnectAccountPage;
