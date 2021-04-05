import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as mongoose from 'mongoose';
import { Types, Document, ObjectId } from "mongoose";
import { DatabaseSchema } from "../../refs-object/database/database.schema";
import { Card } from "./card.schema";
import { Header } from "./header.schema";

export type BoardDocument = Board & Document;

@Schema({
    collection: 'refs-board',
    timestamps: true,
})
export class Board extends DatabaseSchema {

    @Prop({
        type: Types.ObjectId,
        required: true
    })
    idAlix: ObjectId;

    @Prop({
        type: Types.ObjectId,
        ref: Header.name,
        autopopulate: true
    })
    header: Header; 

    @Prop({ type: [{
        type: Types.ObjectId,
        ref: Card.name
        // autopopulate: true
    }]})
    cardList: Card[]; 
}

export const BoardSchema = SchemaFactory.createForClass(Board);