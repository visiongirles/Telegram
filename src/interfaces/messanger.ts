// TODO : #1. для имитации запроса сделай сервис, который возвращает промис с данными
// Альтернатива #1:  https://www.npmjs.com/package/json-server -> библиотека для фэйк бэка ИЛИ https://firebase.google.com/
// ещё Альтернатива #1:  Да, берешь RemoteData и кладешь в стейт. не делать имитацию, а просто сразу в стейт. см №3
// В реакте обычно у тебя будет #2 пакет для выполнения запросов и #3 пакет инкапсулирующий состояние.

// типы
// состояние
// то, что вернется сервер

export interface Profile {
  username: string;
  profilePicture: string;
  status: Status;
}

export interface Settings {
  darkMode: boolean;
  customTextSize?: number;
}

export enum Status {
  Online = 'online',
  Offline = 'offline',
}

export interface Message {
  id: number;
  date: number;
  author: string;
  hasRead: boolean;
  isMine: boolean;
  content: string;
}

export interface ChatPreview {
  chatId: number;
  photo: string;
  lastMessage: Message;
  draftMessage?: string;
}

export interface Chat {
  chatId: number;
  messages: Message[];
}

export interface Messanger {
  profile: Profile;
  settings: Settings;
  chatsPreview: ChatPreview[];
  currentChat?: Chat;
}
