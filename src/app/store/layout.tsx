import { Metadata } from 'next';
import Sidebar from '../ui/sidebar/Sidebar';
import { CartProvider } from './context/CartContext';

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
    <div className='flex flex-col md:flex-row min-h-screen w-full'>
      <CartProvider>
        <Sidebar />
        <main className='flex-1 p-6'>{children}</main>
      </CartProvider>
    </div>
  );
}
