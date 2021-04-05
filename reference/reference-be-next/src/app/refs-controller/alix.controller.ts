import { AlixMasterInterface } from './../refs-service/master-services/alix-master.interface';
import { LoggerUtil } from './../refs-utility/refs-logger/logger-util';
import { AlixMasterService } from './../refs-service/master-services/alix-master.service';
import { Body, Controller, Get, HttpStatus, Injectable, Logger, Param, Post, Res } from "@nestjs/common";
import { Url } from "../refs-utility/refs-url/url";
import { Response } from 'express';
import { Public } from '../refs-utility/refs-auth/jwt-public';
import { ObjectId } from 'mongoose';

@Controller(Url.BASE_REST + Url.ALIX)
export class AlixController {
    private readonly logger = new Logger(AlixController.name);

    constructor(
        private alixMasterService: AlixMasterService
    ) {}

    @Public()
    @Post()
    public async getAlix(@Body() body: any, @Res() res: Response) {
        const { alixName } = body;

        const alix = await this.alixMasterService.getAlix(alixName);
        if (alix) {
            res.status(HttpStatus.OK).send(alix);
        } else {
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).send();
        }
        this.logger.log(LoggerUtil.RESPONSE_SENT + JSON.stringify(alix));
    }

    @Get(Url.ALIX_LIST)
    public async getAlixList(@Param('idUser') idUser: ObjectId, @Res() res: Response) {
        const alixList = await this.alixMasterService.getAlixList(idUser);
        if (alixList) {
            res.status(HttpStatus.OK).send(alixList);
        } else {
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).send();
        }
        this.logger.log(LoggerUtil.RESPONSE_SENT + res);
    }
}