import TopNavBar from './TopNavBar';
import SideNavBarElement from './SideNavBarElement';
import { useEffect } from 'react';
import { MessangerAction } from '../store/actions';
import { useMessangerStateContext } from '../context/stateContext';
import { useMessangerDispatchContext } from '../context/dispatchContext';

function SideNavBar() {
  // fire fetch event to get chatPreviewsData
  useEffect(() => {
    dispatch({ type: MessangerAction.GetChatsPreview });
  }, []);

  const state = useMessangerStateContext();

  const chatsPreview = state.chatsPreview;

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
            isSelected={chatPreview.chatId === state.currentChat?.chatId}
          />
        ))}
      </div>
    </>
  );
}

export default SideNavBar;
