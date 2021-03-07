import { Board } from './../refs-db/entity/board';
import { CustomUserinfo } from './CustomUserinfo';
import { CustomCard } from "./CustomCard";

export class MasterBoard {
    id: number;
    userinfo: CustomUserinfo;
    cardList: CustomCard[];

    constructor(
        board: Board,
        u: CustomUserinfo,
        cl: CustomCard[]
    ) {
        this.id = board.id;
        this.userinfo = u;
        this.cardList = cl;
    }
}