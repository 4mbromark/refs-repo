import { Op } from "sequelize";
import { Aka } from "../refs-utility/refs-db/entity/alixlist-aka";

export class AkaDao {
    
    public async getAkaById(id: number): Promise<Aka> { 
        const aka = await Aka.findByPk(id);
        return aka;
    }

    public async getAkaByIdAlix(idAlix: number): Promise<Aka[]> { 
        const aka = await Aka.findAll({
            where: {
                idAlix: { [Op.eq]: idAlix },
            }
        });
        return aka;
    }

    public async getAkaByAlix(alix: string): Promise<Aka> { 
        const aka = await Aka.findOne({
            where: {
                aka: { [Op.eq]: alix },
            }
        });
        return aka;
    }

    public async getAkaByAlixAndIdAlix(alix: string, idAlix: number): Promise<Aka> { 
        const aka = await Aka.findOne({
            where: {
                [Op.and]: [
                    { idAlix: { [Op.eq]: idAlix } },
                    { aka: { [Op.eq]: alix } }
                ]
            }
        });
        return aka;
    }

    /*public async getAkaAlixListByIdAlix(idAlix: number): Promise<Aka[]> {
        const akaList = await Aka.findAll({
            attributes: [
                'aka'
            ],
            where: {
                idAlix: { [Op.eq]: idAlix }
            }
        });
        return akaList;
    }*/
}
