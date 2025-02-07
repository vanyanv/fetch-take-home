import React from 'react';

interface DogCardProps {
  name: string;
  age: number;
  breed: string;
  id: string;
  img: string;
  zip_code: string;
}

export const DogCard: React.FC<DogCardProps> = ({
  name,
  age,
  breed,
  img,
  zip_code,
}) => {
  return (
    <div className='relative group w-72 rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-300 ease-in-out'>
      {/* Image Container */}
      <div className='relative h-80'>
        <img
          className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-105'
          src={img}
          alt={`${name} the ${breed}`}
          loading='lazy'
        />

        {/* Gradient Overlay */}
        <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />

        {/* Location Badge */}
        <div className='absolute top-4 left-4 flex items-center gap-1 bg-white/90 px-3 py-1.5 rounded-full'>
          <span className='text-sm font-medium text-gray-700'>{zip_code}</span>
        </div>
      </div>

      {/* Content */}
      <div className='p-5'>
        <div className='flex items-center justify-between mb-3'>
          <h2 className='text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-200'>
            {name}
          </h2>
          <div className='flex items-center gap-1 text-gray-600'>
            <span className='text-sm'>
              {age} yr{age !== 1 ? 's' : ''}
            </span>
          </div>
        </div>

        {/* Breed Tag */}
        <div className='inline-block bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium'>
          {breed}
        </div>
      </div>

      {/* Hover Action Hint */}
      <div className='absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300'>
        <p className='text-white text-center text-sm font-medium'>
          Click to view details
        </p>
      </div>
    </div>
  );
};
