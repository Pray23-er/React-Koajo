import React, { useState } from 'react';

function ChoosePodPage() {
  const [selectedPod, setSelectedPod] = useState(null);

  const podPlans = [
    {
      id: 'pod100',
      name: '$100 Pod Plan',
      description: '$100 contribution payment due on the 1st & 16th of each month for 3 months.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
          <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v-1h-1a.5.5 0 0 0 0 1h1v1a.5.5 0 0 0 1 0v-1h1a.5.5 0 0 0 0-1h-1Zm-9-5a5 5 0 1 1 10 0A5 5 0 0 1 3.5 10Z"/>
        </svg>
      ), // Placeholder icon
    },
    {
      id: 'pod200',
      name: '$200 Pod Plan',
      description: '$200 contribution payment due on the 1st & 16th of each month for 3 months.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
          <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v-1h-1a.5.5 0 0 0 0 1h1v1a.5.5 0 0 0 1 0v-1h1a.5.5 0 0 0 0-1h-1Zm-9-5a5 5 0 1 1 10 0A5 5 0 0 1 3.5 10Z"/>
        </svg>
      ), // Placeholder icon
    },
    {
      id: 'pod500',
      name: '$500 Pod Plan',
      description: '$500 contribution payment due on the 1st & 16th of each month for 3 months.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
          <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v-1h-1a.5.5 0 0 0 0 1h1v1a.5.5 0 0 0 1 0v-1h1a.5.5 0 0 0 0-1h-1Zm-9-5a5 5 0 1 1 10 0A5 5 0 0 1 3.5 10Z"/>
        </svg>
      ), // Placeholder icon
    },
    {
      id: 'pod1000',
      name: '$1000 Pod Plan',
      description: '$1000 contribution payment due on the 1st & 16th of each month for 3 months.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
          <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v-1h-1a.5.5 0 0 0 0 1h1v1a.5.5 0 0 0 1 0v-1h1a.5.5 0 0 0 0-1h-1Zm-9-5a5 5 0 1 1 10 0A5 5 0 0 1 3.5 10Z"/>
        </svg>
      ), // Placeholder icon
    },
    {
      id: 'customPod',
      name: 'Custom Pod Plan',
      description: 'Choose your contribution payments, however, all bi-weekly payment options are due on the 1st & 16th of each month, monthly payments are due on the 1st and you choose the length and members for your pod.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
          <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v-1h-1a.5.5 0 0 0 0 1h1v1a.5.5 0 0 0 1 0v-1h1a.5.5 0 0 0 0-1h-1Zm-9-5a5 5 0 1 1 10 0A5 5 0 0 1 3.5 10Z"/>
        </svg>
      ), // Placeholder icon
    },
  ];

  const handleSelectPod = (id) => {
    setSelectedPod(id);
  };

  return (
    <>
      {/* Link to Bootstrap CSS CDN */}
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" xintegrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossOrigin="anonymous" />
      {/* Tailwind CSS (if used, keep this) */}
      <script src="https://cdn.tailwindcss.com"></script>

      <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light">
        <div className="modal-dialog modal-dialog-centered" style={{ maxWidth: '700px', width: '100%' }}>
          <div className="modal-content rounded-4 shadow-lg p-4">
            {/* Modal Header */}
            <div className="modal-header border-0 pb-0 d-flex justify-content-between align-items-center">
              <button type="button" className="btn btn-link text-dark p-0" aria-label="Back">
                {/* BsArrowLeft icon */}
                <a href="/userdashboard">
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5a.5.5 0 0 0 .5-.5z"/>
                </svg> 
                </a>
              </button>
              <h5 className="modal-title fw-bold text-dark text-center flex-grow-1">Choose Pod</h5>
              <button type="button" className="btn btn-link text-secondary text-decoration-none p-0">
                Skip for now
              </button>
            </div>

            {/* Modal Body */}
            <div className="modal-body pt-4">
              {podPlans.map((pod) => (
                <div
                  key={pod.id}
                  className={`card mb-3 p-3 rounded-3 cursor-pointer ${selectedPod === pod.id ? 'border border-warning' : 'border'}`}
                  onClick={() => handleSelectPod(pod.id)}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="d-flex align-items-center">
                    <div className="me-3 p-2 rounded" style={{ backgroundColor: '#ffefd5', color: '#ff8c42' }}>
                      {pod.icon}
                    </div>
                    <div className="flex-grow-1">
                      <h6 className="fw-bold mb-1 text-dark">{pod.name}</h6>
                      <p className="text-muted small mb-0">{pod.description}</p>
                    </div>
                    {/* BsCircleFill icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20" height="20"
                      fill="currentColor"
                      className={selectedPod === pod.id ? 'text-warning' : 'text-light border border-secondary rounded-circle'}
                      viewBox="0 0 16 16"
                    >
                      {selectedPod === pod.id ? (
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
                      ) : (
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                      )}
                    </svg>
                  </div>
                </div>
              ))}
            </div>

            {/* Modal Footer */}
            <div className="modal-footer border-0 pt-0 d-flex justify-content-end">
              <a href="/podtracking">
              <button type="button" className="btn btn-warning fw-bold rounded-pill px-4 py-2">
                Next <span className="ms-2" style={{ transform: 'rotate(180deg)', display: 'inline-block' }}>
                  {/* BsArrowLeft icon rotated */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5a.5.5 0 0 0 .5-.5z"/>
                  </svg>
                </span>
              </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChoosePodPage;
