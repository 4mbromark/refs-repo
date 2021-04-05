import { Types, Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as mongoose from 'mongoose';
import { DatabaseSchema } from "../../refs-object/database/database.schema";

export type InfoDocument = Info & Document;

@Schema({
    collection: 'refs-context-info',
    timestamps: true
})
export class Info extends DatabaseSchema {

    @Prop({ required: true })
    type: string;

    @Prop({ required: true })
    info: string;
}

export const InfoSchema = SchemaFactory.createForClass(Info);