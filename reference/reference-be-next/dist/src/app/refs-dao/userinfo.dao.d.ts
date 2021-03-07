import { Userinfo } from '../refs-utility/refs-db/entity/board-userinfo';
export declare class UserinfoDao {
    getUserinfoById(id: number): Promise<Userinfo>;
    getUserinfoByIdBoardOrCreate(idBoard: number): Promise<Userinfo>;
}
