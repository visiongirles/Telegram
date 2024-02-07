import {
  ChatPreview,
  Messanger,
  Profile,
  Settings,
  UserStatus,
} from '../interfaces/';

// initial state settings: initialProfile, initialSettings, initialChatPreview, initialMessanger
const initialProfile: Profile = {
  username: 'placeholder for username',
  author_id: 1,
  profilePicture: 'placeholder for profilePicture', // picture of loading
  status: UserStatus.Online,
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
    created_at: Date.now().toString(),
    author: 'placeholder for author',
    hasRead: false,
    isMine: false,
    content: 'placeholder for content',
  },
};
