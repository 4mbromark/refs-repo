import { CustomBlob } from './CustomBlob';
import { CustomTextline } from './CustomTextline';
import { CustomCard } from './CustomCard';
import { Master } from './Master';
import { CustomInfo } from './CustomInfo';
import { CustomButton } from './CustomButton';

export class MasterBoard extends Master {
  name: CustomTextline;
  pseudonym?: CustomTextline;
  sentence?: CustomTextline;
  profile?: CustomTextline;

  avatar?: CustomBlob;

  bio?: string;

  infoList?: CustomInfo[];
  buttonList?: CustomButton[];

  cardList: CustomCard[];
}
