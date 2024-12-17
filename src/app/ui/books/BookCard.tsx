'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '../../store/context/CartContext';

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

export default function BookCard({ book }: { book: Book }) {
  const { addToCart } = useCart();

  const handleBuy = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart({
      id: book.id,
      title: book.title,
      cover: book.cover,
      author: book.author,
      price: book.sellPrice,
      type: 'buy',
    });
  };

  const handleRent = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart({
      id: book.id,
      title: book.title,
      cover: book.cover,
      author: book.author,
      price: book.rentPrice,
      type: 'rent',
    });
  };

  return (
    <div className='group w-full bg-background border border-lime-200/80 rounded-lg overflow-hidden shadow-lg m-4 flex flex-col'>
      <Link href={`/store/${book.id}`} className='flex-1 flex flex-col'>
        <div className='relative h-96 w-full overflow-hidden'>
          <Image
            src={book.cover}
            alt={`Cover of ${book.title}`}
            fill
            className='object-cover group-hover:scale-110 transition-all duration-300'
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          />
        </div>

        <div className='p-4 flex-1 flex flex-col'>
          <h2 className='text-xl font-bold mb-2 line-clamp-1 group-hover:text-lime-500 transition-colors'>
            {book.title}
          </h2>
          <p className='text-foreground/60 mb-2'>by {book.author}</p>
          <p className='text-sm mb-4 line-clamp-3'>{book.description}</p>

          <div className='mt-auto space-y-2'>
            <div className='flex justify-between items-center'>
              <span className='text-sm'>Genre: {book.genre}</span>
              <span className='text-sm'>Pages: {book.pages}</span>
            </div>

            <div className='flex justify-between items-center'>
              <span className='text-sm'>Stock: {book.stock}</span>
              <span
                className={`text-sm ${
                  book.isRented ? 'text-red-500' : 'text-green-500'
                }`}
              >
                {book.isRented ? 'Rented' : 'Available'}
              </span>
            </div>
          </div>
        </div>
      </Link>

      <div className='p-4 border-t border-lime-200/80'>
        <div className='flex items-center justify-between mb-3'>
          <span className='font-bold'>Buy: ${book.sellPrice}</span>
          <span className='text-sm text-foreground/60'>
            Rent: ${book.rentPrice}/month
          </span>
        </div>
        <div className='flex gap-2'>
          <button
            onClick={handleBuy}
            disabled={book.stock === 0}
            className='flex-1 bg-lime-500 text-black px-4 py-2 rounded-md hover:bg-lime-400 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed'
          >
            Buy
          </button>
          <button
            onClick={handleRent}
            disabled={book.isRented || book.stock === 0}
            className='flex-1 bg-lime-500 text-black px-4 py-2 rounded-md hover:bg-lime-400 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed'
          >
            Rent
          </button>
        </div>
      </div>
    </div>
  );
}
