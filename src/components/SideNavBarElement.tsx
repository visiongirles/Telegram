import { Conversation } from '../interfaces/interface';
import Logo from './Logo';

interface SideNavBarElementProps {
  conversation: Conversation;
}

function SideNavBarElement({ conversation }: SideNavBarElementProps) {
  const lastMessageIndex = conversation.messages.length - 1;
  const preview = conversation.messages[lastMessageIndex].content;
  const lastActivity =
    conversation.messages[lastMessageIndex].date.toUTCString();
  const today = Date.now;

  // week = 60 seconds * 60 minutes * 24 hours * 7 days
  const week = 60 * 60 * 24 * 7;

  const messageStatus = conversation.messages[lastMessageIndex].hasRead
    ? 'Y'
    : 'N';

  return (
    <>
      <div className='sidebarelement'>
        <div className='col'>
          <Logo
            imageSrc={conversation.interlocutorProfilePicture}
            imageAlt='profile photo'
          />
        </div>
        <div className='col preview-group'>
          <div className='user'>{conversation.interlocutorName}</div>
          <div className='preview'>{preview}</div>
        </div>
        <div className='col'>
          <div className='last-activity'>{lastActivity}</div>
          <div className='unread-messages'>{messageStatus}</div>
        </div>
      </div>
    </>
  );
}

export default SideNavBarElement;
