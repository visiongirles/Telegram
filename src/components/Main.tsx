import SideNavBar from './SideNavBar';
import ChatBox from './ChatBox';
import { webSocketConnection } from '../services/client';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { mapChatsPreview } from '../utils/mapChatsPreview';
import { getChatsPreview } from '../features/chatsPreviewSlice';
import { webSocketSend } from '../services/client';

export default function Main() {
  const currentChat = useAppSelector((state) => state.currentChat);

  const dispatch = useAppDispatch();

  useEffect(() => {
    // Socket connection - on 'message' event handler
    webSocketConnection.onmessage = function (event) {
      // parse data from server
      const rawChatsPreview = JSON.parse(event.data);

      // prepare ChatPreviews for UI
      const chatsPreview = rawChatsPreview.map(mapChatsPreview);

      // Update state
      dispatch(getChatsPreview(chatsPreview));

      // DEBUG
      console.log(event.data);
      console.table(rawChatsPreview);
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
