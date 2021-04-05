import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, ObjectId } from "mongoose";
import { Card, CardDocument } from "./schema/card.schema";

@Injectable()
export class CardDao {

    constructor(
        @InjectModel(Card.name) private cardModel: Model<CardDocument>
    ) {}

    public async getCardById(_id: ObjectId | string): Promise<Card> { 
        const card = await this.cardModel.findById(_id);
        return card;
    }
}