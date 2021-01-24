import { BaseRest } from './../refs-utility/refs-base/base-rest';
import { UserService } from '../refs-service/user-service';
import { Url } from '../refs-utility/refs-url/url';
import express from 'express';

export var router = express.Router();

export class UserRest extends BaseRest {
    
    constructor(
        private userService: UserService
    ) {
        super();
        this.configRest();
    }

    private configRest(): void {
        router.get(Url.USER_GETBYID, async (req, res) => {
            const user = await this.userService.getUserById(1);
            console.log('aaaa')
            res.send(user);
        });
        router.get(Url.USER_GETBYEMAIL, async (req, res) => {
            const user = await this.userService.getUserById(1);
            res.send(user);
        });
    }  
}