import { MasterAlix } from './../refs-utility/refs-object/MasterAlix';
import { AlixDao } from '../refs-dao/alix-dao';
import { Alix } from '../refs-utility/refs-db/entity/alixlist';

var alixDao = AlixDao;

export class AlixService {

    public static async getAlixById(id: number): Promise<Alix> {
        return await alixDao.getAlixById(id);
    }

    public static async getAlixByIdUser(idUser: number): Promise<Alix> {
        return await alixDao.getAlixByIdUser(idUser);
    }

    public static async getAlixByAlixAndIdUser(a: string, idUser: number): Promise<Alix> { 
        return await alixDao.getAlixByAlixAndIdUser(a, idUser);
    }

    public static async getAlix(a: string): Promise<Alix> {
        let alix = await alixDao.getAlixByAlix(a);
        if (!alix) {
            let akaCandidates = await alixDao.getAkaCandidatesByAlix(a);
            for (let aka of akaCandidates) {
                const akaList = aka.aka.split(";"); 
                if (akaList.includes(a)) {
                    return aka;
                }            
            }
        }
        return alix;
    }
}