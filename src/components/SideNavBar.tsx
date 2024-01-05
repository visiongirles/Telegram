import TopNavBar from './TopNavBar';
import SideNavBarElement from './SideNavBarElement';
import {
  MessangerAction,
  useMessangerDispatchContext,
  useMessangerStateContext,
} from './StateProvider';
import { useEffect } from 'react';

function SideNavBar() {
  useEffect(() => {
    dispatch({ type: MessangerAction.GetChats });
  }, []);
  const state = useMessangerStateContext();
  const chatsPreview = state.navigationBarChats;

  const dispatch = useMessangerDispatchContext();

  function onConversationClick(chatId: number) {
    dispatch({
      type: MessangerAction.ChangeCurrentChat,
      updatedChatId: chatId,
    });
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
          />
        ))}
      </div>
    </>
  );
}

export default SideNavBar;
