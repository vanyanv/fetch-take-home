import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const breeds = [
  'Labrador Retriever',
  'German Shepherd',
  'Golden Retriever',
  'French Bulldog',
  'Beagle',
  'Poodle',
  'Rottweiler',
  'Yorkshire Terrier',
  'Boxer',
  'Dachshund',
];

export default function FilterBar() {
  return (
    <div className='bg-white rounded-lg shadow-sm p-4 flex flex-wrap gap-4 items-center'>
      {/* Breed Filter */}
      <div className='flex-1 min-w-[200px]'>
        <select className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'>
          <option value=''>All Breeds</option>
          {breeds.map((breed) => (
            <option key={breed} value={breed}>
              {breed}
            </option>
          ))}
        </select>
      </div>

      {/* Sort Buttons */}
      <div className='flex gap-2'>
        <button
          //   onClick={() => onSortChange('asc')}
          className='px-4 py-2 border rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500'
        >
          <ChevronUp className='h-5 w-5' />
        </button>
        <button
          //   onClick={() => onSortChange('desc')}
          className='px-4 py-2 border rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500'
        >
          <ChevronDown className='h-5 w-5' />
        </button>
      </div>
    </div>
  );
}
