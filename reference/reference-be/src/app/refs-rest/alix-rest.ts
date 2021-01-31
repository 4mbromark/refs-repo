import { Url } from '../refs-utility/refs-url/url';
import express from 'express';
import { AlixService } from '../refs-service/alix-service';
import { RestUtil } from '../refs-utility/refs-util/rest-util';

export var router = express.Router();
var alixService = AlixService;

router.post(Url.ALIX, RestUtil.jsonParser, async (req, res) => {
    const alix = await alixService.getAlix(req.body.alix);
    if (alix) {
        res.send(alix);
    } else {
        res.sendStatus(404);
    }
});

router.get(Url.ALIX_GETBYID, async (req, res) => {
    const alix = await alixService.getAlixById(parseInt(req.params.id));
    res.send(alix);
});

router.get(Url.ALIX_GETBYIDUSER, async (req, res) => {
    const alix = await alixService.getAlixByIdUser(parseInt(req.params.iduser));
    res.send(alix);
});

router.get(Url.ALIX_GETBYIUA, async (req, res) => {
    const alix = await alixService.getAlixByAlixAndIdUser(req.params.alix, parseInt(req.params.iduser));
    res.send(alix);
});

router.get(Url.ALIX_GETBYALIX, async (req, res) => {
    const alix = await alixService.getAlix(req.params.alix);
    res.send(alix);
});
