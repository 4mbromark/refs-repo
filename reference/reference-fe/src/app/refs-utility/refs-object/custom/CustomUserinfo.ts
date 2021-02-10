import { CustomBlob } from './CustomBlob';
import { CustomButton } from 'src/app/refs-utility/refs-object/custom/CustomButton';
import { CustomInfo } from 'src/app/refs-utility/refs-object/custom/CustomInfo';
import { CustomTextline } from './CustomTextline';

export class CustomUserinfo {
  id: number;
  name: string;

  sentence: CustomTextline;
  profile: CustomTextline;
  avatar: CustomBlob;

  bio: string;

  infoList: CustomInfo[];
  buttonList: CustomButton[];
}
