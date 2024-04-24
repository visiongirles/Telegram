import { Message } from '.';

export interface Chat {
  chatId: number;
  title: string;
  photo: string;
  messages: Message[];
}

export interface UpdatedChat {
  chatId: number;
  // owner_id?: number;
  messages: Message[];
}
