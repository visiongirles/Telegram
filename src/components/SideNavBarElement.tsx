import { Chat } from '../interfaces';
import dateFormatter from '../utils/dateFormatter';
import Logo from './Logo';

interface SideNavBarElementProps {
  conversation: Chat;
  onConversationClick: () => void;
  isSelected: boolean;
}

export default function SideNavBarElement({
  conversation,
  onConversationClick,
  isSelected,
}: SideNavBarElementProps) {
  const sidebarelementClass =
    'sidebarelement' + (isSelected ? ' selected' : '');

  if (!conversation.messages) {
    return (
      <div className={sidebarelementClass} onClick={onConversationClick}>
        <div className='col'>
          <Logo imageSrc={conversation.photo} imageAlt='profile photo' />
        </div>
        <div className='preview-group'>
          <div className='status-group'>
            <div className='user'>{conversation.title}</div>
            <div className='tgico unread-messages'>{}</div>
            <div className='last-activity'>{}</div>
          </div>
          <div className='preview'>{}</div>
        </div>
      </div>
    );
  }

  const lastMessage = conversation.messages[conversation.messages.length - 1];

  let lastMessagePreview = lastMessage.content;

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

  const lastActivity = dateFormatter(lastMessage.created_at);

  const messageStatus = lastMessage.hasRead ? '\ue901' : '';

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
