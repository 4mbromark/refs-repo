import { CryptService } from './../crypt.service';
import { ExtraService } from './../database-services/extra.service';
import { UserService } from './../database-services/user.service';
import { AuthService } from './../auth.service';
import { MasterUser } from '../../refs-utility/refs-object/MasterUser';
import { MasterUserWithToken } from '../../refs-utility/refs-object/MasterUserWithToken';
export declare class UserMasterService {
    private authService;
    private cryptService;
    private userService;
    private extraService;
    constructor(authService: AuthService, cryptService: CryptService, userService: UserService, extraService: ExtraService);
    authUser(uid: string, pwd: string): Promise<MasterUserWithToken>;
    /** @deprecated */
    authUserWithPassword(uid: string, pwd: string): Promise<MasterUserWithToken>;
    verifyUser(token: string): MasterUser;
    getUserPropic(idUser: number): Promise<string>;
    private buildMasterUserWithToken;
}
