'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (email === 'seller@example.com' && password === 'password') {
        router.push('/store/order');
      } else {
        router.push('/store');
      }
    } catch (error) {
      setError('Invalid email or password');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='space-y-4'>
      {error && (
        <div className='bg-red-500/10 border border-red-500/20 text-red-500 rounded-md p-3 text-sm'>
          {error}
        </div>
      )}

      <div>
        <label htmlFor='email' className='block text-sm font-medium mb-1'>
          Email
        </label>
        <input
          id='email'
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='w-full px-4 py-2 rounded-md border border-lime-200/80 bg-transparent focus:outline-none focus:ring-2 focus:ring-lime-500'
          required
        />
      </div>

      <div>
        <label htmlFor='password' className='block text-sm font-medium mb-1'>
          Password
        </label>
        <input
          id='password'
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className='w-full px-4 py-2 rounded-md border border-lime-200/80 bg-transparent focus:outline-none focus:ring-2 focus:ring-lime-500'
          required
        />
      </div>

      <button
        type='submit'
        disabled={isLoading}
        className='w-full py-2 px-4 bg-lime-500 text-black rounded-md hover:bg-lime-400 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed'
      >
        {isLoading ? 'Logging in...' : 'Login'}
      </button>
    </form>
  );
}
