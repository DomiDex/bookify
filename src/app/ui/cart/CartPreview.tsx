'use client';

import { useCart } from '../../store/context/CartContext';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';

export default function CartPreview() {
  const { items, total } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const previewRef = useRef<HTMLDivElement>(null);

  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        previewRef.current &&
        !previewRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className='fixed top-4 right-4 z-50' ref={previewRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='relative bg-lime-500 text-black p-2 rounded-full hover:bg-lime-400 transition-all duration-300'
      >
        <ShoppingCart size={24} />
        {itemCount > 0 && (
          <span className='absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center'>
            {itemCount}
          </span>
        )}
      </button>

      {isOpen && (
        <div className='absolute top-14 right-0 w-80 bg-background border border-lime-200/80 rounded-lg shadow-lg p-4'>
          <h3 className='font-semibold mb-4'>Cart ({itemCount} items)</h3>

          <div className='space-y-3 max-h-60 overflow-y-auto'>
            {items.map((item) => (
              <div key={`${item.id}-${item.type}`} className='flex gap-3'>
                <div className='relative h-16 w-12 flex-shrink-0'>
                  <Image
                    src={item.cover}
                    alt={item.title}
                    fill
                    className='object-cover rounded-md'
                  />
                </div>
                <div className='flex-1'>
                  <p className='text-sm font-medium line-clamp-1'>
                    {item.title}
                  </p>
                  <p className='text-xs text-foreground/60'>
                    {item.type === 'buy' ? 'Purchase' : 'Rent'}
                  </p>
                  <div className='flex justify-between items-center mt-1'>
                    <span className='text-sm font-semibold'>${item.price}</span>
                    <span className='text-xs'>Qty: {item.quantity}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {items.length > 0 ? (
            <div className='mt-4 space-y-3'>
              <div className='flex justify-between items-center border-t border-lime-200/80 pt-3'>
                <span className='font-semibold'>Total:</span>
                <span className='font-bold'>${total.toFixed(2)}</span>
              </div>

              <div className='flex gap-2'>
                <Link
                  href='/store/add-to-card'
                  className='flex-1 text-center bg-lime-500 text-black px-4 py-2 rounded-md hover:bg-lime-400 transition-all duration-300 text-sm'
                >
                  View Cart
                </Link>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    alert('Proceeding to checkout...');
                  }}
                  className='flex-1 border border-lime-500 text-lime-500 px-4 py-2 rounded-md hover:bg-lime-500/10 transition-all duration-300 text-sm'
                >
                  Checkout
                </button>
              </div>
            </div>
          ) : (
            <p className='text-center text-foreground/60 py-4'>
              Your cart is empty
            </p>
          )}
        </div>
      )}
    </div>
  );
}
