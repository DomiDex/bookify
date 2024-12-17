'use client';

import { useCart } from '../context/CartContext';
import Image from 'next/image';
import Link from 'next/link';

export default function CartPage() {
  const { items, removeFromCart, total, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className='max-w-4xl mx-auto px-6 py-12 text-center'>
        <h1 className='text-3xl font-bold mb-4'>Your Cart is Empty</h1>
        <p className='text-foreground/60 mb-8'>
          Looks like you haven't added any books to your cart yet.
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
    <div className='max-w-4xl mx-auto px-6 py-12'>
      <h1 className='text-3xl font-bold mb-8'>Your Cart</h1>

      <div className='space-y-6'>
        {items.map((item) => (
          <div
            key={item.id}
            className='flex gap-6 p-4 bg-background border border-lime-200/80 rounded-lg'
          >
            <div className='relative h-32 w-24 flex-shrink-0'>
              <Image
                src={item.cover}
                alt={item.title}
                fill
                className='object-cover rounded-md'
              />
            </div>

            <div className='flex-1 flex flex-col'>
              <h3 className='text-xl font-semibold'>{item.title}</h3>
              <p className='text-foreground/60'>by {item.author}</p>
              <p className='text-sm mt-2'>
                Type: {item.type === 'buy' ? 'Purchase' : 'Rent'}
              </p>
              <div className='mt-auto flex justify-between items-center'>
                <span className='font-bold'>${item.price}</span>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className='text-red-500 hover:text-red-600'
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}

        <div className='mt-8 p-6 bg-lime-500/10 rounded-lg border border-lime-500/20'>
          <div className='flex justify-between items-center mb-6'>
            <span className='text-xl font-semibold'>Total:</span>
            <span className='text-2xl font-bold'>${total.toFixed(2)}</span>
          </div>

          <div className='flex gap-4'>
            <button
              onClick={() => {
                // Handle checkout logic
                alert('Proceeding to checkout...');
              }}
              className='flex-1 bg-lime-500 text-black px-6 py-3 rounded-md hover:bg-lime-400 transition-all duration-300'
            >
              Proceed to Checkout
            </button>
            <button
              onClick={clearCart}
              className='flex-1 border border-lime-500 text-lime-500 px-6 py-3 rounded-md hover:bg-lime-500/10 transition-all duration-300'
            >
              Clear Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
