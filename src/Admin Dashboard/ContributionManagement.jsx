import React, { useState, useEffect } from 'react';
import PopContributionManagement from './PopUp/PopContibutionManagement';
import AdminSideBar from './AdminSideBar'; // Ensure the path is correct

// Main App component renamed to ContributionManagement
function ContributionManagement() {
  // State to manage the sidebar's open/close status
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  // State to manage the currently active navigation item, initialized to AdminSideBar's default
  // 'Admin-overview' will display the main dashboard content.
  const [activeItem, setActiveItem] = useState('Admin-overview');

  // State for the search input in the main content
  const [searchTerm, setSearchTerm] = useState('');
  // State for the date filter dropdown in the main content
  const [dateFilter, setDateFilter] = useState('Last 7 days');

  // Sample data for the orders table
  const [orders] = useState([ // Using useState with no setter since it's static sample data
    {
      orderNo: '#790841',
      customer: 'Claire Warren',
      date: '12.08.20',
      total: '$145.85',
      payment: 'PayPal',
      status: 'Shipped',
    },
    {
      orderNo: '#790841',
      customer: 'Theresa Robertson',
      date: '12.09.20',
      total: '$225.15',
      payment: 'Credit Card',
      status: 'Shipped',
    },
    {
      orderNo: '#790841',
      customer: 'Nathan Hawkins',
      date: '12.09.20',
      total: '$45.55',
      payment: 'PayPal',
      status: 'Shipped',
    },
    {
      orderNo: '#790841',
      customer: 'Lily Williamson',
      date: '12.09.20',
      total: '$305.25',
      payment: 'Credit Card',
      status: 'Processing',
    },
    {
      orderNo: '#790841',
      customer: 'Brooklyn Steward',
      date: '12.09.20',
      total: '$483.80',
      payment: 'Credit Card',
      status: 'Shipped',
    },
  ]);

  // Function to toggle the sidebar's visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
const [selectedTransaction, setSelectedTransaction] = useState(null);

const handleOpenModal = (transaction) => {
  setSelectedTransaction(transaction);
  setIsModalOpen(true);
};

const handleCloseModal = () => {
  setIsModalOpen(false);
};


  // Effect to manage sidebar visibility based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) { // md breakpoint in Tailwind is 768px
        setIsSidebarOpen(true); // Ensure sidebar is open on desktop
      } else {
        setIsSidebarOpen(false); // Ensure sidebar is closed on mobile by default
      }
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);
    // Initial check on component mount
    handleResize();

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty dependency array means this runs once on mount and cleanup on unmount

  // Filter orders based on search term
  const filteredOrders = orders.filter((order) =>
    Object.values(order).some((value) =>
      String(value).toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="flex h-screen bg-gray-100 font-inter">
      {/* Sidebar - now using the AdminSideBar component */}
      <AdminSideBar
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        activeSidebarItem={activeItem} // Pass the currently active item
        onSetActiveItem={setActiveItem} // Pass the setter function to allow AdminSideBar to update it
      />

      {/* Main content area */}
      <div className="flex-1 p-4 md:ml-70 overflow-auto">
        {/* Header */}
        <header className="flex items-center justify-between p-6 bg-white shadow-md z-40">
          {/* Hamburger menu for mobile - uses the toggleSidebar from parent */}
          <button
            onClick={toggleSidebar}
            className="md:hidden text-gray-500 hover:text-gray-700 focus:outline-none"
            aria-label="Open sidebar"
          >
            <button
  onClick={() => setIsPopOpen(true)}
  className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
>
  Add Contribution
</button>

            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>

          {/* Search bar (hidden on mobile, visible on desktop) */}
          <div className="hidden md:flex items-center flex-grow mx-4 max-w-md">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchTerm} // Controlled component
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              </span>
            </div>
          </div>

          {/* Right section of header */}
          <div className="flex items-center space-x-4">
            {/* Search icon for mobile */}
            <button className="md:hidden text-gray-500 hover:text-gray-700 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </button>
            {/* Notification icon */}
            <button className="text-gray-500 hover:text-gray-700 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
            </button>
            {/* User profile with dropdown */}
            <div className="relative flex items-center space-x-2 cursor-pointer">
              <img
                src="https://placehold.co/40x40/FF7F50/FFFFFF?text=AT" // Placeholder image for avatar
                alt="User Avatar"
                className="w-10 h-10 rounded-full border-2 border-blue-400"
              />
              <span className="font-medium text-gray-700 hidden sm:block">ArtTemplate</span>
              <svg className="w-4 h-4 text-gray-500 hidden sm:block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              {/* Dropdown menu can be added here */}
            </div>
          </div>
        </header>

        {/* Main content display area */}
        <main className="flex-1 overflow-y-auto p-6">
          {/* Only render the dashboard content if 'Admin-overview' is the active item */}
          {activeItem === 'Admin-overview' ? (
            <div className="space-y-6">
              {/* Contributions & Allocations Management Header */}
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between bg-white p-6 rounded-lg shadow-md">
                <div className="mb-4 md:mb-0">
                  <h2 className="text-2xl font-bold text-gray-800">Contributions & Allocations Management</h2>
                  <div className="flex items-center mt-2 -space-x-2">
                    {/* User Avatars */}
                    <img
                      src="https://placehold.co/32x32/FFC0CB/FFFFFF?text=A"
                      alt="User Avatar"
                      className="w-8 h-8 rounded-full border-2 border-white"
                    />
                    <img
                      src="https://placehold.co/32x32/ADD8E6/FFFFFF?text=L"
                      alt="User Avatar"
                      className="w-8 h-8 rounded-full border-2 border-white"
                    />
                    <img
                      src="https://placehold.co/32x32/90EE90/FFFFFF?text=N"
                      alt="User Avatar"
                      className="w-8 h-8 rounded-full border-2 border-white"
                    />
                    <span className="text-sm text-gray-600 ml-3">Ava, Liam, Noah + 12 others</span>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  {/* Download Icon */}
                  <button className="p-2 rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300 transition-colors duration-200">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                  </button>
                  {/* Date Filter Dropdown */}
                  <div className="relative">
                    <select
                      value={dateFilter}
                      onChange={(e) => setDateFilter(e.target.value)}
                      className="block w-full px-4 py-2 pr-8 rounded-lg border border-gray-300 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 appearance-none"
                    >
                      <option value="Last 7 days">Last 7 days</option>
                      <option value="Last 30 days">Last 30 days</option>
                      <option value="Last 90 days">Last 90 days</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Statistics Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Card 1: Pending payment */}
                <div className=" bg-white p-6 rounded-lg shadow-md flex flex-col items-start">
                  <div className="flex items-center text-gray-700 font-bold">
                    <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                    <span>Pending payment</span>
                  </div>
                  <p className="text-3xl font-bold text-gray-800 mt-2">24</p>
                  <p className="text-sm text-green-500 mt-1">↑ 4.85 %</p>
                </div>

                {/* Card 2: Failed Transactions */}
                <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-start">
                  <div className="flex items-center text-gray-800 font-bold">
                    <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                    <span>Failed Transactions</span>
                  </div>
                  <p className="text-3xl font-bold text-gray-800 mt-2">142</p>
                  <p className="text-sm text-red-500 mt-1">↓ 5.25 %</p>
                </div>

                {/* Card 3: Complete Transactions */}
                <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-start">
                  <div className="flex items-center text-gray-800 font-bold">
                    <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                    <span>Complete Transactions</span>
                  </div>
                  <p className="text-3xl font-bold text-gray-800 mt-2">7</p>
                  <p className="text-sm text-green-500 mt-1">↑ 3.55 %</p>
                </div>

                {/* Card 4: Payment Allocation */}
                <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-start">
                  <div className="flex items-center text-gray-800 font-bold">
                    <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                    <span>Payment Allocation</span>
                  </div>
                  <p className="text-3xl font-bold text-gray-800 mt-2">3</p>
                  <p className="text-sm text-green-500 mt-1">↑ 10.30 %</p>
                </div>
              </div>

              {/* Orders Table Section */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                {/* Table Header with Search, Filter, Actions */}
                <div className="flex flex-col sm:flex-row items-center justify-between mb-4 space-y-4 sm:space-y-0 sm:space-x-4">
                  <div className="relative w-full sm:w-1/2">
                    <input
                      type="text"
                      placeholder="Search order..."
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </span>
                  </div>
                  <div className="flex space-x-4 w-full sm:w-auto justify-end">
                    <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                      Filter
                    </button>
                    <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500">
                      Actions
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </button>
                  </div>
                </div>
                <button onClick={() => handleOpenModal(order)}>View</button>
                



                {/* Responsive Table */}
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider rounded-tl-lg">
                          <input type="checkbox" className="form-checkbox h-4 w-4 text-orange-600 rounded" />
                        </th>
                        {['ORDER NO.', 'CUSTOMER', 'DATE', 'TOTAL', 'PAYMENT', 'STATUS'].map((header) => (
                          <th
                            key={header}
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            {header}
                            {/* Dropdown icon for sorting/filtering */}
                            <svg className="inline-block w-3 h-3 ml-1 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                          </th>
                        ))}
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider rounded-tr-lg"></th> {/* For actions */}
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {filteredOrders.map((order, index) => (
                        <tr key={index}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <input type="checkbox" className="form-checkbox h-4 w-4 text-orange-600 rounded" />
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {order.orderNo}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {order.customer}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {order.date}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {order.total}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {order.payment}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">
                            <span
                              className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                                ${order.status === 'Shipped' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}
                            >
                              {order.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <button className="text-gray-500 hover:text-gray-700">
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zm0 4a2 2 0 110-4 2 2 0 010 4zm0 4a2 2 0 110-4 2 2 0 010 4z"></path></svg>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ) : (
            // Default content for other active items from AdminSideBar
            <div className="bg-white rounded-lg shadow-md p-8 min-h-full flex items-center justify-center">
              <h2 className="text-2xl font-semibold text-gray-600 text-center">
                {/* Capitalize and format the activeItem for display */}
                {activeItem.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')} Content Goes Here
              </h2>
            </div>
          )}
        </main>
        <PopContributionManagement
  isOpen={isModalOpen}
  onClose={handleCloseModal}
  transaction={selectedTransaction}
/>
      </div>
    </div>
  );
}

export default ContributionManagement;