import { User } from './../refs-utility/refs-db/entity/reguser';
import { UserMasterService } from '../refs-service/master-services/user-master.service';
import { Body, Controller, Get, HttpStatus, Logger, Param, Post, Res } from "@nestjs/common";
import { Response } from 'express';
import { Url } from "../refs-utility/refs-url/url";
import { Public } from '../refs-utility/refs-auth/jwt-public';
import { LoggerUtil } from '../refs-utility/refs-logger/logger-util';

@Controller(Url.BASE_REST + Url.USER)
export class UserController {
    private readonly logger = new Logger(UserController.name);

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
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).send();
        }
        this.logger.log(LoggerUtil.RESPONSE_SENT + JSON.stringify(user.id + ' - ' + user.username));
    }

    @Public()
    @Post(Url.USER_VERIFY)
    public async verifyUser(@Body() body: any, @Res() res: Response) {
        const user = await this.userMasterService.verifyUser(body.token);
        if (user) {
            res.status(HttpStatus.OK).send(user);
        } else {
            res.status(HttpStatus.UNAUTHORIZED).send();
        }
        this.logger.log(LoggerUtil.RESPONSE_SENT + JSON.stringify(user.id + ' - ' + user.username));
    }

    @Get(Url.USER_GETPROPIC)
    public async getPropic(@Param('idUser') idUser: number, @Res() res: Response) {
        const propic = await this.userMasterService.getUserPropic(idUser);
        if (propic) {
            res.status(HttpStatus.OK).send(propic);
        } else {
            res.status(HttpStatus.NOT_FOUND).send();
        }
        this.logger.log(LoggerUtil.RESPONSE_SENT + res);
    }

    @Post(Url.USER_SAVE)
    public async saveUser(@Body() body: any, @Res() res: Response) {
        const user = await this.userMasterService.saveUser(body.user);
        if (user) {
            res.status(HttpStatus.OK).send(user);
        } else {
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).send();
        }
        this.logger.log(LoggerUtil.RESPONSE_SENT + JSON.stringify(user));
    }

    @Post(Url.USER_SAVEPROPIC)
    public async savePropic(@Body() body: any, @Res() res: Response) {
        const user = await this.userMasterService.saveUser(body.user);
        if (user) {
            res.status(HttpStatus.OK).send(user);
        } else {
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).send();
        }
        this.logger.log(LoggerUtil.RESPONSE_SENT + JSON.stringify(res));
    }
}