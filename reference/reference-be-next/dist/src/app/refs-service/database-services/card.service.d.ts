import { CardDao } from '../../refs-dao/card.dao';
import { Card } from '../../refs-utility/refs-db/entity/board-card';
export declare class CardService {
    private cardDao;
    constructor(cardDao: CardDao);
    getCardById(id: number): Promise<Card>;
    getCardListByIdBoard(idBoard: number): Promise<Card[]>;
}
