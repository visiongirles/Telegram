import { ChatPreview } from '../interfaces';

export function mapChatsPreview(rawChatPreview: any) {
  const hasRead = rawChatPreview.status === 'hasRead';
  const isMine = rawChatPreview.username === 'Kate';
  const chatPreview: ChatPreview = {
    chatId: rawChatPreview.chat_id,
    photo: rawChatPreview.photo,
    lastMessage: {
      id: rawChatPreview.id,
      created_at: rawChatPreview.created_at,
      isMine,
      content: rawChatPreview.txt,
      hasRead,
      author: rawChatPreview.username,
    },
  };
  return chatPreview;
}
