import { Injectable } from '@nestjs/common';
import { UserinfoDao } from '../../refs-dao/userinfo.dao';
import { Userinfo } from '../../refs-utility/refs-db/entity/board-userinfo';

@Injectable()
export class UserinfoService {

    constructor(
        private userinfoDao: UserinfoDao
    ) {}

    public async getUserinfoById(id: number): Promise<Userinfo> {
        return await this.userinfoDao.getUserinfoById(id);
    }

    public async getUserinfoByIdBoardOrCreate(idBoard: number): Promise<Userinfo> {
        return await this.userinfoDao.getUserinfoByIdBoardOrCreate(idBoard);
    }
}