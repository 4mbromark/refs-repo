import { Injectable } from '@nestjs/common';
import { InfoDao } from '../../refs-dao/info.dao';
import { Info } from '../../refs-utility/refs-db/entity/board-info';

@Injectable()
export class InfoService {

    constructor(
        private infoDao: InfoDao
    ) {}

    public async getInfoById(id: number): Promise<Info> {
        return await this.infoDao.getInfoById(id);
    }

    public async getInfoListByIdBoardAndIds(idBoard: number, ids: number[]): Promise<Info[]> {
        return await this.infoDao.getInfoListByIdBoardAndIds(idBoard, ids);
    }
}