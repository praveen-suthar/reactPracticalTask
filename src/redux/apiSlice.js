import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUserData = createAsyncThunk('api/fetchUserData', async () => {
  const response = await axios.get('https://reqres.in/api/users?page=1');
  return response.data.data;
});

// create slice 
const apiSlice = createSlice({
  name: 'api',
  initialState: {
    users: [],
    status: 'idle',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.users = action.payload;
      })
      .addCase(fetchUserData.rejected, (state) => {
        state.status = 'failed';
      });
  },
});
export default apiSlice.reducer;
