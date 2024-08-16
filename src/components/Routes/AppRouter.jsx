import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Common/Home';
import AllUsers from '../AllUsers';
import CreateUser from '../CreateUser';
import UpdateUser from '../UpdateUser';
import ViewUser from '../ViewUser';


const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/all-users' element={<AllUsers />} />
      <Route path='/create-user' element={<CreateUser />} />
      <Route path='/update-user/:id' element={<UpdateUser />} />
      <Route path='/view-user/:id' element={<ViewUser />} />
    </Routes>
  );
};

export default AppRouter;
