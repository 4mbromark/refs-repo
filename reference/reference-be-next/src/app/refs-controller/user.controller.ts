import { UserMasterService } from '../refs-service/master-services/user-master.service';
import { Body, Controller, Get, HttpStatus, Param, Post, Res } from "@nestjs/common";
import { Response } from 'express';
import { Url } from "../refs-utility/refs-url/url";
import { Public } from '../refs-utility/refs-auth/jwt-public';

@Controller(Url.BASE_REST + Url.USER)
export class UserController {

    constructor(
        private userMasterService: UserMasterService
    ) {}

    @Public()
    @Post(Url.USER_AUTH)
    public async authUser(@Body() body: any, @Res() res: Response) {
        const user = await this.userMasterService.authUser(body.uid, body.pwd);
        if (user) {
            res.status(HttpStatus.OK).send(user);
        } else {
            res.status(HttpStatus.UNAUTHORIZED).send();
        }
    }

    @Public()
    @Post(Url.USER_VERIFY)
    public verifyUser(@Body() body: any, @Res() res: Response) {
        const user = this.userMasterService.verifyUser(body.token);
        if (user) {
            res.status(HttpStatus.OK).send(user);
        } else {
            res.status(HttpStatus.UNAUTHORIZED).send();
        }
    }

    @Get(Url.USER_GETPROPIC)
    public async getPropic(@Param('idUser') idUser: number, @Res() res: Response) {
        const propic = await this.userMasterService.getUserPropic(idUser);
        if (propic) {
            res.status(HttpStatus.OK).send(propic);
        } else {
            res.status(HttpStatus.UNAUTHORIZED).send();
        }
    }
}