import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const useProtectedRoute = () => {
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch(
          'https://frontend-take-home-service.fetch.com/auth/login',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },

            credentials: 'include',
          }
        );

        if (!response.ok) {
          router.push('/');
        }
      } catch {
        router.push('/');
      }
    };

    checkAuth();
  }, [router]);
};

export default useProtectedRoute;
