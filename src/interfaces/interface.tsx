export interface Conversation {
  user: string;
  messages: Message[];
}

export interface Message {
  date: Date;
  sender: string;
  hasRead: boolean;
  content: string;
}
