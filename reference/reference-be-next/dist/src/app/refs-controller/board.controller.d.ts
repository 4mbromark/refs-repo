import { BoardMasterService } from './../refs-service/master-services/board-master.service';
import { Response } from 'express';
export declare class BoardController {
    private boardMasterService;
    constructor(boardMasterService: BoardMasterService);
    getBoard(body: any, res: Response): Promise<void>;
}
