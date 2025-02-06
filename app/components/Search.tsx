import React from 'react';

export default function Search() {
  return (
    <>
      <div className='max-w-xl mx-auto p-6'>
        <div className='relative'>
          <input
            type='search'
            placeholder='Search for dogs...'
            className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm transition-all'
            aria-label='Search for dogs'
          />
          <span className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-400'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='20'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
              />
            </svg>
          </span>
        </div>
      </div>
    </>
  );
}
