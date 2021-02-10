import { HttpCode } from './../refs-utility/refs-url/http-code';
import { BoardMasterService } from './../refs-service/master-services/board-master.service';
import { Url } from '../refs-utility/refs-url/url';
import express from 'express';
import { RestUtil } from '../refs-utility/refs-util/rest-util';
import { NOTFOUND } from 'dns';

export var router = express.Router();
var boardmasterService = BoardMasterService;

router.post(Url.BOARD, RestUtil.jsonParser, async (req, res) => {
    const board = await boardmasterService.getBoard(req.body.idAlix);
    if (board) {
        res.send(board);
    } else {
        res.sendStatus(HttpCode.NOT_FOUND);
    }
});

/*router.get(Url.BOARD_GETBYID, async (req, res) => {
    const board = await boardmasterService.getBoardById(parseInt(req.params.id));
    res.send(board);
});*/
