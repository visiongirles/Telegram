import { configureStore } from '@reduxjs/toolkit';
import authenticationReducer from '../features/authenticationSlice';
import chatsReducer from '../features/chatsSlice';
import profileReducer from '../features/profileSlice';
import settingsReducer from '../features/settingsSlice';
// Automatically adds the thunk middleware and the Redux DevTools extension
export const store = configureStore({
  // Automatically calls `combineReducers`
  reducer: {
    authentication: authenticationReducer,
    chats: chatsReducer,
    // chatsPreview: chatPreviewReducer,
    // currentChat: currentChatReducer,
    profile: profileReducer,
    settings: settingsReducer,
  },
});
