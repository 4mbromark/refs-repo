import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, ObjectId, Types } from "mongoose";
import { DatabaseSchema } from "../../refs-object/database/database.schema";

export type UserDocument = User & Document;

@Schema({
    collection: 'refs-reguser',
    timestamps: true,
})
export class User extends DatabaseSchema {

    @Prop()
    name: string;

    @Prop()
    surname: string;

    @Prop()
    username: string;

    @Prop()
    email: string;

    @Prop()
    pwd: string;
}

export const UserSchema = SchemaFactory.createForClass(User);