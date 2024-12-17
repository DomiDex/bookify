'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Order {
  id: string;
  date: string;
  status: 'pending' | 'shipped' | 'delivered';
}

export default function TrackingCard({ userId }: { userId: string }) {
  const [recentOrders, setRecentOrders] = useState<Order[]>([]);

  useEffect(() => {
    // Fetch orders for the specific user
    const fetchOrders = async () => {
      // In a real app, this would be an API call using the userId
      // For now, we'll simulate with mock data
      const mockOrders = [
        {
          id: `ORD-${userId.substring(0, 4)}`,
          date: '2024-03-20',
          status: 'pending' as const,
        },
        {
          id: `ORD-${userId.substring(0, 4)}-2`,
          date: '2024-03-19',
          status: 'shipped' as const,
        },
      ];
      setRecentOrders(mockOrders);
    };

    fetchOrders();
  }, [userId]);

  return (
    <div className='bg-background border border-lime-200/80 rounded-lg p-6'>
      <h2 className='text-xl font-semibold mb-4'>Track Orders</h2>

      <div className='space-y-4'>
        {recentOrders.map((order) => (
          <div
            key={order.id}
            className='flex items-center justify-between p-4 border border-lime-200/80 rounded-lg'
          >
            <div>
              <p className='font-medium'>Order #{order.id}</p>
              <p className='text-sm text-foreground/60'>{order.date}</p>
              <span className='text-sm text-lime-500'>{order.status}</span>
            </div>
            <Link
              href={`/store/track-order?order=${order.id}`}
              className='px-4 py-2 bg-lime-500 text-black rounded-md hover:bg-lime-400 transition-all'
            >
              Track
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
