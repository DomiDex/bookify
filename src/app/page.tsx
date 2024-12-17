import bgImage from '../../public/home/bg-img.webp';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='relative h-screen w-full flex flex-col justify-center items-center'>
      <div className='w-10/12 md:w-7/12 mx-auto relative z-10 inset-0 bg-black/50  flex flex-col justify-center items-center p-10 rounded-lg bg-blur-xl space-y-4'>
        <h1 className='text-white text-4xl font-bold text-center'>
          Welcome to the Home Page
        </h1>
        <p className='text-white  text-center text-lg'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quos.
        </p>
        <Link
          href='/register'
          className='bg-lime-500 text-black px-4 py-2 rounded-md hover:bg-lime-400 transition-all duration-300'
        >
          go to store
        </Link>
      </div>
      <Image
        className='absolute inset-0'
        src={bgImage}
        alt='bg-img'
        fill
        sizes='100vw'
        style={{ objectFit: 'cover' }}
      />
    </div>
  );
}
