import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AiOutlineClose } from 'react-icons/ai';
import ExportSuccessCard from './ExportSuccessData'; // Adjust the import path as necessary

function ExportModal({ onClose }) {
    const [selectedDocumentType, setSelectedDocumentType] = useState('PDF');
    const [showSuccess, setShowSuccess] = useState(false);

    const handleConfirm = () => {
        console.log(`Simulating export of data as: ${selectedDocumentType}`);
        setTimeout(() => {
            setShowSuccess(true);
        }, 500);
    };

    const handleCloseOrDone = () => {
        console.log("Export process finished or modal closed.");
        onClose();
        setShowSuccess(false);
        setSelectedDocumentType('PDF');
    };

    if (showSuccess) {
        return <ExportSuccessCard onDone={handleCloseOrDone} />;
    }

    return (
        // Outermost div is now just a card, not a modal-content
        <div className="card shadow-sm rounded-3 border-0" style={{ maxWidth: '400px', width: '100%' }}>
            <div className="card-header bg-white border-0 d-flex justify-content-end p-3">
                <button
                    type="button"
                    className="btn-close"
                    aria-label="Close"
                    onClick={handleCloseOrDone}
                >
                    <AiOutlineClose size={20} className="text-muted" />
                </button>
            </div>
            <div className="card-body p-4 text-center">
                <h5 className="card-title fw-bold mb-1">Export Data</h5>
                <p className="card-text text-muted mb-4">export data into document form</p>

                <div className="mb-4 text-start">
                    <label htmlFor="documentType" className="form-label fw-bold small text-muted">
                        Choose type of document
                    </label>
                    <select
                        className="form-select form-select-lg bg-light-subtle py-3"
                        id="documentType"
                        value={selectedDocumentType}
                        onChange={(e) => setSelectedDocumentType(e.target.value)}
                    >
                        <option value="PDF">PDF</option>
                        <option value="CSV">CSV</option>
                        <option value="Excel">Excel</option>
                    </select>
                </div>

                <button
                    type="button"
                    className="btn btn-warning w-100 py-3 rounded-pill fw-bold"
                    onClick={handleConfirm}
                >
                    Confirm
                </button>
            </div>
        </div>
    );
}

export default ExportModal;