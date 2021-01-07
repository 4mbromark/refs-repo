import { CustomObject } from './CustomObject';

export class CustomButton extends CustomObject {
  title: string;
  subtitle?: string;
  image?: string;

  type: 'LINK' | 'PAGE';
  action: string;

  icon?: string;
  color?: string;
  colorRow?: string;
}
