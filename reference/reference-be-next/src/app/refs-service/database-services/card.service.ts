import { Injectable } from '@nestjs/common';
import { CardDao } from '../../refs-dao/card.dao';
import { Card } from '../../refs-utility/refs-db/entity/board-card';

@Injectable()
export class CardService {

    constructor(
        private cardDao: CardDao
    ) {}

    public async getCardById(id: number): Promise<Card> {
        return await this.cardDao.getCardById(id);
    }

    public async getCardListByIdBoard(idBoard: number): Promise<Card[]> {
        return await this.cardDao.getCardListByIdBoard(idBoard);
    }
}