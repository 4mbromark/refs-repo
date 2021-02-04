import { UserinfoDao } from '../../refs-dao/userinfo.dao';
import { Userinfo } from '../../refs-utility/refs-db/entity/board-userinfo';

var userinfoDao = UserinfoDao;

export class UserinfoService {

    public static async getUserinfoById(id: number): Promise<Userinfo> {
        return await userinfoDao.getUserinfoById(id);
    }

    public static async getUserinfoByIdBoardOrCreate(idBoard: number): Promise<Userinfo> {
        return await userinfoDao.getUserinfoByIdBoardOrCreate(idBoard);
    }
}