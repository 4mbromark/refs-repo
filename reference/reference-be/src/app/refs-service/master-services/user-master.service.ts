import { MasterUserWithToken } from '../../refs-utility/refs-object/MasterUserWithToken';
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
        const word = cryptService.encrypt(pwd);
        const user = await userService.getUserByUserAndPassword(uid, word);
        if (user) {
            const masterUser = new MasterUser(user);
            const token = authService.getToken(masterUser);
            return new MasterUserWithToken(user, token);
        }
        return null;
    }

    public static async getUserById(id: number): Promise<User> {
        return await userService.getUserById(id);
    }

    public static async getUserByEmail(email: string): Promise<User> {
        return await userService.getUserByEmail(email);
    }
}
