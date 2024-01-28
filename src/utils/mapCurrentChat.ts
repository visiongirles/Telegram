import { Message } from '../interfaces';

export function mapCurrentChat(message: any) {
  const hasRead = message.status === 2;
  const isMine = message.username === 'Kate';

  const mappedMessage: Message = {
    id: message.id,
    date: message.date,
    author: message.author_id,
    hasRead: hasRead,
    isMine: isMine,
    content: message.txt,
  };
  return mappedMessage;
}
