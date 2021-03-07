import { UserinfoDao } from '../../refs-dao/userinfo.dao';
import { Userinfo } from '../../refs-utility/refs-db/entity/board-userinfo';
export declare class UserinfoService {
    private userinfoDao;
    constructor(userinfoDao: UserinfoDao);
    getUserinfoById(id: number): Promise<Userinfo>;
    getUserinfoByIdBoardOrCreate(idBoard: number): Promise<Userinfo>;
}
