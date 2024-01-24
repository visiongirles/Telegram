import TopNavBar from './TopNavBar';
import SideNavBarElement from './SideNavBarElement';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { ChatPreview } from '../interfaces';
import { getCurrentChat } from '../features/currentChatSlice';
import { useEffect } from 'react';
import { webSocketConnection } from '../services/client';

function SideNavBar() {
  const chatsPreview: ChatPreview[] = useAppSelector(
    (state) => state.chatsPreview
  );
  const currentChat = useAppSelector((state) => state.currentChat);

  const dispatch = useAppDispatch();

  // useEffect(() => {
  //   // Socket connection - on 'message' event handler
  //   webSocketConnection.onmessage = function (event) {
  //     // parse data from server
  //     const rawChatsPreview = JSON.parse(event.data);

  //     // prepare ChatPreviews for UI
  //     const chatsPreview = rawChatsPreview.map(mapChatsPreview);

  //     // Update state
  //     dispatch(getChatsPreview(chatsPreview));

  //     // DEBUG
  //     console.log(event.data);
  //     console.table(rawChatsPreview);
  //   };
  //   return;
  // }, [currentChat]);

  function onConversationClick(chatId: number) {
    dispatch(getCurrentChat(chatId));
  }

  return (
    <>
      <TopNavBar />
      <div className='sidebar'>
        {chatsPreview.map((chatPreview) => (
          <SideNavBarElement
            key={chatPreview.chatId}
            conversation={chatPreview}
            onConversationClick={() => onConversationClick(chatPreview.chatId)}
            isSelected={chatPreview.chatId === currentChat?.chatId}
          />
        ))}
      </div>
    </>
  );
}

export default SideNavBar;
