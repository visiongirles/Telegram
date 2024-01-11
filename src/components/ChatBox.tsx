import MessageBox from './MessageBox';
import MessageSendBox from './MessageSendBox';
import TopNavBar from './TopNavBar';
import { Chat, Point2D } from '../interfaces/interface';
import { MessageMenuButton } from './MessageMenuButton';
import React, { Fragment, useState } from 'react';

interface ChatBoxProps {
  currentChat?: Chat;
}

function ChatBox({ currentChat }: ChatBoxProps) {
  const [coords, setCoords] = useState<Point2D>({ x: 0, y: 0 });

  const [contextMenuButtonVisibality, setContextMenuButtonVisibality] =
    useState({ visibility: false, chosenMessageId: 0 });

  if (!currentChat) return;
  // function ChatBox({ messages }: ChatBoxProps) {
  const { messages } = currentChat;

  function handleContextMenu(messageId: number, event: React.MouseEvent) {
    event.preventDefault();
    setCoords({ x: event.clientX, y: event.clientY });
    setContextMenuButtonVisibality({
      visibility: true,
      chosenMessageId: messageId,
    });
  }

  return (
    <main className='main-content'>
      <TopNavBar />
      <div className='chatbox'>
        {messages.map((message) => (
          <Fragment key={message.id}>
            <MessageBox message={message} onContextMenu={handleContextMenu} />
            {contextMenuButtonVisibality &&
              message.id === contextMenuButtonVisibality.chosenMessageId && (
                <MessageMenuButton messageId={message.id} coords={coords} />
              )}
          </Fragment>
        ))}
      </div>
      <MessageSendBox />
    </main>
  );
}

export default ChatBox;
