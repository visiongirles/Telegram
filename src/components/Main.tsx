import SideNavBar from './SideNavBar';
import ChatBox from './ChatBox';
import { webSocketConnection } from '../services/client';
import { useEffect } from 'react';
import { Action, MessangerAction } from '../reducers/actions';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { mapChatsPreview } from '../utils/mapChatsPreview';
import { getChatsAction } from '../reducers/';

export default function Main() {
  const state = useAppSelector((state) => state.messanger);

  const dispatch = useAppDispatch();

  useEffect(() => {
    // Socket connection - on 'message' event handler
    webSocketConnection.onmessage = function (event) {
      // parse data from server
      const rawChatsPreview = JSON.parse(event.data);

      // prepare ChatPreviews for UI
      const chatsPreview = rawChatsPreview.map(mapChatsPreview);

      //Prepare Action
      // const updatedState: Action = {
      //   type: MessangerAction.GetChatsPreview,
      //   chatsPreview: chatsPreview,
      // };

      // Update state
      dispatch(getChatsAction(chatsPreview));

      // DEBUG
      console.log(event.data);
      console.table(rawChatsPreview);
      // console.log(updatedState);
    };
    return;
  }, []);

  return (
    <div className='main-container'>
      <div className='left'>
        <SideNavBar />
      </div>
      <div className='right'>
        <ChatBox currentChat={state.currentChat} />
      </div>
    </div>
  );
}
