import { CustomObject } from './CustomObject';

export class CustomInfo extends CustomObject {
  type: 'BIRTHDAY' | 'PLACE' | 'CONTACT';
  info: string[];
}
