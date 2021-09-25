import { CustomTextline } from './CustomTextline';
import { CustomCard } from './CustomCard';
import { Master } from './Master';

export class MasterPage extends Master {
  code: string;

  title?: CustomTextline;
  subtitle?: CustomTextline;

  cardList?: CustomCard[];
}
