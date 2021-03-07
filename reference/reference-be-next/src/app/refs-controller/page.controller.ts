import { PageMasterService } from './../refs-service/master-services/page-master.service';
import { Body, Controller, HttpStatus, Post, Res } from "@nestjs/common";
import { Url } from "../refs-utility/refs-url/url";
import { Response } from 'express';
import { Public } from '../refs-utility/refs-auth/jwt-public';

@Controller(Url.BASE_REST + Url.PAGE)
export class PageController {

    constructor(
        private pageMasterService: PageMasterService
    ) {}

    @Public()
    @Post()
    public async getPage(@Body() body: any, @Res() res: Response) {
        const page = await this.pageMasterService.getPage(body.idAlix, body.code);
        if (page) {
            res.status(HttpStatus.OK).send(page);
        } else {
            res.status(HttpStatus.NOT_FOUND).send();
        }
    }
}