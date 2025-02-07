import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Dog } from '../types';
const FetchDogs = ({
  sortBy = 'breed:asc',
  pageSize = 8,
  zipCode,
}: {
  sortBy?: string;
  pageSize?: number;
  zipCode?: string | null;
} = {}) => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const [breed, setBreed] = useState<string[]>([]);
  const [results, setResults] = useState<Dog[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const fetchDogs = async () => {
      setIsLoading(true);
      try {
        // Build query parameters
        const queryParams = new URLSearchParams({
          sort: sortBy,
          size: pageSize.toString(),
          from: ((currentPage - 1) * pageSize).toString(),
        });

        if (breed.length > 0)
          breed.forEach((breed) => {
            queryParams.append('breeds[]', breed);
          });
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
        setTotal(searchData.total);
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
  }, [sortBy, pageSize, breed, zipCode, router, currentPage]); // Dependencies array updated with parameters

  return {
    dogs: results,
    isLoading,
    total,
    currentPage,
    setCurrentPage,
    setBreed,
  };
};

export default FetchDogs;
