import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsCheckCircleFill } from 'react-icons/bs';

function ExportSuccessCard({ onDone }) {
    return (
        // Outermost div is now just a card, not a modal-content
        <div className="card shadow-sm rounded-3 border-0 text-center" style={{ maxWidth: '400px', width: '100%' }}>
            <div className="card-body p-4">
                <div className="d-inline-flex justify-content-center align-items-center rounded-circle bg-success-subtle mb-4"
                     style={{ width: '80px', height: '80px', margin: '0 auto' }}>
                    <BsCheckCircleFill size={40} className="text-success" />
                </div>

                <h5 className="card-title fw-bold mb-2">Export Successfully</h5>
                <p className="card-text text-muted mb-4">
                    Please check your document, and open your document file
                </p>

                <button
                    type="button"
                    className="btn btn-warning w-100 py-3 rounded-pill fw-bold"
                    onClick={onDone}
                >
                    Done
                </button>
            </div>
        </div>
    );
}

export default ExportSuccessCard;