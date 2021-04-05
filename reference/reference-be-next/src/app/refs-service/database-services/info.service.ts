import { Injectable } from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { InfoDao } from '../../refs-dao/info.dao';
import { Info } from '../../refs-dao/schema/info.schema';

@Injectable()
export class InfoService {

    constructor(
        private infoDao: InfoDao
    ) {}

    public async getInfoById(_id: ObjectId | string): Promise<Info> {
        return await this.infoDao.getInfoById(_id);
    }
}