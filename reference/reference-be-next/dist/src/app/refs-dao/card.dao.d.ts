import { Card } from "../refs-utility/refs-db/entity/board-card";
export declare class CardDao {
    getCardById(id: number): Promise<Card>;
    getCardListByIdBoard(idBoard: number): Promise<Card[]>;
}
