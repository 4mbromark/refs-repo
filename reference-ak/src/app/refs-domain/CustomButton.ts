import { Custom } from './Custom';
import { CustomTextline } from './CustomTextline';

export class CustomButton extends Custom {
  title: CustomTextline;
  subtitle?: CustomTextline;

  type: 'LINK' | 'PAGE';
  action: string;

  background?: string;
}
