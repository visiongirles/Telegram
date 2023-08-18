import TopNavBar from './TopNavBar';
import { Conversation, Message } from '../interfaces/interface';
import SideNavBarElement from './SideNavBarElement';

interface SideNavBarProps {
  conversations: Conversation[];
}

function SideNavBar({ conversations }: SideNavBarProps) {
  return (
    <>
      <div className='flex col'>
        <TopNavBar />
        <div className='sidebar'>
          {conversations.map((conversation) => (
            <SideNavBarElement
              key={Math.random()}
              conversation={conversation}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default SideNavBar;
