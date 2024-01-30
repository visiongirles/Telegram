import { Message } from '.';

export interface Chat {
  chatId?: number;
  // owner_id?: number;
  messages?: Message[];
}
