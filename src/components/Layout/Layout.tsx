import React from 'react';
import Header from './Header';
import { Footer } from './Footer';
import { Hero } from './Hero';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section with Header - Full Width Background */}
      <div 
        className="w-full"
        style={{background: 'var(--Footer-gradient, linear-gradient(132deg, var(--color-Purple-700, #3E2E99) -13.32%, var(--color-Purple-900, #251B5B) 50.3%))'}}
      >
        <div className="flex flex-col items-center">
          <Header />
          <div className="mt-12">
            <Hero />
          </div>
        </div>
      </div>
      
      <main className="flex-1 flex flex-col items-center">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout; 