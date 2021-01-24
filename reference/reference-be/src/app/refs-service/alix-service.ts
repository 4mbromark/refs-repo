import { AlixDao } from '../refs-dao/alix-dao';

var alixDao = AlixDao;

export class AlixService {

    public static async getAlixById(id: number) {
        return await alixDao.getAlixById(id);
    }

    public static async getAlixByIdUser(idUser: number) {
        return await alixDao.getAlixByIdUser(idUser);
    }

    public static async getAlixByAlixAndIdUser(a: string, idUser: number) { 
        return await alixDao.getAlixByAlixAndIdUser(a, idUser);
    }

    public static async getAlix(a: string) {
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