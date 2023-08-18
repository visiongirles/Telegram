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
      ? 'cloud-message message-box left-message'
      : ' cloud-message message-box right-message';
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const messageStatus = hasRead ? 'прочитано' : 'не прочитано';
  const timeSent = hours + ':' + minutes;
  return (
    <>
      <div className={messageBoxStyle}>
        {/* <div className='flex col'> */}
        {/* <div>{date.toDateString()}</div> */}
        <div className='row'>{messageStatus}</div>
        <div className='row'>{content}</div>
        <div className='row time-sent'>{timeSent}</div>
        {/* </div> */}
      </div>
    </>
  );
}

export default MessageBox;
