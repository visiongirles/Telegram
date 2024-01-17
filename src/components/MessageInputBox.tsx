import { useState } from 'react';
import { useMessangerDispatchContext } from '../context/dispatchContext';
import { MessangerAction } from '../store/actions';
import dayjs from 'dayjs';
import { Message } from '../interfaces/interface';
import { useDispatch } from 'react-redux';
import { useAppDispatch } from '../hooks/hooks';

export default function MessageInputBox() {
  const [text, setText] = useState('');
  // const dispatch = useMessangerDispatchContext();
  // const dispatch = useDispatch();
  const dispatch = useAppDispatch();

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    const updatedMessage: Message = {
      id: Math.random(),
      date: dayjs().millisecond(),
      author: 'Kate',
      hasRead: false,
      isMine: true,
      content: text,
    };

    dispatch({
      type: MessangerAction.SendMessage,
      message: updatedMessage,
    });

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

// эжем ответ от сервер
// и не ресетить форму отправки, пока не получм подтверждение от сервера, что сообщение им получено
