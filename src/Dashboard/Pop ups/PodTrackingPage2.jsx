import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Removed as CDN link is used below
// No longer need react-icons/bs since SVGs are inline

function PodTrackingGoalPage() {
  const [podName, setPodName] = useState('The Gunners'); // Pre-filled as per image
  const [contributionSchedule, setContributionSchedule] = useState('$9,000');
  const [paymentFrequency, setPaymentFrequency] = useState('bi-weekly');
  const [numberOfMembers, setNumberOfMembers] = useState('50');
  const [payoutEmail, setPayoutEmail] = useState('');
  const [inviteEmail, setInviteEmail] = useState('');
  const [invitedMembers, setInvitedMembers] = useState([
    { name: 'Savannah Nguyen', id: 'savannah', canEdit: true },
    { name: 'Ronald Richards', id: 'ronald', canEdit: true },
    { name: 'Devon Lane', id: 'devon', canEdit: false },
    { name: 'Esther Howard', id: 'esther', canEdit: true },
    { name: 'Wade Warren', id: 'wade', canEdit: false },
  ]);
  const [randomPosition, setRandomPosition] = useState(false); // Default to unchecked

  const handleInviteAdd = () => {
    if (inviteEmail.trim() !== '') {
      setInvitedMembers([...invitedMembers, { name: inviteEmail.trim(), id: Date.now().toString(), canEdit: true }]);
      setInviteEmail('');
    }
  };

  const handleMemberRemove = (idToRemove) => {
    setInvitedMembers(invitedMembers.filter(member => member.id !== idToRemove));
  };

  return (
    <>
      {/* Link to Bootstrap CSS CDN */}
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" xintegrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossOrigin="anonymous" />
      {/* Optional: Add Tailwind CSS if you plan to use it alongside Bootstrap */}
      {/* <script src="https://cdn.tailwindcss.com"></script> */}

      <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light">
        <div className="modal-dialog modal-dialog-centered modal-lg" style={{ maxWidth: '800px', width: '100%' }}>
          <div className="modal-content rounded-4 shadow-lg p-4">
            {/* Modal Header */}
            <div className="modal-header border-0 pb-0 d-flex justify-content-between align-items-center">
              <button type="button" className="btn btn-link text-dark p-0" aria-label="Back">
                {/* Back Arrow Icon (from image) */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5a.5.5 0 0 0 .5-.5z"/>
                </svg>
              </button>
              <h5 className="modal-title fw-bold text-dark text-center flex-grow-1">Pod Tracking Goal</h5>
              <div></div> {/* Empty div to balance header for centring title */}
            </div>
            <p className="text-center text-muted small mt-2 mb-4">
              Bi-weekly payments are due on the 1st and 16th of each month. Monthly payments are due on the 1st of each month. Bi-weekly Payouts are done on the 15th and 30th of the month. Monthly payouts are done on the 30th of the month.
            </p>

            {/* Modal Body - Form Fields */}
            <div className="modal-body pt-0">
              <div className="row g-3 mb-4">
                <div className="col-md-6">
                  <label htmlFor="podName" className="form-label text-muted small">Pod Name</label>
                  <input
                    type="text"
                    className="form-control form-control-lg rounded-3"
                    id="podName"
                    value={podName}
                    onChange={(e) => setPodName(e.target.value)}
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="contributionSchedule" className="form-label text-muted small">Contribution Schedule</label>
                  <div className="input-group">
                    <select
                      className="form-select form-select-lg rounded-3"
                      id="contributionSchedule"
                      value={contributionSchedule}
                      onChange={(e) => setContributionSchedule(e.target.value)}
                    >
                      <option>$9,000</option>
                      <option>$5,000</option>
                      <option>$2,000</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6">
                  <label htmlFor="numberOfMembers" className="form-label text-muted small">Number of members</label>
                  <input
                    type="number"
                    className="form-control form-control-lg rounded-3"
                    id="numberOfMembers"
                    value={numberOfMembers}
                    onChange={(e) => setNumberOfMembers(e.target.value)}
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="paymentFrequency" className="form-label text-muted small">Bi-weekly or monthly</label>
                  <div className="input-group">
                    <select
                      className="form-select form-select-lg rounded-3"
                      id="paymentFrequency"
                      value={paymentFrequency}
                      onChange={(e) => setPaymentFrequency(e.target.value)}
                    >
                      <option>bi-weekly</option>
                      <option>monthly</option>
                    </select>
                    {/* Calendar Icon (Placeholder) */}
                    <span className="input-group-text rounded-3 ms-2" style={{ border: 'none', backgroundColor: '#e9ecef' }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-calendar" viewBox="0 0 16 16">
                        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM14 4V3a1 1 0 0 0-1-1h-1V2.5a.5.5 0 0 1-1 0V2H4v.5a.5.5 0 0 1-1 0V2H2a1 1 0 0 0-1 1v1h14zM1 5.05L1 14a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5.05L1 5.05z"/>
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="col-md-6">
                  <label htmlFor="payoutEmail" className="form-label text-muted small">Pod Payout Schedule</label>
                  <div className="input-group">
                    <input
                      type="email"
                      className="form-control form-control-lg rounded-3"
                      id="payoutEmail"
                      placeholder="Enter Your email"
                      value={payoutEmail}
                      onChange={(e) => setPayoutEmail(e.target.value)}
                    />
                    {/* Calendar Icon (Placeholder) */}
                    <span className="input-group-text rounded-3 ms-2" style={{ border: 'none', backgroundColor: '#e9ecef' }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-calendar" viewBox="0 0 16 16">
                        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM14 4V3a1 1 0 0 0-1-1h-1V2.5a.5.5 0 0 1-1 0V2H4v.5a.5.5 0 0 1-1 0V2H2a1 1 0 0 0-1 1v1h14zM1 5.05L1 14a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5.05L1 5.05z"/>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>

              {/* Invite by email section */}
              <label htmlFor="inviteEmail" className="form-label text-muted small">Invite by email</label>
              <div className="input-group mb-3 d-flex flex-wrap"> {/* Flex-wrap for tags */}
                {invitedMembers.map(member => (
                  <span key={member.id} className="badge bg-secondary text-white rounded-pill d-flex align-items-center me-2 mb-2 p-2">
                    {member.name}
                    <button type="button" className="btn-close btn-close-white ms-2" onClick={() => handleMemberRemove(member.id)} aria-label="Remove"></button>
                  </span>
                ))}
                <input
                  type="email"
                  className="form-control rounded-3 flex-grow-1"
                  id="inviteEmail"
                  placeholder="Enter Your email"
                  value={inviteEmail}
                  onChange={(e) => setInviteEmail(e.target.value)}
                  onKeyPress={(e) => { if (e.key === 'Enter') { e.preventDefault(); handleInviteAdd(); } }}
                  style={{ minWidth: '150px' }}
                />
                <select className="form-select rounded-3 ms-2" style={{ width: 'auto' }}>
                    <option>Can Edit</option>
                    <option>Can View</option>
                </select>
                <button type="button" className="btn btn-primary rounded-3 ms-2" onClick={handleInviteAdd}>Invite</button>
              </div>

              {/* Random position toggle */}
              <div className="form-check form-switch d-flex justify-content-between align-items-center mt-4 mb-3">
                <label className="form-check-label fw-bold text-dark" htmlFor="randomPositionSwitch">Random position</label>
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="randomPositionSwitch"
                  checked={randomPosition}
                  onChange={() => setRandomPosition(!randomPosition)}
                />
              </div>

              {/* Note */}
              <p className="text-muted small">
                NOTE: Please enter individual emails in order of their preferred payout position. The first email will receive the first payout, the second email will receive the second payout, and so on. Alternatively, click 'Random Position' to let Koajo assign positions automatically.
              </p>
            </div>

            {/* Modal Footer */}
            <div className="modal-footer border-0 pt-4 d-flex justify-content-end">
              <button type="button" className="btn btn-outline-secondary fw-bold rounded-pill px-4 py-2 me-3">Close</button>
              <button type="button" className="btn btn-warning fw-bold rounded-pill px-4 py-2">
                Next <span className="ms-2" style={{ transform: 'rotate(180deg)', display: 'inline-block' }}>
                  {/* Next Arrow Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PodTrackingGoalPage;