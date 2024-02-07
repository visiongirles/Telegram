import { Message, MessageFromServer } from '../interfaces';

export function mapNewMessage(chatId: number, rawMessage: MessageFromServer) {
  const hasRead = rawMessage.status === 'Online';
  const isMine = rawMessage.author_id === 1;
  const author = rawMessage.author_id === 1 ? 'Kate' : 'UNKNOWN';

  const message: Message = {
    id: rawMessage.id,
    created_at: rawMessage.created_at,
    author: author,
    hasRead: hasRead,
    isMine: isMine,
    content: rawMessage.txt,
  };
  return { chatId, message };
}
