import { Injectable } from '@nestjs/common';
import { BoardDao } from '../../refs-dao/board.dao';
import { Board } from '../../refs-utility/refs-db/entity/board';

@Injectable()
export class BoardService {

    constructor(
        private boardDao: BoardDao
    ) {}

    public async getBoardById(id: number): Promise<Board> {
        return await this.boardDao.getBoardById(id);
    }

    public async getBoardByIdAlix(idAlix: number): Promise<Board> {
        return await this.boardDao.getBoardByIdAlix(idAlix);
    }

    public async getBoardByIdAlixOrCreate(idAlix: number): Promise<Board> {
        return await this.boardDao.getBoardByIdAlixOrCreate(idAlix);
    }
}