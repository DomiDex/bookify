'use client';

import { useState } from 'react';
import Image from 'next/image';

interface BookFormData {
  title: string;
  author: string;
  description: string;
  price: string;
  type: 'sell' | 'rent';
  cover: File | null;
}

export default function SellerDashboard({ userId }: { userId: string }) {
  const [formData, setFormData] = useState<BookFormData>({
    title: '',
    author: '',
    description: '',
    price: '',
    type: 'sell',
    cover: null,
  });
  const [preview, setPreview] = useState<string>('');

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData({ ...formData, cover: file });
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your API
    const formDataWithUser = {
      ...formData,
      sellerId: userId,
    };
    console.log('Submitting book:', formDataWithUser);

    // In a real app, you would make an API call here
    // await addBook({ ...formDataWithUser });
  };

  return (
    <div className='bg-background border border-lime-200/80 rounded-lg p-6'>
      <h2 className='text-xl font-semibold mb-6'>Sell or Rent Books</h2>

      <form onSubmit={handleSubmit} className='space-y-4'>
        <div className='space-y-2'>
          <label className='block text-sm font-medium'>Title</label>
          <input
            type='text'
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            className='w-full px-4 py-2 rounded-md border border-lime-200/80 bg-transparent focus:outline-none focus:ring-2 focus:ring-lime-500'
            required
          />
        </div>

        <div className='space-y-2'>
          <label className='block text-sm font-medium'>Author</label>
          <input
            type='text'
            value={formData.author}
            onChange={(e) =>
              setFormData({ ...formData, author: e.target.value })
            }
            className='w-full px-4 py-2 rounded-md border border-lime-200/80 bg-transparent focus:outline-none focus:ring-2 focus:ring-lime-500'
            required
          />
        </div>

        <div className='space-y-2'>
          <label className='block text-sm font-medium'>Description</label>
          <textarea
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            className='w-full px-4 py-2 rounded-md border border-lime-200/80 bg-transparent focus:outline-none focus:ring-2 focus:ring-lime-500'
            rows={4}
            required
          />
        </div>

        <div className='grid grid-cols-2 gap-4'>
          <div className='space-y-2'>
            <label className='block text-sm font-medium'>Price</label>
            <input
              type='number'
              value={formData.price}
              onChange={(e) =>
                setFormData({ ...formData, price: e.target.value })
              }
              className='w-full px-4 py-2 rounded-md border border-lime-200/80 bg-transparent focus:outline-none focus:ring-2 focus:ring-lime-500'
              required
              min='0'
              step='0.01'
            />
          </div>

          <div className='space-y-2'>
            <label className='block text-sm font-medium'>Type</label>
            <select
              value={formData.type}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  type: e.target.value as 'sell' | 'rent',
                })
              }
              className='w-full px-4 py-2 rounded-md border border-lime-200/80 bg-transparent focus:outline-none focus:ring-2 focus:ring-lime-500'
            >
              <option value='sell'>Sell</option>
              <option value='rent'>Rent</option>
            </select>
          </div>
        </div>

        <div className='space-y-2'>
          <label className='block text-sm font-medium'>Cover Image</label>
          <input
            type='file'
            onChange={handleImageChange}
            accept='image/*'
            className='w-full'
            required
          />
          {preview && (
            <div className='relative h-40 w-32'>
              <Image
                src={preview}
                alt='Book cover preview'
                fill
                className='object-cover rounded-md'
              />
            </div>
          )}
        </div>

        <button
          type='submit'
          className='w-full bg-lime-500 text-black py-3 rounded-md hover:bg-lime-400 transition-all duration-300 mt-6'
        >
          List Book
        </button>
      </form>
    </div>
  );
}
