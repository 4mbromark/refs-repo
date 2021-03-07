import { Injectable } from '@nestjs/common';
import { BlobDao } from '../../refs-dao/blob.dao';
import { Blob } from '../../refs-utility/refs-db/entity/board-blob';

@Injectable()
export class BlobService {

    constructor(
        private blobDao: BlobDao
    ) {}

    public async getBlobById(id: number): Promise<Blob> {
        return await this.blobDao.getBlobById(id);
    }

    public async getBlobByIdBoardAndId(idBoard: number, id: number): Promise<Blob> {
        return await this.blobDao.getBlobByIdBoardAndId(idBoard, id);
    }

    public async insertBlobByIdBoardAndReturnId(idBoard: number, file, type: string): Promise<number> {
        return await this.blobDao.insertBlobByIdBoardAndReturnId(idBoard, file, type)
    }
}