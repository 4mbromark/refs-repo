import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, ObjectId } from 'mongoose';
import { Board, BoardDocument } from "./schema/board.schema";

@Injectable()
export class BoardDao {

    constructor(
        @InjectModel(Board.name) private boardModel: Model<BoardDocument>
    ) {}

    public async getBoardById(_id: ObjectId | string): Promise<Board> { 
        const board = await this.boardModel.findById(_id);
        return board;
    }

    public async getBoardByIdAlix(idAlix: ObjectId): Promise<Board> { 
        const board = await this.boardModel.findOne({
            idAlix: idAlix
        });
        return board;
    }

    public async createBoardWithIdAlix(idAlix: ObjectId): Promise<Board> { 
        const board = await this.boardModel.create({
            idAlix: idAlix
        });
        return board;
    }
}