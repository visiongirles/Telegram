import { Message } from '../interfaces';

export function mapCurrentChat(message: any) {
  const hasRead = message.status === 'hasRead';
  const isMine = message.username === 'Kate';

  const mappedMessage: Message = {
    id: message.id,
    created_at: message.created_at,
    author: message.author_id,
    hasRead,
    isMine,
    content: message.txt,
  };
  return mappedMessage;
}
