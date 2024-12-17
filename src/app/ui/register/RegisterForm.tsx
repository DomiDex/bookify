'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
export default function RegisterForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    isSeller: false,
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setIsLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      router.push(formData.isSeller ? '/store/order' : '/store');
    } catch (err) {
      setError('Registration failed. Please try again.');
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
        <label htmlFor='name' className='block text-sm font-medium mb-1'>
          Full Name
        </label>
        <input
          id='name'
          name='name'
          type='text'
          value={formData.name}
          onChange={handleChange}
          className='w-full px-4 py-2 rounded-md border border-lime-200/80 bg-transparent focus:outline-none focus:ring-2 focus:ring-lime-500'
          required
        />
      </div>

      <div>
        <label htmlFor='email' className='block text-sm font-medium mb-1'>
          Email
        </label>
        <input
          id='email'
          name='email'
          type='email'
          value={formData.email}
          onChange={handleChange}
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
          name='password'
          type='password'
          value={formData.password}
          onChange={handleChange}
          className='w-full px-4 py-2 rounded-md border border-lime-200/80 bg-transparent focus:outline-none focus:ring-2 focus:ring-lime-500'
          required
        />
      </div>

      <div>
        <label
          htmlFor='confirmPassword'
          className='block text-sm font-medium mb-1'
        >
          Confirm Password
        </label>
        <input
          id='confirmPassword'
          name='confirmPassword'
          type='password'
          value={formData.confirmPassword}
          onChange={handleChange}
          className='w-full px-4 py-2 rounded-md border border-lime-200/80 bg-transparent focus:outline-none focus:ring-2 focus:ring-lime-500'
          required
        />
      </div>

      <div className='flex items-center gap-2'>
        <input
          id='isSeller'
          name='isSeller'
          type='checkbox'
          checked={formData.isSeller}
          onChange={handleChange}
          className='w-4 h-4 border border-gray-300 rounded'
        />
        <label htmlFor='isSeller' className='text-sm font-medium'>
          I am a seller
        </label>
      </div>

      <button
        type='submit'
        className='w-full py-2 px-4 bg-lime-500 text-white rounded-md hover:bg-lime-600'
      >
        {isLoading ? 'Registering...' : 'Register'}
      </button>
    </form>
  );
}
