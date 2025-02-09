import React from 'react';
import { useContext, useState } from 'react';
import { FavoritesContext } from '../contexts/FavoritesContext';
type DogCardProps = {
  name: string;
  age: number;
  breed: string;
  id: string;
  img: string;
  zip_code: string;
  isFavorite: boolean;
};

export const DogCard = ({
  id,
  name,
  age,
  breed,
  img,
  zip_code,
  isFavorite,
}: DogCardProps) => {
  const { addFavorite, removeFavorite } = useContext(FavoritesContext);
  const [notification, setNotification] = useState('');

  const handleFavoriteClick = () => {
    if (isFavorite) {
      removeFavorite(id);
      setNotification('Removed from favorites');
    } else {
      addFavorite({ id, name, age, breed, img, zip_code });
      setNotification('Added to favorites');
    }
    setTimeout(() => setNotification(''), 2000); // Clear notification after 2 seconds
  };

  return (
    <div className='relative group w-72 rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-300 ease-in-out'>
      {notification && (
        <div className='absolute top-4 left-1/2 transform -translate-x-1/2 z-10 bg-black/80 text-white px-2 py-2 rounded-full text-sm'>
          {notification}
        </div>
      )}
      {/* Image Container */}
      <div className='relative h-60'>
        <img
          className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-105'
          src={img}
          alt={`${name} the ${breed}`}
          loading='lazy'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
      </div>

      {/* Main Information */}
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

        {/* Breed and Location */}
        <div className='flex items-center gap-10 flex-wrap'>
          <div className=' bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium'>
            {breed}
          </div>
          <div className=' bg-gray-50 text-gray-600 px-3 py-1 rounded-full text-sm font-medium'>
            📍 {zip_code}
          </div>
        </div>
      </div>

      {/* Add or Remove Favorite */}
      <button className='absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300'>
        <p
          onClick={handleFavoriteClick}
          className='text-white text-center text-sm font-medium'
        >
          {isFavorite ? 'Remove From Favorite' : 'Add to Favorite'}
        </p>
      </button>
    </div>
  );
};
