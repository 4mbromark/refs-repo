import { CustomBlob } from './CustomBlob';
import { CustomButton } from 'src/app/refs-utility/refs-object/database/custom/CustomButton';
import { CustomInfo } from 'src/app/refs-utility/refs-object/database/custom/CustomInfo';
import { Custom } from './Custom';
import { CustomTextline } from './CustomTextline';

export class CustomHeader extends Custom {
  name: CustomTextline;
  sentence: CustomTextline;
  profile: CustomTextline;
  avatar: CustomBlob;

  bio: string;

  infoList: CustomInfo[];
  buttonList: CustomButton[];
}
