import { UserDao } from '../../refs-dao/user.dao';
import { ConflictException, Injectable } from '@nestjs/common';
import { User } from '../../refs-dao/schema/user.schema';
import { ObjectId } from 'mongoose';

@Injectable()
export class UserService {

    constructor(
        private userDao: UserDao
    ) {}

    public async getUserById(_id: ObjectId | string): Promise<User> {
        return await this.userDao.getUserById(_id);
    }

    public async getUserByUid(uid: string): Promise<User> {
        return await this.userDao.getUserByUid(uid);
    }

    public async saveUser(user: User): Promise<User> {
        const conflict = await this.userDao.getUserByUid(user.username);
        if (conflict && conflict._id !== user._id) {
            throw new ConflictException();
        }
        return await this.userDao.saveUser(user);
    }
}