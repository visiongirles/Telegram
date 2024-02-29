import { Message, MessageFromServer, MessageStatus } from '../interfaces';

export function mapNewMessage(
  chatId: number,
  rawMessage: MessageFromServer,
  userId: number
) {
  console.log('[mapNewMessage, message from server]: ', rawMessage);
  console.log('[mapNewMessage, userId]: ', userId);

  const hasRead = rawMessage.status === MessageStatus.hasRead;
  const isMine = rawMessage.author_id === userId;

  const message: Message = {
    id: rawMessage.id,
    created_at: rawMessage.created_at,
    author_id: rawMessage.author_id,
    hasRead: hasRead,
    isMine: isMine,
    content: rawMessage.txt,
  };
  return { chatId, message };
}
