import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Message } from '../interfaces';

interface ChatPreview {
  chatId: number;
  photo: string;
  lastMessage: Message;
  draftMessage?: string;
}

const initialChatsPreview = [
  {
    chatId: 0,
    photo:
      'https://i.pinimg.com/originals/2e/60/07/2e60079f1e36b5c7681f0996a79e8af4.jpg', // picture of loading
    lastMessage: {
      id: 1,
      created_at: Date.now().toString(),
      author: 'placeholder for author',
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
    getChatsPreview(
      _,
      action: PayloadAction<
        [
          {
            chatId: number;
            photo: string;
            lastMessage: Message;
            draftMessage?: string;
          }
        ]
      >
    ) {
      return action.payload;
    },
  },
});

// `createSlice` automatically generated action creators with these names.
// export them as named exports from this "slice" file
export const { getChatsPreview } = chatsPreviewSlice.actions;

// Export the slice reducer as the default export
export default chatsPreviewSlice.reducer;
