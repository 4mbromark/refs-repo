import { AlixMasterService } from './../refs-service/master-services/alix-master.service';
import { Response } from 'express';
export declare class AlixController {
    private alixMasterService;
    constructor(alixMasterService: AlixMasterService);
    getAlix(body: any, res: Response): Promise<void>;
}
