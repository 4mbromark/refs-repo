import { Injectable } from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { ButtonDao } from '../../refs-dao/button.dao';
import { Button } from '../../refs-dao/schema/button.schema';

@Injectable()
export class ButtonService {

    constructor(
        private buttonDao: ButtonDao
    ) {}

    public async getButtonById(_id: ObjectId | string): Promise<Button> {
        return await this.buttonDao.getButtonById(_id);
    }
}