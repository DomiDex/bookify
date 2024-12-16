import Link from 'next/link';

export default function NavigationLink() {
  return (
    <div className='flex flex-col '>
      <Link href='/store'>Store</Link>
      <Link href='/store/communities'>Communities</Link>
      <Link href='/store/track-order'>Track Order</Link>
      <Link href='/store/about'>About</Link>
    </div>
  );
}
