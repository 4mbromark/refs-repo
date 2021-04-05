import { Injectable } from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { Textline } from '../../refs-dao/schema/textline.schema';
import { TextlineDao } from '../../refs-dao/textline.dao';

@Injectable()
export class TextlineService {

    constructor(
        private textlineDao: TextlineDao
    ) {}

    public async getTextlineById(_id: ObjectId | string): Promise<Textline> {
        return await this.textlineDao.getTextlineById(_id);
    }
}