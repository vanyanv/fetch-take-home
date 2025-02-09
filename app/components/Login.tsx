'use client';
import { useRouter } from 'next/navigation';
import React, { FormEvent, useState } from 'react';

export default function Login() {
  const [errors, setErrors] = useState({ message: '' });
  const router = useRouter();

  const handleFormSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    const name = formData.get('name');
    const email = formData.get('email');

    //simple form validation
    if (!name || !email) {
      setErrors((prev) => ({
        ...prev,
        message: 'Please provide both name and email to continue',
      }));
      return;
    }

    try {
      const response = await fetch(
        'https://frontend-take-home-service.fetch.com/auth/login',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name,
            email,
          }),
          credentials: 'include',
        }
      );

      if (response.ok) {
        router.push('/dashboard');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  return (
    <div className='bg-white p-8 rounded-xl shadow-lg w-96 max-w-full space-y-8'>
      <div className='text-center'>
        <h1 className='text-4xl font-bold text-blue-600 mb-2'>Fetch</h1>
        <p className='text-gray-600'>Find your perfect shelter dog</p>
      </div>

      <form onSubmit={handleFormSubmit} className='space-y-6'>
        <div>
          <label
            htmlFor='name'
            className='block text-sm font-medium text-gray-700'
          >
            Name
          </label>
          <input
            type='text'
            id='name'
            name='name'
            className='mt-1 block w-full px-4 py-3 rounded-lg border border-gray-300 
                         focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                         transition-all duration-200'
            placeholder='Enter name'
          />
        </div>

        <div>
          <label
            htmlFor='email'
            className='block text-sm font-medium text-gray-700'
          >
            Email
          </label>
          <input
            type='email'
            id='email'
            name='email'
            className='mt-1 block w-full px-4 py-3 rounded-lg border border-gray-300 
                         focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                         transition-all duration-200'
            placeholder='Enter your Email'
          />
        </div>
        {errors.message && (
          <div className='text-red-500 text-sm'>{errors.message}</div>
        )}
        <button
          type='submit'
          className='w-full py-3 px-4 border border-transparent rounded-lg
                     text-white bg-blue-600 hover:bg-blue-700 focus:outline-none 
                     focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 
                     font-medium transition-all duration-200'
        >
          Sign in
        </button>
      </form>
    </div>
  );
}
