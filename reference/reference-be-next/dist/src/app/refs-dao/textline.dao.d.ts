import { Textline } from './../refs-utility/refs-db/entity/board-textline';
export declare class TextlineDao {
    getTextlineById(id: number): Promise<Textline>;
    getTextlineByIdBoardAndId(idBoard: number, id: number): Promise<Textline>;
}
