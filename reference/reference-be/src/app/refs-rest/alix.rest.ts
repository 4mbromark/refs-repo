import { Url } from '../refs-utility/refs-url/url';
import express from 'express';
import { RestUtil } from '../refs-utility/refs-util/rest-util';
import { AlixMasterService } from '../refs-service/master-services/alix-master.service';

export var router = express.Router();
var alixMasterService = AlixMasterService;

router.post(Url.ALIX, RestUtil.jsonParser, async (req, res) => {
    const alix = await alixMasterService.getAlix(req.body.alix);
    if (alix) {
        res.send(alix);
    } else {
        res.sendStatus(404);
    }
});

router.get(Url.ALIX_GETBYID, async (req, res) => {
    const alix = await alixMasterService.getAlixById(parseInt(req.params.id));
    res.send(alix);
});

router.get(Url.ALIX_GETBYIDUSER, async (req, res) => {
    const alix = await alixMasterService.getAlixByIdUser(parseInt(req.params.iduser));
    res.send(alix);
});

router.get(Url.ALIX_GETBYIUA, async (req, res) => {
    const alix = await alixMasterService.getAlixByAlixAndIdUser(req.params.alix, parseInt(req.params.iduser));
    res.send(alix);
});
