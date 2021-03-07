import { GeneralBuilderService } from './../general-builder.service';
import { MasterBoard } from '../../refs-utility/refs-object/MasterBoard';
import { BoardService } from '../database-services/board.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BoardMasterService {

    constructor(
        private boardService: BoardService,
        private builder: GeneralBuilderService
    ) {}

    public async getBoard(idAlix: number): Promise<MasterBoard> {
        const board = await this.boardService.getBoardByIdAlixOrCreate(idAlix);
        const idBoard = board.id;

        const finalUserinfo = await this.builder.getFinalUserinfo(idBoard);

        const finalCardList = await this.builder.getFinalCardList(idBoard);

        return new MasterBoard(board, finalUserinfo, finalCardList);
    }
}