import MessageBox from './MessageBox';
import MessageSendBox from './MessageSendBox';
import TopNavBar from './TopNavBar';
import { Conversation, Message } from '../interfaces/interface';

interface ChatBoxProps {
  conversation: Conversation;
}

function ChatBox({ conversation }: ChatBoxProps) {
  const messages: Message[] = conversation.messages;

  return (
    <main className='main'>
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
      </div>

      <MessageSendBox />
    </main>
  );
}

export default ChatBox;
