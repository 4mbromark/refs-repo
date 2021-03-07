import { Board } from './../refs-utility/refs-db/entity/board';
export declare class BoardDao {
    getBoardById(id: number): Promise<Board>;
    getBoardByIdAlix(idAlix: number): Promise<Board>;
    getBoardByIdAlixOrCreate(idAlix: number): Promise<Board>;
}
