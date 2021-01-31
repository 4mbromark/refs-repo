import { CustomButton } from 'src/app/refs-utility/refs-object/custom/CustomButton';
import { CustomInfo } from 'src/app/refs-utility/refs-object/custom/CustomInfo';
import { CustomTextline } from './CustomTextline';
import { Custom } from './Custom';

export class CustomUserinfo extends Custom {
  name: string;
  username: string;
  sentence: CustomTextline;
  profile: string;

  bio: string;

  infos: CustomInfo[];
  buttons: CustomButton[];
}
