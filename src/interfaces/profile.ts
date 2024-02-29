import { UserStatus } from '.';

export interface Profile {
  user_id: number;
  username: string;
  profilePicture: string;
  status: UserStatus;
}
