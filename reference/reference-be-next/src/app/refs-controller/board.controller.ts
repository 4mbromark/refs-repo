import { BoardMasterService } from './../refs-service/master-services/board-master.service';
import { PageMasterService } from '../refs-service/master-services/page-master.service';
import { Body, Controller, HttpStatus, Post, Res } from "@nestjs/common";
import { Url } from "../refs-utility/refs-url/url";
import { Response } from 'express';
import { Public } from '../refs-utility/refs-auth/jwt-public';

@Controller(Url.BASE_REST + Url.BOARD)
export class BoardController {

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
            res.status(HttpStatus.NOT_FOUND).send();
        }
    }
}