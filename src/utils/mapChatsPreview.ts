import { ChatPreview } from '../interfaces';

export function mapChatsPreview(rawChatPreview: any) {
  const isMine = rawChatPreview.username === 'Kate';
  const chatPreview: ChatPreview = {
    chatId: rawChatPreview.chat_id,
    photo: rawChatPreview.photo,
    lastMessage: {
      id: rawChatPreview.id,
      date: rawChatPreview.date,
      isMine: isMine,
      content: rawChatPreview.txt,
      hasRead: true,
      author: rawChatPreview.username,
    },
  };
  return chatPreview;
}
