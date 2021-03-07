import { MasterAlix } from './../../refs-utility/refs-object/MasterAlix';
import { AkaService } from '../database-services/aka.service';
import { AlixService } from '../database-services/alix.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AlixMasterService {

    constructor(
        private alixService: AlixService,
        private akaService: AkaService
    ) {}

    public async getAlix(a: string): Promise<MasterAlix> {
        let alix = await this.alixService.getAlixByAlix(a);
        if (!alix) {
            const aka = await this.akaService.getAkaByAlix(a);
            if (aka) {
                alix = await this.alixService.getAlixById(aka.idAlix);
            }
        }

        let masterAlix = null;
        if (alix) {
            const akaList = await this.akaService.getAkaAlixListByIdAlix(alix.id);
            masterAlix = new MasterAlix(alix, akaList);
        }
        return masterAlix;
    }
}