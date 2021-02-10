import { BlobService } from './../refs-service/database-services/blob.service';
import { BoardMasterService } from './../refs-service/master-services/board-master.service';
import { Url } from '../refs-utility/refs-url/url';
import express from 'express';
import { RestUtil } from '../refs-utility/refs-util/rest-util';
import fs from 'fs'

export var router = express.Router();
var boardmasterService = BlobService;

router.get('/refs-be/blob', async (req, res) => {
    const file = await fs.readFileSync(new URL('file:///D:/git-repos/refs-repo/reference-sp/src/assets/static/card/image/card-pholayider-image.jpg'), {encoding: 'base64'});
    const board = await boardmasterService.insertBlobByIdBoardAndReturnId(11, Buffer.from(file), 'BOARDPIC');
});

/*router.get(Url.BOARD_GETBYID, async (req, res) => {
    const board = await boardmasterService.getBoardById(parseInt(req.params.id));
    res.send(board);
});*/
