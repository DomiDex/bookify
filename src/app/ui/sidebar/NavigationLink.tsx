'use client';

import Link from 'next/link';
import { useAuth } from '../../store/context/AuthContext';
import {
  User,
  ShoppingBag,
  Home,
  BookOpen,
  Truck,
  Users,
  Info,
} from 'lucide-react';

export default function NavigationLink() {
  const { user } = useAuth();

  return (
    <div className='flex flex-col'>
      <Link
        className='px-4 text-md font-medium py-2 border-t-[1px] border-lime-200/80 w-full bg-transparent hover:bg-lime-100/20 transition-all duration-300 flex items-center gap-2'
        href='/'
      >
        <Home size={18} />
        Home
      </Link>

      <Link
        className='px-4 text-md font-medium py-2 border-t-[1px] border-lime-200/80 w-full bg-transparent hover:bg-lime-100/20 transition-all duration-300 flex items-center gap-2'
        href='/store'
      >
        <BookOpen size={18} />
        Books
      </Link>

      {user && (
        <Link
          className='px-4 text-md font-medium py-2 border-t-[1px] border-lime-200/80 w-full bg-transparent hover:bg-lime-100/20 transition-all duration-300 flex items-center gap-2'
          href={`/store/account/${user.id}`}
        >
          <User size={18} />
          My Account
        </Link>
      )}

      <Link
        className='px-4 text-md font-medium py-2 border-t-[1px] border-lime-200/80 w-full bg-transparent hover:bg-lime-100/20 transition-all duration-300 flex items-center gap-2'
        href='/store/track-order'
      >
        <Truck size={18} />
        Track Order
      </Link>

      <Link
        className='px-4 text-md font-medium py-2 border-t-[1px] border-lime-200/80 w-full bg-transparent hover:bg-lime-100/20 transition-all duration-300 flex items-center gap-2'
        href='/store/communities'
      >
        <Users size={18} />
        Communities
      </Link>

      <Link
        className='px-4 text-md font-medium py-2 border-t-[1px] border-lime-200/80 w-full bg-transparent hover:bg-lime-100/20 transition-all duration-300 flex items-center gap-2'
        href='/store/about'
      >
        <Info size={18} />
        About
      </Link>

      <Link
        className='px-4 text-md font-medium py-2 border-t-[1px] border-lime-200/80 w-full bg-transparent hover:bg-lime-100/20 transition-all duration-300 flex items-center gap-2'
        href='/store/add-to-card'
      >
        <ShoppingBag size={18} />
        My Cart
      </Link>
      <Link
        className='px-4 text-md font-medium py-2 border-y-[1px] border-lime-200/80 w-full bg-transparent hover:bg-lime-100/20 transition-all duration-300 flex items-center gap-2'
        href='/store/account/seller'
      >
        <User size={18} />
        My Account
      </Link>
    </div>
  );
}
