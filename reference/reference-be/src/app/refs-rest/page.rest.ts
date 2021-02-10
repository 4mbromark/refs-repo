import { HttpCode } from './../refs-utility/refs-url/http-code';
import { Url } from '../refs-utility/refs-url/url';
import express from 'express';
import { RestUtil } from '../refs-utility/refs-util/rest-util';
import { PageMasterService } from '../refs-service/master-services/page-master.service';

export var router = express.Router();
var pageMasterService = PageMasterService;

router.post(Url.PAGE, RestUtil.jsonParser, async (req, res) => {
    const page = await pageMasterService.getPage(req.body.idAlix, req.body.code);
    if (page) {
        res.send(page);
    } else {
        res.sendStatus(HttpCode.NOT_FOUND);
    }
});

/*router.get(Url.PAGE_GETBYID, async (req, res) => {
    const page = await pageMasterService.getPageById(parseInt(req.params.id));
    res.send(page);
});*/
