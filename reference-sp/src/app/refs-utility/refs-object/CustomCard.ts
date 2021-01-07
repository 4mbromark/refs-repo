import { CustomInfo } from './CustomInfo';
import { CustomButton } from './CustomButton';
import { Custom } from './Custom';

export class CustomCard extends Custom {
  type: 'TEXT' | 'BUTTON' | 'COMPLETE' | 'SURVEY';

  title?: string;
  subtitle?: string;
  avatar?: string;

  image?: string;
  imagePosition?: 'TOP' | 'BOTTOM';

  text?: string;

  infos?: CustomInfo[];
  buttons?: CustomButton[];
}
