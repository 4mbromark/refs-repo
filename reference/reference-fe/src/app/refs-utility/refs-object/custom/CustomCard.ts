import { CustomInfo } from './CustomInfo';
import { CustomButton } from './CustomButton';
import { Custom } from './Custom';
import { CustomTextline } from './CustomTextline';

export class CustomCard extends Custom {
  type: 'TEXT' | 'BUTTON' | 'COMPLETE' | 'SURVEY' | 'MESSAGE';

  title?: CustomTextline;
  subtitle?: CustomTextline;
  avatar?: string;

  caption?: string;
  text?: string;

  image?: string;
  // imagePosition?: 'TOP' | 'BOTTOM';

  infos?: CustomInfo[];
  buttons?: CustomButton[];

  // border?: string;
  // radius?: string;
  background?: string;
}
