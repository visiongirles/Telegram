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
  const today = new Date().getDate();
  const week = 60 * 60 * 24 * 7;
  const messageStatus = conversation.messages[lastMessageIndex].hasRead
    ? 'Y'
    : 'N';

  return (
    <>
      <div className='flex sidebarelement'>
        <div className='col'>
          <Logo image='cat1' />
        </div>
        <div className='col underlined'>
          <div className='user'>{conversation.user}</div>
          <div className='preview'>{preview}</div>
        </div>
        <div className='col underlined'>
          <div className='last-activity'>{lastActivity}</div>
          <div className='unread-messages'>{messageStatus}</div>
        </div>
      </div>
    </>
  );
}

export default SideNavBarElement;
