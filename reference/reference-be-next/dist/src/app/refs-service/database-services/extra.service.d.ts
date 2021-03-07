import { Extra } from './../../refs-utility/refs-db/entity/reguser-extdata';
import { ExtraDao } from '../../refs-dao/extra.dao';
export declare class ExtraService {
    private extraDao;
    constructor(extraDao: ExtraDao);
    getExtraById(id: number): Promise<Extra>;
    getExtraByIdUser(idUser: number): Promise<Extra>;
    insertDefaultExtraByIdUserAndReturnId(idUser: number): Promise<number>;
    updateExtraByIdUserAndReturnId(idUser: number, propic: any): Promise<number>;
}
