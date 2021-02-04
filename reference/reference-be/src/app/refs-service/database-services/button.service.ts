import { ButtonDao } from '../../refs-dao/button.dao';
import { Button } from '../../refs-utility/refs-db/entity/board-button';

var buttonDao = ButtonDao;

export class ButtonService {

    public static async getButtonById(id: number): Promise<Button> {
        return await buttonDao.getButtonById(id);
    }

    public static async getButtonListByIdBoardAndIds(idBoard: number, ids: number[]): Promise<Button[]> {
        return await buttonDao.getButtonListByIdBoardAndIds(idBoard, ids);
    }
}