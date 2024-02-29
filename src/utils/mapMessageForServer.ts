import { MessageForServer } from '../interfaces';

export function mapMessageForServer(text: string, chatId: number) {
  const mappedMessage: MessageForServer = {
    chat_id: chatId,
    txt: text,
  };
  return mappedMessage;
}
