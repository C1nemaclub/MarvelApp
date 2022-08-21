import { configureStore } from '@reduxjs/toolkit';
import charsReducer from '../features/data/dataSlice';

export const store = configureStore({
  reducer: {
    chars: charsReducer,
  },
});
