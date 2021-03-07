import { Textline } from './../../refs-utility/refs-db/entity/board-textline';
import { TextlineDao } from '../../refs-dao/textline.dao';
export declare class TextlineService {
    private textlineDao;
    constructor(textlineDao: TextlineDao);
    getTextlineById(id: number): Promise<Textline>;
    getTextlineByIdBoardAndId(idBoard: number, id: number): Promise<Textline>;
}
