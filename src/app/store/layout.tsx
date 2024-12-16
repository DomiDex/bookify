import { Metadata } from 'next';
import Sidebar from '../ui/sidebar/Sidebar';

export const metadata: Metadata = {
  title: 'Book Store',
  description: 'Book Store',
};

export default function bookStoreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='flex flex-col md:flex-row'>
      <div className='flex flex-wrap justify-center p-2'>
        <Sidebar />
        {children}
      </div>
    </div>
  );
}
