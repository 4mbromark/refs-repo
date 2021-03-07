import { Injectable } from '@nestjs/common';
import { AkaDao } from '../../refs-dao/aka.dao';
import { Aka } from '../../refs-utility/refs-db/entity/alixlist-aka';

@Injectable()
export class AkaService {

    constructor(
        private akaDao: AkaDao
    ) {}

    public async getAkaById(id: number): Promise<Aka> {
        return await this.akaDao.getAkaById(id);
    }

    public async getAkaByIdAlix(idAlix: number): Promise<Aka[]> {
        return await this.akaDao.getAkaByIdAlix(idAlix);
    }

    public async getAkaByAlix(alix: string): Promise<Aka> {
        return await this.akaDao.getAkaByAlix(alix);
    }

    public async getAkaByAlixAndIdAlix(alix: string, idAlix: number): Promise<Aka> { 
        return await this.akaDao.getAkaByAlixAndIdAlix(alix, idAlix);
    }

    public async getAkaAlixListByIdAlix(idAlix: number): Promise<string[]> {
        const aka = await this.getAkaByIdAlix(idAlix);
        let akaList: string[] = [];
        aka.forEach(a => {
            akaList.push(a.aka);
        });
        return akaList;
    }
}