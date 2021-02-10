import { MasterUserWithToken } from './../../refs-utility/refs-object/MasterUserWithToken';
import { MasterUser } from '../../refs-utility/refs-object/MasterUser';
import { CryptService } from '../crypt.service';
import { AuthService } from '../auth.service';
import { User } from '../../refs-utility/refs-db/entity/reguser';
import { UserService } from '../database-services/user.service';

var userService = UserService;
var authService = AuthService;
var cryptService = CryptService;

export class UserMasterService {

    public static async authUser(uid: string, pwd: string): Promise<MasterUserWithToken> {
        //const word = cryptService.encrypt(pwd);
        const user = await userService.getUserByUserAndPassword(uid, pwd);

        let masterUserWithToken = null;
        if (user) {
            const masterUser = new MasterUser(user);
            const token = authService.getToken(masterUser);
            masterUserWithToken = new MasterUserWithToken(user, token);
        }
        return masterUserWithToken;
    }

    public static async verifyUser(token: string): Promise<MasterUser> {
        return await authService.verifyToken(token);
    }
}
