import { Header, HeaderDocument } from './schema/header.schema';
import { InjectModel } from "@nestjs/mongoose";
import { Model, ObjectId } from 'mongoose';
import { Injectable } from '@nestjs/common';

@Injectable()
export class HeaderDao {

    constructor(
        @InjectModel(Header.name) private headerModel: Model<HeaderDocument>
    ) {}

    public async getHeaderById(_id: ObjectId | string): Promise<Header> { 
        const header = await this.headerModel.findById(_id);
        return header;
    }
}