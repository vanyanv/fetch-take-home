'use client';
import React from 'react';

import LogoutButton from '../components/LogoutButton';

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='min-h-screen bg-gray-50'>
      <header className='bg-white shadow-sm'>
        <nav className='max-w-7xl mx-auto px-4 py-4 flex justify-between items-center'>
          <h1 className='text-xl font-bold text-indigo-600'>Dog Finder</h1>
          <div className='flex gap-4'>
            <button className='text-gray-600 hover:text-indigo-600'>
              My Favorites
            </button>
          </div>
          <LogoutButton />
        </nav>
      </header>
      <main className='max-w-7xl mx-auto px-4 py-6'>{children}</main>
    </div>
  );
}
