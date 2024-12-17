'use client';

import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';

type OrderStatus = 'processing' | 'confirmed' | 'shipped' | 'delivered';

export default function TrackOrderPage() {
  const searchParams = useSearchParams();
  const orderNumber = searchParams.get('order');
  const [status, setStatus] = useState<OrderStatus>('processing');

  useEffect(() => {
    // Simulate order status updates
    const timer = setTimeout(() => {
      setStatus('confirmed');
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!orderNumber) {
    return (
      <div className='max-w-4xl mx-auto px-6 py-12 text-center'>
        <h1 className='text-3xl font-bold mb-4'>No Order Number Found</h1>
        <p className='text-foreground/60'>
          Please provide a valid order number to track your order.
        </p>
      </div>
    );
  }

  return (
    <div className='max-w-4xl mx-auto px-6 py-12'>
      <h1 className='text-3xl font-bold mb-8'>Track Your Order</h1>

      <div className='bg-background border border-lime-200/80 rounded-lg p-6'>
        <div className='flex justify-between items-center mb-8'>
          <h2 className='text-xl font-semibold'>Order #{orderNumber}</h2>
          <span className='px-3 py-1 bg-lime-500/10 text-lime-500 rounded-full text-sm'>
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </span>
        </div>

        <div className='relative'>
          <div className='flex justify-between mb-2'>
            {['Processing', 'Confirmed', 'Shipped', 'Delivered'].map((step) => (
              <div
                key={step}
                className='flex flex-col items-center flex-1 relative'
              >
                <div
                  className={`w-4 h-4 rounded-full mb-2 ${
                    ['processing', 'confirmed', 'shipped', 'delivered'].indexOf(
                      status
                    ) >=
                    ['Processing', 'Confirmed', 'Shipped', 'Delivered'].indexOf(
                      step
                    )
                      ? 'bg-lime-500'
                      : 'bg-lime-200'
                  }`}
                />
                <span className='text-sm text-center'>{step}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
