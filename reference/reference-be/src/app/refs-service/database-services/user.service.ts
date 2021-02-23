import { MasterUserWithToken } from '../../refs-utility/refs-object/MasterUserWithToken';
import { MasterUser } from '../../refs-utility/refs-object/MasterUser';
import { CryptService } from '../crypt.service';
import { UserDao } from '../../refs-dao/user.dao';
import { AuthService } from '../auth.service';
import { User } from '../../refs-utility/refs-db/entity/reguser';

var authService = AuthService;
var cryptService = CryptService;

var userDao = UserDao;

export class UserService {

    public static async getUserById(id: number): Promise<User> {
        return await userDao.getUserById(id);
    }

    public static async getUserByEmail(email: string): Promise<User> {
        return await userDao.getUserByEmail(email);
    }

    public static async getUserByUserAndPassword(uid: string, pwd: string): Promise<User> {
        return await userDao.getUserByUserAndPassword(uid, pwd);
    } 

    public static do(a) {
        userDao.do(a);
    }
}