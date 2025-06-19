import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'; // For the back and forward arrow icons // For the back arrow icon
import { FaCalendarAlt } from 'react-icons/fa'; // For the calendar icon

function PodTrackingGoal2() {
    // State for form fields
    const [podName, setPodName] = useState('');
    const [contributionSchedule, setContributionSchedule] = useState(''); // Could be a number or string like "$9,000"
    const [paymentFrequency, setPaymentFrequency] = useState('bi-weekly'); // 'bi-weekly' or 'monthly'
    const [numMembers, setNumMembers] = useState('');
    const [payoutScheduleEmail, setPayoutScheduleEmail] = useState(''); // This seems like an email field from the image, not a date.
    const [invitedEmails, setInvitedEmails] = useState([
        { id: 1, email: 'savannah.nguyen@example.com', name: 'Savannah Nguyen' },
        { id: 2, email: 'ronald.richards@example.com', name: 'Ronald Richards' },
        { id: 3, email: 'devon.lane@example.com', name: 'Devon Lane' },
        { id: 4, email: 'esther.howard@example.com', name: 'Esther Howard' },
        { id: 5, email: 'wade.warren@example.com', name: 'Wade Warren' },
    ]);
    const [newInviteEmail, setNewInviteEmail] = useState('');
    const [canEdit, setCanEdit] = useState('can-edit'); // Placeholder for 'Can Edit' dropdown value
    const [randomPosition, setRandomPosition] = useState(false); // Toggle switch state

    // Handlers for input changes
    const handleAddEmail = () => {
        if (newInviteEmail.trim() !== '') {
            setInvitedEmails([...invitedEmails, { id: Date.now(), email: newInviteEmail.trim(), name: newInviteEmail.trim() }]); // Using email as name for simplicity
            setNewInviteEmail('');
        }
    };

    const handleRemoveEmail = (idToRemove) => {
        setInvitedEmails(invitedEmails.filter(email => email.id !== idToRemove));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send this data to a backend or process it
        console.log({
            podName,
            contributionSchedule,
            paymentFrequency,
            numMembers,
            payoutScheduleEmail,
            invitedEmails,
            canEdit,
            randomPosition
        });
        alert('Form submitted! Check console for data.');
        // In a real app, you might close the modal or navigate away here
    };

    return (
        <div className="bg-light min-vh-100 d-flex flex-column">
            {/* Header */}
            <div className="container-fluid px-4 py-3 border-bottom d-flex align-items-center">
                <AiOutlineArrowLeft size={24} className="me-3 cursor-pointer" onClick={() => console.log('Go back')} />
                <h2 className="mb-0 fs-5 fw-bold">Pod Tracking goal</h2>
            </div>

            {/* Main Content Area */}
            <div className="flex-grow-1 container d-flex flex-column justify-content-center py-5">
                <div className="card shadow-sm p-4 p-md-5 rounded-3 border-0">
                    <p className="text-muted mb-4 small">
                        Bi-weekly payments are due on the 1st and 16th of each month. Monthly payments are due on the 15th and 30th of each month. Bi-weekly Payouts are done on the 15th and 30th of the month. Monthly payouts are done on the 30th of the month.
                    </p>

                    <form onSubmit={handleSubmit}>
                        <div className="row g-4 mb-4">
                            {/* Pod Name */}
                            <div className="col-md-6">
                                <label htmlFor="podName" className="form-label fw-bold small text-muted">Pod Name</label>
                                <input
                                    type="text"
                                    className="form-control form-control-lg bg-light-subtle py-3"
                                    id="podName"
                                    placeholder="Enter Pod Name"
                                    value={podName}
                                    onChange={(e) => setPodName(e.target.value)}
                                />
                            </div>

                            {/* Contribution Schedule */}
                            <div className="col-md-6">
                                <label htmlFor="contributionSchedule" className="form-label fw-bold small text-muted">Contribution Schedule</label>
                                <div className="input-group input-group-lg">
                                    <select
                                        className="form-select bg-light-subtle py-3"
                                        id="contributionSchedule"
                                        value={contributionSchedule}
                                        onChange={(e) => setContributionSchedule(e.target.value)}
                                    >
                                        <option value="">Select amount</option>
                                        <option value="$100">$100</option>
                                        <option value="$500">$500</option>
                                        <option value="$1000">$1,000</option>
                                        <option value="$9000">$9,000</option>
                                    </select>
                                </div>
                            </div>

                            {/* Bi-weekly or monthly */}
                            <div className="col-md-6">
                                <label htmlFor="paymentFrequency" className="form-label fw-bold small text-muted">Bi-weekly or monthly</label>
                                <div className="input-group input-group-lg">
                                    <select
                                        className="form-select bg-light-subtle py-3"
                                        id="paymentFrequency"
                                        value={paymentFrequency}
                                        onChange={(e) => setPaymentFrequency(e.target.value)}
                                    >
                                        <option value="bi-weekly">Bi-weekly</option>
                                        <option value="monthly">Monthly</option>
                                    </select>
                                    <span className="input-group-text bg-light-subtle border-0">
                                        <FaCalendarAlt />
                                    </span>
                                </div>
                            </div>

                            {/* Number of members */}
                            <div className="col-md-6">
                                <label htmlFor="numMembers" className="form-label fw-bold small text-muted">Number of members</label>
                                <input
                                    type="number" // Changed to number type
                                    className="form-control form-control-lg bg-light-subtle py-3"
                                    id="numMembers"
                                    placeholder="e.g., 50"
                                    value={numMembers}
                                    onChange={(e) => setNumMembers(e.target.value)}
                                />
                            </div>

                            {/* Pod Payout Schedule (interpreted as email) */}
                            <div className="col-md-6">
                                <label htmlFor="payoutScheduleEmail" className="form-label fw-bold small text-muted">Pod Payout Schedule (Recipient Email)</label> {/* Clarified label */}
                                <div className="input-group input-group-lg">
                                    <input
                                        type="email" // Changed to email type
                                        className="form-control bg-light-subtle py-3"
                                        id="payoutScheduleEmail"
                                        placeholder="Enter Recipient Email"
                                        value={payoutScheduleEmail}
                                        onChange={(e) => setPayoutScheduleEmail(e.target.value)}
                                    />
                                    <span className="input-group-text bg-light-subtle border-0">
                                        <FaCalendarAlt /> {/* Calendar icon kept as per image, but functionally ambiguous for an email field */}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Invite by email section */}
                        <div className="mb-4">
                            <label className="form-label fw-bold small text-muted">Invite by email</label>
                            <div className="input-group input-group-lg d-flex flex-wrap align-items-center bg-light-subtle rounded-3 p-2">
                                {/* Display invited emails as chips */}
                                {invitedEmails.map(member => (
                                    <span key={member.id} className="badge bg-primary text-white rounded-pill px-3 py-2 me-2 mb-2 d-flex align-items-center">
                                        {member.name}
                                        <button
                                            type="button"
                                            className="btn-close btn-close-white ms-2"
                                            aria-label="Remove"
                                            onClick={() => handleRemoveEmail(member.id)}
                                        ></button>
                                    </span>
                                ))}
                                {/* Input for new email */}
                                <input
                                    type="email"
                                    className="form-control flex-grow-1 border-0 bg-transparent"
                                    placeholder="Enter email to invite"
                                    value={newInviteEmail}
                                    onChange={(e) => setNewInviteEmail(e.target.value)}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter') {
                                            e.preventDefault(); // Prevent form submission
                                            handleAddEmail();
                                        }
                                    }}
                                    style={{ minWidth: '150px' }} // Ensure input doesn't get too small
                                />
                                <select
                                    className="form-select border-0 bg-transparent flex-grow-0"
                                    value={canEdit}
                                    onChange={(e) => setCanEdit(e.target.value)}
                                    style={{ maxWidth: '120px' }} // Control dropdown width
                                >
                                    <option value="can-edit">Can Edit</option>
                                    <option value="can-view">Can View</option>
                                </select>
                                <button type="button" className="btn btn-primary ms-2" onClick={handleAddEmail}>Invite</button>
                            </div>
                        </div>

                        {/* Random position toggle */}
                        <div className="d-flex justify-content-between align-items-center mb-4">
                            <span className="fw-bold">Random position</span>
                            <div className="form-check form-switch">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="randomPositionSwitch"
                                    checked={randomPosition}
                                    onChange={(e) => setRandomPosition(e.target.checked)}
                                    style={{ transform: 'scale(1.5)' }} // Make toggle larger
                                />
                                <label className="form-check-label visually-hidden" htmlFor="randomPositionSwitch">Random Position</label>
                            </div>
                        </div>

                        <p className="text-muted small">
                            NOTE: Please enter individual emails in order of their preferred payout position. The first email will receive the first payout, the second email will receive the second payout, and so on. Alternatively, click 'Random Position' to let Koajo assign positions automatically.
                        </p>

                        {/* Action Buttons */}
                        <div className="d-flex justify-content-end mt-5">
                        <a href="/userdashboard">
                            <button
                                type="button"
                                className="btn btn-outline-secondary me-3 px-4 py-2 rounded-pill"
                                onClick={() => console.log('Close form')}
                            >
                                Close
                            </button>
                        </a>
                           <a href="/userdashboard">
                            <button
                                type="submit"
                                className="btn btn-warning px-4 py-2 rounded-pill d-flex align-items-center"
                            >
                                Next <AiOutlineArrowRight className="ms-2" />
                            </button>
                           </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default PodTrackingGoal2;