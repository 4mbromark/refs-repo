import { CustomTextline } from './CustomTextline';
import { Custom } from './Custom';

export class CustomButton extends Custom {
  title: CustomTextline;
  subtitle?: CustomTextline;
  // avatar?: string;

  type: 'LINK' | 'PAGE';
  action: string;

  // icon?: string;

  border?: string;
  radius?: string;
  background?: string;
}
