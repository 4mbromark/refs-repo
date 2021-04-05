import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as mongoose from 'mongoose';
import { Types, Document, plugin, ObjectId } from "mongoose";
import { DatabaseSchema } from "../../refs-object/database/database.schema";
import { Card } from "./card.schema";

export type PageDocument = Page & Document;

@Schema({
    collection: 'refs-page',
    timestamps: true,
})
export class Page extends DatabaseSchema {

    @Prop({
        type: Types.ObjectId,
        required: true
    })
    idAlix: ObjectId;

    @Prop({ type: [{
        type: Types.ObjectId,
        ref: Card.name
        // autopopulate: true
    }]})
    cardList: Card[]; 
}

export const PageSchema = SchemaFactory.createForClass(Page);