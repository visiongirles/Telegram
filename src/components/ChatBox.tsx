import MessageBox from './MessageBox';
import MessageSendBox from './MessageSendBox';
import TopNavBar from './TopNavBar';
import { Message } from '../interfaces/interface';

function ChatBox() {
  const messages: Message[] = conversation.messages;

  return (
    <main className='main-content'>
      <TopNavBar />
      <div className='chatbox'>
        {messages.map((message) => (
          <MessageBox
            key={Math.random()}
            date={message.date}
            sender={message.sender}
            defaultSender={message.defaultSender}
            hasRead={message.hasRead}
            content={message.content}
          />
        ))}
        <MessageSendBox />
      </div>
    </main>
  );
}

export default ChatBox;
