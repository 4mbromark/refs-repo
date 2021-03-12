import { Logger, NotFoundException } from '@nestjs/common';
import { MasterAlix } from './../../refs-utility/refs-object/MasterAlix';
import { AkaService } from '../database-services/aka.service';
import { AlixService } from '../database-services/alix.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AlixMasterService {
    private readonly logger = new Logger(AlixMasterService.name);

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

        if (alix) {
            const akaList = await this.akaService.getAkaAlixListByIdAlix(alix.id);

            this.logger.log('Found alix for: ' + a);
            return new MasterAlix(alix, akaList);
        }

        this.logger.log('No alix found for: ' + a);
        throw new NotFoundException();
    }

    public async getAlixList(idUser: number): Promise<MasterAlix[]> {
        const alixList = await this.alixService.getAlixByIdUser(idUser);
        
        console.log(alixList);
        const masterAlixList = [];
        for (const alix of alixList) {
            const akaList = await this.akaService.getAkaAlixListByIdAlix(alix.id);
            masterAlixList.push(new MasterAlix(alix, akaList));        
            console.log(masterAlixList);                
        }
        return masterAlixList;
    }
}