import { Header } from '../../refs-dao/schema/header.schema';
import { Injectable } from '@nestjs/common';
import { HeaderDao } from '../../refs-dao/header.dao';
import { ObjectId } from 'mongoose';

@Injectable()
export class HeaderService {

    constructor(
        private headerDao: HeaderDao
    ) {}
    
    public async getUserinfoById(_id: ObjectId | string): Promise<Header> {
        return await this.headerDao.getHeaderById(_id);
    }
}