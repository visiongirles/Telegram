import TopNavBar from './TopNavBar';
import SideNavBarElement from './SideNavBarElement';
import { MessangerAction } from '../reducers/actions';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';

function SideNavBar() {
  const state = useAppSelector((state) => state.messanger);

  const dispatch = useAppDispatch();

  const chatsPreview = state.chatsPreview;

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
