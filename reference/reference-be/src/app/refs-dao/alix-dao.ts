import { DaoUtil } from '../refs-utility/refs-util/dao-util';
import { Op } from "sequelize";
import { Alix } from '../refs-utility/refs-db/entity/alixlist';

export class AlixDao {
    public static async getAlixById(id: number): Promise<Alix> { 
        const alix = await Alix.findByPk(id);
        return alix;
    }

    public static async getAlixByIdUser(idUser: number): Promise<Alix> { 
        const alix = await Alix.findOne({
            where: {
                idUser: { [Op.eq]: idUser },
            }
        });
        return alix;
    }

    public static async getAlixByAlix(a: string): Promise<Alix> { 
        const alix = await Alix.findOne({
            where: {
                alix: { [Op.eq]: a },
            }
        });
        return alix;
    }

    public static async getAlixByAlixAndIdUser(a: string, idUser: number): Promise<Alix> { 
        const alix = await Alix.findOne({
            where: {
                [Op.and]: [
                    { idUser: { [Op.eq]: idUser } },
                    { alix: { [Op.eq]: a } }
                ]
            }
        });
        return alix;
    }

    public static async getAkaCandidatesByAlix(a: string): Promise<Alix[]> {
        const aka = await Alix.findAll({
            where: {
                aka: { [Op.substring]: a }
            }
        });
        return aka;
    }
}


