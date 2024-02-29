import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Profile, UserStatus } from '../interfaces';

const initialProfile = {
  user_id: 0,
  username: 'placeholer',
  profilePicture: 'placeholder for profilePicture', // picture of loading
  status: UserStatus.Online,
} as Profile;

export const profileSlice = createSlice({
  name: 'profile',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState: initialProfile,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setProfile(state, { payload }: PayloadAction<Profile>) {
      console.log('[SetProfile] payload', payload);
      state.user_id = payload.user_id;
      state.username = payload.username;
      state.profilePicture = payload.profilePicture;
      state.status = payload.status;
    },
    getProfile(state) {
      state;
    },
  },
});

// `createSlice` automatically generated action creators with these names.
// export them as named exports from this "slice" file
export const { getProfile, setProfile } = profileSlice.actions;

// Export the slice reducer as the default export
export default profileSlice.reducer;
