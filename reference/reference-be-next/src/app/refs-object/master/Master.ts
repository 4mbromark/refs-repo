import { ObjectId } from "mongoose";
import { Alix } from "../../refs-dao/schema/alix.schema";
import { Board } from "../../refs-dao/schema/board.schema";
import { Page } from "../../refs-dao/schema/page.schema";
import { User } from "../../refs-dao/schema/user.schema";

export class Master {
    _id: ObjectId | string;

    createdAt: Date;
    updatedAt: Date;

    constructor(
        object: Alix | Board | Page | User
    ) {
        this._id = object._id;
        this.createdAt = object.createdAt;
        this.updatedAt = object.updatedAt;
    }
}