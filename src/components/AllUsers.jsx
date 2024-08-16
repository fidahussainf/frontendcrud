import React from 'react';
import { MdEdit, MdDelete, MdVisibility } from 'react-icons/md';
import GeneralTable from './Common/GeneralTable';
import MainLayout from './Common/MainLayout';
import { useSelector, useDispatch } from 'react-redux';
import {  deleteUser } from '../store/users';

import { useNavigate } from 'react-router-dom';

function AllUsers() {
  const dispatch = useDispatch();
  const allUsers = useSelector((state) => state.users.users);

  const navigate = useNavigate();
 const handleDelete = (id) => {
    dispatch(deleteUser(id));
  };
  const handleView = (id) => {
   navigate(`/view-user/${id}`)
  };
  const handleUpdate = (id) => {
    navigate(`/update-user/${id}`)
  };

  const actions = [
    {
      label: 'Edit',
      icon: MdEdit,
      onClick: (row) => handleUpdate(row.id),
    },
    {
      label: 'View',
      icon: MdVisibility,
      onClick: (row) => handleView(row.id),
    },
    {
      label: 'Delete',
      icon: MdDelete,
      onClick: (row) => handleDelete(row.id),
    },
  ];

  return (
    <MainLayout>
      <div className='container mx-auto p-4'>
        <h1 className='text-2xl font-bold mb-4'>All Users</h1>
        <GeneralTable data={allUsers}  actions={actions} />
      </div>
    </MainLayout>
  );
}

export default AllUsers;
