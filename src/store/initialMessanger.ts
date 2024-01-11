import {
  ChatPreview,
  Chat,
  Messanger,
  Profile,
  Settings,
  Status,
} from '../interfaces/interface';

// initial state settings: initialProfile, initialSettings, initialChatPreview, initialMessanger
const initialProfile: Profile = {
  username: 'placeholder for username',
  profilePicture: 'placeholder for profilePicture', // picture of loading
  status: Status.Online,
};

const initialSettings: Settings = {
  darkMode: false,
};

const initialChatPreview: ChatPreview = {
  chatId: 0,
  photo:
    'https://i.pinimg.com/originals/2e/60/07/2e60079f1e36b5c7681f0996a79e8af4.jpg', // picture of loading
  lastMessage: {
    id: 1,
    date: Date.now(),
    author: 'placeholder for author',
    hasRead: false,
    isMine: false,
    content: 'placeholder for content',
  },
};

// const initialChat: Chat = {
//   chatId: 0,
//   messages: [],
// };

export const initialMessanger: Messanger = {
  profile: initialProfile,
  settings: initialSettings,
  chatsPreview: [initialChatPreview],
  currentChat: undefined,
};
