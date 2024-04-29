import MessageBox from './MessageBox';
import MessageInputBox from './MessageInputBox';
import TopNavBar from './TopNavBar';
import { Chat, Point2D } from '../interfaces/';
import { MessageMenuButton } from './MessageMenuButton';
import React, { useEffect, useRef, useState } from 'react';
// import { placeholder } from '../data/placeholder';

interface ChatBoxProps {
  currentChat: Chat;
  // currentChat: Chat | null;
}

// Context Menu Button options
const initialContextMenuButtonOptions = {
  visibility: false,
  chosenMessageId: -1,
  // message: {},
};

export const initialEditingMessageOptions = {
  isEditing: false,
  chosenMessageId: -1,
  // message: placeholder.chats.chats[0].messages[0],
};

export default function ChatBox({ currentChat }: ChatBoxProps) {
  // Message editing set-up

  const [editingMessageOptions, setEditingMessageOptions] = useState(
    initialEditingMessageOptions
  );
  // const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState('');

  // Context Menu set-up: coordinates
  const [coords, setCoords] = useState<Point2D>({ x: 0, y: 0 });

  const [contextMenuButtonOptions, setContextMenuButtonOptions] = useState(
    initialContextMenuButtonOptions
  );

  const contextButtonRef = useRef<HTMLDivElement>(null);

  // Scroll position
  const messagesListRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    if (!!messagesListRef.current) {
      if (messagesListRef.current.lastChild) {
        const scrollDownToTheLastMessage = messagesListRef.current
          .lastChild as HTMLElement;

        scrollDownToTheLastMessage.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          // inline: 'center',
        });
      }
    }
    // console.log('messagesListRef:', messagesListRef);
  }, [currentChat.messages[currentChat.messages.length - 1]]);

  useEffect(() => {
    if (editingMessageOptions.isEditing) {
      const editingMessage = messages.filter((message) => {
        console.log(
          'editingMessageOptions.chosenMessageId: ',
          editingMessageOptions.chosenMessageId
        );
        return message.id === editingMessageOptions.chosenMessageId;
      });
      editingMessageText = editingMessage[0].content;
      setText(editingMessageText);
      // setEditingMessageOptions(initialEditingMessageOptions);
      // console.log('editingMessage:', editingMessage);
    }
  }, [editingMessageOptions.isEditing]);

  // check if currentChat !== undefined, also allows to decontruct messages
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

  let editingMessageText: string = '';

  // if (editingMessageOptions.isEditing) {
  //   const editingMessage = messages.filter((message) => {
  //     console.log(
  //       'editingMessageOptions.chosenMessageId: ',
  //       editingMessageOptions.chosenMessageId
  //     );
  //     return message.id === editingMessageOptions.chosenMessageId;
  //   });
  //   editingMessageText = editingMessage[0].content;
  //   setText(editingMessageText);
  //   // setEditingMessageOptions(initialEditingMessageOptions);
  //   // console.log('editingMessage:', editingMessage);
  // }

  return (
    <main className='main-content'>
      <TopNavBar />
      <div className='chatbox-wrapper'>
        <div className='chatbox' ref={messagesListRef}>
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
              onEdit={setEditingMessageOptions}
            />
          )}
        </div>
      </div>

      <MessageInputBox
        chatId={currentChat.chatId}
        editingMessageOptions={editingMessageOptions}
        setEditingMessageOptions={setEditingMessageOptions}
        choosenMessageId={contextMenuButtonOptions.chosenMessageId}
        text={text}
        setText={setText}
      />
    </main>
  );
}
