import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { webSocketSend } from '../services/client';
import { Chat, Message, MessageForServer } from '../interfaces';

// First, create the thunk
export const fetchChatById = createAsyncThunk(
  'fetchChatById',
  async (chatId: number) => {
    console.log('FETCHID', chatId);
    // socket -> send message
    const data = JSON.stringify({ type: 'get-chat-by-id', chatId });
    webSocketSend(data); // TODO: Отправка запроса на сервер -> нужно обновить массив запросов

    // ТУТ НИЖЕ должен возратиться ответ!
    return chatId;
  }
);

export const sendMessage = createAsyncThunk(
  'sendMessage',
  async (message: MessageForServer, { getState }) => {
    const data = JSON.stringify({ type: 'create-new-message', message });
    webSocketSend(data);
    // TODO: можно ли вернуться текущий стейт?
    return getState;
  }
);

const initialCurrentChat = { chatId: undefined, messages: undefined } as Chat;

export const currentChatSlice = createSlice({
  name: 'currentChat',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState: initialCurrentChat,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    getCurrentChat(state, action: PayloadAction<number>) {
      state.chatId = action.payload;
      state.messages = [];
    },
    setCurrentChat(state, action: PayloadAction<Message[]>) {
      state.messages = action.payload;
    },

    deleteMessage(state, action: PayloadAction<number>) {
      const updatedMessages = state.messages?.filter(
        (item) => item.id !== action.payload
      );
      state.messages = updatedMessages;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchChatById.pending, (state) => {
      state.messages = [];
    });
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchChatById.fulfilled, (state, action) => {
      state.chatId = action.payload;

      // Add user to the state array
      state.messages = [];
    });
    builder.addCase(sendMessage.fulfilled, (state, action) => {
      return state;
    });
  },
});

// `createSlice` automatically generated action creators with these names.
// export them as named exports from this "slice" file
export const { getCurrentChat, setCurrentChat, deleteMessage } =
  currentChatSlice.actions;

// Export the slice reducer as the default export
export default currentChatSlice.reducer;
