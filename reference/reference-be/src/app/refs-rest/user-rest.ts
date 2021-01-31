import { UserService } from '../refs-service/user-service';
import { Url } from '../refs-utility/refs-url/url';
import express from 'express';
import { RestUtil } from '../refs-utility/refs-util/rest-util';

export var router = express.Router();
var userService = UserService;

router.post(Url.USER_AUTH, RestUtil.jsonParser, async (req, res) => {
    const user = await userService.authUser(req.body.uid, req.body.pwd);
    if (user) {
        res.sendStatus(200).json(user);
    } else {
        res.sendStatus(403);
    }
});

router.get(Url.USER_GETBYID, async (req, res) => {
    const user = await userService.getUserById(parseInt(req.params.id));
    res.send(user);
});

router.get(Url.USER_GETBYEMAIL, async (req, res) => {
    const user = await userService.getUserByEmail(req.params.email);
    res.send(user);
});