import React from 'react';
import { Home, Heart, Menu, X } from 'lucide-react';
import LogoutButton from '../components/LogoutButton';
import Link from 'next/link';

type SideBarProps = {
  isSidebarOpen: boolean;
  setSideBarOpen: (value: boolean) => void;
};
export default function SideBar({
  isSidebarOpen,
  setSideBarOpen,
}: SideBarProps): React.ReactElement {
  return (
    <>
      <div
        className={`
              ${isSidebarOpen ? 'w-64' : 'w-20'} 
              bg-white shadow-lg fixed h-full transition-all duration-300 ease-in-out
            `}
      >
        <div className='p-4 flex items-center justify-between'>
          <h1
            className={`text-xl font-bold text-indigo-600 ${
              !isSidebarOpen && 'hidden'
            }`}
          >
            Fetch
          </h1>
          <button
            onClick={() => setSideBarOpen(!isSidebarOpen)}
            className='p-2 rounded-lg hover:bg-gray-100'
          >
            {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Navigation*/}
        <nav>
          <Link
            href='dashboard'
            className='flex items-center p-6 text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg mb-2'
          >
            <Home size={20} />
            <span className={`ml-3 ${!isSidebarOpen && 'hidden'}`}>Home</span>
          </Link>
          <Link
            href='/dashboard/favorites'
            className='flex items-center p-6 text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg mb-2'
          >
            <Heart size={20} />
            <span className={`ml-3 ${!isSidebarOpen && 'hidden'}`}>
              My Favorites
            </span>
          </Link>
        </nav>

        {/* Logout Button */}
        <div className='absolute bottom-8 w-full p-4'>
          <div className={`${!isSidebarOpen && 'hidden'}`}>
            <LogoutButton />
          </div>
        </div>
      </div>
    </>
  );
}
