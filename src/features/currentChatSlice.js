import { createSlice } from '@reduxjs/toolkit';

// Define a type for the slice state

const initialCurrentChat = null;

export const currentChatSlice = createSlice({
  name: 'currentChat',
  // `createSlice` will infer the state type from the `initialState` argument
  initialCurrentChat,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    getCurrentChat(state) {
      return state;
    },
  },
});

// `createSlice` automatically generated action creators with these names.
// export them as named exports from this "slice" file
export const { getCurrentChat } = currentChatSlice.actions;

// Export the slice reducer as the default export
export default currentChatSlice.reducer;
