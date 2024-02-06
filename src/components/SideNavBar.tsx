import TopNavBar from './TopNavBar';
import SideNavBarElement from './SideNavBarElement';
import { useAppDispatch, useAppSelector } from '../hooks';
import { ChatPreview } from '../interfaces';
import { fetchChatById } from '../features/currentChatSlice';

export default function SideNavBar() {
  const chatsPreview: ChatPreview[] = useAppSelector(
    (state) => state.chatsPreview
  );
  const currentChat = useAppSelector((state) => state.currentChat);

  const dispatch = useAppDispatch();

  function onConversationClick(chatId: number) {
    dispatch(fetchChatById(chatId));
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
