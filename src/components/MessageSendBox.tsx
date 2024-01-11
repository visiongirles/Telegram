import { useState } from 'react';
import { useMessangerDispatchContext } from '../context/dispatchContext';
import { MessangerAction } from '../store/actions';
import dayjs from 'dayjs';
// import { nanoid } from 'nanoid';
import { Message } from '../interfaces/interface';

// interface MessageSendBoxProps {
//   chatId: number;
// }

function MessageSendBox() {
  const [text, setText] = useState('');
  const dispatch = useMessangerDispatchContext();

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
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setText(event.target.value);
  }

  return (
    <div className='sendbox'>
      <form onSubmit={handleSubmit} action=''>
        <label htmlFor='message'>Kate says:</label>
        <input
          type='text'
          name='message'
          id='message'
          value={text}
          onChange={handleChange}
        />
        <input type='submit' value='Submit' />
        {/* <input type='reset' value='Reset' /> */}
      </form>
    </div>
  );
}

export default MessageSendBox;
