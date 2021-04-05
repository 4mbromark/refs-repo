import { ObjectId } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { AlixDao } from '../../refs-dao/alix.dao';
import { Alix } from '../../refs-dao/schema/alix.schema';

@Injectable()
export class AlixService {

    constructor(
        private alixDao: AlixDao
    ) {}

    public async getAlixById(_id: ObjectId | string): Promise<Alix> {
        return await this.alixDao.getAlixById(_id);
    }

    public async getAlixByIdUser(idUser: ObjectId): Promise<Alix[]> {
        return await this.alixDao.getAlixByIdUser(idUser);
    }

    public async getAlixByAlix(alixName: string): Promise<Alix> {
        return await this.alixDao.getAlixByAlix(alixName);
    }
}