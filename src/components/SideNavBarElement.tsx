import { ChatPreview } from '../interfaces';
import dateFormatter from '../utils/dateFormatter';
import Logo from './Logo';

interface SideNavBarElementProps {
  conversation: ChatPreview;
  onConversationClick: () => void;
  isSelected: boolean;
}

export default function SideNavBarElement({
  conversation,
  onConversationClick,
  isSelected,
}: SideNavBarElementProps) {
  let lastMessagePreview = conversation.lastMessage.content;

  // если строка длинее 27 символов, чтобы поместиться на одну строку,
  // обрезаем и добавляем многоточие
  const maxLengthOfPreview = 30;
  const maxLengthOfPreviewAfterEditing = 27;
  const startOfPreview = 0;
  const textIfPreviewTooLong = '...';

  if (lastMessagePreview.length > maxLengthOfPreview) {
    lastMessagePreview =
      lastMessagePreview.slice(startOfPreview, maxLengthOfPreviewAfterEditing) +
      textIfPreviewTooLong;
  }

  const lastActivity = dateFormatter(conversation.lastMessage.created_at);

  const messageStatus = conversation.lastMessage.hasRead ? '\ue901' : '';

  const sidebarelementClass =
    'sidebarelement' + (isSelected ? ' selected' : '');

  return (
    <div className={sidebarelementClass} onClick={onConversationClick}>
      <div className='col'>
        <Logo imageSrc={conversation.photo} imageAlt='profile photo' />
      </div>
      <div className='preview-group'>
        <div className='status-group'>
          <div className='user'>{conversation.title}</div>
          <div className='tgico unread-messages'>{messageStatus}</div>
          <div className='last-activity'>{lastActivity}</div>
        </div>
        <div className='preview'>{lastMessagePreview}</div>
      </div>
    </div>
  );
}
