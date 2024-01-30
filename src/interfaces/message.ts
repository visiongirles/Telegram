export interface Message {
  id: number;
  created_at: string;
  author: string;
  hasRead: boolean;
  isMine: boolean;
  content: string;
}
