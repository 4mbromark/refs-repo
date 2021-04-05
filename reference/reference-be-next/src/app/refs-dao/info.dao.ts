import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, ObjectId } from "mongoose";
import { Info, InfoDocument } from "./schema/info.schema";

@Injectable()
export class InfoDao {

    constructor(
        @InjectModel(Info.name) private infoModel: Model<InfoDocument>
    ) {}

    public async getInfoById(_id: ObjectId | string): Promise<Info> { 
        const info = await this.infoModel.findById(_id);
        return info;
    }
}