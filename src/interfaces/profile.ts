import { UserStatus } from '.';

export interface Profile {
  user_id: number;
  author_id: number;
  profilePicture: string;
  status: UserStatus;
}
