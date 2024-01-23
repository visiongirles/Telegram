import { createSlice } from '@reduxjs/toolkit';

// Define a type for the slice state

const initialCurrentChat = [
  {
    id: 1,
    date: 1702033343,
    author: 'Сутулая собака',
    hasRead: true,
    isMine: false,
    content: 'Привет, любители мурлыкающих созданий! Как ваш кот сегодня?',
  },
  {
    id: 2,
    date: 1703033343,
    author: 'Kate',
    hasRead: false,
    isMine: true,
    content:
      'Он опять пытался поймать свой хвост. Кажется, это его новое хобби.',
  },
  {
    id: 3,
    date: 1704033343,
    author: 'Сутулая собака',
    hasRead: false,
    isMine: true,
    content:
      'Мой кот вчера залез на верхнюю полку и теперь не может спуститься. Стоит ли мне купить ему карту?',
  },
];

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
