import { InfoDao } from '../../refs-dao/info.dao';
import { Info } from '../../refs-utility/refs-db/entity/board-info';
export declare class InfoService {
    private infoDao;
    constructor(infoDao: InfoDao);
    getInfoById(id: number): Promise<Info>;
    getInfoListByIdBoardAndIds(idBoard: number, ids: number[]): Promise<Info[]>;
}
