import React from 'react';
import { FiHome, FiList, FiEdit } from 'react-icons/fi';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <header className='bg-blue-700 text-white sticky top-0 p-4 shadow-md'>
      <nav className='container mx-auto flex flex-col md:flex-row items-center justify-between'>
        <h1 className='text-xl font-bold text-white'>User Crud App</h1>
        <div className='md:flex md:items-center md:space-x-4 md:mt-0 mt-4'>
          <Link
            to='/'
            className='flex items-center p-2 rounded-md hover:bg-blue-700 transition-colors'
          >
            <FiHome className='mr-2' />
            Home
          </Link>

          <Link
            to='/all-users'
            className='flex items-center p-2 rounded-md hover:bg-blue-700 transition-colors'
          >
            <FiList className='mr-2' />
            All Users
          </Link>

          <Link
            to='/create-user'
            className='flex items-center p-2 rounded-md hover:bg-blue-700 transition-colors'
          >
            <FiEdit className='mr-2' />
            Create User
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
