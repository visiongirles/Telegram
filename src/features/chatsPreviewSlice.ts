import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ChatPreview } from '../interfaces';
import { UpdatedMessage } from '../interfaces/updatedMessage';

const initialChatsPreview = [
  {
    chatId: 0,
    title: 'placeholder',
    photo:
      'https://i.pinimg.com/originals/2e/60/07/2e60079f1e36b5c7681f0996a79e8af4.jpg', // picture of loading
    lastMessage: {
      id: 0,
      created_at: Date.now().toString(),
      author_id: 0,
      hasRead: false,
      isMine: false,
      content: 'placeholder for content',
    },
  },
] as ChatPreview[];

export const chatsPreviewSlice = createSlice({
  name: 'chatsPreview',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState: initialChatsPreview,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    getChatsPreview(_, action: PayloadAction<[ChatPreview]>) {
      return action.payload;
    },
    updateChatsPreview(state, { payload }: PayloadAction<UpdatedMessage>) {
      state
        .filter((chatPreview) => chatPreview.chatId === payload.chatId)
        .forEach((chatPreview) => {
          chatPreview.lastMessage = payload.message;
        });
    },
  },
});

// `createSlice` automatically generated action creators with these names.
// export them as named exports from this "slice" file
export const { getChatsPreview, updateChatsPreview } =
  chatsPreviewSlice.actions;

// Export the slice reducer as the default export
export default chatsPreviewSlice.reducer;
