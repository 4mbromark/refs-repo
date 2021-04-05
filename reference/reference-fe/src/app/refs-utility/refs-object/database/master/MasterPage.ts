import { CustomButton } from '../custom/CustomButton';
import { CustomCard } from '../custom/CustomCard';
import { CustomInfo } from '../custom/CustomInfo';
import { CustomTextline } from '../custom/CustomTextline';
import { Master } from './Master';

export class MasterPage extends Master {
  idAlix: string;
  code: string;

  cardList?: CustomCard[];
}
