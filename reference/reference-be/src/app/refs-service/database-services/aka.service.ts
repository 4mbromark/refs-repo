import { AkaDao } from '../../refs-dao/aka.dao';
import { Aka } from '../../refs-utility/refs-db/entity/alixlist-aka';

var akaDao = AkaDao;

export class AkaService {

    public static async getAkaById(id: number): Promise<Aka> {
        return await akaDao.getAkaById(id);
    }

    public static async getAkaByIdAlix(idAlix: number): Promise<Aka[]> {
        return await akaDao.getAkaByIdAlix(idAlix);
    }

    public static async getAkaByAlix(alix: string): Promise<Aka> {
        return await akaDao.getAkaByAlix(alix);
    }

    public static async getAkaByAlixAndIdAlix(alix: string, idAlix: number): Promise<Aka> { 
        return await akaDao.getAkaByAlixAndIdAlix(alix, idAlix);
    }

    public static async getAkaAlixListByIdAlix(idAlix: number): Promise<string[]> {
        const aka = await this.getAkaByIdAlix(idAlix);
        let akaList: string[] = [];
        aka.forEach(a => {
            akaList.push(a.aka);
        });
        return akaList;
    }
}