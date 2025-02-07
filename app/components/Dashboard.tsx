'use client';
import React from 'react';

import { DogCard } from './DogCard';
import FetchDogs from '../hooks/fetchDogs';
import FilterBar from './FilterBar';
import Pagination from './Pagination';
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
    <div className='h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex flex-col'>
      <div className='container mx-auto px-1 py-4 flex flex-col h-full gap-4'>
        {/* Header */}
        <div className='text-center'>
          <h1 className='text-4xl font-bold text-gray-800 mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600'>
            Available Dogs
          </h1>
          <div className='w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full' />
        </div>

        <FilterBar />

        {/* Cards Grid */}
        <div className='flex-1 overflow-hidden'>
          <div className='h-full overflow-auto px-1'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
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
        <Pagination />
      </div>
    </div>
  );
}
