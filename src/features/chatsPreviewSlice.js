// import { ChatPreview } from '../interfaces';
import { createSlice } from '@reduxjs/toolkit';

// interface ChatPreview {
//   chatId: number;
//   photo: string;
//   lastMessage: Message;
//   draftMessage?: string;
// }

const initialChatsPreview = {
  chatId: 0,
  photo:
    'https://i.pinimg.com/originals/2e/60/07/2e60079f1e36b5c7681f0996a79e8af4.jpg', // picture of loading
  lastMessage: {
    id: 1,
    date: Date.now(),
    author: 'placeholder for author',
    hasRead: false,
    isMine: false,
    content: 'placeholder for content',
  },
};

// function getChatsPreview(
//   state = initialChatsPreview,
//   action: UnknownAction
// ) {
//   switch (action.type) {
//     case MessangerAction.GetChatsPreview: {
//       const updatedState = {
//         ...state,
//         chatId: action.chatId,
//         photo: action.photo, // from server
//         lastMessage: action.lastMessage, // from server
//       };
//       return updatedState;
//     }
//   }
// }

export const chatsPreviewSlice = createSlice({
  name: 'chatsPreview',
  // `createSlice` will infer the state type from the `initialState` argument
  initialChatsPreview,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    getChatsPreview(state, action) {
      const { chatId, photo, lastMessage, draftMessage } = action.payload;
      state.chatId = chatId;
      state.photo = photo;
      state.lastMessage = lastMessage;
      state.draftMessage = draftMessage;
    },
  },
});

// `createSlice` automatically generated action creators with these names.
// export them as named exports from this "slice" file
export const { getChatsPreview } = chatsPreviewSlice.actions;

// Export the slice reducer as the default export
export default chatsPreviewSlice.reducer;

// TODO: how to make preparation for Message creation Action
// https://redux-toolkit.js.org/api/createslice
// import { createSlice, nanoid } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'

// interface Item {
//   id: string
//   text: string
// }

// const todosSlice = createSlice({
//   name: 'todos',
//   initialState: [] as Item[],
//   reducers: {
//     addTodo: {
//       reducer: (state, action: PayloadAction<Item>) => {
//         state.push(action.payload)
//       },
//       prepare: (text: string) => {
//         const id = nanoid()
//         return { payload: { id, text } }
//       },
//     },
//   },
// })
