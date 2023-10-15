import { configureStore } from '@reduxjs/toolkit';
import tableReducer from './reducers/tableReducer';

const store = configureStore({
  reducer: {
    adminProviderTable: tableReducer,
  },
});

export default store;
