'use client';
import React, { FormEvent } from 'react';
import { useRouter } from 'next/navigation';

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async (event: FormEvent) => {
    event.preventDefault();

    try {
      await fetch('https://frontend-take-home-service.fetch.com/auth/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });

      router.push('/');
    } catch (error) {
      console.error('Error:', error);
    }
  };
  return (
    <form onSubmit={handleLogout}>
      <button className='text-gray-600 hover:text-indigo-600'>Logout</button>
    </form>
  );
}
