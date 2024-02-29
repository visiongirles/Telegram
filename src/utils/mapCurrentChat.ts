import { Message } from '../interfaces';

export function mapCurrentChat(message: any, userId: number) {
  console.log('[mapCurrentChat, message from server]: ', message);
  console.log('[mapCurrentChat, userId]: ', userId);

  const hasRead = message.status === 'hasRead';
  const isMine = message.author_id === userId;

  const mappedMessage: Message = {
    id: message.id,
    created_at: message.created_at,
    author_id: message.author_id,
    hasRead: hasRead,
    isMine: isMine,
    content: message.txt,
  };
  return mappedMessage;
}
