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
      <Header />
      <main className="flex-1 flex flex-col items-center">
        <Hero />
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout; 