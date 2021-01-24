import { User } from "../refs-utility/refs-db/entity/reguser";

export class UserDao {
    public async getUserById(id: number) { 
        const user = await User.findByPk(id);
        return user;
    }

    public async getUserByEmail(email: string) { 
        const user = await User.findOne({
            where: {
                email: email,
            }
        });
        return user;
    }
}


