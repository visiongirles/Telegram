import SideNavBar from './SideNavBar';
import ChatBox from './ChatBox';
import { useMessangerStateContext } from '../context/stateContext';
import { webSocketConnection } from '../services/client';
import { useEffect } from 'react';
import { ChatPreview, Messanger } from '../interfaces/interface';
import { Action, MessangerAction } from '../store/actions';
import { useMessangerDispatchContext } from '../context/dispatchContext';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';

export default function Main() {
  // const state = useMessangerStateContext();
  // const state = useSelector<RootState>((state) => state.messanger);
  const state = useAppSelector((state) => state.messanger);

  // const dispatch = useMessangerDispatchContext();
  // const dispatch = useDispatch();
  const dispatch = useAppDispatch();

  useEffect(() => {
    webSocketConnection.onmessage = function (event) {
      console.log(event.data);
      const rawChatsPreview = JSON.parse(event.data);
      console.table(rawChatsPreview);

      const chatsPreview = rawChatsPreview.map((rawChatPreview: any) => {
        // const hasRead = 0;
        const isMine = rawChatPreview.username === 'Kate';
        const chatPreview: ChatPreview = {
          chatId: rawChatPreview.chat_id,
          photo: rawChatPreview.photo,
          lastMessage: {
            id: rawChatPreview.id,
            date: rawChatPreview.date,
            isMine: isMine,
            content: rawChatPreview.txt,
            hasRead: true,
            author: rawChatPreview.username,
          },
        };
        return chatPreview;
      });

      // const chatsPreview: ChatPreview[] = messanger.chatsPreview;
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
