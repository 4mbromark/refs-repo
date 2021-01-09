import { CustomInfo } from './CustomInfo';
import { Custom } from './Custom';
import { CustomButton } from './CustomButton';
import { CustomTextline } from './CustomTextline';

export class CustomPage extends Custom {
  page: string;

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
