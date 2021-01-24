import { UserDao } from '../refs-dao/user-dao';

export class UserService {

    constructor(
        private userDao: UserDao
    ) {}

    public async getUserById(id: number) {
        return await this.userDao.getUserById(id);
    }

    public async getUserByEmail(email: string) {
        return await this.userDao.getUserByEmail(email);
    }
}