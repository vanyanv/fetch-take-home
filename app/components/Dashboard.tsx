'use client';
import React from 'react';

import { DogCard } from './DogCard';
import FetchDogs from '../hooks/fetchDogs';
export default function Dashboard() {
  const { dogs, isLoading } = FetchDogs();

  if (isLoading)
    return (
      <div className='min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center'>
        <div className='text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600'>
          Loading available pups...
        </div>
      </div>
    );
  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 to-purple-50'>
      <div className='container mx-auto px-6 py-12'>
        {/* Header */}
        <div className='text-center mb-12'>
          <h1 className='text-4xl font-bold text-gray-800 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600'>
            Available Dogs
          </h1>
          <div className='w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full' />
        </div>

        {/* Cards Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
          {dogs.map((dog, index) => (
            <div
              key={index}
              className='flex justify-center transform hover:-translate-y-1 transition-transform duration-300'
            >
              <DogCard
                name={dog.name}
                age={dog.age}
                breed={dog.breed}
                id={dog.id}
                img={dog.img}
                zip_code={dog.zip_code}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
