import { CustomCard } from './custom/CustomCard';
import { CustomUserinfo } from './custom/CustomUserinfo';

export class Board {
  id: number;
  userinfo: CustomUserinfo;
  cardList: CustomCard[];
}
