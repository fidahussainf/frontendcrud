import React from 'react';

const StepThree = ({ user, handleChange }) => (
  <div className='p-4 bg-white shadow-md rounded-lg'>
    <h2 className='text-2xl font-semibold mb-4'>Step 3: Security</h2>
    <div className='space-y-4'>
      <div>
        <label className='block text-sm font-medium text-gray-700'>
          Password
        </label>
        <input
          type='password'
          name='password'
          value={user.password}
          onChange={handleChange}
          className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
        />
      </div>
    </div>
  </div>
);

export default StepThree;
