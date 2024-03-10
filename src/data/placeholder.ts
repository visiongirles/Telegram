import { Chat } from '../interfaces';

interface Placeholder {
  chats: {
    currentChat: number | null;
    chats: Chat[];
  };
}

export const placeholder: Placeholder = {
  chats: {
    currentChat: null,
    chats: [
      {
        chatId: 0,
        title: 'Placeholder',
        photo:
          'https://i.pinimg.com/originals/2e/60/07/2e60079f1e36b5c7681f0996a79e8af4.jpg',
        messages: [
          {
            id: 0,
            created_at: Date.now().toString(),
            author_id: 0,
            hasRead: false,
            isMine: false,
            content: 'placeholder for content',
          },
        ],
      },
    ],
  },
};
