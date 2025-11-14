// src/features/notifications/notificationsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [],
};

const notificationsSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    // You’ll add reducers later
  },
});

// export const { } = notificationsSlice.actions;
export default notificationsSlice.reducer;
