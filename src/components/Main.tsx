import SideNavBar from './SideNavBar';
import ChatBox from './ChatBox';
import { useMessangerStateContext } from '../context/stateContext';
import { webSocketConnection } from '../services/client';
import { useEffect } from 'react';
import { ChatPreview } from '../interfaces/interface';
import { Action, MessangerAction } from '../store/actions';
import { useMessangerDispatchContext } from '../context/dispatchContext';

export default function Main() {
  const state = useMessangerStateContext();
  const dispatch = useMessangerDispatchContext();

  useEffect(() => {
    webSocketConnection.onmessage = function (event) {
      const messanger = JSON.parse(event.data);

      const chatsPreview: ChatPreview[] = messanger.chatsPreview;
      const updatedState: Action = {
        type: MessangerAction.GetChatsPreview,
        chatsPreview: chatsPreview,
      };
      console.log(updatedState);
      dispatch(updatedState);
    };
    return;
  });

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
