import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Dog } from '../types';
const FetchDogs = ({
  sortBy = 'breed:asc',
  pageSize = 8,
  breed,
  zipCode,
}: {
  sortBy?: string;
  pageSize?: number;
  breed?: string | null;
  zipCode?: string | null;
} = {}) => {
  const router = useRouter();
  const [results, setResults] = useState<Dog[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchDogs = async () => {
      setIsLoading(true);
      try {
        // Build query parameters
        const queryParams = new URLSearchParams({
          sort: sortBy,
          size: pageSize.toString(),
        });

        if (breed) queryParams.append('breed', breed);
        if (zipCode) queryParams.append('zipCode', zipCode);

        // First fetch to get dog IDs
        const searchResponse = await fetch(
          `https://frontend-take-home-service.fetch.com/dogs/search?${queryParams}`,
          {
            credentials: 'include',
          }
        );

        //Simple Auth for dashboard page, if user has logged out or HTTP Token has expired they will be re-directed to login
        if (searchResponse.status === 401) {
          router.push('/');
        }

        if (!searchResponse.ok) {
          throw new Error('Failed to fetch dog IDs');
        }

        const searchData = await searchResponse.json();

        // Second fetch to get dog details
        const dogsResponse = await fetch(
          'https://frontend-take-home-service.fetch.com/dogs',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify(searchData.resultIds),
          }
        );

        if (!dogsResponse.ok) {
          throw new Error('Failed to fetch dog details');
        }

        const dogs = await dogsResponse.json();
        setResults(dogs);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDogs();
  }, [sortBy, pageSize, breed, zipCode, router]); // Dependencies array updated with parameters

  return {
    dogs: results,
    isLoading,
  };
};

export default FetchDogs;
