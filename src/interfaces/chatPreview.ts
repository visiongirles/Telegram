import { Message } from '.';

export interface ChatPreview {
  chatId: number;
  ownerUsername: string;
  ownerId: number;
  photo: string;
  lastMessage: Message;
  draftMessage?: string;
}
