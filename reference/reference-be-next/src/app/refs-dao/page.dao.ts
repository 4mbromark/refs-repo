import { Op } from "sequelize";
import { Page } from '../refs-utility/refs-db/entity/board-page';

export class PageDao {
    
    public async getPageById(id: number): Promise<Page> { 
        const page = await Page.findByPk(id);
        return page;
    }

    public async getPageByIdBoardAndId(idBoard: number, id: number): Promise<Page> { 
        const page = await Page.findOne({
            where: {
                [Op.and]: {
                    idBoard: { [Op.eq]: idBoard },
                    id: { [Op.eq]: id }
                }
            }
        });
        return page;
    }

    public async getPageByIdBoardAndCode(idBoard: number, code: string): Promise<Page> {
        const page = await Page.findOne({
            where: {
                [Op.and]: {
                    idBoard: { [Op.eq]: idBoard },
                    code: { [Op.eq]: code }
                }
            }
        });
        return page;
    }
}
