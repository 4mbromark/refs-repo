import { UserDao } from '../../refs-dao/user.dao';
import { User } from '../../refs-utility/refs-db/entity/reguser';
import { Injectable } from '@nestjs/common';
import { deprecate } from 'util';

@Injectable()
export class UserService {

    constructor(
        private userDao: UserDao
    ) {}

    public async getUserById(id: number): Promise<User> {
        return await this.userDao.getUserById(id);
    }

    public async getUserByUser(uid: string): Promise<User> {
        return await this.userDao.getUserByUser(uid);
    }

    public async getUserByEmail(email: string): Promise<User> {
        return await this.userDao.getUserByEmail(email);
    }

    /** @deprecated */
    public async getUserByUserAndPassword(uid: string, pwd: string): Promise<User> {
        return await this.userDao.getUserByUserAndPassword(uid, pwd);
    } 
}