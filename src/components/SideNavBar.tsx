import TopNavBar from './TopNavBar';
import { Conversation, Message } from '../interfaces/interface';
import SideNavBarElement from './SideNavBarElement';

function SideNavBar() {
  const conversations: Conversation[] = [
    {
      user: 'Max',
      messages: [
        {
          date: new Date('2019-01-16'),
          sender: 'Max',
          hasRead: true,
          content: 'Привет Катя',
        },
        {
          date: new Date('2019-02-16'),
          sender: 'Kate',
          hasRead: true,
          content: 'Привет Макс',
        },
      ],
    },
  ];

  return (
    <>
      <div className='flex col'>
        <TopNavBar />
        <div className='sidebar'>
          {conversations.map((conversation) => (
            <SideNavBarElement conversation={conversation} />
          ))}
        </div>
      </div>
    </>
  );
}

export default SideNavBar;
