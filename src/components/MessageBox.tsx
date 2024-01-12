// interface MessageBoxProps {
//   date: Date;
//   author: string;
//   defaultSender: boolean;
//   hasRead: boolean;
//   content: string;

import { Message, Point2D } from '../interfaces/interface';
import getTimeFormatter from '../utils/getTimeFormatter';
import { MessageMenuButton } from './MessageMenuButton';

// }
interface MessageBoxProps {
  message: Message;
  onContextMenu: (messageId: number, event: React.MouseEvent) => void;
  coords: Point2D;
  contextMenuButtonVisibality: { visibility: boolean; chosenMessageId: number };
}

function MessageBox({
  message,
  onContextMenu,
  coords,
  contextMenuButtonVisibality,
}: MessageBoxProps) {
  const messageBoxStyle =
    message.isMine == true
      ? 'message-box right-message'
      : 'message-box left-message';

  const messageStatus = message.hasRead ? '\ue901' : '\ue900';
  const messageStatusClass = message.hasRead
    ? 'messageStatusRead tgico'
    : 'messageStatusNotRead tgico';
  const timeSent = getTimeFormatter(message.date);
  return (
    <>
      <div
        className={messageBoxStyle}
        onContextMenu={(event) => onContextMenu(message.id, event)}
      >
        <div className='row'>{message.content}</div>
        <div className='message-status'>
          <div className='time-sent'>{timeSent}</div>
          <div className={messageStatusClass}>{messageStatus}</div>
        </div>
      </div>
      {contextMenuButtonVisibality &&
        message.id === contextMenuButtonVisibality.chosenMessageId && (
          <MessageMenuButton messageId={message.id} coords={coords} />
        )}
    </>
  );
}

export default MessageBox;
