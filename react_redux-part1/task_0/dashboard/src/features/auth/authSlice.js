// src/features/auth/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // You’ll add reducers later (login, logout, etc.)
  },
});

// export const { } = authSlice.actions;
export default authSlice.reducer;
