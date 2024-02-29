import { Message } from '.';

export interface Chat {
  chatId?: number;
  title?: string;
  // owner_id?: number;
  messages?: Message[];
}

export interface ChatForState {
  chatId?: number;
  title?: string;
  // owner_id?: number;
  messages?: Message[];
}

export interface ChatNOTForState {
  chatId: number;
  title: string;
  // owner_id?: number;
  messages: Message[];
}
