import React, { useState, useEffect } from 'react';
import {
  Home,
  User,
  Settings,
  Globe,
  Lock,
  LayoutDashboard,
  BarChart,
  ShoppingCart,
  Zap,
  Users,
  Search,
  Star,
  ChevronDown,
  ChevronRight,
  ChevronLeft,
  MoreVertical,
  CalendarDays,
  MapPin,
  Link,
  Plus,
  Bell,
  MessageSquare,
  Package,
  FileText,
  HelpCircle,
  Briefcase,
  TrendingUp,
  Facebook,
  Instagram,
  Linkedin,
  Dribbble,
  Share2,
  Phone,
  Mail,
  Camera,
  Monitor,
  Calendar,
  ClipboardList,
  Folder,
  Notebook,
  Contact,
  TrendingDown,
  Circle,
  CheckCircle,
  XCircle,
  MoreHorizontal,
  Wifi,
  Smartphone,
  Tablet,
  ChevronUp,
  Menu,
  Grid,
  Filter,
  Download,
  Upload,
  CreditCard,
  Wallet,
  DollarSign,
  Eye, // For View action
  Flag, // For Flagged status
  FilePenLine // For Review/Preview action
} from 'lucide-react'; // Using lucide-react for icons

// Import the AdminSideBar component
import AdminSideBar from './AdminSideBar'; // Adjust the path as necessary

// Main App Component
export default function KycManagement() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeSidebarItem, setActiveSidebarItem] = useState('KYC Management');
  const [activeKycTab, setActiveKycTab] = useState('All'); // State for KYC tabs

  // Sample KYC data (truncated for brevity)
  const kycData = [
    {
      id: '#790841',
      customer: 'Claire Warren',
      idType: 'Drivers License',
      idNumber: '#905505',
      dateCreated: '09.22.2025',
      status: 'Verified',
      avatar: 'https://placehold.co/32x32/E0E7FF/4F46E5?text=C'
    },
    {
      id: '#790842',
      customer: 'Claire Warren',
      idType: 'Drivers License',
      idNumber: '#905505',
      dateCreated: '09.22.2025',
      status: 'Verified',
      avatar: 'https://placehold.co/32x32/E0E7FF/4F46E5?text=C'
    },
    {
      id: '#790843',
      customer: 'Claire Warren',
      idType: 'Drivers License',
      idNumber: '#905505',
      dateCreated: '09.22.2025',
      status: 'Attention',
      avatar: 'https://placehold.co/32x32/E0E7FF/4F46E5?text=C'
    },
    {
      id: '#790844',
      customer: 'Claire Warren',
      idType: 'Drivers License',
      idNumber: '#905505',
      dateCreated: '09.22.2025',
      status: 'Attention',
      avatar: 'https://placehold.co/32x32/E0E7FF/4F46E5?text=C'
    },
    {
      id: '#790845',
      customer: 'Claire Warren',
      idType: 'Drivers License',
      idNumber: '#905505',
      dateCreated: '09.22.2025',
      status: 'Rejected',
      avatar: 'https://placehold.co/32x32/E0E7FF/4F46E5?text=C'
    },
    // Add more dummy data as needed to fill the table
    {
      id: '#790846',
      customer: 'John Doe',
      idType: 'Passport',
      idNumber: '#123456',
      dateCreated: '09.21.2025',
      status: 'Verified',
      avatar: 'https://placehold.co/32x32/E0E7FF/4F46E5?text=J'
    },
    {
      id: '#790847',
      customer: 'Jane Smith',
      idType: 'National ID',
      idNumber: '#789012',
      dateCreated: '09.20.2025',
      status: 'Attention',
      avatar: 'https://placehold.co/32x32/E0E7FF/4F46E5?text=J'
    },
    {
      id: '#790848',
      customer: 'Peter Jones',
      idType: 'Drivers License',
      idNumber: '#345678',
      dateCreated: '09.19.2025',
      status: 'Verified',
      avatar: 'https://placehold.co/32x32/E0E7FF/4F46E5?text=P'
    },
    {
      id: '#790849',
      customer: 'Alice Brown',
      idType: 'Passport',
      idNumber: '#901234',
      dateCreated: '09.18.2025',
      status: 'Rejected',
      avatar: 'https://placehold.co/32x32/E0E7FF/4F46E5?text=A'
    },
    {
      id: '#790850',
      customer: 'Bob White',
      idType: 'National ID',
      idNumber: '#567890',
      dateCreated: '09.17.2025',
      status: 'Attention',
      avatar: 'https://placehold.co/32x32/E0E7FF/4F46E5?text=B'
    },
  ];

  const filteredKycData = kycData.filter(item => {
    if (activeKycTab === 'All') return true;
    return item.status === (activeKycTab === 'Flagged' ? 'Rejected' : activeKycTab);
  });

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getStatusBadge = (status) => {
    let bgColor = '';
    let textColor = '';
    let actionButton = null;

    switch (status) {
      case 'Verified':
        bgColor = 'bg-green-100';
        textColor = 'text-green-800';
        actionButton = (
          <button className="px-3 py-1 text-sm font-medium text-white bg-green-700 rounded-md hover:bg-green-300">
            View
          </button>
        );
        break;
      case 'Attention':
        bgColor = 'bg-yellow-100';
        textColor = 'text-yellow-800';
        actionButton = (
          <button className="px-3 py-1 text-sm font-medium text-white bg-orange-400 rounded-md hover:bg-orange-300">
            Preview
          </button>
        );
        break;
      case 'Rejected':
        bgColor = 'bg-red-100';
        textColor = 'text-red-800';
        actionButton = (
          <button className="px-3 py-1 text-sm font-medium text-white bg-red-400 rounded-md hover:bg-red-300">
            Flagged
          </button>
        );
        break;
      default:
        bgColor = 'bg-gray-100';
        textColor = 'text-gray-800';
        actionButton = null;
    }
    return { bgColor, textColor, actionButton };
  };

  return (
    <div className="flex min-h-screen bg-gray-100 font-sans text-gray-800">
      {/* AdminSideBar Component */}
      <AdminSideBar
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        setActiveSidebarItem={setActiveSidebarItem}
        activeSidebarItem={activeSidebarItem}
      />

      {/* Main Content Area */}
      <div className={`flex-1 flex flex-col ${isSidebarOpen ? 'md:ml-10' : ''}`}> {/* Added md:ml-2 */}
        {/* Top Navbar */}
        <header className="bg-white shadow-sm p-4 flex items-center justify-between rounded-bl-xl rounded-br-xl">
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleSidebar}
              className="md:hidden p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <Menu className="h-5 w-5" />
            </button>
            <h1 className="text-xl font-semibold text-gray-900 hidden md:block">KYC Management</h1>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative hidden md:block">
              <input
                type="text"
                placeholder="Search..."
                className="pl-8 pr-3 py-1 border border-gray-300 rounded-md text-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
            <button className="p-2 rounded-full hover:bg-gray-100">
              <Bell className="h-5 w-5 text-gray-600" />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100">
              <Settings className="h-5 w-5 text-gray-600" />
            </button>
            <img
              src="https://placehold.co/32x32/E0A75E/ffffff?text=AT"
              alt="ArtTemplate Avatar"
              className="w-8 h-8 rounded-full"
            />
            <span className="text-gray-700 font-medium hidden sm:block">ArtTemplate</span>
            <ChevronDown className="h-4 w-4 text-gray-500 hidden sm:block" />
          </div>
        </header>

        {/* Main Content Body */}
        <main className="flex-1 p-6 md:ml-50 space-y-6">
          {/* KYC Management Header */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between bg-gray p-6 rounded-xl shadow-sm">
            <h1 className="text-2xl font-bold text-gray-900">KYC Management</h1>
            <button className="mt-4 md:mt-0 flex items-center space-x-2 px-4 py-2 bg-white text-black rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors">
              <Upload className="h-4 w-4" />
              <span>Export</span>
            </button>
          </div>

          {/* KYC Tabs and Search/Actions (rest of your content) */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex flex-wrap gap-3 mb-6 border-b border-gray-200">
              {['All', 'Verified', 'Attention', 'Flagged'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveKycTab(tab)}
                  className={`px-4 py-2 text-sm font-medium rounded-t-md ${
                    activeKycTab === tab
                      ? 'border-b-2 border-orange-600 text-black-600'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {tab}
                  <span className="ml-2 px-2 py-0.5 text-xs font-semibold bg-gray-100 rounded-full">
                    {tab === 'All' && kycData.length}
                    {tab === 'Verified' && kycData.filter(item => item.status === 'Verified').length}
                    {tab === 'Attention' && kycData.filter(item => item.status === 'Attention').length}
                    {tab === 'Flagged' && kycData.filter(item => item.status === 'Rejected').length}
                  </span>
                </button>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between mb-4 space-y-3 sm:space-y-0 sm:space-x-4">
              <div className="relative w-full sm:w-1/2">
                <input
                  type="text"
                  placeholder="Search order..."
                  className="pl-10 pr-3 py-2 border border-gray-300 rounded-md w-full text-sm focus:ring-orange-500 focus:border-orange-500"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>
              <div className="flex space-x-3">
                <button className="p-2 rounded-md hover:bg-gray-100 border border-gray-300">
                  <Filter className="h-5 w-5 text-gray-600" />
                </button>
                <div className="relative">
                  <select className="appearance-none bg-white border border-gray-300 rounded-md py-2 pl-3 pr-10 text-sm focus:ring-orange-500 focus:border-orange-500">
                    <option>Actions</option>
                    <option>Download Selected</option>
                    <option>Delete Selected</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* KYC Table */}
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      <input type="checkbox" className="rounded text-indigo-600" />
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">USER ID</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">CUSTOMER</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID TYPE</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID NUMBER</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">DATE CREATED</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">STATUS</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ACTIONS</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredKycData.map((entry, index) => {
                    const { bgColor, textColor, actionButton } = getStatusBadge(entry.status);
                    return (
                      <tr key={index}>
                        <td className="px-4 py-3 whitespace-nowrap">
                          <input type="checkbox" className="rounded text-indigo-600" />
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">{entry.id}</td>
                        <td className="px-4 py-3 whitespace-nowrap">
                          <div className="flex items-center">
                            <img src={entry.avatar} alt="Avatar" className="w-8 h-8 rounded-full mr-3" />
                            <span className="text-sm font-medium text-gray-900">{entry.customer}</span>
                          </div>
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">{entry.idType}</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">{entry.idNumber}</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">{entry.dateCreated}</td>
                        <td className="px-4 py-3 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${bgColor} ${textColor}`}>
                            {entry.status}
                          </span>
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-right text-sm font-medium">
                          <div className="flex items-center space-x-2">
                            {actionButton}
                            <button className="p-2 rounded-md hover:bg-gray-100">
                              <MoreHorizontal className="h-5 w-5 text-gray-400" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="flex flex-col sm:flex-row items-center justify-between mt-6 text-sm text-gray-600">
              <div className="flex items-center space-x-2 mb-3 sm:mb-0">
                <span>Showing 1-10 of 100</span>
              </div>
              <div className="flex items-center space-x-2">
                <button className="p-2 rounded-md hover:bg-gray-100 border border-gray-300">
                  <ChevronLeft className="h-4 w-4" />
                </button>
                {[1, 2, 3, '...', 5].map((page, index) => (
                  <button
                    key={index}
                    className={`px-3 py-1 rounded-md ${
                      page === 1 ? 'bg-orange-500 text-white' : 'hover:bg-gray-100 border border-gray-300'
                    }`}
                  >
                    {page}
                  </button>
                ))}
                <button className="p-2 rounded-md hover:bg-gray-100 border border-gray-300">
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-white p-6 text-center text-sm text-gray-500 border-t border-gray-200 rounded-tl-xl rounded-tr-xl mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto">
            <p className="mb-2 md:mb-0">2023 Koajo.</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-indigo-600">Docs</a>
              <a href="#" className="hover:text-indigo-600">Purchase</a>
              <a href="#" className="hover:text-indigo-600">FAQ</a>
              <a href="#" className="hover:text-indigo-600">Support</a>
              <a href="#" className="hover:text-indigo-600">License</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}