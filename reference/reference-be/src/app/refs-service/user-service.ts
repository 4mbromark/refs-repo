import { MasterUserWithToken } from './../refs-utility/refs-object/MasterUserWithToken';
import { MasterUser } from './../refs-utility/refs-object/MasterUser';
import { CryptService } from './crypt-service';
import { UserDao } from './../refs-dao/user-dao';
import { AuthService } from './auth-service';
import { User } from '../refs-utility/refs-db/entity/reguser';

var authService = AuthService;
var cryptService = CryptService;

var userDao = UserDao;

export class UserService {

    public static async authUser(uid: string, pwd: string): Promise<MasterUserWithToken> {
        const word = cryptService.encrypt(pwd);
        const user = await userDao.getUserByUserAndPassword(uid, word);
        if (user) {
            const masterUser = this.createMasterUser(user);
            const token = authService.getToken(masterUser);
            const masterUserToken = this.createMasterUserWithToken(user, token);
            return masterUserToken;
        }
        return null;
    }

    public static async getUserById(id: number): Promise<User> {
        return await userDao.getUserById(id);
    }

    public static async getUserByEmail(email: string): Promise<User> {
        return await userDao.getUserByEmail(email);
    }

    private static createMasterUser(user: User): MasterUser {
        return new MasterUser(user);
    }

    private static createMasterUserWithToken(user: User, token: string): MasterUserWithToken {
        return new MasterUserWithToken(user, token);
    }
}