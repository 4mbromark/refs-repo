import { Op } from "sequelize";
import { Card } from "../refs-utility/refs-db/entity/board-card";

export class CardDao {
    
    public async getCardById(id: number): Promise<Card> { 
        const card = await Card.findByPk(id);
        return card;
    }

    public async getCardListByIdBoard(idBoard: number): Promise<Card[]> { 
        const cardList = await Card.findAll({
            where: {
                idBoard: { [Op.eq]: idBoard }
            },
            order: [
                ['contextOrder', 'ASC']
            ]
        });
        return cardList;
    }
}
