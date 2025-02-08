'use client';
import React from 'react';
import { useContext } from 'react';
import { FavoritesContext } from '../contexts/FavoritesContext';
import { Dog } from '../types';
import { DogCard } from './DogCard';
export default function Favorites() {
  const { favorites } = useContext(FavoritesContext);

  if (favorites.length === 0) {
    return (
      <div className='flex flex-col items-center justify-center min-h-[400px] p-4'>
        <h2 className='text-2xl font-semibold text-gray-700 mb-2'>
          No Favorites Yet
        </h2>
        <p className='text-gray-500'>
          Start adding items to your favorites to see them here!
        </p>
      </div>
    );
  }

  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-4xl font-bold text-gray-800 mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600'>
        My Favorites
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {favorites.map((dog: Dog) => (
          <DogCard
            key={dog.id}
            id={dog.id}
            name={dog.name}
            age={dog.age}
            breed={dog.breed}
            img={dog.img}
            zip_code={dog.zip_code}
            isFavorite={true}
          />
        ))}
      </div>
    </div>
  );
}
