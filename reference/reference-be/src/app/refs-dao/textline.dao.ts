import { Textline } from './../refs-utility/refs-db/entity/board-textline';
import { Op } from "sequelize";

export class TextlineDao {
    public static async getTextlineById(id: number): Promise<Textline> { 
        const textline = await Textline.findByPk(id);
        return textline;
    }

    public static async getTextlineByIdBoardAndId(idBoard: number, id: number): Promise<Textline> { 
        const textline = await Textline.findOne({
            where: {
                [Op.and]: {
                    idBoard: { [Op.eq]: idBoard },
                    id: { [Op.eq]: id }
                }
            }
        });
        return textline;
    }
}
