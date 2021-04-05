import { Types, Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as mongoose from 'mongoose';
import { Textline, TextlineSchema } from './textline.schema';
import { Info } from './info.schema';
import { Button } from './button.schema';
import { DatabaseSchema } from '../../refs-object/database/database.schema';

export type HeaderDocument = Header & Document;

@Schema({
    collection: 'refs-context-header',
    timestamps: true
})
export class Header extends DatabaseSchema {

    @Prop({
        type: Types.ObjectId,
        ref: Textline.name,
        required: true,
        autopopulate: true
    })
    name: Textline;

    @Prop({
        type: Types.ObjectId,
        ref: Textline.name,
        autopopulate: true
    })
    sentence: Textline;

    @Prop({
        type: Types.ObjectId,
        ref: Textline.name,
        autopopulate: true
    })
    profile: Textline;

    @Prop({
        type: Types.ObjectId,
        ref: Textline.name,
        autopopulate: true
    })
    avatar: Textline;

    @Prop()
    bio: string;

    @Prop({ type: [{
        type: Types.ObjectId,
        ref: Info.name,
        autopopulate: true
    }]})
    infoList: Info[];

    @Prop({ type: [{
        type: Types.ObjectId,
        ref: Button.name,
        autopopulate: true
    }]})
    buttonList: Button[];
}

export const HeaderSchema = SchemaFactory.createForClass(Header);