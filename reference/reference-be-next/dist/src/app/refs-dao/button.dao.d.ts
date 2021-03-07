import { Button } from '../refs-utility/refs-db/entity/board-button';
export declare class ButtonDao {
    getButtonById(id: number): Promise<Button>;
    getButtonListByIdBoardAndIds(idBoard: number, ids: number[]): Promise<Button[]>;
}
