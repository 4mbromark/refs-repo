import { Types, Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as mongoose from 'mongoose';
import { Textline } from './textline.schema';
import { DatabaseSchema } from '../../refs-object/database/database.schema';

export type ButtonDocument = Button & Document;

@Schema({
    collection: 'refs-context-button',
    timestamps: true
})
export class Button extends DatabaseSchema {

    @Prop({ required: true })
    type: string;

    @Prop({  required: true })
    action: string;

    @Prop({
        type: Types.ObjectId,
        ref: Textline.name,
        required: true,
        autopopulate: true
     })
    title: Textline;

    @Prop({
        type: Types.ObjectId,
        ref: Textline.name,
        autopopulate: true
    })
    subtitle: Textline;
}

export const ButtonSchema = SchemaFactory.createForClass(Button);