import { ObjectId } from 'mongoose';
import { Card } from '../../refs-dao/schema/card.schema';
import { Master } from './Master';

export class MasterPage extends Master {
    idAlix: ObjectId
    code: string;
    cardList: Card[];

    constructor(
        page: any,
    ) {
        super(page);
        this.idAlix = page.idAlix;
        this.code = page.code;
        this.cardList = page.cardList;
    }
}