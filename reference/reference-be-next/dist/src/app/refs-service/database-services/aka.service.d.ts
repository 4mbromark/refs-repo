import { AkaDao } from '../../refs-dao/aka.dao';
import { Aka } from '../../refs-utility/refs-db/entity/alixlist-aka';
export declare class AkaService {
    private akaDao;
    constructor(akaDao: AkaDao);
    getAkaById(id: number): Promise<Aka>;
    getAkaByIdAlix(idAlix: number): Promise<Aka[]>;
    getAkaByAlix(alix: string): Promise<Aka>;
    getAkaByAlixAndIdAlix(alix: string, idAlix: number): Promise<Aka>;
    getAkaAlixListByIdAlix(idAlix: number): Promise<string[]>;
}
