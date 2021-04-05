import { CardService } from './../refs-service/database-services/card.service';
import { Body, Controller, Get, HttpStatus, Logger, Param, Post, Res } from "@nestjs/common";
import { Url } from "../refs-utility/refs-url/url";
import { Response } from 'express';
import { Public } from '../refs-utility/refs-auth/jwt-public';
import { LoggerUtil } from '../refs-utility/refs-logger/logger-util';
import { ObjectId } from 'mongoose';

@Controller(Url.BASE_REST + Url.CARD)
export class CardController {
    private readonly logger = new Logger(CardController.name);

    constructor(
        private cardService: CardService
    ) {}

    @Public()
    @Get(Url.CARD_GETBYID)
    public async getBoard(@Param('id') _id: ObjectId, @Res() res: Response) {
        const card = await this.cardService.getCardById(_id);
        if (card) {
            res.status(HttpStatus.OK).send(card);
        } else {
            res.status(HttpStatus.NOT_FOUND).send();
        }
        this.logger.log(LoggerUtil.RESPONSE_SENT + JSON.stringify('card-id: ' + card._id));
    }
}