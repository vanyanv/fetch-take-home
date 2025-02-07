import React from 'react';

export default function LoadingSkeleton() {
  return (
    <>
      {Array(8)
        .fill(0)
        .map((_, index) => (
          <div key={index}>
            <div className='bg-gray-200 rounded-lg h-72 w-full animate-pulse'></div>
          </div>
        ))}
    </>
  );
}
