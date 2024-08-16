import React from 'react';
import Header from './Header';
import Footer from './Footer';
const MainLayout = ({ children }) => {
  return (
    <div className='flex min-h-screen'>
      <div className='flex-1'>
        <Header />
        <div className='container mx-auto px-4 py-8'>{children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
