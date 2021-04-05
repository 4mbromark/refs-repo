import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, ObjectId } from 'mongoose';
import { Board, BoardDocument } from "./schema/board.schema";
import { Page, PageDocument } from "./schema/page.schema";

@Injectable()
export class PageDao {

    constructor(
        @InjectModel(Page.name) private pageModel: Model<PageDocument>
    ) {}

    public async getPageById(_id: ObjectId | string): Promise<Page> { 
        const page = await this.pageModel.findById(_id);
        return page;
    }

    public async getPageByIdAlixAndId(idAlix: ObjectId, _id: ObjectId): Promise<Page> { 
        const page = await this.pageModel.findOne({
            idAlix: idAlix,
            _id: _id
        });
        return page;
    }

    public async getPageByIdAlixAndCode(idAlix: ObjectId, code: string): Promise<Page> {
        const page = await this.pageModel.findOne({
            idAlix: idAlix,
            code: code
        });
        return page;
    }
}