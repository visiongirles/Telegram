interface MessageBoxProps {
  date: Date;
  sender: string;
  defaultSender: boolean;
  hasRead: boolean;
  content: string;
}

function MessageBox({
  date,
  sender,
  defaultSender,
  hasRead,
  content,
}: MessageBoxProps) {
  const messageBoxStyle =
    defaultSender == true
      ? 'message-box right-message'
      : 'message-box left-message';
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const messageStatus = hasRead ? 'прочитано' : 'не прочитано';
  const timeSent = hours + ':' + minutes;
  return (
    <>
      <div className={messageBoxStyle}>
        <div className='row'>{content}</div>
        <div className='row time-sent'>
          <div>{messageStatus}</div>
          <div>{timeSent}</div>
        </div>
      </div>
    </>
  );
}

export default MessageBox;
