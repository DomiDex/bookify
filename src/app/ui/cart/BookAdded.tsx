'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

type BookAddedProps = {
  title: string;
  cover: string;
  type: 'buy' | 'rent';
  show: boolean;
  onClose: () => void;
};

export default function BookAdded({
  title,
  cover,
  type,
  show,
  onClose,
}: BookAddedProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (show) {
      setIsVisible(true);
      const timer = setTimeout(() => {
        setIsVisible(false);
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!isVisible) return null;

  return (
    <div className='fixed bottom-4 right-4 z-50 animate-slide-up'>
      <div className='bg-background border border-lime-200/80 rounded-lg shadow-lg p-4 max-w-sm'>
        <div className='flex gap-4'>
          <div className='relative h-20 w-16 flex-shrink-0'>
            <Image
              src={cover}
              alt={title}
              fill
              className='object-cover rounded-md'
            />
          </div>
          <div className='flex-1'>
            <h3 className='font-semibold text-sm mb-1'>{title}</h3>
            <p className='text-sm text-foreground/60 mb-2'>
              Added to cart ({type === 'buy' ? 'Purchase' : 'Rent'})
            </p>
            <Link
              href='/store/add-to-card'
              className='text-sm text-lime-500 hover:text-lime-400'
            >
              View Cart →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
