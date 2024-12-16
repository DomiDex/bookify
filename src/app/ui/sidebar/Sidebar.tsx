import Link from 'next/link';
import NavigationLink from './NavigationLink';
export default function Sidebar() {
  return (
    <div className='flex flex-col justify-center  w-1/3  h-screen'>
      <Link className='text-2xl font-bold' href='/store'>
        Logo
      </Link>
      l
      <div className='flex flex-col  justify-center '>
        <NavigationLink />
        <form>
          <button className='bg-lime-500 text-black px-4 py-2 rounded-md hover:bg-lime-400 transition-all duration-300'>
            Sign Out
          </button>
        </form>
      </div>
    </div>
  );
}
