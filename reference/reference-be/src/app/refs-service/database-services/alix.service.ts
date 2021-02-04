import { AlixDao } from '../../refs-dao/alix.dao';
import { Alix } from '../../refs-utility/refs-db/entity/alixlist';

var alixDao = AlixDao;

export class AlixService {

    public static async getAlixById(id: number): Promise<Alix> {
        return await alixDao.getAlixById(id);
    }

    public static async getAlixByIdUser(idUser: number): Promise<Alix[]> {
        return await alixDao.getAlixByIdUser(idUser);
    }

    public static async getAlixByAlix(a: string): Promise<Alix> {
        return await alixDao.getAlixByAlix(a);
    }

    public static async getAlixByAlixAndIdUser(a: string, idUser: number): Promise<Alix> { 
        return await alixDao.getAlixByAlixAndIdUser(a, idUser);
    }
}