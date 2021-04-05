import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, ObjectId } from 'mongoose';
import { User, UserDocument } from './schema/user.schema';

@Injectable()
export class UserDao {

    constructor(
        @InjectModel(User.name) private userModel: Model<UserDocument>
    ) {}

    public async getUserById(_id: ObjectId | string): Promise<User> {
        const user = await this.userModel.findById(_id);
        return user;
    }

    public async getUserByUid(uid: string): Promise<User> {
        const user = await this.userModel.findOne({
            $or: [
                { email: uid },
                { username: uid }
            ]
        });
        return user;
    }

    public async saveUser(user: User): Promise<User> {
        await this.userModel.findByIdAndUpdate(user._id, {
            $set: {
                name: user.name,
                surname: user.surname,
                username: user.username
            }
        });
        return this.getUserById(user._id);
    }
}