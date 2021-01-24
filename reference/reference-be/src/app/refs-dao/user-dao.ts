import { DaoUtil } from "../refs-utility/refs-util/dao-util";
import { User } from "../refs-utility/refs-db/entity/reguser";

export class UserDao {
    public static async getUserById(id: number) { 
        const user = await User.findByPk(id);
        return DaoUtil.ifNotNull(user);
    }

    public static async getUserByEmail(email: string) { 
        const user = await User.findOne({
            where: {
                email: email,
            }
        });
        return DaoUtil.ifNotNull(user);
    }
}


