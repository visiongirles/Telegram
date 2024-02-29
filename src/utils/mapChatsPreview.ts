import { ChatPreview, MessageStatus } from '../interfaces';

export function mapChatsPreview(rawChatPreview: any) {
  const hasRead = rawChatPreview.status === MessageStatus.hasRead;
  const chatPreview: ChatPreview = {
    chatId: rawChatPreview.chat_id,
    title: rawChatPreview.username,
    photo: rawChatPreview.photo,
    lastMessage: {
      id: rawChatPreview.id,
      created_at: rawChatPreview.created_at,
      isMine: false,
      content: rawChatPreview.txt,
      hasRead,
      author_id: rawChatPreview.author_id,
    },
  };
  return chatPreview;
}
