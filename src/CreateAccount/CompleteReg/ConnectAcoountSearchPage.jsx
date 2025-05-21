import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsArrowLeft, BsCheckCircleFill } from 'react-icons/bs'; // For icons

function ConnectAccountSearchPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([
    { name: 'WiseBanyan-Beta (Now Avos Bank)', url: 'wisebanyan.com' },
    // Add more search results as needed
  ]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    // In a real application, you would filter search results based on the input
    // For this example, we'll keep the initial results.
  };

  return (
    <div className="min-vh-100 d-flex bg-light">
      {/* Left Sidebar */}
      <div className="bg-info text-white p-4 d-none d-md-flex flex-column justify-content-between" style={{ width: '300px' }}>
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
          © Koajo. All rights reserved. <br />
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
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </svg>
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
            <div className="col">
              <button className="btn btn-outline-light border rounded d-flex align-items-center justify-content-center p-2 w-100">
                <img src="https://via.placeholder.com/80/007bff/FFFFFF?Text=Chase" alt="Chase" className="img-fluid" style={{ maxHeight: '30px' }} />
              </button>
            </div>
            <div className="col">
              <button className="btn btn-outline-light border rounded d-flex align-items-center justify-content-center p-2 w-100">
                <img src="https://via.placeholder.com/80/dc3545/FFFFFF?Text=Chase" alt="Chase" className="img-fluid" style={{ maxHeight: '30px' }} />
              </button>
            </div>
            <div className="col">
              <button className="btn btn-outline-light border rounded d-flex align-items-center justify-content-center p-2 w-100">
                <img src="https://via.placeholder.com/80/28a745/FFFFFF?Text=Wells" alt="Wells Fargo Bank" className="img-fluid" style={{ maxHeight: '30px' }} />
              </button>
            </div>
            <div className="col">
              <button className="btn btn-outline-light border rounded d-flex align-items-center justify-content-center p-2 w-100">
                <img src="https://via.placeholder.com/80/6c757d/FFFFFF?Text=CapitalOne" alt="Capital One" className="img-fluid" style={{ maxHeight: '30px' }} />
              </button>
            </div>
            <div className="col">
              <button className="btn btn-outline-light border rounded d-flex align-items-center justify-content-center p-2 w-100">
                <img src="https://via.placeholder.com/80/0d6efd/FFFFFF?Text=Amex" alt="American Express" className="img-fluid" style={{ maxHeight: '30px' }} />
              </button>
            </div>
            <div className="col">
              <button className="btn btn-outline-light border rounded d-flex align-items-center justify-content-center p-2 w-100">
                <img src="https://via.placeholder.com/80/007bff/FFFFFF?Text=Citibank" alt="Citibank" className="img-fluid" style={{ maxHeight: '30px' }} />
              </button>
            </div>
            <div className="col">
              <button className="btn btn-outline-light border rounded d-flex align-items-center justify-content-center p-2 w-100">
                <img src="https://via.placeholder.com/80/28a745/FFFFFF?Text=Fidelity" alt="Fidelity Inv" className="img-fluid" style={{ maxHeight: '30px' }} />
              </button>
            </div>
            <div className="col">
              <button className="btn btn-outline-light border rounded d-flex align-items-center justify-content-center p-2 w-100">
                <img src="https://via.placeholder.com/80/dc3545/FFFFFF?Text=Vanguard" alt="Vanguard" className="img-fluid" style={{ maxHeight: '30px' }} />
              </button>
            </div>
            <div className="col">
              <button className="btn btn-outline-light border rounded d-flex align-items-center justify-content-center p-2 w-100">
                <img src="https://via.placeholder.com/80/198754/FFFFFF?Text=Robinhood" alt="Robinhood" className="img-fluid" style={{ maxHeight: '30px' }} />
              </button>
            </div>
            <div className="col">
              <button className="btn btn-outline-light border rounded d-flex align-items-center justify-content-center p-2 w-100">
                <img src="https://via.placeholder.com/80/6c757d/FFFFFF?Text=Chime" alt="Chime" className="img-fluid" style={{ maxHeight: '30px' }} />
              </button>
            </div>
            <div className="col">
              <button className="btn btn-outline-light border rounded d-flex align-items-center justify-content-center p-2 w-100">
                <img src="https://via.placeholder.com/80/6f42c1/FFFFFF?Text=Ally" alt="Ally Bank" className="img-fluid" style={{ maxHeight: '30px' }} />
              </button>
            </div>
            <div className="col">
              <button className="btn btn-outline-light border rounded d-flex align-items-center justify-content-center p-2 w-100">
                <img src="https://via.placeholder.com/80/28a745/FFFFFF?Text=Hills" alt="Hills Bank" className="img-fluid" style={{ maxHeight: '30px' }} />
              </button>
            </div>
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

export default ConnectAccountSearchPage;                  z