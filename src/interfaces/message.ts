export interface Message {
  id: number;
  date: number;
  author: string;
  hasRead: boolean;
  isMine: boolean;
  content: string;
}
