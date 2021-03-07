import { Op } from "sequelize";
import { User } from "../refs-utility/refs-db/entity/reguser";

export class UserDao {

    public async getUserById(id: number): Promise<User> {
        const user = await User.findByPk(id);
        return user;
    }

    public async getUserByUser(uid: string): Promise<User> {
        const user = await User.findOne({
            where: {
                [Op.or]: [
                    { email: { [Op.eq]: uid } },
                    { username: { [Op.eq]: uid } }
                ]
            }
        });
        return user;
    }

    public async getUserByEmail(email: string): Promise<User> {
        const user = await User.findOne({
            where: {
                email: email,
            }
        });
        return user;
    }

    /** @deprecated */
    public async getUserByUserAndPassword(uid: string, pwd: string): Promise<User> {
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
}


