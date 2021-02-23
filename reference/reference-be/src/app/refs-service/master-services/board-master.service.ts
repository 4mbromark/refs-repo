import { GeneralBuilderService } from './../general-builder.service';
import { MasterBoard } from '../../refs-utility/refs-object/MasterBoard';
import { BoardService } from '../database-services/board.service';

var boardService = BoardService;

export class BoardMasterService extends GeneralBuilderService {

    public static async getBoard(idAlix: number): Promise<MasterBoard> {
        const board = await boardService.getBoardByIdAlixOrCreate(idAlix);
        const idBoard = board.id;

        const finalUserinfo = await this.getFinalUserinfo(idBoard);

        const finalCardList = await this.getFinalCartList(idBoard);

        return new MasterBoard(board, finalUserinfo, finalCardList);
    }
}