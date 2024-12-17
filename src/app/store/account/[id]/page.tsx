import { Metadata } from 'next';
import TrackingCard from './components/TrackingCard';
import SellerDashboard from './components/SellerDashboard';
import MySales from './components/MySales';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Account Dashboard',
  description: 'Manage your orders and seller activities',
};

function LoadingCard() {
  return (
    <div className='bg-background border border-lime-200/80 rounded-lg p-6 animate-pulse'>
      <div className='h-6 w-32 bg-lime-200/20 rounded mb-4'></div>
      <div className='space-y-4'>
        <div className='h-20 bg-lime-200/20 rounded'></div>
        <div className='h-20 bg-lime-200/20 rounded'></div>
      </div>
    </div>
  );
}

export default function AccountPage({ params }: { params: { id: string } }) {
  return (
    <div className='max-w-7xl mx-auto px-4 py-8'>
      <h1 className='text-2xl font-bold mb-8'>Account Dashboard</h1>

      <div className='grid grid-cols-1 gap-8'>
        <Suspense fallback={<LoadingCard />}>
          <MySales userId={params.id} />
        </Suspense>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <Suspense fallback={<LoadingCard />}>
            <TrackingCard userId={params.id} />
          </Suspense>
          <Suspense fallback={<LoadingCard />}>
            <SellerDashboard userId={params.id} />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
