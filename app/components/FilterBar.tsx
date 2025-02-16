import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import FetchBreeds from '../hooks/fetchBreeds';

type FilterBarProps = {
  setBreed: (breed: string[]) => void;
  setSortBy: (sort: string) => void;
};
export default function FilterBar({ setBreed, setSortBy }: FilterBarProps) {
  const { breeds } = FetchBreeds();

  return (
    <div className='bg-white rounded-lg shadow-sm p-4 flex flex-wrap gap-4 items-center'>
      {/* Breed Filter */}
      <div className='flex-1 min-w-[200px]'>
        <select
          onChange={(event) =>
            setBreed(
              event.target.value === 'All Breeds' ? [] : [event.target.value]
            )
          }
          className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 '
        >
          <option>All Breeds</option>
          {breeds.map((breed, index) => (
            <option key={index} value={breed.toString()}>
              {breed.toString()}
            </option>
          ))}
        </select>
      </div>

      {/* Sort Buttons */}
      <div className='flex gap-2'>
        <button
          onClick={() => setSortBy('breed:asc')}
          className='px-4 py-2 border rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500'
        >
          <ChevronUp className='h-5 w-5' />
        </button>
        <button
          onClick={() => setSortBy('breed:desc')}
          className='px-4 py-2 border rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500'
        >
          <ChevronDown className='h-5 w-5' />
        </button>
      </div>
    </div>
  );
}
