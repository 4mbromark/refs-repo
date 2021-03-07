import { Injectable } from '@nestjs/common';
import { PageDao } from '../../refs-dao/page.dao';
import { Page } from '../../refs-utility/refs-db/entity/board-page';

@Injectable()
export class PageService {

    constructor(
        private pageDao: PageDao
    ) {}

    public async getPageById(id: number): Promise<Page> {
        return await this.pageDao.getPageById(id);
    }

    public async getPageByIdBoardAndId(idBoard: number, id: number): Promise<Page> {
        return await this.pageDao.getPageByIdBoardAndId(idBoard, id);
    }

    public async getPageByIdBoardAndCode(idBoard: number, code: string): Promise<Page> {
        return await this.pageDao.getPageByIdBoardAndCode(idBoard, code);
    }
}