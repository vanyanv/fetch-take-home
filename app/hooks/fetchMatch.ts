import { useState, useRef, useEffect } from 'react';
import { Dog } from '../types';
interface UseMatchDogReturn {
  matchId: string | undefined;
  matchedDog: Dog | undefined;
  loading: boolean;
  error: string | null;
  fetchMatch: () => Promise<void>;
}

export const useMatchDog = (favorites: Dog[]): UseMatchDogReturn => {
  const abortControllerRef = useRef<AbortController | null>(null);
  const [matchId, setMatchId] = useState<string>();
  const [matchedDog, setMatchedDog] = useState<Dog>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Cleanup function to abort any ongoing requests
  const cleanup = () => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
  };

  // Cleanup on hook unmount
  useEffect(() => {
    return () => cleanup();
  }, []);

  const fetchMatch = async () => {
    const favoriteIds = favorites.map((favorite) => favorite.id);

    if (favoriteIds.length === 0) {
      setError('Please add some dogs to your favorites first!');
      return;
    }

    // Cleanup any existing requests
    cleanup();

    // Create new AbortController for this request
    const abortController = new AbortController();
    abortControllerRef.current = abortController;

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        'https://frontend-take-home-service.fetch.com/dogs/match',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
          body: JSON.stringify(favoriteIds),
        }
      );

      if (abortController.signal.aborted) {
        return;
      }

      if (!response.ok) {
        throw new Error('Failed to fetch match');
      }

      const data = await response.json();
      setMatchedDog(favorites.find((dog) => dog.id === data.match));
      setMatchId(data.match);
    } catch (error) {
      setError('Error finding your perfect match. Please try again!');
      console.error('Error fetching matches:', error);
    } finally {
      setLoading(false);
    }
  };

  return {
    matchId,
    matchedDog,
    loading,
    error,
    fetchMatch,
  };
};
