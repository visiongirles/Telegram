import { Chat, MessageStatus } from '../interfaces';

export function mapChatsPreview(rawChatPreview: any, userId: number) {
  // если пустое сообщение rawChatPreview.author_id === null
  // rawChatPreview.author_id - null
  // chat_id: 1
  // created_at : null
  // id: null
  // photo: "https://gameguru.ru/clf/44/04/c0/01/news.1610973258596.jpg"
  // status: null
  // txt:  null
  // username: "Сутулая собака"
  // unread_message_count: '0'

  const messages = rawChatPreview.author_id
    ? [
        {
          id: rawChatPreview.id,
          created_at: rawChatPreview.created_at,
          isMine: rawChatPreview.author_id === userId,
          content: rawChatPreview.txt,
          hasRead: rawChatPreview.status === MessageStatus.hasRead,
          author_id: rawChatPreview.author_id,
        },
      ]
    : [];

  const chatPreview: Chat = {
    chatId: rawChatPreview.chat_id,
    title: rawChatPreview.username,
    photo: rawChatPreview.photo,
    messages: messages,
  };
  return chatPreview;
}
