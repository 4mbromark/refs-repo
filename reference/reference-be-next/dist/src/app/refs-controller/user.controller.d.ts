import { UserMasterService } from '../refs-service/master-services/user-master.service';
import { Response } from 'express';
export declare class UserController {
    private userMasterService;
    constructor(userMasterService: UserMasterService);
    authUser(body: any, res: Response): Promise<void>;
    verifyUser(body: any, res: Response): void;
    getPropic(idUser: number, res: Response): Promise<void>;
}
