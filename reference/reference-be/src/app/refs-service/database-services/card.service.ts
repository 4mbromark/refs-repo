import { CardDao } from '../../refs-dao/card.dao';
import { Card } from '../../refs-utility/refs-db/entity/board-card';

var cardDao = CardDao;

export class CardService {

    public static async getCardById(id: number): Promise<Card> {
        return await cardDao.getCardById(id);
    }

    public static async getCardListByIdBoard(idBoard: number): Promise<Card[]> {
        return await cardDao.getCardListByIdBoard(idBoard);
    }
}