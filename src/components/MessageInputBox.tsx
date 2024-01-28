import { useState } from 'react';
import { sendMessageAction } from '../reducers/actions';
import { useAppDispatch } from '../hooks';
import { mapMessageForServer } from '../utils/mapMessageForServer';

interface MessageInputBoxProps {
  chatId: number;
  // currentChat: Chat | null;
}

export default function MessageInputBox({ chatId }: MessageInputBoxProps) {
  const [text, setText] = useState('');
  const dispatch = useAppDispatch();

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    const updatedMessage = mapMessageForServer(text, chatId);
    // {
    //   date: ,
    //   author: 'Kate',
    //   hasRead: false,
    //   isMine: true,
    //   content: text,
    // };

    dispatch(sendMessageAction(updatedMessage));

    setText('');
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setText(event.target.value);
  }

  return (
    <form className='message-input-container' onSubmit={handleSubmit} action=''>
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
  );
}

// на тему, как будет отрисовывать новые сообщения
// ждем ответ от сервер
// и не ресетить форму отправки, пока не получм подтверждение от сервера, что сообщение им получено
