// import { Conversation } from '../interfaces/interface';
import { ChatPreview } from '../interfaces/interface';
import Logo from './Logo';
import { useMessangerStateContext } from './StateProvider';

interface SideNavBarElementProps {
  conversation: ChatPreview;
}

function SideNavBarElement({ conversation }: SideNavBarElementProps) {
  // const state = useMessangerStateContext();
  let lastMessagePreview = conversation.lastMessage.content;
  // если строка длинее 27 символов, чтобы поместиться на одну строку, обрезаем и добавляем многоточие

  const maxLengthOfPreview = 30;
  const maxLengthOfPreviewAfterEditing = 27;
  const startOfPreview = 0;
  const textIfPreviewTooLong = '...';

  if (lastMessagePreview.length > maxLengthOfPreview) {
    lastMessagePreview =
      lastMessagePreview.slice(startOfPreview, maxLengthOfPreviewAfterEditing) +
      textIfPreviewTooLong;
  }

  // ВРЕМЕННО обрезала строку, чтоб отражался только день недели с помощью  .slice(0, 4)
  // TODO  настроить потом https://momentjs.com/

  const lastActivity = new Date(conversation.lastMessage.date)
    .toDateString()
    .slice(0, 4);

  const messageStatus = conversation.lastMessage.hasRead ? 'vV' : '';

  let sidebarelementClass = 'sidebarelement';

  function handleButttonClicked() {
    sidebarelementClass = 'sidebarelement selected';
  }

  return (
    <>
      <div className={sidebarelementClass}>
        <div className='col'>
          <Logo imageSrc={conversation.photo} imageAlt='profile photo' />
        </div>
        <div className='preview-group'>
          <div className='status-group'>
            <div className='user'>{conversation.lastMessage.author}</div>
            <div className='unread-messages'>{messageStatus}</div>
            <div className='last-activity'>{lastActivity}</div>
          </div>
          <div className='preview'>{lastMessagePreview}</div>
        </div>
      </div>
    </>
  );
}

export default SideNavBarElement;
