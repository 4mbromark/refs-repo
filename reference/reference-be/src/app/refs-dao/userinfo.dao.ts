import { Op } from "sequelize";
import { Userinfo } from '../refs-utility/refs-db/entity/board-userinfo';

export class UserinfoDao {
    
    public static async getUserinfoById(id: number): Promise<Userinfo> { 
        const userinfo = await Userinfo.findByPk(id);
        return userinfo;
    }

    public static async getUserinfoByIdBoardOrCreate(idBoard: number): Promise<Userinfo> { 
        const userinfo = await Userinfo.findOrCreate({
            where: {
                idBoard: { [Op.eq]: idBoard },
            },
            defaults: {
                idBoard: idBoard
            }
        });
        return userinfo[0];
    }
}
