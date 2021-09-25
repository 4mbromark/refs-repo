import { CustomBlob } from './CustomBlob';
import { CustomInfo } from './CustomInfo';
import { CustomButton } from './CustomButton';
import { CustomTextline } from './CustomTextline';
import { Custom } from './Custom';

export class CustomCard extends Custom {
  title?: CustomTextline;
  subtitle?: CustomTextline;
  avatar?: CustomBlob;

  caption?: string;
  text?: string;

  image?: CustomBlob;

  infoList?: CustomInfo[];
  buttonList?: CustomButton[];
}
