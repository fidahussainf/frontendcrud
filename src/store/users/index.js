import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUsers(state, action) {
      state.users = action.payload;
    },
    addUser(state, action) {
      const lastId =
        state.users.length > 0
          ? Math.max(...state.users.map((user) => user.id))
          : 0;
      const newId = lastId + 1;
      const newUser = { id: newId, ...action.payload };
      state.users.push(newUser);
    },
    updateUser(state, action) {
      const { id, updatedData } = action.payload;
      const userIndex = state.users.findIndex((user) => user.id === id);
      if (userIndex !== -1) {
        state.users[userIndex] = { ...state.users[userIndex], ...updatedData };
      }
    },
    deleteUser(state, action) {
      const id = action.payload;
      state.users = state.users.filter((user) => user.id !== id);
    },
  },
});

export const { setUsers, addUser, updateUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
