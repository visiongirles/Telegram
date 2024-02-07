import { createSlice } from '@reduxjs/toolkit';
import { Profile, UserStatus } from '../interfaces';

const initialProfile = {
  username: 'placeholder for username',
  profilePicture: 'placeholder for profilePicture', // picture of loading
  status: UserStatus.Online,
} as Profile;

export const profileSlice = createSlice({
  name: 'profile',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState: initialProfile,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    getProfile(state) {
      state;
    },
  },
});

// `createSlice` automatically generated action creators with these names.
// export them as named exports from this "slice" file
export const { getProfile } = profileSlice.actions;

// Export the slice reducer as the default export
export default profileSlice.reducer;
