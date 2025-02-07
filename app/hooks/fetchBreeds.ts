import { useEffect, useState } from 'react';

interface Breed {
  id: string;
  name: string;
  image: {
    url: string;
  };
}

export default function FetchBreeds() {
  const [breeds, setBreeds] = useState<Breed[]>([]);
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
        if (!response.ok) throw new Error('Failed to fetch');
        const data = await response.json();
        setBreeds(data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('An error occurred'));
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { breeds, isLoading, error };
}
