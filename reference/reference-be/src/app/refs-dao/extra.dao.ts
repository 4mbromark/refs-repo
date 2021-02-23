import { Op } from 'sequelize';
import { Extra } from './../refs-utility/refs-db/entity/reguser-extdata';

export class ExtraDao {

    public static async getExtraById(id: number): Promise<Extra> { 
        const extra = await Extra.findByPk(id);
        return extra;
    }

    public static async getExtraByIdUser(idUser: number): Promise<Extra> { 
        const extra = await Extra.findOne({
            where: {
                idUser: { [Op.eq]: idUser },
            }
        });
        return extra;
    }

    public static async insertDefaultExtraByIdUserAndReturnId(idUser: number): Promise<number> {
        const extra = await Extra.create({
            idUser: idUser
        });
        return extra.id;
    }

    public static async updateExtraByIdUserAndReturnId(idUser: number, propic): Promise<number> {
        const extra = await Extra.update({
            propic: propic
        }, {
            where: {
                idUser: { [Op.eq]: idUser },
            }
        });
        return extra[1][0].id; // TODO 
    }
}
