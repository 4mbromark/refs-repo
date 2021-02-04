import { Textline } from './../../refs-utility/refs-db/entity/board-textline';
import { TextlineDao } from '../../refs-dao/textline.dao';

var textlineDao = TextlineDao;

export class TextlineService {

    public static async getTextlineById(id: number): Promise<Textline> {
        return await textlineDao.getTextlineById(id);
    }

    public static async getTextlineByIdBoardAndId(idBoard: number, id: number): Promise<Textline> {
        return await textlineDao.getTextlineByIdBoardAndId(idBoard, id);
    }
}