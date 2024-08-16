import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../store/users';
import MainLayout from './Common/MainLayout';
import { toast } from 'react-toastify';

const UpdateUser = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) =>
    state.users.users.find((user) => user.id === parseInt(id))
  );
  const [formData, setFormData] = useState({
    fname: '',
    lastname: '',
    email: '',
    phone: '',
    password: '',
  });

  useEffect(() => {
    if (user) {
      setFormData({
        fname: user.fname,
        lastname: user.lastname,
        email: user.email,
        phone: user.phone,
        password: user.password,
      });
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUser({ id: user.id, updatedData: formData }));
    toast.success('user updated sucessfully');
    setTimeout(() => {
      navigate('/all-users');
    }, 2000);
  };

  if (!user) return <p>User not found</p>;

  return (
    <MainLayout>
      <div className='container mx-auto p-4 bg-white shadow-lg rounded-lg'>
        <h1 className='text-3xl font-bold mb-4'>Update User</h1>
        <form onSubmit={handleSubmit} className='space-y-4'>
          <div>
            <label className='block text-sm font-medium'>First Name</label>
            <input
              type='text'
              name='fname'
              value={formData.fname}
              onChange={handleChange}
              className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
            />
          </div>
          <div>
            <label className='block text-sm font-medium'>Last Name</label>
            <input
              type='text'
              name='lastname'
              value={formData.lastname}
              onChange={handleChange}
              className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
            />
          </div>
          <div>
            <label className='block text-sm font-medium'>Email</label>
            <input
              type='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
            />
          </div>
          <div>
            <label className='block text-sm font-medium'>Phone</label>
            <input
              type='text'
              name='phone'
              value={formData.phone}
              onChange={handleChange}
              className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
            />
          </div>
          <div>
            <label className='block text-sm font-medium'>Password</label>
            <input
              type='password'
              name='password'
              value={formData.password}
              onChange={handleChange}
              className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
            />
          </div>
          <button
            type='submit'
            className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600'
          >
            Update User
          </button>
        </form>
      </div>
    </MainLayout>
  );
};

export default UpdateUser;
