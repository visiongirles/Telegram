import MessageBox from './MessageBox';
import MessageEditBox from './MessageEditPanel';
import TopNavBar from './TopNavBar';
import { Message } from '../interfaces/interface';

function ChatBox() {
  const messages: Message[] = [
    {
      date: new Date('2015-03-25T12:00:00-06:30'),
      sender: 'Max',
      hasRead: true,
      content: 'Привет Катя',
    },
    {
      date: new Date('2015-03-25T12:00:00-07:30'),
      sender: 'Kate',
      hasRead: true,
      content: 'Привет Макс',
    },
  ];

  return (
    <main className='main'>
      <TopNavBar />
      <div className='chatbox'>
        {messages.map((message) => (
          <MessageBox
            date={message.date}
            sender={message.sender}
            hasRead={message.hasRead}
            content={message.content}
          />
        ))}
      </div>

      <MessageEditBox />
    </main>
  );
}

export default ChatBox;
