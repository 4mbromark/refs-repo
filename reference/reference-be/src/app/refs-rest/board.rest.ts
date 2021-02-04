import { BoardMasterService } from './../refs-service/master-services/board-master.service';
import { Url } from '../refs-utility/refs-url/url';
import express from 'express';
import { RestUtil } from '../refs-utility/refs-util/rest-util';

export var router = express.Router();
var boardmasterService = BoardMasterService;

router.post(Url.BOARD, RestUtil.jsonParser, async (req, res) => {
    const board = await boardmasterService.getBoard(req.body.idAlix);
    if (board) {
        res.send(board);
    } else {
        res.sendStatus(404);
    }
});

router.get(Url.BOARD_GETBYID, async (req, res) => {
    const board = await boardmasterService.getBoardById(parseInt(req.params.id));
    res.send(board);
});
