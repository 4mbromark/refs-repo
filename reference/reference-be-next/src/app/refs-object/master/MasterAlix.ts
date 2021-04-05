import { ObjectId } from 'mongoose';
import { Alix } from '../../refs-dao/schema/alix.schema';
import { Master } from './Master';

export class MasterAlix extends Master {
    idUser: ObjectId
    alixName: string;
    aka: string[];

    constructor(
        alix: Alix
    ) {
        super(alix)
        this.idUser = alix.idUser;
        this.alixName = alix.alixName;
        this.aka = alix.aka;
    }
}