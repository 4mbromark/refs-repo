import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, ObjectId } from "mongoose";
import { Textline, TextlineDocument } from "./schema/textline.schema";

@Injectable()
export class TextlineDao {

    constructor(
        @InjectModel(Textline.name) private textlineModel: Model<TextlineDocument>
    ) {}

    public async getTextlineById(_id: ObjectId | string): Promise<Textline> { 
        const textline = await this.textlineModel.findById(_id);
        return textline;
    }
}