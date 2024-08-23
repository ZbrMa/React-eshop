import axios from 'axios';
import { store } from '../store/store';
import { logout } from '../slices/authSlice';
import instance from 'axios';

axios.interceptors.request.use((config) => {
  const token = store.getState().auth.token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});