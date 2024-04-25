import { useState } from 'react';
// import { sendMessageAction } from '../reducers/actions';
import { useAppDispatch } from '../hooks';
import { mapMessageForServer } from '../utils/mapMessageForServer';
import { sendMessage } from '../features';

interface MessageInputBoxProps {
  chatId: number;
  isEditing: boolean;
  choosenMessageId?: number;
  // currentChat: Chat | null;
}

export default function MessageInputBox({
  chatId,
  isEditing,
  choosenMessageId,
}: MessageInputBoxProps) {
  const [text, setText] = useState('');
  const dispatch = useAppDispatch();

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (text === '') return;
    const updatedMessage = mapMessageForServer(text, chatId);
    dispatch(sendMessage(updatedMessage));
    setText('');
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setText(event.target.value);
    // setIsEditing(true);
  }

  return (
    <div className='message-input-container'>
      {isEditing && <div className=''>Something</div>}
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
