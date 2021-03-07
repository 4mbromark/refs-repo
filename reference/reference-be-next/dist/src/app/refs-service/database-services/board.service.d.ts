import { BoardDao } from '../../refs-dao/board.dao';
import { Board } from '../../refs-utility/refs-db/entity/board';
export declare class BoardService {
    private boardDao;
    constructor(boardDao: BoardDao);
    getBoardById(id: number): Promise<Board>;
    getBoardByIdAlix(idAlix: number): Promise<Board>;
    getBoardByIdAlixOrCreate(idAlix: number): Promise<Board>;
}
