import { Op } from "sequelize";
import { Info } from "../refs-utility/refs-db/entity/board-info";

export class InfoDao {
    
    public static async getInfoById(id: number): Promise<Info> { 
        const info = await Info.findByPk(id);
        return info;
    }

    public static async getInfoListByIdBoardAndIds(idBoard: number, ids: number[]): Promise<Info[]> { 
        const infoList = await Info.findAll({
            where: {
                [Op.and]: {
                    idBoard: { [Op.eq]: idBoard },
                    id: { [Op.in]: ids }
                }
            },
            order: [
                ['contextOrder', 'ASC']
            ]
        });
        return infoList;
    }
}
