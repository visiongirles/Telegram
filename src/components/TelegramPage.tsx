import SideNavBar from './SideNavBar';
import ChatBox from './ChatBox';
import { webSocketConnection, createWebSocket } from '../services/client';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { mapChatsPreview } from '../utils/mapChatsPreview';
// import { updateChatsPreview } from '../features/chatsPreviewSlice';
import {
  getChatsPreview,
  setCurrentChat,
  addMessage,
  deleteMessage,
  setMessagesRead,
} from '../features/chatsSlice';
import { mapCurrentChat } from '../utils/mapCurrentChat';
import { mapNewMessage } from '../utils/mapNewMessage';
import { MessageFromServer } from '../interfaces';
import config from '../services/config.json';

// TODO:  Если авторизация будет, то и user id не надо передавать.
// Можно для теста пока записать user id в cookies

export default function TelegramPage() {
  const currentChatId = useAppSelector((state) => state.chats.currentChat);
  const chats = useAppSelector((state) => state.chats.activeChats);
  const currentChat = chats?.find((chat) => chat.chatId === currentChatId);
  const userId = useAppSelector((store) => store.profile.user_id);

  console.log('[USER_ID FROM state]', userId);
  const dispatch = useAppDispatch();

  useEffect(() => {
    createWebSocket(config.URL_WEBSOCKET, userId);

    // Socket connection - on 'message' event handler
    webSocketConnection.onmessage = function (event) {
      // parse data from server
      const responseData = JSON.parse(event.data);
      switch (responseData.type) {
        case 'get-chats-preview': {
          console.table('get-chats-preview', responseData.chatsPreview);
          const rawChatsPreview = responseData.chatsPreview;
          console.log('CHAT PREVIEWS ', rawChatsPreview);

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
          const mappedMessages = rawMessages.map((item: any) =>
            mapCurrentChat(item, userId)
          );

          // Update state
          // dispatch(setCurrentChat(mappedMessages));
          dispatch(
            setCurrentChat({
              chatId: responseData.chatId,
              messages: mappedMessages,
            })
          );
          // TODO: dispatch all new message has been read
          dispatch(
            setMessagesRead({
              chatId: responseData.chatId,
              messages: mappedMessages,
            })
          );
          break;
        }
        case 'create-new-message': {
          console.table('create-new-message', responseData.message);
          const chatId: number = responseData.chatId;
          const rawMessage: MessageFromServer = responseData.message;

          // prepare Message for UI
          const mappedMessage = mapNewMessage(chatId, rawMessage, userId);

          // Update state
          dispatch(addMessage(mappedMessage));
          // dispatch(updateChatsPreview(mappedMessage));
          break;
        }
        case 'delete-message-by-id': {
          console.table('delete-message-by-id', responseData.deletedMessage);
          const deletedMessage = responseData.deletedMessage;

          // 1ю сравнить message id только удлаенного и того, что в чат превью
          // если удлаенного === чат превью (т.е. мы удалили последне собщение), то 1) нужно взять предыдущее из стейта и dispatch в chat preview
          // если !== то ничего не меняется

          // Update state
          dispatch(deleteMessage(deletedMessage));
          break;
        }
        case 'set-messages-read': {
          console.table('set-messages-read', responseData.messages);

          break;
        }
      }
    };
    return;
  }, []);

  //TODO: перенести вызов стейта выше из SideNavBAr
  // все чаты и активный чат и распределять на левую и правую
  return (
    <div className='main-container'>
      <div className='left'>
        <SideNavBar chats={chats} currentChatId={currentChatId} />
      </div>
      <div className='right'>
        <ChatBox currentChat={currentChat} />
      </div>
    </div>
  );
}
