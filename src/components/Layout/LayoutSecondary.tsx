import React from 'react';
import HeaderSecondary from './HeaderSecondary';
import { Footer } from './Footer';

interface LayoutSecondaryProps {
  children: React.ReactNode;
}

export const LayoutSecondary: React.FC<LayoutSecondaryProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <HeaderSecondary />
      
      <main className="flex-1 flex flex-col items-center">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default LayoutSecondary; 