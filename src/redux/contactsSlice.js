import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './operations';

const contactsInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const isPendingAction = action => {
  return action.type.endsWith('pending');
};

const isRejectedAction = action => {
  return action.type.endsWith('rejected');
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
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
// extraReducers: {
//   [fetchContacts.pending]: handlePending,
//   [addContact.pending]: handlePending,
//   [deleteContact.pending]: handlePending,
//   [fetchContacts.rejected]: handleRejected,
//   [addContact.rejected]: handleRejected,
//   [deleteContact.rejected]: handleRejected,
//   [fetchContacts.fulfilled](state, { payload }) {
//     state.isLoading = false;
//     state.error = null;
//     state.items = payload;
//   },
//   [addContact.fulfilled](state, { payload }) {
//     state.isLoading = false;
//     state.error = null;
//     state.items.push(payload);
//   },
//   [deleteContact.fulfilled](state, { payload }) {
//     return {
//       isLoading: false,
//       error: null,
//       items: state.items.filter(item => item.id !== payload.id),
//     };
//   },
// },
// });
