import { createSlice } from '@reduxjs/toolkit';
import { Settings } from '../interfaces';

const initialSettings = {
  darkMode: false,
} as Settings;

export const settingsSlice = createSlice({
  name: 'settings',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState: initialSettings,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    getSettings(state) {
      state;
    },
  },
});

// `createSlice` automatically generated action creators with these names.
// export them as named exports from this "slice" file
export const { getSettings } = settingsSlice.actions;

// Export the slice reducer as the default export
export default settingsSlice.reducer;
