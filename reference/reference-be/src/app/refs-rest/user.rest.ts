import { HttpCode } from './../refs-utility/refs-url/http-code';
import { Url } from '../refs-utility/refs-url/url';
import express from 'express';
import { RestUtil } from '../refs-utility/refs-util/rest-util';
import { UserMasterService } from '../refs-service/master-services/user-master.service';

export var router = express.Router();
var userMasterService = UserMasterService;

router.post(Url.USER_AUTH, RestUtil.jsonParser, async (req, res) => {
    const user = await userMasterService.authUser(req.body.uid, req.body.pwd);
    if (user) {
        res.send(user);
    } else {
        res.sendStatus(HttpCode.UNAUTHORIZED);
    }
});

router.post(Url.USER_VERIFY, RestUtil.jsonParser, async (req, res) => {
    const user = await userMasterService.verifyUser(req.body.token);
    if (user) {
        res.send(user);
    } else {
        res.sendStatus(HttpCode.UNAUTHORIZED);
    }
});

/*router.get(Url.USER_GETBYID, async (req, res) => {
    const user = await userMasterService.getUserById(parseInt(req.params.id));
    res.send(user);
});

router.get(Url.USER_GETBYEMAIL, async (req, res) => {
    const user = await userMasterService.getUserByEmail(req.params.email);
    res.send(user);
});*/