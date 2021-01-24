import { DaoUtil } from '../refs-utility/refs-util/dao-util';
import { Op } from "sequelize";
import { Alix } from "../refs-utility/refs-db/entity/alix";

export class AlixDao {
    public static async getAlixById(id: number) { 
        const alix = await Alix.findByPk(id);
        return DaoUtil.ifNotNull(alix);
    }

    public static async getAlixByIdUser(idUser: number) { 
        const alix = await Alix.findOne({
            where: {
                idUser: { [Op.eq]: idUser },
            }
        });
        return DaoUtil.ifNotNull(alix);
    }

    public static async getAlixByAlix(a: string) { 
        const alix = await Alix.findOne({
            where: {
                alix: { [Op.eq]: a },
            }
        });
        return DaoUtil.ifNotNull(alix);
    }

    public static async getAlixByAlixAndIdUser(a: string, idUser: number) { 
        const alix = await Alix.findOne({
            where: {
                [Op.and]: [
                    { idUser: { [Op.eq]: idUser } },
                    { alix: { [Op.eq]: a } }
                ]
            }
        });
        return DaoUtil.ifNotNull(alix);
    }

    public static async getAkaCandidatesByAlix(a: string) { 
        const aka = await Alix.findAll({
            where: {
                aka: { [Op.substring]: a }
            }
        });
        return DaoUtil.ifListNotNull(aka);
    }
}


