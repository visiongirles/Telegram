import { Message } from '.';

export interface ChatPreview {
  chatId: number;
  title: string;
  photo: string;
  lastMessage: Message;
  draftMessage?: string;
}
