import Link from 'next/link';
import NavigationLink from './NavigationLink';

export default function Sidebar() {
  return (
    <div className='w-full md:w-1/4 h-screen bg-background border-r border-lime-200/80 py-6 sticky top-0'>
      <div className='flex flex-col h-full'>
        <div className='mb-8'>
          <Link className='text-2xl font-bold' href='/store'>
            Logo
          </Link>
        </div>

        <div className='flex-1'>
          <NavigationLink />
        </div>

        <div>
          <button
            type='button'
            className='w-full bg-lime-500 text-black px-4 py-2 rounded-md hover:bg-lime-400 transition-all duration-300'
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
}
