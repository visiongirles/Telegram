import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Chat } from '../interfaces';

const initialCurrentChat = { chatId: undefined, messages: undefined } as Chat;

export const currentChatSlice = createSlice({
  name: 'currentChat',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState: initialCurrentChat,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    getCurrentChat(state, action: PayloadAction<number>) {
      state.chatId = action.payload;
    },
  },
});

// `createSlice` automatically generated action creators with these names.
// export them as named exports from this "slice" file
export const { getCurrentChat } = currentChatSlice.actions;

// Export the slice reducer as the default export
export default currentChatSlice.reducer;

// const initialCurrentChat = {
//   chatId: 1,
//   messages: [
//     {
//       id: 1,
//       date: 1702033343,
//       author: 'Сутулая собака',
//       hasRead: true,
//       isMine: false,
//       content: 'Привет, любители мурлыкающих созданий! Как ваш кот сегодня?',
//     },
//     {
//       id: 2,
//       date: 1703033343,
//       author: 'Kate',
//       hasRead: false,
//       isMine: true,
//       content:
//         'Он опять пытался поймать свой хвост. Кажется, это его новое хобби.',
//     },
//     {
//       id: 3,
//       date: 1704033343,
//       author: 'Сутулая собака',
//       hasRead: false,
//       isMine: true,
//       content:
//         'Мой кот вчера залез на верхнюю полку и теперь не может спуститься. Стоит ли мне купить ему карту?',
//     },
//   ],
// };
