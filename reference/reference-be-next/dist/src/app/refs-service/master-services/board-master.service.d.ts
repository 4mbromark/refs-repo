import { GeneralBuilderService } from './../general-builder.service';
import { MasterBoard } from '../../refs-utility/refs-object/MasterBoard';
import { BoardService } from '../database-services/board.service';
export declare class BoardMasterService {
    private boardService;
    private builder;
    constructor(boardService: BoardService, builder: GeneralBuilderService);
    getBoard(idAlix: number): Promise<MasterBoard>;
}
