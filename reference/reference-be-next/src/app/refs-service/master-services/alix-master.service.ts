import { AlixMasterInterface } from './alix-master.interface';
import { Logger, NotFoundException } from '@nestjs/common';
import { AlixService } from '../database-services/alix.service';
import { Injectable } from '@nestjs/common';
import { MasterAlix } from '../../refs-object/master/MasterAlix';
import { ObjectId } from 'mongoose';

@Injectable()
export class AlixMasterService implements AlixMasterInterface {
    private readonly logger = new Logger(AlixMasterService.name);

    constructor(
        private alixService: AlixService
    ) {}

    public async getAlix(alixName: string): Promise<MasterAlix> {
        let alix = await this.alixService.getAlixByAlix(alixName);

        if (alix) {
            this.logger.log('Found alix for: ' + alixName);
            return new MasterAlix(alix);
        }

        this.logger.log('No alix found for: ' + alixName);
        throw new NotFoundException();
    }

    public async getAlixList(idUser: ObjectId): Promise<MasterAlix[]> {
        const alixList = await this.alixService.getAlixByIdUser(idUser);
        
        const masterAlixList = [];
        for (const alix of alixList) {
            const masterAlix = new MasterAlix(alix)
            masterAlixList.push(masterAlix);                   
        }
        return masterAlixList;
    }
}