import { Injectable } from '@nestjs/common';
import { AlixDao } from '../../refs-dao/alix.dao';
import { Alix } from '../../refs-utility/refs-db/entity/alixlist';

@Injectable()
export class AlixService {

    constructor(
        private alixDao: AlixDao
    ) {}

    public async getAlixById(id: number): Promise<Alix> {
        return await this.alixDao.getAlixById(id);
    }

    public async getAlixByIdUser(idUser: number): Promise<Alix[]> {
        return await this.alixDao.getAlixByIdUser(idUser);
    }

    public async getAlixByAlix(a: string): Promise<Alix> {
        return await this.alixDao.getAlixByAlix(a);
    }

    public async getAlixByAlixAndIdUser(a: string, idUser: number): Promise<Alix> { 
        return await this.alixDao.getAlixByAlixAndIdUser(a, idUser);
    }
}