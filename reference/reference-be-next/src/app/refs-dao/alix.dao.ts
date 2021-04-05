import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, ObjectId } from 'mongoose';
import { Alix, AlixDocument } from './schema/alix.schema';

@Injectable()
export class AlixDao {

    constructor(
        @InjectModel(Alix.name) private alixModel: Model<AlixDocument>
    ) {}

    public async getAlixById(_id: ObjectId | string): Promise<Alix> { 
        const alix = await this.alixModel.findById(_id);
        return alix;
    }

    public async getAlixByIdUser(idUser: ObjectId): Promise<Alix[]> { 
        const alix = await this.alixModel.find({
            idUser: idUser
        });
        return alix;
    }

    public async getAlixByAlix(alixName: string): Promise<Alix> { 
        const alix = await this.alixModel.findOne({
            $or: [
                { alixName: alixName },
                { aka: alixName }
            ]
        });
        return alix;
    }
}