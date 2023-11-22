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
  const messageStatus = hasRead ? 'vV' : 'v';
  const messageStatusClass = hasRead
    ? 'messageStatusRead'
    : 'messageStatusNotRead';
  const timeSent = hours + ':' + minutes;
  return (
    <>
      <div className={messageBoxStyle}>
        <div className='row'>{content}</div>
        <div className='message-status'>
          <div className='time-sent'>{timeSent}</div>
          <div className={messageStatusClass}>{messageStatus}</div>
        </div>
      </div>
    </>
  );
}

export default MessageBox;
