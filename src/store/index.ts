import { configureStore } from '@reduxjs/toolkit';
import chatPreviewReducer from '../features/chatsPreviewSlice';
import currentChatReducer from '../features/currentChatSlice';
import profileReducer from '../features/profileSlice';
import settingsReducer from '../features/settingsSlice';
import authenticationReducer from '../features/authenticationSlice';

// Automatically adds the thunk middleware and the Redux DevTools extension
export const store = configureStore({
  // Automatically calls `combineReducers`
  reducer: {
    authentication: authenticationReducer,
    chatsPreview: chatPreviewReducer,
    currentChat: currentChatReducer,
    profile: profileReducer,
    settings: settingsReducer,
  },
});
