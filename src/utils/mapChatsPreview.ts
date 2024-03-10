import { Chat, MessageStatus } from '../interfaces';

export function mapChatsPreview(rawChatPreview: any) {
  const hasRead = rawChatPreview.status === MessageStatus.hasRead;
  const chatPreview: Chat = {
    chatId: rawChatPreview.chat_id,
    title: rawChatPreview.username,
    photo: rawChatPreview.photo,
    messages: [
      {
        id: rawChatPreview.id,
        created_at: rawChatPreview.created_at,
        isMine: false,
        content: rawChatPreview.txt,
        hasRead,
        author_id: rawChatPreview.author_id,
      },
    ],
  };
  return chatPreview;
}
