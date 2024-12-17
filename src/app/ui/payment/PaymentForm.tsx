'use client';

import { useCart } from '../../store/context/CartContext';
import Image from 'next/image';

export default function PaymentForm() {
  const { items, total } = useCart();

  return (
    <div className='max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8'>
      {/* Order Summary */}
      <div className='bg-background border border-lime-200/80 rounded-lg p-6'>
        <h2 className='text-xl font-semibold mb-4'>Order Summary</h2>
        <div className='space-y-4 max-h-[400px] overflow-y-auto'>
          {items.map((item) => (
            <div key={`${item.id}-${item.type}`} className='flex gap-4'>
              <div className='relative h-20 w-16 flex-shrink-0'>
                <Image
                  src={item.cover}
                  alt={item.title}
                  fill
                  className='object-cover rounded-md'
                />
              </div>
              <div className='flex-1'>
                <h3 className='font-medium text-sm'>{item.title}</h3>
                <p className='text-xs text-foreground/60'>
                  {item.type === 'buy' ? 'Purchase' : 'Rent'}
                </p>
                <div className='flex justify-between mt-1'>
                  <span className='text-sm'>${item.price}</span>
                  <span className='text-xs'>Qty: {item.quantity}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='border-t border-lime-200/80 mt-4 pt-4'>
          <div className='flex justify-between font-semibold'>
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
      </div>

      {/* Payment Form */}
      <div className='bg-background border border-lime-200/80 rounded-lg p-6'>
        <h2 className='text-xl font-semibold mb-6'>Payment Details</h2>
        <form className='space-y-4'>
          <div className='space-y-2'>
            <label className='block text-sm font-medium'>
              Card Holder Name
            </label>
            <input
              type='text'
              className='w-full px-4 py-2 rounded-md border border-lime-200/80 bg-transparent focus:outline-none focus:ring-2 focus:ring-lime-500'
              placeholder='John Doe'
            />
          </div>

          <div className='space-y-2'>
            <label className='block text-sm font-medium'>Card Number</label>
            <input
              type='text'
              className='w-full px-4 py-2 rounded-md border border-lime-200/80 bg-transparent focus:outline-none focus:ring-2 focus:ring-lime-500'
              placeholder='4242 4242 4242 4242'
            />
          </div>

          <div className='grid grid-cols-2 gap-4'>
            <div className='space-y-2'>
              <label className='block text-sm font-medium'>Expiry Date</label>
              <input
                type='text'
                className='w-full px-4 py-2 rounded-md border border-lime-200/80 bg-transparent focus:outline-none focus:ring-2 focus:ring-lime-500'
                placeholder='MM/YY'
              />
            </div>
            <div className='space-y-2'>
              <label className='block text-sm font-medium'>CVC</label>
              <input
                type='text'
                className='w-full px-4 py-2 rounded-md border border-lime-200/80 bg-transparent focus:outline-none focus:ring-2 focus:ring-lime-500'
                placeholder='123'
              />
            </div>
          </div>

          <button
            type='submit'
            className='w-full bg-lime-500 text-black py-3 rounded-md hover:bg-lime-400 transition-all duration-300 mt-6'
          >
            Pay ${total.toFixed(2)}
          </button>
        </form>
      </div>
    </div>
  );
}
