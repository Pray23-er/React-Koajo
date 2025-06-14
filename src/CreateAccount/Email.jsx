import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import RegistrationSideBar from './RegistrationSideBar';

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
      <RegistrationSideBar/>

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
          <button className="btn btn-warning  btn-block" onClick={handleLogin} disabled={code.some(c => c === '')} style={{ width:400 }}>
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