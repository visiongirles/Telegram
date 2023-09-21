import { Conversation } from '../interfaces/interface';

export interface UserHistory {
  userName: string;
  password: string;
  darkMode: boolean;
  profilePicture: string;
  conversations: Conversation[];
}

export const userHistory: UserHistory = {
  userName: 'Kate',
  password: 'blabla1234',
  darkMode: false,
  profilePicture:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/RedCat_8727.jpg/800px-RedCat_8727.jpg',
  conversations: [
    {
      interlocutorName: 'Max',
      interlocutorProfilePicture:
        'https://gameguru.ru/clf/44/04/c0/01/news.1610973258596.jpg',
      messages: [
        {
          date: new Date('2015-03-25T12:00:00-06:30'),
          sender: 'Max',
          defaultSender: false,
          hasRead: true,
          content: 'Привет Катя',
        },
        {
          date: new Date('2015-03-25T12:00:00-07:30'),
          sender: 'Kate',
          defaultSender: true,
          hasRead: false,
          content: 'Привет Макс',
        },
      ],
    },
    {
      interlocutorName: 'Yarik',
      interlocutorProfilePicture:
        'https://sun9-58.userapi.com/impf/c845524/v845524992/117955/E_B_jAs7RdI.jpg?size=901x911&quality=96&sign=574945e12af151018fa1c6e4372df78e&type=album',
      messages: [
        {
          date: new Date('2015-03-25T12:00:00-06:30'),
          sender: 'Max',
          defaultSender: false,
          hasRead: true,
          content: 'Привет Катя',
        },
        {
          date: new Date('2015-03-25T12:00:00-07:30'),
          sender: 'Kate',
          defaultSender: true,
          hasRead: false,
          content: 'Привет Макс',
        },
      ],
    },
  ],
};
