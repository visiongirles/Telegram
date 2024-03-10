import TopNavBar from './TopNavBar';
import SideNavBarElement from './SideNavBarElement';
import { useAppDispatch, useAppSelector } from '../hooks';
import { Chat } from '../interfaces';
import { fetchChatById } from '../features/chatsSlice';

interface SideNavBarProps {
  chats: Chat[] | null;
  currentChatId: number | null;
}

export default function SideNavBar({
  chats,
  currentChatId: currentChat,
}: SideNavBarProps) {
  // const currentChat = useAppSelector((state) => state.chats.currentChat);

  const dispatch = useAppDispatch();

  function onConversationClick(chatId: number) {
    dispatch(fetchChatById(chatId));
  }

  return (
    <>
      <TopNavBar />
      <div className='sidebar'>
        {chats &&
          chats.map((chatPreview) => (
            <SideNavBarElement
              key={chatPreview.chatId}
              conversation={chatPreview}
              onConversationClick={() =>
                onConversationClick(chatPreview.chatId)
              }
              isSelected={chatPreview.chatId === currentChat}
            />
          ))}
      </div>
    </>
  );
}
