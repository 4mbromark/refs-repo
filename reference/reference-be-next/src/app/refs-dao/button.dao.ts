import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, ObjectId } from "mongoose";
import { Button, ButtonDocument } from "./schema/button.schema";

@Injectable()
export class ButtonDao {

    constructor(
        @InjectModel(Button.name) private buttonModel: Model<ButtonDocument>
    ) {}

    public async getButtonById(_id: ObjectId | string): Promise<Button> { 
        const button = await this.buttonModel.findById(_id);
        return button;
    }
}