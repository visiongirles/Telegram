import { Status } from '.';

export interface Profile {
  username: string;
  author_id: number;
  profilePicture: string;
  status: Status;
}
