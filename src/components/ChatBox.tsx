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

  useEffect(() => {
    const onClickOutsideHandler = (event: MouseEvent) => {
      if (
        contextMenuButtonOptions.visibility &&
        event.button === LEFT_BUTTON_CLICK
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
    console.log(event);
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
          <Fragment key={message.id}>
            <MessageBox
              message={message}
              onContextMenu={handleContextMenu}
              coords={coords}
              contextMenuButtonVisibality={contextMenuButtonOptions}
            />
            {/* {contextMenuButtonVisibality &&
              message.id === contextMenuButtonVisibality.chosenMessageId && (
                <MessageMenuButton messageId={message.id} coords={coords} />
              )} */}
          </Fragment>
        ))}
      </div>
      <MessageSendBox />
    </main>
  );
}

export default ChatBox;
