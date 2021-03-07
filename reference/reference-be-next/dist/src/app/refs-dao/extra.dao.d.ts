import { Extra } from './../refs-utility/refs-db/entity/reguser-extdata';
export declare class ExtraDao {
    getExtraById(id: number): Promise<Extra>;
    getExtraByIdUser(idUser: number): Promise<Extra>;
    insertDefaultExtraByIdUserAndReturnId(idUser: number): Promise<number>;
    updateExtraByIdUserAndReturnId(idUser: number, propic: any): Promise<number>;
}
