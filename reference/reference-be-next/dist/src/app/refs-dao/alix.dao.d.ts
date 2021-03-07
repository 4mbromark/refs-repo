import { Alix } from '../refs-utility/refs-db/entity/alixlist';
export declare class AlixDao {
    getAlixById(id: number): Promise<Alix>;
    getAlixByIdUser(idUser: number): Promise<Alix[]>;
    getAlixByAlix(a: string): Promise<Alix>;
    getAlixByAlixAndIdUser(a: string, idUser: number): Promise<Alix>;
}
