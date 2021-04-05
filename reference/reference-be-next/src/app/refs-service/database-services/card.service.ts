import { Injectable } from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { CardDao } from '../../refs-dao/card.dao';
import { Card } from '../../refs-dao/schema/card.schema';

@Injectable()
export class CardService {

    constructor(
        private cardDao: CardDao
    ) {}

    public async getCardById(_id: ObjectId | string): Promise<Card> {
        return await this.cardDao.getCardById(_id);
    }
}