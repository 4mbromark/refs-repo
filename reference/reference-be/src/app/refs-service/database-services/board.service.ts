import { BoardDao } from '../../refs-dao/board.dao';
import { Board } from '../../refs-utility/refs-db/entity/board';

var boardDao = BoardDao;

export class BoardService {

    public static async getBoardById(id: number): Promise<Board> {
        return await boardDao.getBoardById(id);
    }

    public static async getBoardByIdAlix(idAlix: number): Promise<Board> {
        return await boardDao.getBoardByIdAlix(idAlix);
    }

    public static async getBoardByIdAlixOrCreate(idAlix: number): Promise<Board> {
        return await boardDao.getBoardByIdAlixOrCreate(idAlix);
    }
}