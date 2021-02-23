import { Op } from "sequelize";
import { User } from "../refs-utility/refs-db/entity/reguser";

export class UserDao {

    public static async getUserById(id: number): Promise<User> { 
        const user = await User.findByPk(id);
        return user;
    }

    public static async getUserByEmail(email: string): Promise<User> { 
        const user = await User.findOne({
            where: {
                email: email,
            }
        });
        return user;
    }
    
    public static async getUserByUserAndPassword(uid: string, pwd: string): Promise<User> { 
        const user = await User.findOne({
            where: {
                [Op.or]: [
                    {
                        [Op.and]: [
                            { email: { [Op.eq]: uid } },
                            { password: { [Op.eq]: pwd } }
                        ]
                    },
                    {
                        [Op.and]: [
                            { username: { [Op.eq]: uid } },
                            { password: { [Op.eq]: pwd } }
                        ]
                    }
                ]
            }
        });
        return user;
    }

    public static do(a) {
        const extra = User.update({
            password: a
        }, {
            where: {
                id: { [Op.eq]: 1 },
            }
        });
    }
}


