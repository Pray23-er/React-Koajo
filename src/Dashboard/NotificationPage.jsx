import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import UserDashboardHeader from './UserDashboardHeader'; // Assuming Font Awesome is installed

function NotificationPage() {
  const notifications = [
    { type: 'Transfer Success', message: 'You have successfully sent Koajo $10.00', time: '2 m' },
    { type: 'Transfer Success', message: 'You have successfully sent Koajo $10.00', time: '30 m' },
    { type: 'Receive $100.00', message: 'You received a payment from Koajo of $100.00', time: '3 h' },
    { type: 'Receive $100.00', message: 'You received a payment from Koajo of $100.00', time: '4 h' },
    { type: 'Transfer Success', message: 'You have successfully sent Koajo $10.00', time: '4 h' },
    { type: 'Receive $100.00', message: 'You received a payment from Koajo of $100.00', time: '4 h' },
    { type: 'Receive $100.00', message: 'You received a payment from Koajo of $100.00', time: '4 h' },
    { type: 'Receive $100.00', message: 'You received a payment from Koajo of $100.00', time: '4 h' },
    { type: 'Transfer Success', message: 'You have successfully sent Koajo $10.00', time: '2 h' },
  ];

  return (
    <div style={{ backgroundColor: '#f0f2f5', minHeight: '100vh' }}>
      <UserDashboardHeader/>
      

      {/* Main Content */}
      <div className="container-fluid mt-4 px-5">
        <h2 className="mb-4" style={{ color: '#333' }}>Notification <i className="fas fa-bell" style={{ color: '#ffc107' }}></i></h2>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="#" className="text-decoration-none" style={{ color: '#6c757d' }}>Dashboard</a></li>
            <li className="breadcrumb-item active" aria-current="page" style={{ color: '#6c757d' }}>Notification</li>
          </ol>
        </nav>

        <div className="card shadow-sm p-4" style={{ borderRadius: '15px' }}>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div className="input-group" style={{ width: '300px' }}>
              <span className="input-group-text bg-transparent border-0 pe-0">
                <i className="fas fa-search" style={{ color: '#6c757d' }}></i>
              </span>
              <input type="text" className="form-control border-0 ps-1" placeholder="Search Notification" style={{ boxShadow: 'none' }} />
            </div>
            <button className="btn btn-light border" style={{ borderRadius: '8px', color: '#6c757d' }}>
              <i className="fas fa-calendar-alt me-2"></i> Range Date
            </button>
          </div>

          <ul className="list-group list-group-flush">
            {notifications.map((notification, index) => (
              <li key={index} className="list-group-item d-flex justify-content-between align-items-center border-0 py-3"
                style={{
                  borderBottom: index < notifications.length - 1 ? '1px solid #eee' : 'none',
                  backgroundColor: 'transparent'
                }}>
                <div className="d-flex align-items-center">
                  <div className="rounded-circle d-flex align-items-center justify-content-center me-3"
                       style={{ width: '40px', height: '40px', backgroundColor: '#e9f5ff', color: '#007bff' }}>
                    <i className="fas fa-exchange-alt"></i> {/* Placeholder icon, adjust based on type */}
                  </div>
                  <div>
                    <h6 className="mb-0" style={{ color: '#333' }}>{notification.type}</h6>
                    <small className="text-muted">{notification.message}</small>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <small className="text-muted me-2">{notification.time}</small>
                  <span className="badge bg-danger rounded-circle p-1" style={{ width: '8px', height: '8px' }}></span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NotificationPage;