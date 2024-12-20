'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '../../store/context/CartContext';
import { BookWithRentStatus } from '@/app/actions/books';
import { getImageUrl } from '@/Lib/utils';

interface BookCardProps {
  book: BookWithRentStatus;
}

export default function BookCard({ book }: BookCardProps) {
  const { addToCart } = useCart();

  const handleBuy = () => {
    addToCart({
      id: book.id,
      title: book.title,
      cover: book.cover || '',
      author: book.author,
      price: book.sell_price || 0,
      type: 'buy',
    });
  };

  const handleRent = () => {
    addToCart({
      id: book.id,
      title: book.title,
      cover: book.cover || '',
      author: book.author,
      price: book.rent_price || 0,
      type: 'rent',
    });
  };

  return (
    <div className='border border-lime-200/80 rounded-lg overflow-hidden hover:border-lime-500 transition-colors'>
      <Link href={`/store/${book.id}`}>
        <div className='relative h-64 w-full'>
          <Image
            src={getImageUrl(book.cover)}
            alt={`Cover of ${book.title}`}
            fill
            className='object-cover'
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          />
        </div>
      </Link>
      <div className='p-4'>
        <Link href={`/store/${book.id}`}>
          <h3 className='font-semibold mb-1'>{book.title}</h3>
          <p className='text-foreground/60 text-sm mb-2'>{book.author}</p>
        </Link>
        <div className='flex justify-between items-center'>
          <p className='font-bold'>${book.sell_price}</p>
          <div className='space-x-2'>
            <button
              onClick={handleBuy}
              disabled={book.stock === 0}
              className='px-3 py-1 bg-lime-500 text-black rounded-md hover:bg-lime-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
            >
              Buy
            </button>
            <button
              onClick={handleRent}
              disabled={book.isRented || book.stock === 0}
              className='px-3 py-1 border border-lime-500 text-lime-500 rounded-md hover:bg-lime-500/10 transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
            >
              Rent
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
