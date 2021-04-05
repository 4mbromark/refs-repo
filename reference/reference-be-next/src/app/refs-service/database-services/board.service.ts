import { ObjectId } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { BoardDao } from '../../refs-dao/board.dao';
import { Board } from '../../refs-dao/schema/board.schema';

@Injectable()
export class BoardService {

    constructor(
        private boardDao: BoardDao
    ) {}

    public async getBoardById(_id: ObjectId | string): Promise<Board> {
        return await this.boardDao.getBoardById(_id);
    }

    public async getBoardByIdAlix(idAlix: ObjectId): Promise<Board> {
        return await this.boardDao.getBoardByIdAlix(idAlix);
    }

    public async getBoardByIdAlixOrCreate(idAlix: ObjectId): Promise<Board> {
        let board = await this.getBoardByIdAlix(idAlix);

        if (!board) {
            board = await this.boardDao.createBoardWithIdAlix(idAlix);
        }

        return board;
    }
}