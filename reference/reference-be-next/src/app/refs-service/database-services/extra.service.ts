import { Extra } from './../../refs-utility/refs-db/entity/reguser-extdata';
import { ExtraDao } from '../../refs-dao/extra.dao';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ExtraService {

    constructor(
        private extraDao: ExtraDao
    ) {}

    public async getExtraById(id: number): Promise<Extra> {
        return await this.extraDao.getExtraById(id);
    }

    public async getExtraByIdUser(idUser: number): Promise<Extra> {
        return await this.extraDao.getExtraByIdUser(idUser);
    }

    public async insertDefaultExtraByIdUserAndReturnId(idUser: number): Promise<number> {
        return await this.extraDao.insertDefaultExtraByIdUserAndReturnId(idUser);
    }

    public async updateExtraByIdUserAndReturnId(idUser: number, propic): Promise<number> {
        return await this.extraDao.updateExtraByIdUserAndReturnId(idUser, propic);
    }
}