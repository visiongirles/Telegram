interface MessageBoxProps {
  date: Date;
  sender: string;
  hasRead: boolean;
  content: string;
}

function MessageBox({ date, sender, hasRead, content }: MessageBoxProps) {
  const messageBoxStyle =
    sender == 'Max' ? 'message-box left-message' : 'message-box right-message';
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const messageStatus = hasRead ? 'прочитано' : 'не прочитано';
  const timeSent = hours + ':' + minutes;
  return (
    <>
      <div className={messageBoxStyle}>
        <div className='flex col'>
          {/* <div>{date.toDateString()}</div> */}
          <div className='row'>{messageStatus}</div>
          <div className='row'>{content}</div>
          <div className='row time-sent right-message'>{timeSent}</div>
        </div>
      </div>
    </>
  );
}

export default MessageBox;
