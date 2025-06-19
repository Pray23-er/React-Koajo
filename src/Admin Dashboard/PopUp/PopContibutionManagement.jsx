import React from 'react';

function PopContributionManagement({ isOpen, onClose, transaction }) {
  if (!isOpen || !transaction) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-4xl p-6 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 text-xl font-bold"
        >
          &times;
        </button>

        {/* Header Tabs */}
        <div className="flex border-b space-x-6 text-sm font-medium text-gray-600 mb-4">
          <span className="border-b-2 border-orange-500 text-orange-600 pb-2 cursor-pointer">Transaction Details</span>
          <span className="cursor-pointer">History</span>
          <span className="cursor-pointer">Invoice</span>
        </div>

        {/* Transaction Details */}
        <h2 className="text-lg font-semibold text-gray-700 mb-2">
          Transaction <span className="text-gray-500 font-normal">#{transaction.orderNo}</span>
        </h2>

        <div className="grid grid-cols-2 gap-6 text-sm">
          {/* Customer Info */}
          <div>
            <h3 className="text-gray-600 font-semibold mb-2">Customer</h3>
            <div className="flex items-center space-x-4">
              <img src="https://i.pravatar.cc/40" alt="avatar" className="rounded-full w-10 h-10" />
              <div>
                <p className="font-semibold">{transaction.customer}</p>
                <p className="text-gray-500">User ID: 28292829282922</p>
              </div>
            </div>
          </div>

          {/* Export Button */}
          <div className="flex justify-end">
            <div className="relative">
              <button className="border px-4 py-2 rounded-lg text-sm text-gray-700 flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 4v16h16V4H4zm4 4h8v2H8V8zm0 4h8v2H8v-2zm0 4h8v2H8v-2z" /></svg>
                Export
              </button>
              {/* Dropdown can be added here */}
            </div>
          </div>

          {/* Payment Method */}
          <div>
            <h3 className="text-gray-600 font-semibold mb-2">Payment Method</h3>
            <div className="bg-gray-50 p-3 rounded-md">
              <p className="mb-1">Method: <span className="font-semibold">{transaction.payment}</span></p>
              <p className="mb-1">Transaction ID: 000001-TXHQ</p>
              <p>Amount: {transaction.total}</p>
            </div>
          </div>

          {/* Status */}
          <div>
            <h3 className="text-gray-600 font-semibold mb-2">Status</h3>
            <div className="grid grid-cols-2 gap-4 bg-gray-50 p-3 rounded-md">
              <div>
                <p className="text-sm text-gray-500">Fulfillment status</p>
                <p className="text-sm font-semibold text-yellow-600">Suspicious</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Payment status</p>
                <p className="text-sm font-semibold text-red-600">Failed</p>
              </div>
            </div>
          </div>

          {/* User Details */}
          <div className="col-span-2">
            <h3 className="text-gray-600 font-semibold mb-2">User Details</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 bg-gray-50 p-4 rounded-md text-sm">
              <p><strong>First Name:</strong> Regina</p>
              <p><strong>Last Name:</strong> Cooper</p>
              <p><strong>Address:</strong> 993 E. Brewer St. Holtsville</p>
              <p><strong>City:</strong> New York</p>
              <p><strong>State:</strong> NY</p>
              <p><strong>Phone:</strong> +1(070) 4567-8800</p>
              <p><strong>Email:</strong> example@mail.com</p>
              <p><strong>Country:</strong> United States</p>
              <p><strong>Postcode:</strong> 11742</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopContributionManagement;
