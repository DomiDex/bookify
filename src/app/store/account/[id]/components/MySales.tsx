'use client';

import { useState } from 'react';
import { Package } from 'lucide-react';

interface Sale {
  id: string;
  orderNumber: string;
  customerName: string;
  date: string;
  status: 'processing' | 'confirmed' | 'shipped' | 'delivered';
  bookTitle: string;
  price: number;
}

// In a real app, this would come from your API
const mockSales: Sale[] = [
  {
    id: '1',
    orderNumber: 'ORD123',
    customerName: 'John Doe',
    date: '2024-03-20',
    status: 'processing',
    bookTitle: 'The Great Gatsby',
    price: 29.99,
  },
  {
    id: '2',
    orderNumber: 'ORD124',
    customerName: 'Jane Smith',
    date: '2024-03-19',
    status: 'shipped',
    bookTitle: 'To Kill a Mockingbird',
    price: 24.99,
  },
];

export default function MySales({ userId }: { userId: string }) {
  const [sales, setSales] = useState<Sale[]>(mockSales);

  const handleStatusChange = (saleId: string, newStatus: Sale['status']) => {
    setSales((prevSales) =>
      prevSales.map((sale) =>
        sale.id === saleId ? { ...sale, status: newStatus } : sale
      )
    );
  };

  const getTotalRevenue = () => {
    return sales.reduce((total, sale) => total + sale.price, 0);
  };

  return (
    <div className='bg-background border border-lime-200/80 rounded-lg p-6'>
      <div className='flex justify-between items-center mb-6'>
        <h2 className='text-xl font-semibold'>My Sales</h2>
        <div className='flex items-center gap-4'>
          <div className='flex items-center gap-2 bg-lime-500/10 px-3 py-1 rounded-lg'>
            <Package className='text-lime-500' size={16} />
            <span className='text-sm font-medium'>{sales.length} Orders</span>
          </div>
          <div className='bg-lime-500/10 px-3 py-1 rounded-lg'>
            <span className='text-sm font-medium'>
              Revenue: ${getTotalRevenue().toFixed(2)}
            </span>
          </div>
        </div>
      </div>

      <div className='space-y-4'>
        {sales.map((sale) => (
          <div
            key={sale.id}
            className='border border-lime-200/80 rounded-lg p-4 space-y-3'
          >
            <div className='flex justify-between items-start'>
              <div>
                <h3 className='font-medium'>{sale.bookTitle}</h3>
                <p className='text-sm text-foreground/60'>
                  Order #{sale.orderNumber}
                </p>
              </div>
              <select
                value={sale.status}
                onChange={(e) =>
                  handleStatusChange(sale.id, e.target.value as Sale['status'])
                }
                className='bg-background border border-lime-200/80 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-lime-500'
              >
                <option value='processing'>Processing</option>
                <option value='confirmed'>Confirmed</option>
                <option value='shipped'>Shipped</option>
                <option value='delivered'>Delivered</option>
              </select>
            </div>

            <div className='flex justify-between items-center text-sm'>
              <div className='space-y-1'>
                <p>Customer: {sale.customerName}</p>
                <p className='text-foreground/60'>
                  Date: {new Date(sale.date).toLocaleDateString()}
                </p>
              </div>
              <span className='font-medium'>${sale.price.toFixed(2)}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
