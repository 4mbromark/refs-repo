import { BlobDao } from '../../refs-dao/blob.dao';
import { Blob } from '../../refs-utility/refs-db/entity/board-blob';
export declare class BlobService {
    private blobDao;
    constructor(blobDao: BlobDao);
    getBlobById(id: number): Promise<Blob>;
    getBlobByIdBoardAndId(idBoard: number, id: number): Promise<Blob>;
    insertBlobByIdBoardAndReturnId(idBoard: number, file: any, type: string): Promise<number>;
}
