import MessageBox from './MessageBox';
import MessageSendBox from './MessageSendBox';
import TopNavBar from './TopNavBar';
import { Chat, Point2D } from '../interfaces/interface';
import { MessageMenuButton } from './MessageMenuButton';
import React, { Fragment, useEffect, useRef, useState } from 'react';

const LEFT_BUTTON_CLICK = 0;
interface ChatBoxProps {
  currentChat?: Chat;
}

const initialContextMenuButtonOptions = {
  visibility: false,
  chosenMessageId: 0,
};

function ChatBox({ currentChat }: ChatBoxProps) {
  const [coords, setCoords] = useState<Point2D>({ x: 0, y: 0 });

  const [contextMenuButtonOptions, setContextMenuButtonOptions] = useState(
    initialContextMenuButtonOptions
  );

  const contextButtonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClickOutsideHandler = (event: MouseEvent) => {
      // const something = event.target as HTMLElement;
      // if (event.target.className.includes('button')) return;
      // console.log(event);
      if (
        contextMenuButtonOptions.visibility &&
        !contextButtonRef.current?.contains(event.target as Node)
        // event.button === LEFT_BUTTON_CLICK
      ) {
        setContextMenuButtonOptions(initialContextMenuButtonOptions);
      }
    };
    window.addEventListener('mousedown', onClickOutsideHandler);
    return () => {
      window.removeEventListener('mousedown', onClickOutsideHandler);
    };
  }, [contextMenuButtonOptions]);

  if (!currentChat) return;
  // function ChatBox({ messages }: ChatBoxProps) {
  const { messages } = currentChat;

  function handleContextMenu(messageId: number, event: React.MouseEvent) {
    event.preventDefault();
    // console.log(event);
    setCoords({ x: event.clientX, y: event.clientY });
    setContextMenuButtonOptions({
      visibility: true,
      chosenMessageId: messageId,
    });
  }

  return (
    <main className='main-content'>
      <TopNavBar />
      <div className='chatbox'>
        {messages.map((message) => (
          <MessageBox
            key={message.id}
            message={message}
            onContextMenu={handleContextMenu}
            coords={coords}
            contextMenuButtonVisibality={contextMenuButtonOptions}
          />
        ))}
        {contextMenuButtonOptions.visibility && (
          <MessageMenuButton
            ref={contextButtonRef}
            messageId={contextMenuButtonOptions.chosenMessageId}
            coords={coords}
          />
        )}
      </div>
      <MessageSendBox />
    </main>
  );
}

export default ChatBox;
