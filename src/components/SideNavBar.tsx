import TopNavBar from './TopNavBar';
import SideNavBarElement from './SideNavBarElement';
import { changeCurrentChatAction } from '../reducers/actions';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { ChatPreview } from '../interfaces';

function SideNavBar() {
  const state = useAppSelector((state) => state.messanger);

  const dispatch = useAppDispatch();

  const chatsPreview: ChatPreview[] = state.chatsPreview;

  function onConversationClick(chatId: number) {
    dispatch(changeCurrentChatAction(chatId));
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
