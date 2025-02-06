export default function Home() {
  return (
    <div className='bg-white p-8 rounded-lg shadow-md w-96'>
      <div className='text-center mb-8'>
        <h1 className='text-3xl font-bold text-blue-600'>Fetch</h1>
        <p className='text-gray-600'>Find your perfect shelter dog</p>
      </div>
      <form className='space-y-4'>
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
            className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500'
            required
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
            className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500'
            required
          />
        </div>
        <button
          type='submit'
          className='w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
        >
          Sign In
        </button>
      </form>
    </div>
  );
}
