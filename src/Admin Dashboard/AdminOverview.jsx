import React, { useState, useEffect, useRef } from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, LineChart, Line, PieChart, Pie, Cell, AreaChart, Area } from 'recharts';
import { Menu } from 'lucide-react';
import AdminSidebar from './AdminSideBar'; // Corrected import: AdminSidebar (PascalCase for components)

// Mock Data for Charts
const incomeData = [
  { name: 'Jan', income: 4000, expense: 2400 },
  { name: 'Feb', income: 3000, expense: 1398 },
  { name: 'Mar', income: 2000, expense: 9800 },
  { name: 'Apr', income: 2780, expense: 3908 },
  { name: 'May', income: 1890, expense: 4800 },
  { name: 'Jun', income: 2390, expense: 3800 },
];

const payoutData = [
  { name: 'Jan', payout: 2400 },
  { name: 'Feb', payout: 1398 },
  { name: 'Mar', payout: 9800 },
  { name: 'Apr', payout: 3908 },
  { name: 'May', payout: 4800 },
  { name: 'Jun', payout: 3800 },
];

const podContributionData = [
  { name: '100% Pod', value: 401, color: '#3B82F6' },
  { name: '200% Pod', value: 251, color: '#60A5FA' },
  { name: '500% Pod', value: 61, color: '#93C5FD' },
  { name: '1000% Pod', value: 192, color: '#BFDBFE' },
];

const transactionRateData = [
  { name: 'Mon', success: 65, rejection: 35 },
  { name: 'Tue', success: 70, rejection: 30 },
  { name: 'Wed', success: 75, rejection: 25 },
  { name: 'Thu', success: 80, rejection: 20 },
  { name: 'Fri', success: 85, rejection: 15 },
  { name: 'Sat', success: 90, rejection: 10 },
  { name: 'Sun', success: 95, rejection: 5 },
];

const onlineUsersData = [
  { name: 'Web', value: 20, color: '#EC4899' },
  { name: 'iOS', value: 45, color: '#F472B6' },
  { name: 'Android', value: 35, color: '#F06292' },
];

const Header = ({ toggleSideBar }) => {
  return (
    <header className="bg-white px-4 py-4 flex items-center justify-between shadow-md flex-shrink-0 sticky top-0 z-10">
      <div className="flex items-center">
        <button onClick={toggleSideBar} className="text-gray-600 md:hidden mr-4 focus:outline-none">
          <Menu className="w-6 h-6" />
        </button>
        <h2 className="text-xl font-semibold text-gray-800 hidden md:block">Admin Dashboard Overview</h2>
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <input type="text" placeholder="Search..." className="border border-gray-300 rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 hidden sm:block" />
          <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 hidden sm:block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <button className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200">
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
        </button>
        <div className="flex items-center space-x-2">
          <img src="https://placehold.co/40x40/FF5733/FFFFFF?text=A" alt="User Avatar" className="w-10 h-10 rounded-full" />
          <span className="font-semibold text-gray-700 hidden sm:block">ArtTemplate</span>
          <button className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200">
            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
          </button>
        </div>
      </div>
    </header>
  );
};

const OverviewCard = ({ title, value, percentage, isPositive, icon }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md flex items-center justify-between flex-grow-0 sm:flex-grow min-w-[200px]">
      <div>
        <h3 className="text-gray-500 text-sm font-medium mb-1">{title}</h3>
        <p className="text-2xl font-bold text-gray-900">{value}</p>
        <span className={`text-xs font-semibold ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
          {percentage}
        </span>
      </div>
      <div className="text-blue-500">
        {icon}
      </div>
    </div>
  );
};

const SectionHeader = ({ title }) => {
  return (
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <div className="flex items-center text-gray-500 text-sm">
        <span className="mr-2 hidden sm:block">Monthly</span>
        <select className="border border-gray-300 rounded-md py-1 px-2 focus:outline-none focus:ring-1 focus:ring-blue-500">
          <option>Last 7 days</option>
          <option>Last 30 days</option>
          <option>Last 90 days</option>
        </select>
        <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
      </div>
    </div>
  );
};

const AdminOverview = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Renamed for consistency

  const toggleSidebar = () => { // Renamed for consistency
    setIsSidebarOpen(!isSidebarOpen);
  };

  // No need for the useRef and useEffect to scroll to top here,
  // as the layout fix should address the perceived "bottom" loading.

  return (
    <div className="font-sans antialiased flex h-screen bg-gray-100 overflow-hidden">
      {/* AdminSidebar component */}
      <AdminSidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Overlay for mobile when sidebar is open */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col md:ml-64 overflow-hidden">
        {/* Header component */}
        <Header toggleSideBar={toggleSidebar} /> {/* Pass toggleSidebar here */}

        {/* Dashboard Content */}
        <main className="flex-1 p-4 md:p-6 space-y-6 overflow-y-auto">
          {/* Overview Cards */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <OverviewCard
              title="Total Active Users"
              value="20,500"
              percentage="+4.85%"
              isPositive={true}
              icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h2a2 2 0 002-2V7a2 2 0 00-2-2h-3m-10 0H5a2 2 0 00-2 2v10a2 2 0 002 2h2m3-10v6m-3-3h6a2 2 0 000-4H8a2 2 0 00-2 2v4a2 2 0 002 2h2"></path></svg>}
            />
            <OverviewCard
              title="New Sign-Ups"
              value="290"
              percentage="-5.25%"
              isPositive={false}
              icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path></svg>}
            />
            <OverviewCard
              title="Daily User Growth"
              value="30,400"
              percentage="+3.55%"
              isPositive={true}
              icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>}
            />
            <OverviewCard
              title="Monthly User Growth"
              value="14,800"
              percentage="+10.30%"
              isPositive={true}
              icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19V6a2 2 0 00-2-2H5a2 2 0 00-2 2v13m11 0V6a2 2 0 012-2h2a2 2 0 012 2v13m-10 0h.01M7 19h.01M17 19h.01"></path></svg>}
            />
          </section>

          {/* Financial Analysis Section */}
          <section className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <SectionHeader title="Income Analysis" />
              <p className="text-3xl font-bold text-gray-900 mb-2">$8,527,224</p>
              <p className="text-sm text-gray-600 mb-4">
                Expense Increased by <span className="font-semibold text-green-500">$2,172</span> This Month
              </p>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={incomeData}>
                  <XAxis dataKey="name" axisLine={false} tickLine={false} className="text-xs" />
                  <YAxis axisLine={false} tickLine={false} className="text-xs" />
                  <Tooltip cursor={{ fill: 'transparent' }} />
                  <Bar dataKey="income" fill="#3B82F6" barSize={10} radius={[10, 10, 0, 0]} />
                  <Bar dataKey="expense" fill="#BFDBFE" barSize={10} radius={[10, 10, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <SectionHeader title="Pod Contributions" />
              <div className="flex flex-col sm:flex-row items-center justify-around">
                <ResponsiveContainer width="100%" height={200}>
                  <PieChart>
                    <Pie
                      data={podContributionData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      fill="#8884d8"
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {podContributionData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
                <div className="flex flex-col space-y-2 mt-4 sm:mt-0">
                  {podContributionData.map((entry, index) => (
                    <div key={index} className="flex items-center">
                      <span className="inline-block w-3 h-3 rounded-full mr-2" style={{ backgroundColor: entry.color }}></span>
                      <span className="text-sm text-gray-700 font-medium">${entry.value} ({entry.name.split(' ')[0]}%)</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <SectionHeader title="Payout Analysis" />
              <p className="text-3xl font-bold text-gray-900 mb-2">$2,056,123</p>
              <p className="text-sm text-gray-600 mb-4">
                Expense Increased by <span className="font-semibold text-red-500">$1,456</span> This Month
              </p>
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={payoutData}>
                  <XAxis dataKey="name" axisLine={false} tickLine={false} className="text-xs" />
                  <YAxis axisLine={false} tickLine={false} className="text-xs" />
                  <Tooltip />
                  <Line type="monotone" dataKey="payout" stroke="#EF4444" strokeWidth={2} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </section>

          {/* Transaction and KYC Section */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-800">Transaction Rate</h3>
                <span className="text-gray-500 text-sm">19 Aug - 25 Aug</span>
              </div>
              <div className="flex items-center justify-around mb-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-green-600">70%</p>
                  <p className="text-sm text-gray-500">Success</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-red-600">10%</p>
                  <p className="text-sm text-gray-500">Rejection</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-blue-600">0.5%</p>
                  <p className="text-sm text-gray-500">Pending</p>
                </div>
              </div>
              <p className="text-center text-sm text-gray-600 mb-4">Visitors: <span className="font-semibold text-blue-500">3,100</span></p>
              <ResponsiveContainer width="100%" height={200}>
                <AreaChart data={transactionRateData}>
                  <XAxis dataKey="name" axisLine={false} tickLine={false} className="text-xs" />
                  <YAxis axisLine={false} tickLine={false} className="text-xs" />
                  <Tooltip />
                  <Area type="monotone" dataKey="success" stroke="#22C55E" fill="#BBF7D0" />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-800">KYC Submission Status</h3>
                <span className="text-gray-500 text-sm">19 Aug - 25 Aug</span>
              </div>
              <div className="space-y-4">
                {[
                  { name: 'Devon Williamson', date: '2023-10-01', status: 'Approved', statusColor: 'text-green-500' },
                  { name: 'Debra Wilson', date: '2023-10-02', status: 'Approved', statusColor: 'text-green-500' },
                  { name: 'Debra Wilson', date: '2023-10-03', status: 'Pending', statusColor: 'text-yellow-500' },
                  { name: 'Debra Wilson', date: '2023-10-04', status: 'Handing', statusColor: 'text-blue-500' },
                  { name: 'Debra Wilson', date: '2023-10-05', status: 'Approved', statusColor: 'text-green-500' },
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <img src={`https://placehold.co/32x32/${Math.floor(Math.random() * 16777215).toString(16)}/FFFFFF?text=${item.name.charAt(0)}`} alt="Avatar" className="w-8 h-8 rounded-full mr-3" />
                      <div>
                        <p className="font-medium text-gray-800">{item.name}</p>
                        <p className="text-xs text-gray-500">{item.date}</p>
                      </div>
                    </div>
                    <span className={`text-sm font-medium ${item.statusColor} px-3 py-1 rounded-full bg-opacity-20`}
                      style={{ backgroundColor: item.statusColor.replace('text-', 'bg-').replace('-500', '-100') }}
                    >
                      {item.status}
                    </span>
                    <button className="text-gray-400 hover:text-gray-600 transition-colors duration-200">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01"></path></svg>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Recent Transactions and Online Users */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md col-span-1">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-800">Recent transactions,</h3>
                <span className="text-gray-500 text-sm">19 Aug - 25 Aug</span>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider rounded-tl-lg">Customer Name</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order No</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Payment Type</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider rounded-tr-lg">Date</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {[
                      { name: 'Regina Cooper', order: '8790341', amount: '$2,500', type: 'Credit Card', date: '12.09.2019' },
                      { name: 'Robert Edwards', order: '1209694', amount: '$1,500', type: 'PayPal', date: '12.09.2019' },
                      { name: 'Gloria McKinney', order: '8790657', amount: '$5,600', type: 'Credit Card', date: '12.09.2019' },
                      { name: 'Randall Fisher', order: '8790877', amount: '$2,950', type: 'PayPal', date: '12.09.2019' },
                    ].map((item, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <img src={`https://placehold.co/32x32/${Math.floor(Math.random() * 16777215).toString(16)}/FFFFFF?text=${item.name.charAt(0)}`} alt="Avatar" className="w-8 h-8 rounded-full mr-3" />
                            <span className="text-sm font-medium text-gray-900">{item.name}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.order}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.amount}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.type}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 flex items-center justify-between">
                          {item.date}
                          <button className="text-gray-400 hover:text-gray-600 ml-2">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01"></path></svg>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center justify-center">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Online Users</h3>
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={onlineUsersData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {onlineUsersData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" className="text-3xl font-bold fill-gray-900">
                    1,883
                  </text>
                  <text x="50%" y="60%" textAnchor="middle" dominantBaseline="middle" className="text-sm fill-gray-500">
                    Online
                  </text>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="text-center">
                  <p className="text-xl font-bold text-gray-900">350</p>
                  <p className="text-sm text-gray-500">Web</p>
                </div>
                <div className="text-center">
                  <p className="text-xl font-bold text-gray-900">895</p>
                  <p className="text-sm text-gray-500">iOS</p>
                </div>
                <div className="text-center">
                  <p className="text-xl font-bold text-gray-900">638</p>
                  <p className="text-sm text-gray-500">Android</p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default AdminOverview;