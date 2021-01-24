import { Url } from '../refs-utility/refs-url/url';
import express from 'express';
import { AlixService } from '../refs-service/alix-service';

export var router = express.Router();
var alixService = AlixService;

router.get(Url.ALIX_GETBYID, async (req, res) => {
    const alix = await alixService.getAlixById(1);
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
