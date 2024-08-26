// authSlice.js
import { createSlice,createAsyncThunk,PayloadAction } from '@reduxjs/toolkit';
import { api } from '../api/apiConnect';
import Cookies from 'js-cookie';


interface authState {
    username:string | null,
    token:string | null,
    loading:boolean,
    error:string |null,
}

const initialState:authState = {
  username: null,
  token:null,
  loading:false,
  error:null,
};

export const login = createAsyncThunk(
    'auth/login',
    async (credentials: { username: string; password: string }, { rejectWithValue }) => {
      try {
        const response = await api.post('/user_login', credentials);
        return response.data;
      } catch (err) {
        return rejectWithValue('Login failed');
      }
    }
  );

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.username = null;
      state.token = null;
      Cookies.remove('token');
    },
    setToken:(state, action) => {
      state.token = action.payload.token;
    },
  },
  extraReducers: (builder) =>{
    builder
    .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
    .addCase(login.fulfilled, (state, action) => {
        state.username = action.payload.username;
        state.token = action.payload.token;
        state.loading = false;
        Cookies.set('token', action.payload.token, { expires: 1/24,path:'/', secure: true, sameSite: 'Strict' });
      })
    .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = 'Failed to log in';
      });

  }
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;