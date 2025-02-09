import { useState, useEffect } from 'react';
import { Match } from '../types';

export default function FetchMatch() {
  const [match, setMatch] = useState<Match[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://frontend-take-home-service.fetch.com/dogs/breeds',
          {
            credentials: 'include',
          }
        );
        if (!response.ok) throw new Error('Failed to fetch Match');
        const data = await response.json();
        setMatch(data);
      } catch (err) {
        setError(
          err instanceof Error
            ? err
            : new Error('An error occurred in getting Match')
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { match, isLoading, error };
}
