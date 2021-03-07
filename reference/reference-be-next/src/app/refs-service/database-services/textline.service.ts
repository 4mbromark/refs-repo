import { Textline } from './../../refs-utility/refs-db/entity/board-textline';
import { TextlineDao } from '../../refs-dao/textline.dao';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TextlineService {

    constructor(
        private textlineDao: TextlineDao
    ) {}

    public async getTextlineById(id: number): Promise<Textline> {
        return await this.textlineDao.getTextlineById(id);
    }

    public async getTextlineByIdBoardAndId(idBoard: number, id: number): Promise<Textline> {
        return await this.textlineDao.getTextlineByIdBoardAndId(idBoard, id);
    }
}