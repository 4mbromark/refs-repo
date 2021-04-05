import { Document, ObjectId, Types } from 'mongoose';
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as mongoose from 'mongoose';
import { DatabaseSchema } from '../../refs-object/database/database.schema';

export type AlixDocument = Alix & Document;

@Schema({
    collection: 'refs-alixlist',
    timestamps: true
})
export class Alix extends DatabaseSchema {

    @Prop({
        type: Types.ObjectId,
        required: true
    })
    idUser: ObjectId;

    @Prop({ required: true })
    alixName: string;

    @Prop([String])
    aka: string[];   
}

export const AlixSchema = SchemaFactory.createForClass(Alix);