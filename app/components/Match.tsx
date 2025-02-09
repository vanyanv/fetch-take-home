'use client';
import React from 'react';
import { useContext } from 'react';
import { FavoritesContext } from '../contexts/FavoritesContext';
import { Heart, Loader2 } from 'lucide-react';
import { useMatchDog } from '../hooks/fetchMatch';

import { DogCard } from './DogCard';
export default function Match() {
  const { favorites } = useContext(FavoritesContext);

  const { matchId, matchedDog, loading, error, fetchMatch } =
    useMatchDog(favorites);

  return (
    <div className='flex flex-col items-center gap-4 p-6'>
      <div className='text-center mb-4'>
        <h2 className='text-2xl font-bold mb-2'>Find Your Perfect Match</h2>
        <p className='text-gray-600'>
          We will help you find your perfect furry friend from your favorites!
        </p>
      </div>

      <button
        onClick={fetchMatch}
        disabled={loading || favorites.length === 0}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors
          ${
            loading || favorites.length === 0
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700'
          }`}
      >
        {loading ? (
          <Loader2 className='h-4 w-4 animate-spin' />
        ) : (
          <Heart className='h-4 w-4' />
        )}
        {loading ? 'Finding Match...' : 'Find Match'}
      </button>

      {error && (
        <div className='mt-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-600'>
          {error}
        </div>
      )}

      {matchId && !error && matchedDog && (
        <div className='mt-4 p-4 bg-green-50 border border-green-200 rounded-lg text-green-600'>
          <p></p>We found your perfect match! {matchedDog.name}
        </div>
      )}

      {matchId && !error && matchedDog && <DogCard {...matchedDog} isFavorite={matchedDog.isFavorite ?? false} />}

      {favorites.length === 0 && (
        <p className='text-sm text-gray-500 mt-2'>
          Add some dogs to your favorites to find a match
        </p>
      )}
    </div>
  );
}
