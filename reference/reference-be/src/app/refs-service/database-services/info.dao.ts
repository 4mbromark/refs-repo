import { InfoDao } from '../../refs-dao/info.dao';
import { Info } from '../../refs-utility/refs-db/entity/board-info';

var infoDao = InfoDao;

export class InfoService {

    public static async getInfoById(id: number): Promise<Info> {
        return await infoDao.getInfoById(id);
    }

    public static async getInfoListByIdBoardAndIds(idBoard: number, ids: number[]): Promise<Info[]> {
        return await infoDao.getInfoListByIdBoardAndIds(idBoard, ids);
    }
}