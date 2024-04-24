import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import {
  Chat,
  DeletedMessage,
  Message,
  MessageForServer,
  UpdatedChat,
} from '../interfaces';
import { placeholder } from '../data/placeholder';
import { webSocketSend } from '../services/client';
import { DeleteMessageById } from '../interfaces/deleteMessageById';
import { UpdatedMessage } from '../interfaces/updatedMessage';

interface ChatState {
  currentChat: number | null;
  activeChats: Chat[] | null;
}

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
  }
);

interface ReadMessages {
  chatId: number;
  messages: Message[];
}
export const setMessagesRead = createAsyncThunk(
  'setMessagesRead',
  async (readMessages: ReadMessages) => {
    const data = JSON.stringify({ type: 'set-messages-read', readMessages });
    webSocketSend(data);
  }
);

export const deleteMessageById = createAsyncThunk(
  'deleteMessageById',
  async ({ chatId, messageId }: DeleteMessageById) => {
    const data = JSON.stringify({
      type: 'delete-message-by-id',
      chatId,
      messageId,
    });
    webSocketSend(data);
  }
);

// TODO: было undefined а стало NULL когда рефакторить Реакт компоненты
const initialChats = {
  currentChat: placeholder.chats.currentChat,
  activeChats: placeholder.chats.chats,
} as ChatState;

export const chatsSlice = createSlice({
  name: 'chats',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState: initialChats,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    getChatsPreview(state, { payload }: PayloadAction<[Chat]>) {
      if (!!state.activeChats) state.activeChats = payload;
    },

    setChat(
      state,
      { payload }: PayloadAction<{ chatId: number; messages: [Message] }>
    ) {
      state.activeChats?.forEach((chat) => {
        if (chat.chatId === payload.chatId) {
          chat.messages = payload.messages;
        }
      });
    },

    setCurrentChat(state, { payload }: PayloadAction<UpdatedChat>) {
      state.currentChat = payload.chatId;
      state.activeChats?.forEach((chat) => {
        if (chat.chatId === payload.chatId) {
          chat.messages = payload.messages;
          // chat.messages.forEach(
          //   (message) => (message.hasRead = true) //
          // );
        }
      });
    },

    addMessage(state, { payload }: PayloadAction<UpdatedMessage>) {
      state.activeChats?.forEach((chat) => {
        if (chat.chatId === payload.chatId) {
          const updatedMessage = payload.message;
          // updatedMessage.hasRead = true;
          chat.messages?.push(updatedMessage);
        }
      });
    },

    deleteMessage(state, { payload }: PayloadAction<DeletedMessage>) {
      state.activeChats?.forEach((chat) => {
        if (chat.chatId === payload.chatId) {
          const updatedMessages = chat.messages?.filter(
            (message) => message.id !== payload.messageId
          );
          chat.messages = updatedMessages ?? null;
        }
      });
    },
  },
});

// `createSlice` automatically generated action creators with these names.
// export them as named exports from this "slice" file
export const {
  getChatsPreview,
  setCurrentChat,
  addMessage,
  deleteMessage,
  setChat,
} = chatsSlice.actions;

// Export the slice reducer as the default export
export default chatsSlice.reducer;
