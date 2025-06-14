import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Ensure Bootstrap Icons are imported

function RegistrationSideBar(){
    return(
        <>
        <div className="text-white p-4 d-none d-md-flex flex-column justify-content-between" style={{ width: '300px',backgroundColor:'#276a6a' }}>
                <div>
                    <h1 className="h3 font-weight-bold mb-4">
                        Ko<span className="text-warning">ajo</span>
                    </h1>
                    {/* Step 1: Create Account */}
                    <div className="d-flex align-items-center mb-3">
                        {/* Icon background is white, icon color is dark teal */}
                        <div className="bg-white rounded-circle d-flex justify-content-center align-items-center me-3" style={{ width: '30px', height: '30px', color: '#276a6a' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-person-plus-fill" viewBox="0 0 16 16">
                                <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                <path fillRule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13v-1.5a.5.5 0 0 1 .5-.5z"/>
                            </svg>
                        </div>
                        <div>
                            <strong className="d-block">Create Account</strong>
                            <a href="/createaccount" style={{ color: 'rgba(255, 255, 255, 0.75)', textDecoration: 'none' }}>
                                <span className="small">Create your account or log in to start.</span>
                            </a>
                        </div>
                    </div>
                    {/* Step 2: Confirmation Code */}
                    <div className="d-flex align-items-center mb-3">
                        {/* Icon background is white, icon color is dark teal */}
                        <div className="bg-white rounded-circle d-flex justify-content-center align-items-center me-3" style={{ width: '30px', height: '30px', color: '#276a6a' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-clock-fill" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.5V3.5z"/>
                            </svg>
                        </div>
                        <div>
                            <strong className="d-block">Confirmation Code</strong>
                            <a href="/email" style={{ color: 'rgba(255, 255, 255, 0.75)', textDecoration: 'none' }}><span className="small">Verify your email with the code sent to your inbox.</span></a>
                        </div>
                    </div>
                    {/* Step 3: KYC */}
                    <div className="d-flex align-items-center mb-3">
                        {/* Icon background is white, icon color is dark teal */}
                        <div className="bg-white rounded-circle d-flex justify-content-center align-items-center me-3" style={{ width: '30px', height: '30px', color: '#276a6a' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-shield-fill-check" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.156.643-.216 1.33-.058 2.007C1.72 6.802 1.382 7.815 1.05 9.218-.072 12.553 0 13 0 13s1.601-.586 4.102-1.993c2.5-1.407 5.985-1.407 8.486 0C14 12.414 16 13 16 13s-.072-.447-1.05-3.782c-.158-.677-.218-1.364-.059-2.007a1.54 1.54 0 0 0-1.044-1.263c-.658-.215-1.777-.57-2.887-.87C9.843.266 8.69 0 8 0zm2.146 5.146a.5.5 0 0 1 .708 0l1.447 1.446 2.053-2.053a.5.5 0 0 1 .708.708L9.757 6.854l-1.5 1.5a.5.5 0 0 1-.708 0L5.854 6.854l2.053-2.053a.5.5 0 0 1 .708 0z"/>
                            </svg>
                        </div>
                        <div>
                            <strong className="d-block">KYC Verification</strong>
                            <a href="/kycConfirmation" style={{ color: 'rgba(255, 255, 255, 0.75)', textDecoration: 'none' }}><span className="small">Verify your identity to continue with Koajo.</span></a>
                        </div>
                    </div>
                    {/* Step 4: Complete Setup */}
                    <div className="d-flex align-items-center">
                        {/* Icon background is white, icon color is dark teal */}
                        <div className="bg-white rounded-circle d-flex justify-content-center align-items-center me-3" style={{ width: '30px', height: '30px', color: '#276a6a' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
                            </svg>
                        </div>
                        <div>
                            <strong className="d-block">Link Account</strong>
                           <a href="/addaccount" style={{ color: 'rgba(255, 255, 255, 0.75)', textDecoration: 'none' }}>
                                <span className="small">Connect your bank account to start saving.</span>
                           </a>
                        </div>
                    </div>
                </div>
                {/* Footer Links */}
                <div className="text-white-50 small mt-4">
                    © Koajo. All rights reserved. <br />
                    <a href="#" className="text-white-50 text-decoration-underline" style={{ color: 'rgba(255, 255, 255, 0.75)' }}>Terms & Conditions</a> | <a href="#" className="text-white-50 text-decoration-underline" style={{ color: 'rgba(255, 255, 255, 0.75)' }}>Privacy Policy</a>
                </div>
            </div>
        </>
    );
}
export default RegistrationSideBar;