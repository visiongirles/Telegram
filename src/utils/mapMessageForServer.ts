import { MessageForServer } from '../interfaces';
import { createNewDate } from './createNewDate';

export function mapMessageForServer(message: any, chatId: number) {
  const status = 0;
  const author = 'Kate'; // settings.username

  const mappedMessage: MessageForServer = {
    chat_id: chatId,
    date: createNewDate(),
    username: author,
    txt: message,
    status: status,
  };
  return mappedMessage;
}
