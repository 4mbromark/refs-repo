import { ObjectId } from 'mongoose';
import { ContextMasterService } from '../refs-service/master-services/context-master.service';
import { Body, Controller, HttpStatus, Logger, Post, Res } from "@nestjs/common";
import { Url } from "../refs-utility/refs-url/url";
import { Response } from 'express';
import { Public } from '../refs-utility/refs-auth/jwt-public';
import { LoggerUtil } from '../refs-utility/refs-logger/logger-util';

@Controller(Url.BASE_REST + Url.CONTEXT)
export class ContextController {
    private readonly logger = new Logger(ContextController.name);

    constructor(
        private contextMasterService: ContextMasterService
    ) {}

    @Public()
    @Post(Url.CONTEXT_BOARD)
    public async getBoard(@Body() body: any, @Res() res: Response) {
        const { idAlix } = body;

        const board = await this.contextMasterService.getBoard(idAlix);
        if (board) {
            res.status(HttpStatus.OK).send(board);
        } else {
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).send();
        }
        this.logger.log(LoggerUtil.RESPONSE_SENT + JSON.stringify('board-id: ' + board._id));
    }

    @Public()
    @Post(Url.CONTEXT_PAGE)
    public async getPage(@Body() body: any, @Res() res: Response) {
        const { idAlix, code } = body;

        const page = await this.contextMasterService.getPage(idAlix, code);
        if (page) {
            res.status(HttpStatus.OK).send(page);
        } else {
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).send();
        }
        this.logger.log(LoggerUtil.RESPONSE_SENT + JSON.stringify('page-id: ' + page._id));
    }
}