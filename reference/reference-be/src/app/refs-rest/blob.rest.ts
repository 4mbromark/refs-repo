import { Board } from './../refs-utility/refs-db/entity/board';
import { UserMasterService } from './../refs-service/master-services/user-master.service';
import { ExtraService } from './../refs-service/database-services/extra.service';
import { BlobService } from './../refs-service/database-services/blob.service';
import { BoardMasterService } from './../refs-service/master-services/board-master.service';
import { Url } from '../refs-utility/refs-url/url';
import express from 'express';
import { RestUtil } from '../refs-utility/refs-util/rest-util';
import fs from 'fs'
import { UserService } from '../refs-service/database-services/user.service';

export var router = express.Router();
var boardmasterService = UserMasterService;

router.get('/refs-be/blob', async (req, res) => {
    // const file = await fs.readFileSync(new URL('file:///D:/git-repos/refs-repo/reference-sp/src/assets/static/card/image/card-pholayider-image.jpg'), {encoding: 'base64'});
    // const board = await boardmasterService.updateExtraByIdUserAndReturnId(1, Buffer.from(file));
    boardmasterService.do();    
});

/*router.get(Url.BOARD_GETBYID, async (req, res) => {
    const board = await boardmasterService.getBoardById(parseInt(req.params.id));
    res.send(board);
});*/
