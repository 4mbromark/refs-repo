import { Op } from "sequelize";
import { Alix } from '../refs-utility/refs-db/entity/alixlist';

export class AlixDao {
    
    public async getAlixById(id: number): Promise<Alix> { 
        const alix = await Alix.findByPk(id);
        return alix;
    }

    public async getAlixByIdUser(idUser: number): Promise<Alix[]> { 
        const alix = await Alix.findAll({
            where: {
                idUser: { [Op.eq]: idUser },
            }
        });
        return alix;
    }

    public async getAlixByAlix(a: string): Promise<Alix> { 
        const alix = await Alix.findOne({
            where: {
                alix: { [Op.eq]: a },
            }
        });
        return alix;
    }

    public async getAlixByAlixAndIdUser(a: string, idUser: number): Promise<Alix> { 
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
}
