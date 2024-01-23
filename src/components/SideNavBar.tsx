import TopNavBar from './TopNavBar';
import SideNavBarElement from './SideNavBarElement';
import { changeCurrentChatAction } from '../reducers/actions';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { ChatPreview } from '../interfaces';

function SideNavBar() {
  const chatsPreview: ChatPreview[] = useAppSelector(
    (state) => state.chatsPreview
  );
  const currentChat = useAppSelector((state) => state.currentChat);

  const dispatch = useAppDispatch();

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
            isSelected={chatPreview.chatId === currentChat?.chatId}
            // isSelected={false}
          />
        ))}
      </div>
    </>
  );
}

export default SideNavBar;
