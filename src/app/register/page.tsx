'use client';

import { useState } from 'react';
import LoginForm from '../ui/login/LoginForm';
import RegisterForm from '../ui/register/RegisterForm';

export default function RegisterPage() {
  const [activeTab, setActiveTab] = useState<'login' | 'register'>('login');

  return (
    <div className='min-h-screen flex items-center justify-center px-6 py-12'>
      <div className='max-w-md w-full mx-auto bg-background border border-lime-200/80 rounded-lg p-8'>
        <div className='flex border-b border-lime-200/80 mb-8'>
          <button
            onClick={() => setActiveTab('login')}
            className={`flex-1 pb-4 text-center font-medium transition-colors ${
              activeTab === 'login'
                ? 'text-lime-500 border-b-2 border-lime-500'
                : 'text-foreground/60 hover:text-foreground/80'
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setActiveTab('register')}
            className={`flex-1 pb-4 text-center font-medium transition-colors ${
              activeTab === 'register'
                ? 'text-lime-500 border-b-2 border-lime-500'
                : 'text-foreground/60 hover:text-foreground/80'
            }`}
          >
            Register
          </button>
        </div>

        {activeTab === 'login' ? <LoginForm /> : <RegisterForm />}
      </div>
    </div>
  );
}
