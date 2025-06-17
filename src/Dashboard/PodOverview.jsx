import React, { useState } from 'react';

// Import your UserDashboardHeader component
import UserDashboardHeader from './UserDashboardHeader'; // Adjust the path if needed

// The direct import for 'bootstrap/dist/css/bootstrap.min.css' has been removed.
// Please ensure you are loading Bootstrap CSS in your public/index.html file via a CDN link
// or through another global method if you have it installed, as the build environment
// cannot resolve this path directly from the React component.

// Inline SVGs for icons used in the dashboard table and buttons
const FilterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-funnel" viewBox="0 0 16 16">
    <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2zm1 .5v1.308L5.438 7.5c.34.34.678.67.945 1.026A10.566 10.566 0 0 0 8 10.5c.314.075.626.155.938.243.279.088.592.176.938.269a.5.5 0 0 0 .765-.333L14.5 3.308V2h-11z"/>
  </svg>
);

const ExportIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-up" viewBox="0 0 16 16">
    <path fillRule="evenodd" d="M3.5 10a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 0 0 1h2A1.5 1.5 0 0 0 14 9.5v-8A1.5 1.5 0 0 0 12.5 0h-9A1.5 1.5 0 0 0 2 1.5v8A1.5 1.5 0 0 0 3.5 11h2a.5.5 0 0 0 0-1h-2z"/>
    <path fillRule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V14.5a.5.5 0 0 1-1 0V5.707L4.354 8.354a.5.5 0 1 1-.708-.708l3-3z"/>
  </svg>
);

const DotsVerticalIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
    <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
  </svg>
);

const QuestionCircleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-question-circle" viewBox="0 0 16 16">
    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
    <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825.754c.123.012.246.027.368.043.266.034.526.095.779.186.29.118.53.29.704.498.175.207.28.43.344.693.064.262.096.533.096.81c0 .736-.422 1.256-1.127 1.256-.689 0-1.144-.45-1.18-.823L7.17 10.3c.038.384.448.88 1.107.88.804 0 1.346-.628 1.346-1.543 0-.446-.178-.78-.445-1.026-.26-.245-.65-.411-1.166-.525a11.165 11.165 0 0 1-.41-.082c-.183-.03-.362-.062-.538-.094-.298-.05-.54-.124-.724-.236-.184-.112-.274-.249-.274-.407 0-.14.07-.27.23-.393.16-.123.38-.198.662-.198.334 0 .598.084.81.25.212.168.324.41.324.721L8.55 6.786a.237.237 0 0 0 .24-.247z"/>
  </svg>
);

const CalendarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar-alt" viewBox="0 0 16 16">
    <path d="M15 13.5a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5h-1V1.5a.5.5 0 0 0-1 0V2H3V1.5a.5.5 0 0 0-1 0V2H1.5A1.5 1.5 0 0 0 0 3.5v10A1.5 1.5 0 0 0 1.5 15h13a1.5 1.5 0 0 0 1.5-1.5V13h-1.5zM1 3.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5V12H1V3.5z"/>
  </svg>
);

const UserCircleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
    <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.226 5.468 2.37A7 7 0 0 0 8 1z"/>
  </svg>
);

const InfoCircleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-info-circle" viewBox="0 0 16 16">
    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
    <path d="M8.93 6.643L8.52 9.07c-.015.086-.03.172-.045.258a.25.25 0 0 1-.27.247c-.246.03-.492.06-.738.09-.23.028-.46.056-.69.083-.245.027-.49.055-.736.082a.25.25 0 0 1-.27.247c-.015-.086-.03-.172-.045-.258l-.41-2.427a.25.25 0 0 1 .27-.247c.246-.03.492-.06.738-.09.23-.028.46-.056.69-.083.245-.027.49-.055.736-.082a.25.25 0 0 1 .27.247zm-.03-2.128a.25.25 0 0 1-.247-.248.25.25 0 0 1 .247-.248c.138 0 .25.111.25.248s-.112.248-.25.248z"/>
  </svg>
);


// PodOverview Component (renamed from PodInformation)
const PodOverviewContent = () => { // Renamed to avoid conflict with default export
    return (
        <div className="container-fluid py-4" style={{ backgroundColor: '#f8f9fa', borderRadius: '15px' }}>
            <div className="row g-4">
                {/* Total Pod Contribution */}
                <div className="col-lg-4 col-md-6">
                    <div className="card h-100 rounded-3 shadow-sm">
                        <div className="card-body">
                            <h5 className="card-title text-muted mb-3 d-flex justify-content-between align-items-center">
                                Total Pod Contribution
                                <InfoCircleIcon />
                            </h5>
                            <p className="card-text fs-2 fw-bold text-dark mb-1">$ 8,527,224</p>
                            <small className="text-success">Expense increased by $ 2.172 This Month</small>
                        </div>
                    </div>
                </div>

                {/* Payout Dates */}
                <div className="col-lg-4 col-md-6">
                    <div className="card h-100 rounded-3 shadow-sm">
                        <div className="card-body">
                            <h5 className="card-title text-muted mb-3">Payout Dates</h5>
                            <div className="row g-2">
                                {[
                                    { id: '#39330933', date: 'Mar-12-2025' },
                                    { id: '#94N49494', date: 'Mar-12-2025' },
                                    { id: '#303M89CN', date: 'Mar-12-2025' },
                                    { id: '#23EXXEXE', date: 'Mar-12-2025' },
                                    { id: '#4304MV04', date: 'Mar-12-2025' },
                                    { id: '#NC8N4844', date: 'Mar-12-2025' },
                                ].map((item, index) => (
                                    <div className="col-4" key={index}>
                                        <div className="d-flex flex-column align-items-center">
                                            {/* Placeholder for user avatar - you can replace with actual image later */}
                                            <div className="rounded-circle bg-light d-flex justify-content-center align-items-center mb-2" style={{ width: '40px', height: '40px' }}>
                                                <UserCircleIcon />
                                            </div>
                                            <small className="text-dark fw-bold">{item.id}</small>
                                            <small className="text-muted">{item.date}</small>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <small className="text-success mt-3 d-block">Expense increased by $ 2.172 This Month</small>
                        </div>
                    </div>
                </div>

                {/* Pod Circle */}
                <div className="col-lg-4 col-md-12">
                    <div className="card h-100 rounded-3 shadow-sm">
                        <div className="card-body d-flex flex-column justify-content-between align-items-center">
                            <h5 className="card-title text-muted mb-3">Pod Circle</h5>
                            <div className="position-relative d-flex justify-content-center align-items-center mb-3" style={{ width: '120px', height: '120px' }}>
                                {/* SVG for the circle progress bar */}
                                <svg width="120" height="120" viewBox="0 0 36 36" className="circular-chart green">
                                    <path className="circle-bg"
                                        d="M18 2.0845
                                        a 15.9155 15.9155 0 0 1 0 31.831
                                        a 15.9155 15.9155 0 0 1 0 -31.831"
                                        fill="none"
                                        stroke="#eee"
                                        strokeWidth="2"
                                    />
                                    <path className="circle"
                                        strokeDasharray="68.7, 100"
                                        d="M18 2.0845
                                        a 15.9155 15.9155 0 0 1 0 31.831
                                        a 15.9155 15.9155 0 0 1 0 -31.831"
                                        fill="none"
                                        stroke="#28a745" /* Green color for progress */
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                    />
                                    <text x="18" y="20.35" className="percentage" textAnchor="middle" fill="#28a745" fontSize="0.5em" fontWeight="bold">68.7%</text>
                                </svg>
                                <div className="position-absolute text-center">
                                    <p className="fs-3 fw-bold text-dark mb-0">22 days left</p>
                                </div>
                            </div>
                            <small className="text-success">Expense increased by $ 2.172 This Month</small>
                        </div>
                    </div>
                </div>
            </div>

            {/* Unique ID Cards */}
            <div className="row g-4 mt-4">
                {[...Array(6)].map((_, index) => (
                    <div className="col-lg-4 col-md-6" key={index}>
                        <div className="card rounded-3 shadow-sm h-100">
                            <div className="card-body">
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <div className="d-flex align-items-center">
                                        {/* Placeholder for user avatar */}
                                        <div className="rounded-circle bg-light d-flex justify-content-center align-items-center me-2" style={{ width: '40px', height: '40px' }}>
                                            <UserCircleIcon />
                                        </div>
                                        <span className="fw-bold text-dark">Unique Id</span>
                                    </div>
                                    <InfoCircleIcon />
                                </div>
                                <p className="mb-2 text-dark"># 93ndnddddnkd</p>
                                <p className="mb-1 text-muted">Member Since: <span className="fw-bold text-dark">10-02-2025</span></p>
                                <p className="mb-1 text-muted">Next Cycle: <span className="fw-bold text-dark">Mar 02 2025</span></p>
                                <p className="mb-0 text-muted">Payout Date: <span className="fw-bold text-dark">Mar 07 2025</span></p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};


function App() {
    const [activeTab, setActiveTab] = useState('podOverview'); // Set default to 'podOverview'

    return (
        <div style={{ backgroundColor: '#e9ecef', minHeight: '100vh', fontFamily: 'Inter, sans-serif' }}>
            {/* Navbar - Using UserDashboardHeader */}
            <UserDashboardHeader />
             <br/>
            {/* Main Content */}
            <div className="container-fluid py-4 px-lg-5">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h1 className="h4 text-dark">Welcome back, Rainer Yaeger</h1>
                    <span className="text-muted d-flex align-items-center">
                        <CalendarIcon className="me-2" /> Mar 17, 2025
                    </span>
                </div>

                <nav aria-label="breadcrumb" className="mb-4">
                    <ol className="breadcrumb bg-transparent rounded-pill px-3 py-2" style={{backgroundColor: '#fff'}}>
                        <li className="breadcrumb-item"><a href="#" className="text-decoration-none text-muted">Dashboard</a></li>
                        <li className="breadcrumb-item active text-dark" aria-current="page">Pod Overview</li> {/* Updated breadcrumb */}
                    </ol>
                </nav>

                {/* Tabs for Pod Overview */}
                <ul className="nav nav-pills mb-4" style={{ backgroundColor: '#fff', borderRadius: '15px', padding: '10px' }}>
                    <li className="nav-item">
                        <button
                            className={`nav-link rounded-pill px-4 py-2 ${activeTab === 'podOverview' ? 'active' : ''}`}
                            onClick={() => setActiveTab('podOverview')}
                            style={{ backgroundColor: activeTab === 'podOverview' ? '#1f2a40' : 'transparent', color: activeTab === 'podOverview' ? '#fff' : '#6c757d' }}
                        >
                            Pod Overview
                        </button>
                    </li>
                </ul>

                {/* Content based on active tab */}
                <div className="tab-content">
                    {activeTab === 'podOverview' && <PodOverviewContent />} {/* Only PodOverviewContent */}
                </div>
            </div>
        </div>
    );
}

export default App;