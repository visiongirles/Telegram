import { Message, MessageFromServer } from '../interfaces';

export function mapNewMessage(message: MessageFromServer) {
  const hasRead = message.status === 'Online';
  const isMine = message.author_id === 1;
  const author = message.author_id === 1 ? 'Kate' : 'UNKNOWN';

  const mappedMessage: Message = {
    id: message.id,
    created_at: message.created_at, 
    author: author,
    hasRead: hasRead,
    isMine: isMine,
    content: message.txt,
  };
  return mappedMessage;
}
