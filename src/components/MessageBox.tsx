import { Message, Point2D } from '../interfaces';
import getTimeFormatter from '../utils/getTimeFormatter';

interface MessageBoxProps {
  message: Message;
  onContextMenu: (messageId: number, event: React.MouseEvent) => void;
  coords: Point2D;
  contextMenuButtonVisibality: { visibility: boolean; chosenMessageId: number };
}

export default function MessageBox({
  message,
  onContextMenu,
}: MessageBoxProps) {
  const messageBoxStyle = message.isMine
    ? 'message-box right-message'
    : 'message-box left-message';

  const messageStatus = message.hasRead ? '\ue901' : '\ue900';

  const messageStatusClass =
    (message.hasRead ? 'messageStatusRead ' : 'messageStatusNotRead ') +
    'tgico';

  const timeSent = getTimeFormatter(message.created_at);
  return (
    <>
      <div
        className={messageBoxStyle}
        onContextMenu={(event) => onContextMenu(message.id, event)}
      >
        <div className='row'>{message.content}</div>
        <div className='message-status'>
          <div className='time-sent'>{timeSent}</div>
          {message.isMine && (
            <div className={messageStatusClass}>{messageStatus}</div>
          )}
        </div>
      </div>
    </>
  );
}
