import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../slices/authSlice';
import Cookies from 'js-cookie';

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  preloadedState: {
    auth: {
      token: Cookies.get('token') || null,
      username: null,
      loading: false,
      error: null,
    },
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;