import React, { useState } from 'react';
import {
  Home, CalendarDays, Mail, MessageSquare, ListTodo, Folder, FileText, Users,
  Search, Bell, Menu, Plus, ChevronDown, ArrowUp, ArrowDown, MoreVertical, Download
} from 'lucide-react';

// Import the AdminSideBar component
import AdminSideBar from './AdminSideBar'; // Assuming AdminSideBar is in the same directory or adjust path

// Main PodManagement Component (Renamed from GroupManagement)
const PodManagement = () => {
  // State to control the visibility of the sidebar on mobile devices
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  // State for the "Last 7 days" dropdown
  const [timeframe, setTimeframe] = useState('Last 7 days');

  // Dummy data for the summary cards
  const summaryData = [
    { title: 'Active Groups', value: '24', percentage: '+4.85%', icon: ArrowUp, color: 'text-green-500' },
    { title: 'Total Members', value: '142', percentage: '+5.35%', icon: ArrowDown, color: 'text-red-500' },
    { title: 'Pending Invites', value: '7', percentage: '+3.55%', icon: ArrowUp, color: 'text-green-500' },
    { title: 'Incomplete Groups', value: '3', percentage: '+10.30%', icon: ArrowDown, color: 'text-red-500' },
  ];

  // Dummy data for recent transactions
  const transactions = [
    { id: 1, name: 'Devon Williamson', time: '08:00 AM', date: '10 August', type: 'Payment', amount: '+ $ 1,400', avatar: 'https://placehold.co/40x40/FF6347/FFFFFF?text=DW' },
    { id: 2, name: 'Debra Wilson', time: '09:45 AM', date: '19 August', type: 'Refund', amount: '- $ 850', avatar: 'https://placehold.co/40x40/6A5ACD/FFFFFF?text=DW' },
    { id: 3, name: 'Judith Black', time: '10:15 AM', date: '20 August', type: 'Payment', amount: '+ $ 2,050', avatar: 'https://placehold.co/40x40/3CB371/FFFFFF?text=JB' },
    { id: 4, name: 'Philip Henry', time: '10:50 AM', date: '25 August', type: 'Payment', amount: '+ $ 650', avatar: 'https://placehold.co/40x40/FFD700/000000?text=PH' },
    { id: 5, name: 'Mitchell Cooper', time: '12:45 AM', date: '25 August', type: 'Payment', amount: '+ $ 900', avatar: 'https://placehold.co/40x40/8A2BE2/FFFFFF?text=MC' },
  ];

  // Dummy data for active tasks
  const activeTasks = [
    { id: 1, assignee: 'Regina Cooper', description: 'Sending project #783 for revision to Leslie Miles' },
    { id: 2, assignee: 'Regina Cooper', description: 'Sending project #676 for revision to Kristin Edwards' },
    { id: 3, assignee: 'Regina Cooper', description: 'Sending project #788 for revision to Regina Warren' },
    { id: 4, assignee: 'Regina Cooper', description: 'Sending project #543 for revision to Stella Penas' },
  ];

  // Dummy data for group table
  const groups = [
    { id: 1, groupId: '#590597884494', members: 4, cycleProgress: 50, status: '1 week left' },
    { id: 2, groupId: '#590597884494', members: 3, cycleProgress: 50, status: '1 week left' },
    { id: 3, groupId: '#590597884494', members: 5, cycleProgress: 50, status: '1 week left' },
    { id: 4, groupId: '#590597884494', members: 2, cycleProgress: 50, status: '1 week left' },
    { id: 5, groupId: '#590597884494', members: 4, cycleProgress: 50, status: '1 week left' },
    { id: 6, groupId: '#590597884494', members: 3, cycleProgress: 50, status: '1 week left' },
    { id: 7, groupId: '#590597884494', members: 5, cycleProgress: 50, status: '1 week left' },
  ];

  // State for active tasks filter
  const [activeTasksFilter, setActiveTasksFilter] = useState('Day');

  // Function to toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Function to handle adding a new project (placeholder)
  const handleAddProject = () => {
    console.log("Add Project clicked!");
    // In a real app, you'd open a modal or navigate to a new page
  };

  // Function to handle actions dropdown in table (placeholder)
  const handleActions = () => {
    console.log("Actions dropdown clicked!");
  };

  return (
    <div className="flex h-screen bg-gray-100 font-inter">
      {/* AdminSideBar Component */}
      <AdminSideBar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main content area */}
      {/* Added ml-64 for medium screens and above to push content right if sidebar is open */}
      <div className={`flex-1 flex flex-col transition-all duration-300 ease-in-out ${isSidebarOpen ? 'md:ml-64' : 'md:ml-0'}`}>
        {/* Header Component */}
        <Header toggleSidebar={toggleSidebar} /> {/* Pass toggleSidebar to Header */}

        {/* Content Area */}
        <main className="flex-1 p-4 md:ml-70 overflow-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-0">Pod Management</h1> {/* Renamed title */}
            <div className="flex items-center space-x-4">
              <div className="relative">
                <select
                  value={timeframe}
                  onChange={(e) => setTimeframe(e.target.value)}
                  className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm rounded-md appearance-none bg-white"
                >
                  <option>Last 7 days</option>
                  <option>Last 30 days</option>
                  <option>Last 90 days</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>
              <button
                onClick={handleAddProject}
                className="flex items-center px-4 py-2 bg-orange-400 text-white rounded-lg shadow-md hover:bg-orange-300 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-75"
              >
                <Plus className="w-5 h-5 mr-2" /> Add Project
              </button>
            </div>
          </div>
          <p className="text-gray-600 mb-8">Ava, Liam, Noah, 12 others</p>

          {/* Summary Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {summaryData.map((data, index) => (
              <SummaryCard key={index} {...data} />
            ))}
          </div>

          {/* Transactions and Active Tasks Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Transactions Section */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Transactions</h2>
              <div className="grid gap-4">
                {transactions.map(transaction => (
                  <TransactionItem key={transaction.id} {...transaction} />
                ))}
              </div>
            </div>

            {/* Active Tasks Section */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-gray-800">Active Tasks</h2>
                <div className="flex space-x-2 bg-gray-100 rounded-md p-1">
                  {['Day', 'Week', 'Month'].map(filter => (
                    <button
                      key={filter}
                      onClick={() => setActiveTasksFilter(filter)}
                      className={`px-3 py-1 rounded-md text-sm font-medium transition duration-200 ease-in-out
                        ${activeTasksFilter === filter ? 'bg-orange-400 text-white shadow' : 'text-gray-700 hover:bg-gray-200'}
                      `}
                    >
                      {filter}
                    </button>
                  ))}
                </div>
              </div>
              <div className="grid gap-4">
                {activeTasks.map(task => (
                  <ActiveTaskItem key={task.id} {...task} />
                ))}
              </div>
            </div>
          </div>

          {/* Group ID Table Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
              <div className="relative w-full sm:w-1/2 md:w-1/3 mb-4 sm:mb-0">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>
              <div className="flex items-center space-x-3">
                <button className="p-2 text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-300 rounded-full">
                  <Menu className="w-6 h-6" /> {/* Filter icon, using Menu as a placeholder */}
                </button>
                <div className="relative">
                  <button
                    onClick={handleActions}
                    className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg shadow-sm hover:bg-gray-200 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-75"
                  >
                    Actions <ChevronDown className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      <input type="checkbox" className="rounded text-orange-600 focus:ring-orange-500" />
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      GROUP ID
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      MEMBERS
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      CYCLE PROGRESS
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      STATUS
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Actions</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {groups.map((group) => (
                    <tr key={group.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <input type="checkbox" className="rounded text-orange-600 focus:ring-orange-500" />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">Group ID</div>
                        <div className="text-sm text-gray-500">{group.groupId}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex -space-x-2 overflow-hidden">
                          {Array.from({ length: group.members }).map((_, i) => (
                            <img
                              key={i}
                              className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                              src={`https://placehold.co/32x32/random/FFFFFF?text=${i + 1}`}
                              alt=""
                            />
                          ))}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                            <div
                              className="bg-green-600 h-2.5 rounded-full"
                              style={{ width: `${group.cycleProgress}%` }}
                            ></div>
                          </div>
                          <span className="text-sm text-gray-600">{group.cycleProgress}%</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {group.status}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button className="text-gray-600 hover:text-gray-900">
                          <MoreVertical className="w-5 h-5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="flex flex-col sm:flex-row justify-between items-center mt-6 text-sm text-gray-600">
              <div className="mb-2 sm:mb-0">
                Showing 1-10 of 100
              </div>
              <div className="flex items-center space-x-2">
                <button className="px-3 py-1 rounded-md border border-gray-300 hover:bg-gray-100">&lt;</button>
                <button className="px-3 py-1 rounded-md border border-gray-300 bg-orange-400 text-white">1</button>
                <button className="px-3 py-1 rounded-md border border-gray-300 hover:bg-gray-100">2</button>
                <button className="px-3 py-1 rounded-md border border-gray-300 hover:bg-gray-100">3</button>
                <span>...</span>
                <button className="px-3 py-1 rounded-md border border-gray-300 hover:bg-gray-100">5</button>
                <button className="px-3 py-1 rounded-md border border-gray-300 hover:bg-gray-100">&gt;</button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

// Header Component (Modified to use toggleSidebar from props)
const Header = ({ toggleSidebar }) => {
  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-md rounded-b-lg">
      <button
        className="md:hidden p-2 text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-300 rounded-md"
        onClick={toggleSidebar} // Use toggleSidebar prop
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* This div helps push content over when the sidebar is visible on larger screens */}
      <div className="hidden md:block w-64"></div>

      <div className="hidden md:flex items-center flex-1 mx-4">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <button className="p-2 text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-full">
          <Search className="w-6 h-6 md:hidden" />
          <Bell className="w-6 h-6 hidden md:block" />
        </button>
        <button className="p-2 text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-full">
          <Bell className="w-6 h-6 md:hidden" />
          <Search className="w-6 h-6 hidden md:block" />
        </button>
        <div className="flex items-center">
          <img
            src="https://placehold.co/40x40/FF6347/FFFFFF?text=AT"
            alt="User Avatar"
            className="w-10 h-10 rounded-full mr-2 border-2 border-gray-500"
          />
          <span className="font-semibold text-gray-800 hidden sm:block">ArtTemplate</span>
        </div>
      </div>
    </header>
  );
};

// SummaryCard Component (Modified for percentage display)
const SummaryCard = ({ title, value, percentage, icon: Icon, color }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-start space-y-2">
      <div className="flex items-center justify-between w-full">
        <p className="text-gray-600 text-sm">{title}</p>
        <div className={`flex items-center text-xs font-semibold ${color}`}>
          <Icon className="w-4 h-4 mr-1" /> {percentage}
        </div>
      </div>
      <h3 className="text-2xl font-bold text-gray-800">{value}</h3>
    </div>
  );
};

// TransactionItem Component (Re-used from previous responses)
const TransactionItem = ({ name, time, date, type, amount, avatar }) => {
  const isPositive = amount.includes('+');
  return (
    <div className="flex items-center justify-between py-3 border-b border-gray-200 last:border-b-0">
      <div className="flex items-center space-x-4">
        <img src={avatar} alt={name} className="w-10 h-10 rounded-full" />
        <div>
          <p className="font-semibold text-gray-800">{name}</p>
          <p className="text-gray-500 text-sm">{time} &bull; {date}</p>
        </div>
      </div>
      <div className="text-right">
        <p className={`font-bold ${isPositive ? 'text-green-600' : 'text-red-600'}`}>{amount}</p>
        <p className="text-gray-500 text-sm">{type}</p>
      </div>
    </div>
  );
};

// ActiveTaskItem Component
const ActiveTaskItem = ({ assignee, description }) => {
  return (
    <div className="flex items-start space-x-3 py-2 border-b border-gray-200 last:border-b-0">
      <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
      <div>
        <p className="font-semibold text-gray-800">{assignee}</p>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
      <button className="ml-auto p-1 text-gray-500 hover:text-gray-800">
        <MoreVertical className="w-5 h-5" />
      </button>
    </div>
  );
};

export default PodManagement;