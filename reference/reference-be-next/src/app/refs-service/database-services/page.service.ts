import { Injectable } from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { PageDao } from '../../refs-dao/page.dao';
import { Page } from '../../refs-dao/schema/page.schema';

@Injectable()
export class PageService {

    constructor(
        private pageDao: PageDao
    ) {}

    public async getPageById(_id: ObjectId | string): Promise<Page> {
        return await this.pageDao.getPageById(_id);
    }

    public async getPageByIdAlixAndId(idAlix: ObjectId, _id: ObjectId): Promise<Page> {
        return await this.pageDao.getPageByIdAlixAndId(idAlix, _id);
    }

    public async getPageByIdAlixAndCode(idAlix: ObjectId, code: string): Promise<Page> {
        return await this.pageDao.getPageByIdAlixAndCode(idAlix, code);
    }
}