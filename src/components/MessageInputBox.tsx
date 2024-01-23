import { useState } from 'react';
import { MessangerAction, sendMessageAction } from '../reducers/actions';
import { Message } from '../interfaces';
import { useAppDispatch } from '../hooks/hooks';
import { createNewDate } from '../utils/createNewDate';

export default function MessageInputBox() {
  const [text, setText] = useState('');
  const dispatch = useAppDispatch();

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    const updatedMessage: Message = {
      id: Math.random(),
      date: createNewDate(),
      author: 'Kate',
      hasRead: false,
      isMine: true,
      content: text,
    };

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
