import MessageBox from './MessageBox';
import MessageEditBox from './MessageEditPanel';
import TopNavBar from './TopNavBar';

interface Message {
  date: Date;
  sender: string;
  hasRead: boolean;
  content: string;
}

function ChatBox() {
  const messages: Message[] = [
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
  ];

  return (
    <div>
      <TopNavBar />
      {messages.map((message) => (
        <MessageBox
          date={message.date}
          sender={message.sender}
          hasRead={message.hasRead}
          content={message.content}
        />
      ))}
      <MessageEditBox />
    </div>
  );
}

export default ChatBox;
