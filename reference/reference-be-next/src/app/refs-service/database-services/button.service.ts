import { Injectable } from '@nestjs/common';
import { ButtonDao } from '../../refs-dao/button.dao';
import { Button } from '../../refs-utility/refs-db/entity/board-button';

@Injectable()
export class ButtonService {

    constructor(
        private buttonDao: ButtonDao
    ) {}

    public async getButtonById(id: number): Promise<Button> {
        return await this.buttonDao.getButtonById(id);
    }

    public async getButtonListByIdBoardAndIds(idBoard: number, ids: number[]): Promise<Button[]> {
        return await this.buttonDao.getButtonListByIdBoardAndIds(idBoard, ids);
    }
}