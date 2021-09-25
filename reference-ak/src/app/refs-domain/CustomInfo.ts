import { Custom } from './Custom';

export class CustomInfo extends Custom {
  type: 'BIRTHDAY' | 'PLACE' | 'CONTACT';
  info: string;
}
