import { CustomCard } from '../custom/CustomCard';
import { CustomHeader } from '../custom/CustomHeader';
import { Master } from './Master';

export class MasterBoard extends Master {
  idAlix: string;

  header: CustomHeader;
  cardList: CustomCard[];
}
