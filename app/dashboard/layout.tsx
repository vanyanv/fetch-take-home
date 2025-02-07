'use client';
import React, { useState } from 'react';
import SideBar from '../components/SideBar';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className='min-h-screen bg-gray-50 flex'>
      {/* Sidebar */}
      <SideBar isSidebarOpen={isSidebarOpen} setSideBarOpen={setSidebarOpen} />

      {/* Main Content */}
      <div
        className={`
        flex-1 
        ${isSidebarOpen ? 'ml-64' : 'ml-20'}
        transition-all duration-300 ease-in-out
      `}
      >
        <main>{children}</main>
      </div>
    </div>
  );
}
