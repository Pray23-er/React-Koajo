import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

// Import your custom CSS (if you have one, ensure it's correctly linked in your project)
// import './your-custom-styles.css'; // Example: if you have a custom CSS file

import {
  ChevronLeft,
  LayoutDashboard,
  Users,
  ShieldCheck,
  HardHat,
  List,
  Briefcase,
  DollarSign,
  Calendar,
  Mail,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

function AdminSideBar({ isSidebarOpen, toggleSidebar }) {
  const [isPodManagementOpen, setIsPodManagementOpen] = useState(false);
  const [activeSidebarItem, setActiveSidebarItem] = useState('Admin-overview');

  const togglePodManagement = () => {
    setIsPodManagementOpen(!isPodManagementOpen);
  };

  const handleSidebarItemClick = (item) => {
    setActiveSidebarItem(item);
    // Close sidebar on item click for smaller screens
    if (window.innerWidth < 768) {
      toggleSidebar();
    }
  };

  return (
    <aside
      className={`
        fixed top-0 bottom-0 left-0 w-64 text-gray-100 shadow-lg z-50
        transform transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0 md:block
      `}
      style={{ backgroundColor: '#141d26' }}
    >
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <div className="flex items-center">
          <span className="text-lg font-bold text-white">Koajo</span>
        </div>
        <button
          onClick={toggleSidebar}
          className="md:hidden p-2 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400"
          aria-label="Toggle sidebar"
        >
          <ChevronLeft className="h-5 w-5 text-gray-400" />
        </button>
      </div>

      <nav className="p-4 space-y-2">
        <ul className="space-y-1">
          <li>
            <a
              href="/admin-overview"
              onClick={() => handleSidebarItemClick('Admin-overview')}
              className={`flex items-center py-3 px-6 text-white no-underline hover:bg-black hover:text-white transition-colors duration-200 ${
                activeSidebarItem === 'Admin-overview'
                  ? 'bg-black text-blue-700 font-semibold border-l-4 border-orange-400' : ''
              } rounded-r-lg`}
            >
              <LayoutDashboard className="h-5 w-5 mr-3" />
              Admin-overview
            </a>
          </li>

          <li>
            <a
              href="/user-management"
              onClick={() => handleSidebarItemClick('user management')}
              className={`flex items-center py-3 px-6 text-white no-underline hover:bg-black hover:text-white transition-colors duration-200 ${
                activeSidebarItem === 'user management'
                  ? 'bg-black text-blue-700 font-semibold border-l-4 border-orange-400' : ''
              } rounded-r-lg`}
            >
              <Users className="h-5 w-5 mr-3" />
              User Management
            </a>
          </li>

          <li>
            <a
              href="/kyc-management"
              onClick={() => handleSidebarItemClick('kyc management')}
              className={`flex items-center py-3 px-6 text-white no-underline hover:bg-black hover:text-white transition-colors duration-200 ${
                activeSidebarItem === 'kyc management'
                  ? 'bg-black text-blue-700 font-semibold border-l-4 border-orange-400' : ''
              } rounded-r-lg`}
            >
              <ShieldCheck className="h-5 w-5 mr-3" />
              KYC Management
            </a>
          </li>

          <li>
            {/* Wrapper div for Pod Management to allow dropdown toggle icon */}
            <div
              className={`flex items-center py-3 px-6 text-white hover:bg-black hover:text-white transition-colors duration-200 ${
                activeSidebarItem === 'pod management' || isPodManagementOpen
                  ? 'bg-black text-blue-700 font-semibold border-l-4 border-orange-400' : ''
              } rounded-r-lg`}
            >
              {/* Actual link for Pod Management */}
              <a
                href="/pod-management"
                onClick={() => handleSidebarItemClick('pod management')}
                className="flex items-center flex-grow text-inherit no-underline py-0"
              >
                <HardHat className="h-5 w-5 mr-3" />
                Pod Management
              </a>
              {/* Toggle button for dropdown */}
              <button
                onClick={togglePodManagement}
                className="p-1 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400 text-inherit"
                aria-expanded={isPodManagementOpen}
                aria-controls="pod-management-submenu"
              >
                {isPodManagementOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </button>
            </div>
            {/* Submenu for Pod Management */}
            {isPodManagementOpen && (
              <ul id="pod-management-submenu" className="pl-6 mt-1 space-y-1">
                <li>
                  <a
                    href="/pod-management/task"
                    onClick={() => handleSidebarItemClick('task')}
                    className={`flex items-center py-3 px-6 text-white no-underline hover:bg-black hover:text-white transition-colors duration-200 ${
                      activeSidebarItem === 'task'
                          ? 'bg-black text-blue-700 font-semibold border-l-4 border-orange-400' : ''
                  } rounded-r-lg`}
                  >
                    <List className="h-4 w-4 mr-3" />
                    Task
                  </a>
                </li>
                <li>
                  <a
                    href="/pod-management/project"
                    onClick={() => handleSidebarItemClick('project')}
                    className={`flex items-center py-3 px-6 text-white no-underline hover:bg-black hover:text-white transition-colors duration-200 ${
                      activeSidebarItem === 'project'
                        ? 'bg-black text-blue-700 font-semibold border-l-4 border-orange-400' : ''
                  } rounded-r-lg`}
                  >
                    <Briefcase className="h-4 w-4 mr-3" />
                    Project
                  </a>
                </li>
              </ul>
            )}
          </li>

          <li>
            <a
              href="/contribution-management"
              onClick={() => handleSidebarItemClick('contribution and allocation management')}
              className={`flex items-center py-3 px-6 text-white no-underline hover:bg-black hover:text-white transition-colors duration-200${
                activeSidebarItem === 'contribution and allocation management'
                    ? 'bg-black text-blue-700 font-semibold border-l-4 border-orange-400' : ''
              } rounded-r-lg`}
            >
              <DollarSign className="h-5 w-5 mr-3" />
              Contribution and Allocation Management
            </a>
          </li>

          <li>
            <a
              href="/calendar"
              onClick={() => handleSidebarItemClick('calendar')}
              className={`flex items-center py-3 px-6 text-white no-underline hover:bg-black hover:text-white transition-colors duration-200 ${
                activeSidebarItem === 'calendar'
                  ? 'bg-black text-blue-700 font-semibold border-l-4 border-orange-400' : ''
              } rounded-r-lg`}
            >
              <Calendar className="h-5 w-5 mr-3" />
              Calendar
            </a>
          </li>

          <li>
            <a
              href="/mail-management"
              onClick={() => handleSidebarItemClick('mail')}
              className={`flex items-center py-3 px-6 text-white no-underline hover:bg-black hover:text-white transition-colors duration-200 ${
                activeSidebarItem === 'mail'
                    ? 'bg-black text-blue-700 font-semibold border-l-4 border-orange-400' : ''
              } rounded-r-lg`}
            >
              <Mail className="h-5 w-5 mr-3" />
              Mail
              <span className="ml-auto bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                8
              </span>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default AdminSideBar;