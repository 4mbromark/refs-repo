import { MasterAlix } from './../../refs-utility/refs-object/MasterAlix';
import { AkaService } from '../database-services/aka.service';
import { AlixService } from '../database-services/alix.service';
export declare class AlixMasterService {
    private alixService;
    private akaService;
    constructor(alixService: AlixService, akaService: AkaService);
    getAlix(a: string): Promise<MasterAlix>;
}
