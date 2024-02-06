import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { webSocketSend } from '../services/client';
import { Chat, Message, MessageForServer, DeletedMessage } from '../interfaces';

// create the thunk
export const fetchChatById = createAsyncThunk(
  'fetchChatById',
  async (chatId: number) => {
    const data = JSON.stringify({ type: 'get-chat-by-id', chatId });
    webSocketSend(data);
    return chatId;
  }
);

export const sendMessage = createAsyncThunk(
  'createNewMessage',
  async (message: MessageForServer) => {
    const data = JSON.stringify({ type: 'create-new-message', message });
    webSocketSend(data);
    // TODO: можно ли вернуть текущий стейт?
  }
);

interface DeleteMessageById {
  chatId: number;
  messageId: number;
}

export const deleteMessageById = createAsyncThunk(
  'deleteMessageById',
  async ({ chatId, messageId }: DeleteMessageById) => {
    const data = JSON.stringify({
      type: 'delete-message-by-id',
      chatId,
      messageId,
    });
    webSocketSend(data);
    // TODO: можно ли вернуться текущий стейт?
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

    addMessage(state, action: PayloadAction<Message>) {
      state.messages?.push(action.payload);
    },

    deleteMessage(state, action: PayloadAction<DeletedMessage>) {
      if (state.chatId !== action.payload.chatId) return state;
      const updatedMessages = state.messages?.filter(
        (item) => item.id !== action.payload.messageId
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
  },
});

// `createSlice` automatically generated action creators with these names.
// export them as named exports from this "slice" file
export const { getCurrentChat, setCurrentChat, deleteMessage, addMessage } =
  currentChatSlice.actions;

// Export the slice reducer as the default export
export default currentChatSlice.reducer;
