import { Types, Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as mongoose from 'mongoose';
import { DatabaseSchema } from "../../refs-object/database/database.schema";

export type TextlineDocument = Textline & Document;

@Schema({
    collection: 'refs-context-textline',
    timestamps: true
})
export class Textline extends DatabaseSchema {

    @Prop({ required: true })
    text: string; 
}

export const TextlineSchema = SchemaFactory.createForClass(Textline);