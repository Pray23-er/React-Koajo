import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Email() {
  const [code, setCode] = useState(['', '', '', '', '', '']);

  const handleInputChange = (index, event) => {
    const newCode = [...code];
    newCode[index] = event.target.value;
    setCode(newCode);

    // Move focus to the next input if a digit is entered
    if (event.target.value.length === 1 && index < 5) {
      const nextInput = document.getElementById(`code-${index + 1}`);
      if (nextInput) {
        nextInput.focus();
      }
    }
  };

  const handlePaste = (event) => {
    const pastedCode = event.clipboardData.getData('text').trim();
    if (/^\d{6}$/.test(pastedCode)) {
      setCode(pastedCode.split(''));
      // Optionally, focus the login button after pasting
    }
  };

  const handleLogin = () => {
    const enteredCode = code.join('');
    console.log('Entered Code:', enteredCode);
    // In a real application, you would verify this code.
    alert(`Verifying code: ${enteredCode}`);
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
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-clock-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.5V3.5z"/>
              </svg>
            </div>
            <div>
              <strong className="d-block">Confirmation Code</strong>
              <span className="text-white-50 small">Verify your email with the code sent to your inbox.</span>
            </div>
          </div>
          <div className="d-flex align-items-center mb-3">
            <div className="bg-secondary rounded-circle d-flex justify-content-center align-items-center mr-3" style={{ width: '30px', height: '30px' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-credit-card-fill" viewBox="0 0 16 16">
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1H0v-1zm0 3v5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7H0zm3 2h10a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1z"/>
              </svg>
            </div>
            <div>
              <strong className="d-block">Payment</strong>
              <span className="text-white-50 small">Verify your identity to Continue with Koajo.</span>
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
        <div className="bg-white rounded shadow p-4" style={{ maxWidth: '450px', width: '100%' }}>
          <h2 className="h5 font-weight-bold text-gray-900 mb-3">Check your inbox</h2>
          <p className="text-gray-600 mb-4 small">
            Secure your account by verifying your email. Enter the 6-digit verification code we sent to example@mail.com
          </p>
          <div className="d-flex justify-content-around mb-3">
            {code.map((digit, index) => (
              <input
                key={index}
                type="text"
                className="form-control form-control-sm text-center rounded"
                id={`code-${index}`}
                maxLength="1"
                value={digit}
                onChange={(event) => handleInputChange(index, event)}
                onPaste={handlePaste}
                style={{ width: '40px', height: '40px', fontSize: '1.2rem' }}
              />
            ))}
          </div>
          <p className="text-danger small mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-exclamation-circle-fill mr-1" viewBox="0 0 16 16">
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
            </svg>
            Please enter the verification code
          </p>
          <button className="btn btn-warning btn-sm btn-block" onClick={handleLogin} disabled={code.some(c => c === '')}>
            Submit
          </button>
          <p className="mt-3 text-center text-gray-600 small">
            Already have an account? <a href="/login" className="text-info">Login Here</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Email;