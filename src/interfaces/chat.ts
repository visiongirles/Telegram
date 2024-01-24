import { Message } from '.';

export interface Chat {
  chatId?: number;
  messages?: Message[];
}
