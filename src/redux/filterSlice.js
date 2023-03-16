import { createSlice } from '@reduxjs/toolkit';

export const filterInitialState = { value: '' };

export const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    setContactFilter: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { setContactFilter } = filterSlice.actions;
