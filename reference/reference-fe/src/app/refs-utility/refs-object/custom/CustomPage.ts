import { CustomInfo } from './CustomInfo';
import { CustomButton } from './CustomButton';
import { CustomTextline } from './CustomTextline';

export class CustomPage {
  id: number;
  code: string;

  title?: CustomTextline;
  subtitle?: CustomTextline;
  avatar?: string;

  caption?: string;
  text?: string;

  image?: string;

  infos?: CustomInfo[];
  buttons?: CustomButton[];

  background?: string;
}
