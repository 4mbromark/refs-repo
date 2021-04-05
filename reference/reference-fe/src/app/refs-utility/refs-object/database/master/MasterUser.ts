import { Master } from './Master';

export class MasterUser extends Master {
  name: string;
  surname: string;

  username: string;
  email: string;

  token?: string;
}
