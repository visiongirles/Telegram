import { Message } from '.';

export interface ChatPreview {
  chatId: number;
  // username: string;
  photo: string;
  lastMessage: Message;
  draftMessage?: string;
}
