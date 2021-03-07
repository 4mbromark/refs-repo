import { UserDao } from '../../refs-dao/user.dao';
import { User } from '../../refs-utility/refs-db/entity/reguser';
export declare class UserService {
    private userDao;
    constructor(userDao: UserDao);
    getUserById(id: number): Promise<User>;
    getUserByUser(uid: string): Promise<User>;
    getUserByEmail(email: string): Promise<User>;
    /** @deprecated */
    getUserByUserAndPassword(uid: string, pwd: string): Promise<User>;
}
