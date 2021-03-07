import { Op } from "sequelize";
import { Button } from '../refs-utility/refs-db/entity/board-button';

export class ButtonDao {
    
    public async getButtonById(id: number): Promise<Button> { 
        const button = await Button.findByPk(id);
        return button;
    }

    public async getButtonListByIdBoardAndIds(idBoard: number, ids: number[]): Promise<Button[]> { 
        const buttonList = await Button.findAll({
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
        return buttonList;
    }
}
