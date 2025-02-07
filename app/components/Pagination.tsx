import React from 'react';

const currentPage = 1;
const totalPages = 10;

export default function Pagination() {
  return (
    <div className='bg-white rounded-lg shadow-sm p-4 flex justify-center gap-2'>
      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i}
          //   onClick={() => onPageChange(i + 1)}
          className={`px-4 py-2 rounded-lg ${
            currentPage === i + 1
              ? 'bg-blue-500 text-white'
              : 'border hover:bg-gray-50'
          }`}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
}
