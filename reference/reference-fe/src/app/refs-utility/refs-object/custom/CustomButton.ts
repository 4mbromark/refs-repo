import { CustomTextline } from './CustomTextline';

export class CustomButton {
  id: number;
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
