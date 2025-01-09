'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

const DashboardSidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const router = useRouter();
  const pathName = usePathname()
  const navItems = [
    { name: 'Hero', path: '/dashboard' },
    { name: 'Work', path: '/dashboard/work' },
    { name: 'Feedback', path: '/dashboard/feedback' },
  ];

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Mobile sidebar toggle button */}
      <div className="lg:hidden">
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-300"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Sidebar */}
      <div className={`lg:flex flex-col w-64 bg-white border-r border-gray-200 h-screen fixed top-0 left-0 ${isSidebarOpen ? 'block' : 'hidden'}`}>
        <div className="flex items-center justify-center h-16 border-b border-gray-200">
          <span className="text-gray-800 font-semibold text-lg">Dashboard</span>
        </div>
        <nav className="flex-grow">
          <ul className="space-y-1 py-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link href={item.path} className={`flex items-center px-6 py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 ${
                    pathName === item.path ? 'bg-sky-100 text-gray-900 font-medium' : ''
                  }`}>
                    <span className={`${router.pathname === item.path ? 'bg-gray-200' : ''}`}>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default DashboardSidebar;

