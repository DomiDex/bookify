import Link from 'next/link';

export default function NavigationLink() {
  return (
    <div className='flex flex-col '>
      <Link
        className='px-4 text-md font-medium py-2 border-t-[1px] border-lime-200/80 w-full bg-black hover:bg-lime-200/30 transition-all duration-300'
        href='/store'
      >
        Store
      </Link>
      <Link
        className='px-4 text-md font-medium py-2 border-t-[1px] border-lime-200/80 w-full bg-black hover:bg-lime-200/30 transition-all duration-300'
        href='/store/communities'
      >
        Communities
      </Link>
      <Link
        className='px-4 text-md font-medium py-2 border-t-[1px] border-lime-200/80 w-full bg-black hover:bg-lime-200/30 transition-all duration-300'
        href='/store/track-order'
      >
        Track Order
      </Link>
      <Link
        className='px-4 text-md font-medium py-2 border-y-[1px] border-lime-200/80 w-full bg-black hover:bg-lime-200/30 transition-all duration-300'
        href='/store/about'
      >
        About
      </Link>
    </div>
  );
}
