'use client';

import React from 'react';
import BookCard from './BookCard';

type Book = {
  id: string;
  title: string;
  description: string;
  author: string;
  cover: string;
  genre: string;
  pages: number;
  isRented: boolean;
  stock: number;
  rentPrice: number;
  sellPrice: number;
  sold: number;
  ISBN: string;
  renterIds?: string[];
};

export default function BookList({ books }: { books: Book[] }) {
  return (
    <div className='flex flex-wrap justify-center gap-2 max-w-7xl mx-auto'>
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
}
