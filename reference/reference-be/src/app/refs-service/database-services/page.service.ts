import { PageDao } from '../../refs-dao/page.dao';
import { Page } from '../../refs-utility/refs-db/entity/board-page';

var pageDao = PageDao;

export class PageService {

    public static async getPageById(id: number): Promise<Page> {
        return await pageDao.getPageById(id);
    }

    public static async getPageByIdBoardAndId(idBoard: number, id: number): Promise<Page> {
        return await pageDao.getPageByIdBoardAndId(idBoard, id);
    }
}