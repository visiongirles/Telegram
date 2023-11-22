import TopNavBar from './TopNavBar';
import { Conversation } from '../interfaces/interface';
import SideNavBarElement from './SideNavBarElement';

interface SideNavBarProps {
  conversations: Conversation[];
  onConversationClick: (index: number) => void;
}

function SideNavBar({ conversations, onConversationClick }: SideNavBarProps) {
  return (
    <>
      <TopNavBar />
      <div className='sidebar'>
        {conversations.map((conversation, index) => (
          <SideNavBarElement
            key={Math.random()}
            conversation={conversation}
            onConversationClick={() => onConversationClick(index)}
          />
        ))}
      </div>
    </>
  );
}

export default SideNavBar;
