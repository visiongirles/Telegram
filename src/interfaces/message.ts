export interface Message {
  id: number;
  created_at: string;
  author_id: number;
  hasRead: boolean;
  isMine: boolean;
  content: string;
}
