import { BoardMasterService } from './../refs-service/master-services/board-master.service';
import { Body, Controller, HttpStatus, Logger, Post, Res } from "@nestjs/common";
import { Url } from "../refs-utility/refs-url/url";
import { Response } from 'express';
import { Public } from '../refs-utility/refs-auth/jwt-public';
import { LoggerUtil } from '../refs-utility/refs-logger/logger-util';

@Controller(Url.BASE_REST + Url.BOARD)
export class BoardController {
    private readonly logger = new Logger(BoardController.name);

    constructor(
        private boardMasterService: BoardMasterService
    ) {}

    @Public()
    @Post()
    public async getBoard(@Body() body: any, @Res() res: Response) {
        const board = await this.boardMasterService.getBoard(body.idAlix);
        if (board) {
            res.status(HttpStatus.OK).send(board);
        } else {
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).send();
        }
        this.logger.log(LoggerUtil.RESPONSE_SENT + JSON.stringify('board-id: ' + board.id));
    }
}