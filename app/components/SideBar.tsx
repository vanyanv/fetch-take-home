import React from 'react';
import { Home, Heart, Menu, X, Sparkles } from 'lucide-react'; // Added Sparkles icon
import LogoutButton from '../components/LogoutButton';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type SideBarProps = {
  isSidebarOpen: boolean;
  setSideBarOpen: (value: boolean) => void;
};

export default function SideBar({
  isSidebarOpen,
  setSideBarOpen,
}: SideBarProps) {
  const pathname = usePathname();

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
        <nav className='flex flex-col gap-1'>
          <Link
            href='/dashboard'
            className={`flex items-center p-6 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg ${
              pathname === '/dashboard'
                ? 'bg-indigo-100 text-indigo-600'
                : 'text-gray-600'
            }`}
          >
            <Home size={20} />
            <span className={`ml-3 ${!isSidebarOpen && 'hidden'}`}>Home</span>
          </Link>

          <Link
            href='/dashboard/match'
            className={`flex items-center p-6 hover:bg-indigo-100 rounded-lg relative group ${
              pathname === '/dashboard/match'
                ? 'bg-indigo-100 text-indigo-600'
                : 'text-gray-600'
            }`}
          >
            <Sparkles size={20} />
            <span className={`ml-3 font-medium ${!isSidebarOpen && 'hidden'}`}>
              Find Match
            </span>
          </Link>

          <Link
            href='/dashboard/favorites'
            className={`flex items-center p-6 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg ${
              pathname === '/dashboard/favorites'
                ? 'bg-indigo-100 text-indigo-600'
                : 'text-gray-600'
            }`}
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
