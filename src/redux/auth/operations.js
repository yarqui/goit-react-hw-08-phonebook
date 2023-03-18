import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

// Utility to set JWT
const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Utility to remove JWT
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (userCredentials, { rejectWithValue }) => {
    try {
      const res = await axios.post('users/signup', userCredentials);

      setAuthHeader(res.data.token);

      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (userCredentials, { rejectWithValue }) => {
    try {
      const res = await axios.post('users/login', userCredentials);

      setAuthHeader(res.data.token);

      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk(
  'auth/logout',
  async (userCredentials, { rejectWithValue }) => {
    try {
      const res = await axios.post('/users/logout', userCredentials);

      clearAuthHeader();

      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    //   Getting token, using thunkAPI.getState()
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (!persistedToken) {
      return thunkAPI.rejectWithValue('Unable to fetch user data');
    }

    try {
      setAuthHeader(persistedToken);

      const res = await axios.get('/users/current');

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
