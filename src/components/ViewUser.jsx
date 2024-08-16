import React from 'react';
import { useParams } from 'react-router-dom';
import MainLayout from './Common/MainLayout';
import { useSelector } from 'react-redux';

function ViewUser() {
  const users = useSelector((state) => state.users.users);
  const { id } = useParams();
  const user = users.find((user) => user.id === parseInt(id));

  return (
    <MainLayout>
      <div className='container mx-auto p-4 bg-white shadow-lg rounded-lg'>
        <h1 className='text-3xl font-bold mb-4'>User Details</h1>
        <div className='flex flex-col space-y-4'>
          <div className='flex items-center space-x-4'>
            <span className='text-lg font-semibold'>First Name:</span>
            <span className='text-lg'>{user.fname}</span>
          </div>
          <div className='flex items-center space-x-4'>
            <span className='text-lg font-semibold'>Last Name:</span>
            <span className='text-lg'>{user.lastname}</span>
          </div>
          <div className='flex items-center space-x-4'>
            <span className='text-lg font-semibold'>Email:</span>
            <span className='text-lg'>{user.email}</span>
          </div>
          <div className='flex items-center space-x-4'>
            <span className='text-lg font-semibold'>Phone:</span>
            <span className='text-lg'>{user.phone}</span>
          </div>
          <div className='flex items-center space-x-4'>
            <span className='text-lg font-semibold'>Password:</span>
            <span className='text-lg'>{user.password}</span>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default ViewUser;
