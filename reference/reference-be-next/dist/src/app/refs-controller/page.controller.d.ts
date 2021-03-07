import { PageMasterService } from './../refs-service/master-services/page-master.service';
import { Response } from 'express';
export declare class PageController {
    private pageMasterService;
    constructor(pageMasterService: PageMasterService);
    getPage(body: any, res: Response): Promise<void>;
}
