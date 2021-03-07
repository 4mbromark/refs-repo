import { Info } from "../refs-utility/refs-db/entity/board-info";
export declare class InfoDao {
    getInfoById(id: number): Promise<Info>;
    getInfoListByIdBoardAndIds(idBoard: number, ids: number[]): Promise<Info[]>;
}
