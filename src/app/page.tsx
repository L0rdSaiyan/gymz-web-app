
import React, { ReactNode } from 'react';
import Header from './components/Header/header';
import './page.css';

export default function Page({ children } : {children : ReactNode}) {
  return (
    <div className="w-full h-screen bg-red-700">
      {children}
    </div>
  );
}
