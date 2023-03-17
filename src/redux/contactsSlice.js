import { createSlice } from '@reduxjs/toolkit';
import {
  handlePending,
  handleRejected,
  isPendingAction,
  isRejectedAction,
} from './common/common';
import { addContact, deleteContact, fetchContacts } from './operations';

const contactsInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.items = payload;
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(payload);
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        return {
          isLoading: false,
          error: null,
          items: state.items.filter(item => item.id !== payload.id),
        };
      })
      .addMatcher(isPendingAction, handlePending)
      .addMatcher(isRejectedAction, handleRejected);
  },
});
