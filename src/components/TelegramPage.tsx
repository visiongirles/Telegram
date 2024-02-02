import SideNavBar from './SideNavBar';
import ChatBox from './ChatBox';
import { webSocketConnection } from '../services/client';
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

// REMARK:  Если авторизация будет, то и user id не надо передавать.
// Можно для теста пока записать user id в cookies

export default function TelegramPage() {
  const currentChat = useAppSelector((state) => state.currentChat);

  const dispatch = useAppDispatch();

  useEffect(() => {
    // Socket connection - on 'message' event handler
    console.log("I'm from TelegramPage");
    webSocketConnection.onmessage = function (event) {
      // parse data from server
      const responseData = JSON.parse(event.data);
      switch (responseData.type) {
        case 'get-chats-preview': {
          // const requestId = responseData.id;
          console.table(responseData.chatsPreview);
          const rawChatsPreview = responseData.chatsPreview;
          // prepare ChatPreviews for UI
          const chatsPreview = rawChatsPreview.map(mapChatsPreview);

          // Update state
          dispatch(getChatsPreview(chatsPreview));
          break;
        }
        case 'get-chat-by-id': {
          const rawMessages = responseData.messages;
          const mappedMessages = rawMessages.map(mapCurrentChat);
          dispatch(setCurrentChat(mappedMessages));
          break;
        }
        case 'create-new-message': {
          console.log('CREATE-NEW-MESSAGE', responseData.message);
          const rawMessage: MessageFromServer = responseData.message;
          const mappedMessage = mapNewMessage(rawMessage);
          dispatch(addMessage(mappedMessage));
          // console.log('Я к Вам  с сервера с новыми сообщениями');
          // console.table(rawMessages);

          break;
        }
        case 'delete-message-by-id': {
          console.log('DELETE-NEW-MESSAGE', responseData.deletedMessage);
          const deletedMessage = responseData.deletedMessage;
          dispatch(deleteMessage(deletedMessage));
          // console.log('Я к Вам  с сервера с новыми сообщениями');
          // console.table(rawMessages);

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