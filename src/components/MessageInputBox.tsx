// import { useState } from 'react';
// import { sendMessageAction } from '../reducers/actions';
import { useAppDispatch } from '../hooks';
import { mapMessageForServer } from '../utils/mapMessageForServer';
import { sendMessage, editMessage } from '../features';
import { initialEditingMessageOptions } from './ChatBox';
import { mapEditMessageForServer } from '../utils/mapEditMessageForServer';

interface MessageInputBoxProps {
  chatId: number;
  editingMessageOptions: { isEditing: boolean; chosenMessageId: number };
  choosenMessageId?: number;
  text: string;
  setText: (text: string) => void;
  setEditingMessageOptions: (editingOption: {
    isEditing: boolean;
    chosenMessageId: number;
  }) => void;
  // currentChat: Chat | null;
}

// TODO: сохранить текста старого. локальный стейт? если isEditing?

export default function MessageInputBox({
  chatId,
  editingMessageOptions,
  text,
  setText,
  setEditingMessageOptions,
}: MessageInputBoxProps) {
  // const [text, setText] = useState('');

  const dispatch = useAppDispatch();

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (text === '') return;
    if (editingMessageOptions.isEditing) {
      //передать функцию для обнуления стейта для isEditing

      // написать новую функцию для изменения текста сообщения для store
      // для backend
      const updatedMessage = mapEditMessageForServer(
        text,
        editingMessageOptions.chosenMessageId,
        chatId
      );

      dispatch(editMessage(updatedMessage));
      setText('');
      setEditingMessageOptions(initialEditingMessageOptions);
      //
    } else {
      const updatedMessage = mapMessageForServer(text, chatId);
      dispatch(sendMessage(updatedMessage));
      setText('');
    }
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setText(event.target.value);
    // setIsEditing(true);
  }
  console.log('isEditing: ', editingMessageOptions.isEditing);
  return (
    <div className='message-input-container'>
      {editingMessageOptions.isEditing && (
        <div className='message-edit-container'>{text}</div>
      )}
      <form className='message-input-form' onSubmit={handleSubmit} action=''>
        <label htmlFor='message'></label>
        <input
          className='message-input'
          type='text'
          name='message'
          id='message'
          value={text}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}
