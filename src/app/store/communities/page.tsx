'use client';

import Image from 'next/image';
import { useState } from 'react';

type User = {
  id: string;
  name: string;
  email: string;
  image_url: string;
};

// Using the existing users data structure from fake-data.ts
const users: User[] = [
  {
    id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    name: 'Maria Com Com',
    email: 'mcomcom@hitmail.com',
    image_url: '/users/maria-com-com.jpg',
  },
  {
    id: 'd0cdfaa6-beee-4dd9-bfe6-cbcfeceffa8a',
    name: 'José da Silva',
    email: 'josedasilva@gmail.com',
    image_url: '/users/joao-da-silva.jpg',
  },
];

export default function CommunityPage() {
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);

  const handleEmailClick = (email: string) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(email);
    setTimeout(() => setCopiedEmail(null), 2000);
  };

  return (
    <div className='max-w-7xl mx-auto p-6'>
      <h1 className='text-4xl font-bold mb-8'>Our Community Members</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {users.map((user) => (
          <div
            key={user.id}
            className='bg-background border border-lime-200/80 rounded-lg p-6 flex flex-col items-center space-y-4'
          >
            <div className='relative w-32 h-32 rounded-full overflow-hidden'>
              <Image
                src={user.image_url}
                alt={`${user.name}'s profile`}
                fill
                className='object-cover w-full h-full'
              />
            </div>

            <h2 className='text-xl font-semibold text-center'>{user.name}</h2>

            <button
              onClick={() => handleEmailClick(user.email)}
              className='text-blue-500 hover:text-blue-700'
            >
              {copiedEmail === user.email ? 'Email copied!' : 'Copy Email'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
