export interface Conversation {
  interlocutorName: string;
  interlocutorProfilePicture: string;
  messages: Message[];
}

export interface Message {
  date: Date;
  sender: string;
  defaultSender: boolean;
  hasRead: boolean;
  content: string;
}
