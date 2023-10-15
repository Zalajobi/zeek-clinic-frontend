import { createSlice } from '@reduxjs/toolkit';

export const adminProviderTableListSlice = createSlice({
  name: 'adminProviderTable',
  initialState: {
    resultTo: 0,
    noOfPages: 0,
    totalProviders: 0,
    resultFrom: 0,
  },

  reducers: {
    setResultTo: (state, action) => {
      state.resultTo = action.payload;
    },
    setNoOfPages: (state, action) => {
      state.noOfPages = action.payload;
    },
    setTotalProviders: (state, action) => {
      state.totalProviders = action.payload;
    },
    setResultFrom: (state, action) => {
      state.resultFrom = action.payload;
    },
  },
});

export const { setResultTo, setNoOfPages, setTotalProviders, setResultFrom } =
  adminProviderTableListSlice.actions;

export default adminProviderTableListSlice.reducer;
