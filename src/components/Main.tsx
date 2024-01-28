import SideNavBar from './SideNavBar';
import ChatBox from './ChatBox';
import { webSocketConnection } from '../services/client';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { mapChatsPreview } from '../utils/mapChatsPreview';
import { getChatsPreview } from '../features/chatsPreviewSlice';
import { setCurrentChat } from '../features/currentChatSlice';
import { mapCurrentChat } from '../utils/mapCurrentChat';

// interface RequestId {
//   id: number;
//   callback: () => void;
// }

// const initialState: RequestId[] = [];

export default function Main() {
  // Local state for storing og requestId and callback
  // const [requestArray, setRequestArray] = useState(initialState);

  const currentChat = useAppSelector((state) => state.currentChat);

  const dispatch = useAppDispatch();

  useEffect(() => {
    // Socket connection - on 'message' event handler
    webSocketConnection.onmessage = function (event) {
      // parse data from server
      const responseData = JSON.parse(event.data);
      switch (responseData.type) {
        case 'get-chats-preview': {
          const requestId = responseData.id;
          console.log(requestId);
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
