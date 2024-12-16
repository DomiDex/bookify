import Link from 'next/link';
import NavigationLink from './NavigationLink';

export default function Sidebar() {
  return (
    <nav className='w-full md:w-1/3 h-screen bg-background border-r border-lime-200/80 border-foreground/10 flex flex-col justify-center'>
      <div className='flex flex-col justify-center '>
        <div className='mb-8'>
          <Link className='text-2xl font-bold pl-4 text-lime-400' href='/store'>
            BOOKIFY
          </Link>
        </div>

        <nav className='flex-1'>
          <NavigationLink />
        </nav>

        <div className='mt-auto flex justify-center'>
          <button
            type='button'
            className='w-11/12  bg-lime-500 text-black px-4 py-2 mt-4 rounded-md hover:bg-lime-400 transition-all duration-300'
          >
            Sign Out
          </button>
        </div>
      </div>
    </nav>
  );
}
