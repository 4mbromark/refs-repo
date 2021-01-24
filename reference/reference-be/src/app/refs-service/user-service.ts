import { UserDao } from './../refs-dao/user-dao';

var userDao = UserDao;

export class UserService {

    public static async getUserById(id: number) {
        return await userDao.getUserById(id);
    }

    public static async getUserByEmail(email: string) {
        return await userDao.getUserByEmail(email);
    }
}