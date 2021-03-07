import { Board } from './../refs-utility/refs-db/entity/board';
import { Op } from "sequelize";

export class BoardDao {
    
    public async getBoardById(id: number): Promise<Board> { 
        const board = await Board.findByPk(id);
        return board;
    }

    public async getBoardByIdAlix(idAlix: number): Promise<Board> { 
        const board = await Board.findOne({
            where: {
                idAlix: { [Op.eq]: idAlix },
            }
        });
        return board;
    }

    public async getBoardByIdAlixOrCreate(idAlix: number): Promise<Board> { 
        const board = await Board.findOrCreate({
            where: {
                idAlix: { [Op.eq]: idAlix },
            },
            defaults: {
                idAlix: idAlix
            }
        });
        return board[0];
    }
}
