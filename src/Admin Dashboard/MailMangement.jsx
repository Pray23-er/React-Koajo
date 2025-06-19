import React, { useState } from "react";
import { Bell, Trash2, Pencil, Plus } from "lucide-react";
import AddNoteModal from "./PopUp/AddNote";
import AdminSideBar from './AdminSideBar'; // Assuming AdminSideBar is in the same directory or a common 'components' folder

export default function MailManagement() {
  const [reminderEnabled, setReminderEnabled] = useState(true);
  const [welcomeEmailEnabled, setWelcomeEmailEnabled] = useState(false);
  // State for controlling the sidebar visibility
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); 

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const [isModalOpen, setIsModalOpen] = useState(false);


  return (
    <div className="flex h-screen bg-gray-100">
      {/* AdminSideBar component */}
      <AdminSideBar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-y-auto ml-0 md:ml-64 transition-all duration-300 ease-in-out">
        {/* Top Bar - Adjusted to show toggle button on small screens */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center">
            {/* Hamburger icon for small screens to open sidebar */}
            <button
              onClick={toggleSidebar}
              className="md:hidden p-2 mr-4 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              aria-label="Toggle sidebar"
            >
              <svg
                className="w-6 h-6 text-gray-800"
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
            <h1 className="text-2xl font-semibold">Dashboard</h1>
          </div>
          <div className="flex items-center gap-4">
            <Bell className="text-gray-600 w-5 h-5" />
            <div className="w-8 h-8 bg-yellow-300 rounded-full flex items-center justify-center">
              <span className="text-sm font-bold">A</span>
            </div>
          </div>
        </div>

        {/* Platform Announcements */}
        <section className="bg-white rounded-lg shadow p-4 mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Platform Announcements</h2>
            <button className="bg-blue-500 text-white px-4 py-2 rounded flex items-center gap-2 text-sm">
              <Plus className="w-4 h-4" /> New Announcement
            </button>
          </div>
          <div className="border rounded p-3 flex justify-between items-center">
            <div>
              <p className="font-medium">System Maintenance Notice</p>
              <p className="text-sm text-gray-500">Scheduled maintenance on March 15, 2025</p>
            </div>
            <div className="flex gap-2">
              <button 
  className="text-gray-600 hover:text-blue-500"
  onClick={() => setIsModalOpen(true)}
>
  <Pencil className="w-4 h-4" />
</button>

              {isModalOpen && (
  <AddNoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
)}

              <button className="text-gray-600 hover:text-red-500">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>

        {/* Automated Notification */}
        <section className="bg-white rounded-lg shadow p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Automated notification</h2>
            <button className="bg-green-500 text-white px-4 py-2 rounded flex items-center gap-2 text-sm">
              <Plus className="w-4 h-4" /> New Announcement
            </button>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center border rounded p-3">
              <div>
                <p className="font-medium">Welcome Email</p>
                <p className="text-sm text-gray-500">let me know if there is a new product update</p>
              </div>
              <button
                onClick={() => setWelcomeEmailEnabled(!welcomeEmailEnabled)}
                className={`w-11 h-6 flex items-center rounded-full p-1 transition-colors duration-300 ${
                  welcomeEmailEnabled ? "bg-green-500" : "bg-gray-300"
                }`}
              >
                <div
                  className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                    welcomeEmailEnabled ? "translate-x-5" : "translate-x-0"
                  }`}
                ></div>
              </button>
            </div>

            <div className="flex justify-between items-center border rounded p-3">
              <div>
                <p className="font-medium">Reminders</p>
                <p className="text-sm text-gray-500">tell me about the information after making the transaction</p>
              </div>
              <button
                onClick={() => setReminderEnabled(!reminderEnabled)}
                className={`w-11 h-6 flex items-center rounded-full p-1 transition-colors duration-300 ${
                  reminderEnabled ? "bg-green-500" : "bg-gray-300"
                }`}
              >
                <div
                  className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                    reminderEnabled ? "translate-x-5" : "translate-x-0"
                  }`}
                ></div>
              </button>
            </div>
          </div>
        </section>
      </main>
      

    </div>
  );
}