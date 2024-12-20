'use client';

import React, { useEffect, useState } from 'react';
import BookCard from './BookCard';
import { BookWithRentStatus } from '@/app/actions/books';

export default function BookList({ books }: { books: BookWithRentStatus[] }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 max-w-7xl mx-auto'>
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
}
