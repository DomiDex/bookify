import Image from 'next/image';
import Link from 'next/link';

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
  return (
    <div className='w-full bg-background border border-lime-200/80 rounded-lg overflow-hidden shadow-lg m-4 flex flex-col'>
      <div className='relative h-96 w-full overflow-hidden group'>
        <Image
          src={book.cover}
          alt={`Cover of ${book.title}`}
          fill
          className='object-cover group-hover:scale-110 transition-all duration-300'
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        />
      </div>

      <div className='p-4 flex-1 flex flex-col'>
        <h2 className='text-xl font-bold mb-2 line-clamp-1'>{book.title}</h2>
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

          <div className='flex justify-between items-center mt-4'>
            <span className='font-bold'>${book.sellPrice}</span>
            <Link
              href={`/store/${book.id}`}
              className='bg-lime-500 text-black px-4 py-2 rounded-md hover:bg-lime-400 transition-all duration-300'
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
