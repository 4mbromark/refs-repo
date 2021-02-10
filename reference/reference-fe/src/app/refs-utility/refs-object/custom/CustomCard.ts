import { CustomBlob } from './CustomBlob';
import { CustomInfo } from './CustomInfo';
import { CustomButton } from './CustomButton';
import { CustomTextline } from './CustomTextline';

export class CustomCard {
  id: number;
  // type: 'TEXT' | 'BUTTON' | 'COMPLETE' | 'SURVEY' | 'MESSAGE';

  title?: CustomTextline;
  subtitle?: CustomTextline;
  avatar?: CustomBlob;

  caption?: string;
  text?: string;

  image?: CustomBlob;
  // imagePosition?: 'TOP' | 'BOTTOM';

  infoList?: CustomInfo[];
  buttonList?: CustomButton[];

  // border?: string;
  // radius?: string;
  background?: string;
}
