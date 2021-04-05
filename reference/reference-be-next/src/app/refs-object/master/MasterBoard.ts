import { ObjectId } from 'mongoose';
import { Board } from '../../refs-dao/schema/board.schema';
import { Card } from '../../refs-dao/schema/card.schema';
import { Header } from '../../refs-dao/schema/header.schema';
import { Master } from './Master';

export class MasterBoard extends Master {
    idAlix: ObjectId;
    header: Header;
    cardList: Card[];

    constructor(
        board: Board
    ) {
        super(board);
        this.idAlix = board.idAlix;
        this.header = board.header;
        this.cardList = board.cardList;
    }
}