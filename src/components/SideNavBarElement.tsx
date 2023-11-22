import { Conversation } from '../interfaces/interface';
import Logo from './Logo';

interface SideNavBarElementProps {
  conversation: Conversation;
  onConversationClick: () => void;
}

function SideNavBarElement({
  conversation,
  onConversationClick,
}: SideNavBarElementProps) {
  const lastMessageIndex = conversation.messages.length - 1;

  let preview = conversation.messages[lastMessageIndex].content;

  // если строка длинее 27 символов, чтобы поместиться на одну строку, обрезаем и добавляем многоточие

  const maxLengthOfPreview = 30;
  const maxLengthOfPreviewAfterEditing = 27;
  const startOfPreview = 0;
  const textIfPreviewTooLong = '...';

  if (preview.length > maxLengthOfPreview) {
    preview =
      preview.slice(startOfPreview, maxLengthOfPreviewAfterEditing) +
      textIfPreviewTooLong;
  }

  // ВРЕМЕННО обрезала строку, чтоб отражался только еднь недели с помощью  .slice(0, 4)
  // TODO  настроить потом https://momentjs.com/

  const lastActivity = conversation.messages[lastMessageIndex].date
    .toDateString()
    .slice(0, 4);

  const messageStatus = conversation.messages[lastMessageIndex].hasRead
    ? 'vV'
    : '';

  let sidebarelementClass = 'sidebarelement';

  function handleButttonClicked() {
    sidebarelementClass = 'sidebarelement selected';
  }

  return (
    <>
      <div className={sidebarelementClass} onClick={onConversationClick}>
        <div className='col'>
          <Logo
            imageSrc={conversation.interlocutorProfilePicture}
            imageAlt='profile photo'
          />
        </div>
        <div className='preview-group'>
          <div className='status-group'>
            <div className='user'>{conversation.interlocutorName}</div>
            <div className='unread-messages'>{messageStatus}</div>
            <div className='last-activity'>{lastActivity}</div>
          </div>
          <div className='preview'>{preview}</div>
        </div>
      </div>
    </>
  );
}

export default SideNavBarElement;
