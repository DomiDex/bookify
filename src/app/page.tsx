import bgImage from '../../public/home/bg-img.webp';
import Image from 'next/image';
import Link from 'next/link';
import { BookOpen, ShoppingCart, Users, Info } from 'lucide-react';

export default function Home() {
  return (
    <div className='min-h-screen flex flex-col'>
      {/* Hero Section */}
      <div className='relative h-screen w-full flex flex-col justify-center items-center'>
        <div className='w-10/12 md:w-7/12 mx-auto relative z-10 inset-0 bg-black/50 flex flex-col justify-center items-center p-10 rounded-lg bg-blur-xl space-y-4'>
          <h1 className='text-white text-4xl font-bold text-center'>
            Welcome to BookStore
          </h1>
          <p className='text-white text-center text-lg'>
            Discover, Buy, and Rent Books from Our Extensive Collection
          </p>
          <div className='flex gap-4'>
            <Link
              href='/store'
              className='bg-lime-500 text-black px-6 py-3 rounded-md hover:bg-lime-400 transition-all duration-300'
            >
              Browse Books
            </Link>
            <Link
              href='/register'
              className='border border-lime-500 text-white px-6 py-3 rounded-md hover:bg-lime-500/10 transition-all duration-300'
            >
              Register Now
            </Link>
          </div>
        </div>
        <Image
          className='absolute inset-0'
          src={bgImage}
          alt='bg-img'
          fill
          sizes='100vw'
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>

      {/* Features Section */}
      <div className='bg-background py-20'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
            <div className='flex flex-col items-center text-center p-6 border border-lime-200/80 rounded-lg'>
              <BookOpen size={32} className='text-lime-500 mb-4' />
              <h3 className='text-xl font-semibold mb-2'>
                Extensive Collection
              </h3>
              <p className='text-foreground/60'>
                Browse through thousands of books across various genres
              </p>
            </div>
            <div className='flex flex-col items-center text-center p-6 border border-lime-200/80 rounded-lg'>
              <ShoppingCart size={32} className='text-lime-500 mb-4' />
              <h3 className='text-xl font-semibold mb-2'>Easy Shopping</h3>
              <p className='text-foreground/60'>
                Buy or rent books with just a few clicks
              </p>
            </div>
            <div className='flex flex-col items-center text-center p-6 border border-lime-200/80 rounded-lg'>
              <Users size={32} className='text-lime-500 mb-4' />
              <h3 className='text-xl font-semibold mb-2'>Community</h3>
              <p className='text-foreground/60'>
                Join our community of book lovers
              </p>
            </div>
            <div className='flex flex-col items-center text-center p-6 border border-lime-200/80 rounded-lg'>
              <Info size={32} className='text-lime-500 mb-4' />
              <h3 className='text-xl font-semibold mb-2'>About Us</h3>
              <p className='text-foreground/60'>
                Learn more about our mission and values
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Books Preview */}
      <div className='py-20'>
        <div className='max-w-7xl mx-auto px-6'>
          <h2 className='text-3xl font-bold mb-8'>Featured Books</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6'>
            {/* This would be mapped from actual data in a real app */}
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className='border border-lime-200/80 rounded-lg overflow-hidden hover:border-lime-500 transition-colors'
              >
                <div className='relative h-64 w-full'>
                  <Image
                    src={`/books/book${i}.jpg`}
                    alt={`Featured Book ${i}`}
                    fill
                    className='object-cover'
                  />
                </div>
                <div className='p-4'>
                  <h3 className='font-semibold mb-1'>Book Title {i}</h3>
                  <p className='text-foreground/60 text-sm mb-2'>Author Name</p>
                  <p className='font-bold'>$29.99</p>
                </div>
              </div>
            ))}
          </div>
          <div className='text-center mt-8'>
            <Link
              href='/store'
              className='inline-block bg-lime-500 text-black px-6 py-3 rounded-md hover:bg-lime-400 transition-all duration-300'
            >
              View All Books
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
