import axios from 'axios';

import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://640c8642a3e07380e8f6ab1c.mockapi.io/api/v1';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get('/contacts');

      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (userCredentials, { rejectWithValue }) => {
    try {
      const res = await axios.post('/contacts', userCredentials);

      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, { rejectWithValue }) => {
    try {
      const res = await axios.delete(`contacts/${contactId}`);

      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
