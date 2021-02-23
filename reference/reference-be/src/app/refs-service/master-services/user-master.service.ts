import { ExtraService } from './../database-services/extra.service';
import { MasterUserWithToken } from './../../refs-utility/refs-object/MasterUserWithToken';
import { MasterUser } from '../../refs-utility/refs-object/MasterUser';
import { CryptService } from '../crypt.service';
import { AuthService } from '../auth.service';
import { UserService } from '../database-services/user.service';

var userService = UserService;
var authService = AuthService;
var cryptService = CryptService;
var extraService = ExtraService;

export class UserMasterService {

    public static async authUser(uid: string, pwd: string): Promise<MasterUserWithToken> {
        // const word = cryptService.encrypt(pwd);
        const user = await userService.getUserByUserAndPassword(uid, pwd);

        let masterUserWithToken = null;
        if (user) {
            const masterUser = new MasterUser(user);
            const token = authService.getToken(masterUser);
            masterUserWithToken = new MasterUserWithToken(user, token);
        }
        return masterUserWithToken;
    }

    public static verifyUser(token: string): MasterUser {
        return authService.verifyToken(token);
    }

    public static async getUserPropic(idUser: number): Promise<string> {
        const extra = await extraService.getExtraByIdUser(idUser);
        return Buffer.from(extra.propic).toString();
    } 

    public static do() {
        userService.do(cryptService.encrypt('nice'));
    }
}
