import { UserService } from '../refs-service/user-service';
import { Url } from '../refs-utility/refs-url/url';
import express from 'express';

export var router = express.Router();
var userService = UserService;

router.get(Url.USER_GETBYID, async (req, res) => {
    const user = await userService.getUserById(parseInt(req.params.id));
    res.send(user);
});

router.get(Url.USER_GETBYEMAIL, async (req, res) => {
    const user = await userService.getUserByEmail(req.params.email);
    res.send(user);
});