import MessageBox from './MessageBox';
import MessageInputBox from './MessageInputBox';
import TopNavBar from './TopNavBar';
import { Chat, Point2D } from '../interfaces/';
import { MessageMenuButton } from './MessageMenuButton';
import React, { useEffect, useRef, useState } from 'react';

interface ChatBoxProps {
  currentChat?: Chat;
  // currentChat: Chat | null;
}

// Context Menu Button options
const initialContextMenuButtonOptions = {
  visibility: false,
  chosenMessageId: 0,
};

export default function ChatBox({ currentChat }: ChatBoxProps) {
  // Context Menu set-up: coordinates
  const [coords, setCoords] = useState<Point2D>({ x: 0, y: 0 });

  const [contextMenuButtonOptions, setContextMenuButtonOptions] = useState(
    initialContextMenuButtonOptions
  );

  const contextButtonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClickOutsideHandler = (event: MouseEvent) => {
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
  if (!currentChat?.chatId || !currentChat.messages) return;

  const { messages } = currentChat;

  // Context Menu (right click) handler
  function handleContextMenu(messageId: number, event: React.MouseEvent) {
    // disable the appearance of the default Context Menu
    event.preventDefault();

    // find the coordinates where the Custom Context Menu should appear
    setCoords({ x: event.clientX, y: event.clientY });

    // change Custom Context Menu state
    setContextMenuButtonOptions({
      visibility: true,
      chosenMessageId: messageId,
    });
  }

  // if we choose some option in Context Menu - this function will close it
  function handleCloseMenu() {
    setContextMenuButtonOptions(initialContextMenuButtonOptions);
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
        {/* Context Menu Button */}
        {contextMenuButtonOptions.visibility && (
          <MessageMenuButton
            ref={contextButtonRef}
            chatId={currentChat?.chatId}
            messageId={contextMenuButtonOptions.chosenMessageId}
            coords={coords}
            onClick={handleCloseMenu}
          />
        )}
      </div>
      <MessageInputBox chatId={currentChat.chatId} />
    </main>
  );
}
