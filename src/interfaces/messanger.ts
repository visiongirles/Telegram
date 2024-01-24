import { Profile, Settings, Chat, ChatPreview } from '.';

export interface Messanger {
  profile: Profile;
  settings: Settings;
  chatsPreview: ChatPreview[];
  currentChat?: Chat;
}
