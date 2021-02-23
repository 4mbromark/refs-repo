import { Extra } from './../../refs-utility/refs-db/entity/reguser-extdata';
import { ExtraDao } from '../../refs-dao/extra.dao';

var extraDao = ExtraDao;

export class ExtraService {

    public static async getExtraById(id: number): Promise<Extra> {
        return await extraDao.getExtraById(id);
    }

    public static async getExtraByIdUser(idUser: number): Promise<Extra> {
        return await extraDao.getExtraByIdUser(idUser);
    }

    public static async insertDefaultExtraByIdUserAndReturnId(idUser: number): Promise<number> {
        return await extraDao.insertDefaultExtraByIdUserAndReturnId(idUser);
    }

    public static async updateExtraByIdUserAndReturnId(idUser: number, propic): Promise<number> {
        return await extraDao.updateExtraByIdUserAndReturnId(idUser, propic);
    }
}