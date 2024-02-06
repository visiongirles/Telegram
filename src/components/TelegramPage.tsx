import SideNavBar from './SideNavBar';
import ChatBox from './ChatBox';
import { webSocketConnection, createWebSocket } from '../services/client';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { mapChatsPreview } from '../utils/mapChatsPreview';
import { getChatsPreview } from '../features/chatsPreviewSlice';
import {
  addMessage,
  deleteMessage,
  setCurrentChat,
} from '../features/currentChatSlice';
import { mapCurrentChat } from '../utils/mapCurrentChat';
import { mapNewMessage } from '../utils/mapNewMessage';
import { MessageFromServer } from '../interfaces';

const URL_WEBSOCKET = 'ws://localhost:3000/websockets';

// TODO:  Если авторизация будет, то и user id не надо передавать.
// Можно для теста пока записать user id в cookies

export default function TelegramPage() {
  const currentChat = useAppSelector((state) => state.currentChat);

  const dispatch = useAppDispatch();

  useEffect(() => {
    createWebSocket(URL_WEBSOCKET);

    // Socket connection - on 'message' event handler
    webSocketConnection.onmessage = function (event) {
      // parse data from server
      const responseData = JSON.parse(event.data);
      switch (responseData.type) {
        case 'get-chats-preview': {
          console.table('get-chats-preview', responseData.chatsPreview);
          const rawChatsPreview = responseData.chatsPreview;

          // prepare ChatPreviews for UI
          const chatsPreview = rawChatsPreview.map(mapChatsPreview);

          // Update state
          dispatch(getChatsPreview(chatsPreview));
          break;
        }
        case 'get-chat-by-id': {
          console.table('get-chat-by-id', responseData.messages);
          const rawMessages = responseData.messages;

          // prepare Chat for UI
          const mappedMessages = rawMessages.map(mapCurrentChat);

          // Update state
          dispatch(setCurrentChat(mappedMessages));
          break;
        }
        case 'create-new-message': {
          console.table('create-new-message', responseData.message);
          const rawMessage: MessageFromServer = responseData.message;

          // prepare Message for UI
          const mappedMessage = mapNewMessage(rawMessage);

          // Update state
          dispatch(addMessage(mappedMessage));
          break;
        }
        case 'delete-message-by-id': {
          console.table('delete-message-by-id', responseData.deletedMessage);
          const deletedMessage = responseData.deletedMessage;

          // Update state
          dispatch(deleteMessage(deletedMessage));
          break;
        }
      }
    };
    return;
  }, []);

  return (
    <div className='main-container'>
      <div className='left'>
        <SideNavBar />
      </div>
      <div className='right'>
        <ChatBox currentChat={currentChat} />
      </div>
    </div>
  );
}
