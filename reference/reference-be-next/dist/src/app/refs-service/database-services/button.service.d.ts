import { ButtonDao } from '../../refs-dao/button.dao';
import { Button } from '../../refs-utility/refs-db/entity/board-button';
export declare class ButtonService {
    private buttonDao;
    constructor(buttonDao: ButtonDao);
    getButtonById(id: number): Promise<Button>;
    getButtonListByIdBoardAndIds(idBoard: number, ids: number[]): Promise<Button[]>;
}
