import { CustomButton } from './custom/CustomButton';
import { CustomInfo } from './custom/CustomInfo';
import { CustomTextline } from './custom/CustomTextline';

export class Page {
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
