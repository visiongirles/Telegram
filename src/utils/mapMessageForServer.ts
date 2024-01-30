import { MessageForServer } from '../interfaces';
// import { createNewDate } from './createNewDate';

export function mapMessageForServer(text: string, chatId: number) {
  // const status = 0;
  const author = 'Kate'; // settings.username

  const mappedMessage: MessageForServer = {
    chat_id: chatId,
    // created_at: createNewDate(),
    username: author,
    txt: text,
    // status: status,
  };
  return mappedMessage;
}
