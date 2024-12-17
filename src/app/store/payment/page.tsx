'use client';

import { useCart } from '../context/CartContext';
import PaymentForm from '../../ui/payment/PaymentForm';
import Link from 'next/link';

export default function PaymentPage() {
  const { items } = useCart();

  if (items.length === 0) {
    return (
      <div className='max-w-4xl mx-auto px-6 py-12 text-center'>
        <h1 className='text-3xl font-bold mb-4'>No Items to Checkout</h1>
        <p className='text-foreground/60 mb-8'>
          Your cart is empty. Add some books before proceeding to checkout.
        </p>
        <Link
          href='/store'
          className='bg-lime-500 text-black px-6 py-3 rounded-md hover:bg-lime-400 transition-all duration-300'
        >
          Browse Books
        </Link>
      </div>
    );
  }

  return (
    <div className='max-w-7xl mx-auto px-6 py-12'>
      <h1 className='text-3xl font-bold mb-8'>Checkout</h1>
      <PaymentForm />
    </div>
  );
}
