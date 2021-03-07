import { AlixMasterService } from './../refs-service/master-services/alix-master.service';
import { Body, Controller, Get, HttpStatus, Injectable, Logger, Post, Res } from "@nestjs/common";
import { Url } from "../refs-utility/refs-url/url";
import { Response } from 'express';
import { Public } from '../refs-utility/refs-auth/jwt-public';

@Controller(Url.BASE_REST + Url.ALIX)
export class AlixController {

    constructor(
        private alixMasterService: AlixMasterService
    ) {}

    @Public()
    @Post()
    public async getAlix(@Body() body: any, @Res() res: Response) {
        const alix = await this.alixMasterService.getAlix(body.alix);
        if (alix) {
            res.status(HttpStatus.OK).send(alix);
        } else {
            res.status(HttpStatus.NOT_FOUND).send();
        }
    }
}