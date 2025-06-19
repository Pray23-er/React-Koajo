import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MdPersonOutline, MdOutlineSettings, MdOutlinePayments, MdSecurity } from 'react-icons/md';
import UserDashboardHeader from '../UserDashboardHeader';

function SettingsPlans() {
    // Placeholder data for subscription and payment history
    const subscription = {
        planName: 'Premium Pod',
        description: 'Powerfully simple, best for most users',
        price: '$100.00',
        billingCycle: 'bi Weekly',
        renewalDate: 'Feb 04, 2025',
    };

    const paymentInfo = {
        cardNumber: '****8297',
        accountType: 'Update Account',
    };

    const paymentHistory = [
        { date: '02/01/25', description: 'Bi Weekly Pod Payment-Premium Plan', amount: '$2.99' },
        { date: '02/12/24', description: 'Bi Weekly Pod Payment-Premium Plan', amount: '$2.99' },
    ];

    return (
      <>
      <UserDashboardHeader/>
        <div className="d-flex bg-light min-vh-100">
            {/* Left Sidebar for Settings Navigation */}
            <div className="col-3 p-4 pt-5" style={{ minWidth: '250px', backgroundColor: '#f8f9fa' }}>
                <h5 className="mb-4">Settings</h5>
                <ul className="list-unstyled">
                    <li className="mb-2">
                        <a href="/personalinfo" className="d-flex align-items-center p-3 rounded-3 text-decoration-none text-dark">
                            <MdPersonOutline size={20} className="me-2" /> Personal Information
                            <span className="ms-auto text-dark">&gt;</span>
                        </a>
                    </li>
                    <li className="mb-2">
                        <a href="/preferences" className="d-flex align-items-center p-3 rounded-3 text-decoration-none text-dark">
                            <MdOutlineSettings size={20} className="me-2" /> Preferences
                            <span className="ms-auto text-dark">&gt;</span>
                        </a>
                    </li>
                    <li className="mb-2">
                        {/* Highlighted Plans link */}
                        <a href="/plans" className="d-flex align-items-center p-3 rounded-3 text-decoration-none bg-primary bg-opacity-10 text-primary fw-bold">
                            <MdOutlinePayments size={20} className="me-2" /> Plans
                            <span className="ms-auto text-primary">&gt;</span>
                        </a>
                    </li>
                    <li className="mb-2">
                        <a href="/security" className="d-flex align-items-center p-3 rounded-3 text-decoration-none text-dark">
                            <MdSecurity size={20} className="me-2" /> Security
                            <span className="ms-auto text-dark">&gt;</span>
                        </a>
                    </li>
                </ul>
            </div>

            {/* Main Content Area for Plans */}
            <div className="flex-grow-1 p-4 bg-white rounded-start-4 shadow-sm" style={{ marginTop: '30px', marginBottom: '30px' }}>
                <div className="d-flex align-items-center mb-4">
                    <h4 className="mb-0 fw-bold">Your Subscription</h4>
                </div>

                {/* Subscription Details */}
                <div className="card p-4 rounded-3 shadow-sm">
                    <h5 className="card-title fw-bold">{subscription.planName}</h5>
                    <p className="card-text text-muted">{subscription.description}</p>
                    <div className="d-flex align-items-baseline mb-3">
                        <span className="fw-bold" style={{ fontSize: '2rem' }}>{subscription.price}</span>
                        <span className="ms-1 text-muted">/ {subscription.billingCycle}</span>
                    </div>
                    <p className="text-muted">Renews {subscription.renewalDate}</p>

                    {/* Payment Info */}
                    <div className="mt-4">
                        <p className="fw-bold">Payment Info</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="20" viewBox="0 0 38 24" fill="none">
                                    <path d="M34.9961 0H3.00391C1.3475 0 0 1.3475 0 3.00391V20.9961C0 22.6525 1.3475 24 3.00391 24H34.9961C36.6525 24 38 22.6525 38 20.9961V3.00391C38 1.3475 36.6525 0 34.9961 0Z" fill="#F2F2F2" />
                                    <path d="M36.9922 3.82812H1.00781V20.1719H36.9922V3.82812Z" fill="white" />
                                    <path d="M36.9922 3.82812H1.00781V5.48438H36.9922V3.82812Z" fill="#2E4196" />
                                    <path d="M31.0234 11.25H27.9766V12.8281H31.0234V11.25Z" fill="#1D2951" />
                                    <path d="M31.0234 14.3906H27.9766V15.9688H31.0234V14.3906Z" fill="#1D2951" />
                                    <path d="M32.5938 8.10938H26.4062V9.6875H32.5938V8.10938Z" fill="#1D2951" />
                                    <path d="M12.9609 15.1562C12.5781 15.1562 12.2344 15.0156 11.9297 14.7344C11.625 14.4531 11.4727 14.0859 11.4727 13.6328V8.35938H9.39844V13.6328C9.39844 14.7578 9.77344 15.6328 10.5234 16.25C11.2734 16.8672 12.1875 17.1758 13.2656 17.1758C14.3438 17.1758 15.2578 16.8672 16.0078 16.25C16.7578 15.6328 17.1328 14.7578 17.1328 13.6328V8.35938H15.0586V13.6328C15.0586 14.0859 14.9062 14.4531 14.6016 14.7344C14.2969 15.0156 13.9531 15.1562 13.5703 15.1562H12.9609Z" fill="#1D2951" />
                                </svg>
                                <span className="ms-2">{paymentInfo.cardNumber}</span>
                                <span className="ms-2 text-muted">{paymentInfo.accountType}</span>
                            </div>
                            <button className="btn btn-link">Edit</button>
                        </div>
                    </div>

                    {/* Payment History */}
                    <div className="mt-4">
                        <p className="fw-bold">Payment History</p>
                        {paymentHistory.map((item, index) => (
                            <div key={index} className="d-flex justify-content-between align-items-center mb-2">
                                <div>
                                    <span className="text-muted">{item.date}</span>
                                    <span className="ms-2">{item.description}</span>
                                </div>
                                <span className="fw-bold">{item.amount}</span>
                            </div>
                        ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="d-flex justify-content-end gap-2 mt-4">
                        <button type="button" className="btn btn-outline-secondary px-4 py-2">Cancel</button>
                        <button type="button" className="btn btn-warning px-4 py-2">Yes</button>
                    </div>
                </div>
            </div>
        </div>
      </>
    );
}

export default SettingsPlans;