import Image from 'next/image';
import { getBookById } from '../../lib/fake-data';

export default function BookDetails({ params }: { params: { id: string } }) {
  const book = getBookById(params.id);

  if (!book) {
    return (
      <div className='flex justify-center items-center h-screen'>
        <h1 className='text-2xl font-bold'>Book not found</h1>
      </div>
    );
  }

  return (
    <div className='max-w-7xl mx-auto p-6'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        {/* Book Cover */}
        <div className='relative h-[600px] w-full overflow-hidden rounded-lg'>
          <Image
            src={book.cover}
            alt={`Cover of ${book.title}`}
            fill
            className='object-cover'
            sizes='(max-width: 768px) 100vw, 50vw'
            priority
          />
        </div>

        {/* Book Details */}
        <div className='space-y-6'>
          <h1 className='text-4xl font-bold'>{book.title}</h1>
          <p className='text-xl text-foreground/60'>by {book.author}</p>

          <div className='space-y-4'>
            <p className='text-lg'>{book.description}</p>

            <div className='grid grid-cols-2 gap-4'>
              <div className='space-y-2'>
                <p>
                  <span className='font-medium'>Genre:</span> {book.genre}
                </p>
                <p>
                  <span className='font-medium'>Pages:</span> {book.pages}
                </p>
                <p>
                  <span className='font-medium'>ISBN:</span> {book.ISBN}
                </p>
              </div>
              <div className='space-y-2'>
                <p>
                  <span className='font-medium'>Stock:</span> {book.stock}
                </p>
                <p>
                  <span className='font-medium'>Status:</span>
                  <span
                    className={
                      book.isRented ? 'text-red-500' : 'text-green-500'
                    }
                  >
                    {book.isRented ? ' Rented' : ' Available'}
                  </span>
                </p>
                <p>
                  <span className='font-medium'>Sold:</span> {book.sold} copies
                </p>
              </div>
            </div>

            <div className='pt-6 space-y-4'>
              <div className='flex items-center justify-between'>
                <p className='text-2xl font-bold'>Buy for ${book.sellPrice}</p>
                <p className='text-lg'>Rent for ${book.rentPrice}/month</p>
              </div>

              <div className='flex gap-4'>
                <button
                  className='flex-1 bg-lime-500 text-black px-6 py-3 rounded-md hover:bg-lime-400 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed'
                  disabled={book.stock === 0}
                >
                  Buy Now
                </button>
                <button
                  className='flex-1 border border-lime-500 text-lime-500 px-6 py-3 rounded-md hover:bg-lime-500/10 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed'
                  disabled={book.isRented || book.stock === 0}
                >
                  Rent Book
                </button>
              </div>

              {book.stock === 0 && (
                <p className='text-red-500 text-center'>
                  This book is currently out of stock
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
