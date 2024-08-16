import React from 'react';

const StepOne = ({ user, handleChange }) => (
  <div className='p-4 bg-white shadow-md rounded-lg'>
    <h2 className='text-2xl font-semibold mb-4'>
      Step 1: Personal Information
    </h2>
    <div className='space-y-4'>
      <div>
        <label className='block text-sm font-medium text-gray-700'>
          First Name
        </label>
        <input
          type='text'
          name='fname'
          required={true}
          value={user.fname}
          onChange={handleChange}
          className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
        />
      </div>
      <div>
        <label className='block text-sm font-medium text-gray-700'>
          Last Name
        </label>
        <input
          type='text'
          name='lastname'
          required={true}
          value={user.lastname}
          onChange={handleChange}
          className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
        />
      </div>
    </div>
  </div>
);

export default StepOne;
