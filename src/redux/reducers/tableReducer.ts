import { createSlice } from '@reduxjs/toolkit';

export const adminProviderTableListSlice = createSlice({
  name: 'adminProviderTable',
  initialState: {
    resultTo: 0,
    noOfPages: 0,
    totalDataCount: 0,
    resultFrom: 0,
  },

  reducers: {
    setResultTo: (state, action) => {
      state.resultTo = action.payload;
    },
    setNoOfPages: (state, action) => {
      state.noOfPages = action.payload;
    },
    setTotalDataCount: (state, action) => {
      state.totalDataCount = action.payload;
    },
    setResultFrom: (state, action) => {
      state.resultFrom = action.payload;
    },
  },
});

export const { setResultTo, setNoOfPages, setTotalDataCount, setResultFrom } =
  adminProviderTableListSlice.actions;

export default adminProviderTableListSlice.reducer;
