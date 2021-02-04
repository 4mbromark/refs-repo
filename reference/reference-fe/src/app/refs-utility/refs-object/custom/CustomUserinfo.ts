import { CustomButton } from 'src/app/refs-utility/refs-object/custom/CustomButton';
import { CustomInfo } from 'src/app/refs-utility/refs-object/custom/CustomInfo';
import { CustomTextline } from './CustomTextline';

export class CustomUserinfo {
  id: number;
  name: string;

  sentence: CustomTextline;
  profile: CustomTextline;
  avatar: File;

  bio: string;

  infoList: CustomInfo[];
  buttonList: CustomButton[];
}
