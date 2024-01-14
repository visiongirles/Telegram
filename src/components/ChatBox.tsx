import MessageBox from './MessageBox';
import MessageInputBox from './MessageInputBox';
import TopNavBar from './TopNavBar';
import { Chat, Point2D } from '../interfaces/interface';
import { MessageMenuButton } from './MessageMenuButton';
import React, { useEffect, useRef, useState } from 'react';

interface ChatBoxProps {
  currentChat?: Chat;
}

// Context Menu Button options
const initialContextMenuButtonOptions = {
  visibility: false,
  chosenMessageId: 0,
};

function ChatBox({ currentChat }: ChatBoxProps) {
  // Context Menu set-up: coordinates
  const [coordinates, setCoordinates] = useState<Point2D>({ x: 0, y: 0 });

  const [contextMenuButtonOptions, setContextMenuButtonOptions] = useState(
    initialContextMenuButtonOptions
  );

  const contextButtonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClickOutsideHandler = (event: MouseEvent) => {
      // alternatively, we can catch the event.target with needed class and emit the event
      // const something = event.target as HTMLElement;
      // if (event.target.className.includes('button')) return;
      if (
        contextMenuButtonOptions.visibility &&
        !contextButtonRef.current?.contains(event.target as Node)
      ) {
        setContextMenuButtonOptions(initialContextMenuButtonOptions);
      }
    };
    window.addEventListener('mousedown', onClickOutsideHandler);
    return () => {
      window.removeEventListener('mousedown', onClickOutsideHandler);
    };
  }, [contextMenuButtonOptions]);

  // check if currentChat !== udnerfined, also allows to decontruct messages
  if (!currentChat) return;
  const { messages } = currentChat;

  // Context Menu handler
  function handleContextMenu(messageId: number, event: React.MouseEvent) {
    // disable the default Context Menu
    event.preventDefault();
    // find the coordinates where the Custom Context Menu should appear
    setCoordinates({ x: event.clientX, y: event.clientY });
    // change Custom Context Menu state
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
            coords={coordinates}
            contextMenuButtonVisibality={contextMenuButtonOptions}
          />
        ))}
        {/* Context Menu Button */}
        {contextMenuButtonOptions.visibility && (
          <MessageMenuButton
            ref={contextButtonRef}
            messageId={contextMenuButtonOptions.chosenMessageId}
            coords={coordinates}
          />
        )}
      </div>
      <MessageInputBox />
    </main>
  );
}

export default ChatBox;
